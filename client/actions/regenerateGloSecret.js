const crypto = require('crypto');

const settings = require('./settings');

module.exports = ({ channel, i18next }) => {
  const secret = crypto.createHash('sha1').update(`${channel.id}:${Date.now()}`).digest('hex');

  channel.secret = secret;

  return settings({ channel, i18next });
};
