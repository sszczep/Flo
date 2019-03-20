const crypto = require('crypto');
const i18next = require('i18next');

const router = require('express').Router();

const { Signale } = require('signale');

const signale = new Signale({ scope: 'Routes' });

const getDatabaseChannel = require('@root/database/channel');
const GloEvents = require('@server/GloEvents');

router.get('', async (req, res) => {
  // Get client instance
  const client = await require('@client/Discord');

  res.json({
    status: client.status,
    uptime: client.uptime,
    servers: client.guilds.array().length
  }).status(200);
});

router.post('/webhooks/:channel',
  // Verify signature
  (req, res, next) => {
    const channel = getDatabaseChannel(req.params.channel);
    const hash = crypto.createHmac('sha1', channel.secret).update(req.buf, 'utf-8').digest('hex');
    const signature = `sha1=${hash}`;

    if(signature !== req.headers['x-gk-signature']) {
      return res.status(403).send('invalid signature');
    }

    next();
  },
  // Process webhook
  async (req, res) => {
    const event = req.headers['x-gk-event'];
    const { action } = req.body;

    try {
      const client = await require('@client/Discord');
      const channel = client.channels.find(({ id }) => id === req.params.channel);

      if(!channel) throw new Error('There is no channel with given id');

      const databaseChannel = getDatabaseChannel(req.params.channel);

      const i18nextInstance = i18next.cloneInstance({ lng: databaseChannel.language });

      const message = GloEvents[event][action](req.body, i18nextInstance);
      if(message) await channel.send(message);
    } catch(err) {
      signale.error(err);
      return res.sendStatus(400);
    }

    res.sendStatus(204);
  });

module.exports = router;
