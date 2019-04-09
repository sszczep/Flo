const crypto = require('crypto');

const settings = require('./settings');

module.exports = ({ team, channel, i18next }) => {
  const secret = crypto.createHash('sha1').update(`${team.id}:${channel.id}:${Date.now()}`).digest('hex');

  channel.secret = secret;

  return settings({ team, channel, i18next });
};
