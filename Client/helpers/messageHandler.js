const i18next = require('i18next');

const { commandPrefix } = require('@/package.json');
const CommandsContainer = require('@/client/CommandsContainer');

async function handleCommand(message) {
  // Get prefix, command name and argument
  const [prefix, name = '', args = []] = message.content.split(' ');

  // If command is not for bot, ignore it
  if(prefix !== commandPrefix) return;

  // Find command object
  const command = CommandsContainer.get(name);

  // Clone i18next instance so we can set local language
  const i18nextInstance = i18next.cloneInstance({ lng: 'en' });

  // If there is no specified command, inform user
  if (!command) {
    return message.reply(
      i18nextInstance.t(
        'errors.NoCommand',
        { listing: CommandsContainer.listing(i18nextInstance.language) }
      )
    );
  }

  // Exec command handler
  return command.exec({ message, args, i18next: i18nextInstance });
}

module.exports = handleCommand;
