// Import discord.js package
const Discord = require('discord.js');

// Create new Discord client
const client = new Discord.Client();

// Listen for events
require('./events')(client);

// Login to Discord using token provided in environmental variables
client.login(process.env.DISCORD_TOKEN);

// Export client instance
module.exports = client;
