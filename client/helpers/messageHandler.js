const i18next = require('i18next');

const getDatabaseChannel = require('@root/database/channel');

const { prefix: commandPrefix } = require('@root/config');
const CommandsContainer = require('@client/CommandsContainer');

async function handleMessage(message) {
  // If message comes from bot, ignore it
  if(message.author.bot) return;

  // Get prefix, command name and argument
  const [prefix, name = '', ...args] = message.content.split(' ');

  // If command is not for bot, ignore it
  if(prefix !== commandPrefix) return;

  // Find command object
  const command = CommandsContainer.get(name);

  // Get reference to channel data in database
  const databaseChannel = getDatabaseChannel(message.channel.id);

  // Clone i18next instance so we can set local language
  const i18nextInstance = i18next.cloneInstance({ lng: databaseChannel.language });

  // If there is no specified command, inform user
  if (!command) {
    return message.reply(
      i18nextInstance.t(
        'errors.NoCommand',
        { listing: CommandsContainer.listing(i18nextInstance) }
      )
    );
  }

  // Exec command handler
  return command.exec({
    message,
    args,
    databaseChannel,
    i18next: i18nextInstance
  });
}

module.exports = handleMessage;
