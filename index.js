// Load environment variables from .env files
require('dotenv').config();

// Load module aliases
require('module-alias/register');

// Configure signale (better console output)
const signale = require('signale');

signale.info('Starting app...');

// Require Discord Client instance
const discordClient = require('@/discord');

module.exports = { discordClient };
