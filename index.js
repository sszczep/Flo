// Load environment variables from .env files
require('dotenv').config();

// Load module aliases
require('module-alias/register');

// Load signale (better console output)
const signale = require('signale');

// Handle node errors
['uncaughtException', 'unhandledRejection'].forEach(event => {
  process.on(event, error => {
    signale.fatal(error);
    process.exit(1);
  });
});

// Require Express and Discord
const express = require('express');
const initMiddlewares = require('@/Server/initMiddlewares');
const initRouter = require('@/Server/initRouter');

const Discord = require('discord.js');

// Run app
module.exports = (async () => {
  signale.await('Starting app...\n');

  const client = new Discord.Client();
  const server = express();

  try {
    /*
     * CONNECT TO SERVER
     */

    signale.await('Creating server...');

    // Listen on port provided in environmental variables
    await new Promise(resolve => server.listen(process.env.SERVER_PORT, resolve));

    signale.success(`Listening on port ${process.env.SERVER_PORT}\n`);

    /*
     * CONNECT TO CLIENT
     */

    signale.await('Logging to Discord...');

    // Login to client using token provided in environmental variables
    await client.login(process.env.CLIENT_TOKEN);

    signale.success(`Successfully logged to Discord as ${client.user.tag}\n`);

    /*
     * CONFIG SERVER
     */

    // Init all middlewares
    initMiddlewares(server);

    // Init router
    initRouter(server, client);
  } catch (error) {
    signale.fatal(error);
    process.exit(1);
  }

  signale.success('App launched successfully!');

  return { server, client };
})();
