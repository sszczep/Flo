const { name, version, prefix } = require('@root/config');

module.exports = {
  async handler({ message, i18next }, _next) {
    message.reply(i18next.t('commands.index.message', { name, version, prefix }));
  }
};
