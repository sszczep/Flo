const Discord = require('discord.js');
const { Signale } = require('signale');

const signale = new Signale({ scope: 'Discord' });

const messageHandler = require('./messageHandler');

function handleEvents(client) {
  // Log message
  client.on('message', messageHandler);
}

module.exports = (async () => {
  // Create new instance of Discord client
  const client = new Discord.Client();

  signale.await('Adding events handlers...');

  // Listen on events (parse commands etc.)
  handleEvents(client);

  signale.await('Logging to Discord...');

  // Login to client using token provided in environmental variables
  await client.login(process.env.CLIENT_TOKEN);

  signale.success(`Successfully logged to Discord as ${client.user.tag}\n`);

  return client;
})();
