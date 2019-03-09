const Discord = require('discord.js');
const signale = require('signale');

module.exports = (async () => {
  // Create new instance of Discord client
  const client = new Discord.Client();

  signale.await('Logging to Discord...');

  // Login to client using token provided in environmental variables
  await client.login(process.env.CLIENT_TOKEN);

  signale.success(`Successfully logged to Discord as ${client.user.tag}\n`);

  return client;
})();
