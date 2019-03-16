const packageJSON = require('@root/package.json');

module.exports = {
  async handler({ message, i18next }, _next) {
    const { name, version, commandPrefix: prefix } = packageJSON;

    message.reply(i18next.t('commands.index.message', { name, version, prefix }));
  }
};
