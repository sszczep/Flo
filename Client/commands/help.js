module.exports = {
  args: [
    {
      name: 'command',
      required: false
    }
  ],
  async handler({ message, i18next, args }, _next) {
    if(args.length === 0) {
      message.reply(i18next.t('commands.help.message'));
    } else {
      const commandName = args[0];
      message.reply(i18next.t([`commands.${commandName}.help`, 'commands.help.noHelpPage']));
    }
  }
};
