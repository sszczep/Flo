const crypto = require('crypto');
const i18next = require('i18next');
const axios = require('axios');
const qs = require('qs');
const { WebClient } = require('@slack/web-api');

const router = require('express').Router();

const { Signale } = require('signale');

const signale = new Signale({ scope: 'Routes' });

const config = require('@root/config');

const { processCommand, processInteractiveMessage } = require('@client/actionsManager');
const database = require('@root/database');
const GloEvents = require('@client/GloEvents');

router.get('/', (req, res, next) => {
	res.redirect('https://sszczep.github.io/Flo');
});

const slackVerification = (req, res, next) => {
  const slackSignature = req.headers['x-slack-signature'];
  const requestBody = qs.stringify(req.body, { format: 'RFC1738' });
  const timestamp = req.headers['x-slack-request-timestamp'];

  // Check for reply attacks
  if(Math.abs((Date.now() / 1000) - timestamp) > 300) {
    res.sendStatus(400);
    return;
  }

  // Calculate expected signature
  const signature = `v0=${
    crypto.createHmac('sha256', config.slack.signingSecret)
      .update(`v0:${timestamp}:${requestBody}`, 'utf8')
      .digest('hex')
  }`;

  // Compare signatures
  if(crypto.timingSafeEqual(
    Buffer.from(signature, 'utf8'),
    Buffer.from(slackSignature, 'utf8')
  )) next();
  else res.sendStatus(400);
};

router.post('/slack/command', slackVerification, processCommand);

router.post('/slack/interactiveMessage', slackVerification, processInteractiveMessage);

router.get('/slack/auth', async (req, res) => {
  try {
    // If no code has been specified, it means that user canceled authenticating
    // Redirect back to website
    if(!req.query.code) {
      throw new Error('Canceled by user');
    }

    // Build our auth object
    const authInfo = qs.stringify({
      client_id: config.slack.id,
      client_secret: config.slack.clientSecret,
      code: req.query.code
    });

    // Send request to get bot token and team id
    const { data } = await axios({
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: authInfo,
      url: 'https://slack.com/api/oauth.access'
    });

    // Assign token to team in database
    database.team(data.team_id).token = data.bot.bot_access_token;

    res.redirect(`https://sszczep.github.io/Flo/?auth=success&workplace=${data.team_name}`);
  } catch(error) {
    res.redirect(`https://sszczep.github.io/Flo/?auth=failed&message=${error.message}`);
  }
});

const gloVerification = (req, res, next) => {
  const { secret } = database.team(req.params.team).channel(req.params.channel);
  const hash = crypto.createHmac('sha1', secret).update(req.buf, 'utf-8').digest('hex');
  const signature = `sha1=${hash}`;

  if(signature !== req.headers['x-gk-signature']) {
    return res.status(403).send('invalid signature');
  }

  next();
};

router.post('/glo/:team/:channel', gloVerification,
  // Process webhook
  async (req, res) => {
    const event = req.headers['x-gk-event'];
    const { action } = req.body;

    try {
      const team = database.team(req.params.team);
      const channel = team.channel(req.params.channel);

      const i18nextInstance = i18next.cloneInstance({ lng: channel.language });

      const message = GloEvents[event][action](req.body, i18nextInstance);

      if(message) {
        const Web = new WebClient(team.token);
        await Web.chat.postMessage({ ...message, channel: channel.id });
      }
    } catch(err) {
      signale.error(err);
      return res.sendStatus(400);
    }

    res.sendStatus(204);
  });

module.exports = router;
