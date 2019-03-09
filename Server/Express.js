const express = require('express');
const bodyParser = require('body-parser');
const signale = require('signale');

module.exports = (async () => {
  // Create new instance of Express server
  const server = express();

  signale.await('Creating server...');

  // Add middlewares
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  signale.success('Attached middewares');

  // Add routes
  server.get('', async (req, res) => {
    // Get client instance
    const client = await require('@/client/Discord');

    res.json({
      status: client.status,
      uptime: client.uptime,
      servers: client.guilds.array().length
    }).status(200);
  });

  server.post('/webhooks/:channel', (req, res) => {
    console.log('Webhook!');
    console.log({
      channel: req.params.channel,
      json: req.body
    });

    res.sendStatus(200);
  });

  signale.success('Added routes');

  // Listen on port provided in environmental variables
  await new Promise(resolve => server.listen(process.env.SERVER_PORT, resolve));

  signale.success(`Listening on port ${process.env.SERVER_PORT}\n`);

  return server;
})();
