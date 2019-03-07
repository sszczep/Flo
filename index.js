// Load environment variables from .env files
require('dotenv').config();

// Load module aliases
require('module-alias/register');

// Require Discord Client instance
const discordClient = require('@/discord');

module.exports = { discordClient };
