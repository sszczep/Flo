const { commandPrefix } = require('@/package.json');
const CommandsContainer = require('@/client/CommandsContainer');

async function handleCommand(message) {
  // Get prefix, command name and argument
  const [prefix, name = '', args = []] = message.content.split(' ');

  // If command is not for bot, ignore it
  if(prefix !== commandPrefix) return;

  // Find command object
  const command = CommandsContainer.get(name);

  // If there is no specified command, inform user
  if (!command) {
    const i18next = require('i18next');

    return message.reply(i18next.t('errors.NoCommand', { lng: 'en', listing: CommandsContainer.listing }));
  }

  // Exec command handler
  return command.exec({ message, args });
}

module.exports = handleCommand;
