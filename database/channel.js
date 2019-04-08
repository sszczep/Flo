const crypto = require('crypto');

const database = require('@database/index');

function getChannel(channelID) {
  // Get channel data from database
  const channel = database.get('channels').find({ id: channelID });

  // If channel does not exist, add it to database
  if(!channel.value()) {
    database.get('channels').push({
      id: channelID,
      language: 'en',
      secret: crypto.createHash('sha1').update(`${channelID}:${Date.now()}`).digest('hex')
    }).write();
  }

  return {
    id: channelID,

    get data() {
      return channel.value();
    },

    get secret() {
      const { secret } = channel.value();
      return secret;
    },

    set secret(secret) {
      channel.assign({ secret }).write();
    },

    get language() {
      const { language } = channel.value();
      return language;
    },

    set language(language) {
      channel.assign({ language }).write();
    }
  };
}

module.exports = getChannel;
