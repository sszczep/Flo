// Import discord.js package
const Discord = require('discord.js');

// Import Signale object
const { Signale } = require('signale');

// Import handler for Discord events
const eventHandler = require('./events');

module.exports = (async () => {
  // Create new Discord client
  const client = new Discord.Client();

  // Listen for events
  eventHandler(client);

  // Create interactive Signale instance for logging
  const signaleInteractive = new Signale({ interactive: true });

  // Login to Discord using token provided in environmental variables
  signaleInteractive.await('Logging to Discord...');

  try {
    await client.login(process.env.DISCORD_TOKEN);
    signaleInteractive.success(`Successfully logged to Discord as ${client.user.tag}`);
  } catch (error) {
    signaleInteractive.error(`Couldn't connect to Discord. Reason: ${error.message}`);
    process.exit(1);
  }

  return client;
})();
