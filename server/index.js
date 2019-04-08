const express = require('express');
const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');
const path = require('path');
const { Signale } = require('signale');

const signale = new Signale({ scope: 'Express' });

const { certificates } = require('@root/config');

const router = require('@server/router');

module.exports = (() => {
  // Create new instance of Express server
  const server = express();

  signale.await('Creating server...');

  // Add middlewares
  server.use(express.static(path.join(__dirname, '/static'), { dotfiles: 'allow' }));
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

  // Listen on both 80 and 443
  http.createServer(server).listen(80);
  https.createServer(certificates, server).listen(443);

  signale.success('Listening on ports 80 and 443');

  return server;
})();
