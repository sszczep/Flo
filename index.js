// Load module aliases
require('module-alias/register');

// Load config
require('@root/config');

// Load signale (better console output)
const { Signale } = require('signale');

const signale = new Signale({ scope: 'App' });

// Handle node errors
['uncaughtException', 'unhandledRejection'].forEach(event => {
  process.on(event, error => {
    signale.fatal(error);
    process.exit(1);
  });
});

// Run app
module.exports = (async () => {
  signale.await('Starting app...\n');

  // Configure i18next
  await require('@i18next');

  // Setup client and server for the first time
  await require('@client');
  await require('@server');

  signale.success('App launched successfully!');
})();
