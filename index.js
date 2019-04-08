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

signale.await('Starting app...\n');

// Connect to database
require('@database');

// Configure i18next
require('@i18next');

// Setup server
require('@server');

signale.success('App launched successfully!');
