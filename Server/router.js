const crypto = require('crypto');

const router = require('express').Router();

const getDatabaseChannel = require('@root/database/channel');

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
  (req, res) => {
    console.log('Webhook!');
    console.log('Event:', req.headers['x-gk-event']);
    console.log({
      channel: req.params.channel,
      json: req.body
    });

    res.sendStatus(204);
  });

module.exports = router;
