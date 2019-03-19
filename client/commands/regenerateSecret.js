const crypto = require('crypto');

module.exports = {
  async handler({ message, databaseChannel, i18next }, _next) {
    const secret = crypto.createHash('sha1').update(`${message.channel.id}:${Date.now()}`).digest('hex');

    databaseChannel.secret = secret;

    message.reply(i18next.t('commands.regenerateSecret.message', { secret }));
  }
};
