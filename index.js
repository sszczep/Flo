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

// Require Express and DiscordClient
const ExpressServer = require('@/Server/Express');
const DiscordClient = require('@/Client/Discord');

// Run app
module.exports = (async () => {
  signale.await('Starting app...\n');

  const client = new DiscordClient();
  const server = new ExpressServer();

  try {
    /*
     * CONNECT TO SERVER
     */

    signale.await('Creating server...');

    // Listen on port provided in environmental variables
    await server.listen(process.env.SERVER_PORT);

    signale.success(`Listening on port ${process.env.SERVER_PORT}\n`);

    /*
     * CONNECT TO CLIENT
     */

    signale.await('Logging to Discord...');

    // Login to client using token provided in environmental variables
    await client.login(process.env.CLIENT_TOKEN);

    signale.success(`Successfully logged to Discord as ${client.username}\n`);
  } catch (error) {
    signale.fatal(error);
    process.exit(1);
  }

  signale.success('App launched successfully!');

  return { server: server.instance, client };
})();
