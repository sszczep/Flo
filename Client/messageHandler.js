const { commandPrefix } = require('@/package.json');
const CommandsContainer = require('./CommandsContainer');

async function handleCommand(message) {
  // Get prefix, command name and argument
  const [prefix, name = '', arg = null] = message.content.split(' ');

  // If command is not for bot, ignore it
  if(prefix !== commandPrefix) return;

  // Find command object
  const command = CommandsContainer.get(name);

  // If there is no specified command, inform user
  if (!command) return message.reply('There is no command with that name');

  // Exec command handler
  return command.exec({ message, arg });
}

module.exports = handleCommand;
