const { serverUrl, serverPort } = require('@root/config');

module.exports = {
  async handler({ message, databaseChannel, i18next }, _next) {
    const { id } = message.channel;

    const url = `${serverUrl}:${serverPort}/webhooks/${id}`;
    const { secret } = databaseChannel;

    message.reply(i18next.t('commands.webhooks.message', { url, secret }));
  }
};
