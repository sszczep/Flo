module.exports = {
  async handler({ message, i18next }, _next) {
    const { listing } = require('@/client/CommandsContainer');
    message.reply(i18next.t('commands.list.message', { listing: listing(i18next) }));
  }
};
