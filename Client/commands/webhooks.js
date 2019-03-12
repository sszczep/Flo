module.exports = {
  async handler({ message, i18next }, _next) {
    const { SERVER_URL, SERVER_PORT } = process.env;
    const { id } = message.channel;

    const url = `${SERVER_URL}:${SERVER_PORT}/webhooks/${id}`;

    message.reply(i18next.t('commands.webhooks.message', { url }));
  }
};
