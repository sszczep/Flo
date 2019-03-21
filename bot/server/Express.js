const express = require('express');
const bodyParser = require('body-parser');
const { Signale } = require('signale');

const signale = new Signale({ scope: 'Express' });

const { serverPort } = require('@root/config');

const router = require('@server/router');

module.exports = (async () => {
  // Create new instance of Express server
  const server = express();

  signale.await('Creating server...');

  // Add middlewares
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json({
    verify: (req, res, buf) => {
      req.buf = buf;
    }
  }));

  signale.success('Attached middlewares');

  // Add routes
  server.use(router);

  signale.success('Added routes');

  // Listen on port provided in environmental variables
  await new Promise(resolve => server.listen(serverPort, resolve));

  signale.success(`Listening on port ${serverPort}\n`);

  return server;
})();
