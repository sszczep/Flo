module.exports = {
  async handler({ message, databaseChannel, i18next }, _next) {
    const { SERVER_URL, SERVER_PORT } = process.env;
    const { id } = message.channel;

    const url = `${SERVER_URL}:${SERVER_PORT}/webhooks/${id}`;
    const { secret } = databaseChannel;

    message.reply(i18next.t('commands.webhooks.message', { url, secret }));
  }
};
