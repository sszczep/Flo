const router = require('express').Router();

router.get('', async (req, res) => {
  // Get client instance
  const client = await require('@client/Discord');

  res.json({
    status: client.status,
    uptime: client.uptime,
    servers: client.guilds.array().length
  }).status(200);
});

router.post('/webhooks/:channel', (req, res) => {
  console.log('Webhook!');
  console.log({
    channel: req.params.channel,
    json: req.body
  });

  res.sendStatus(200);
});

module.exports = router;
