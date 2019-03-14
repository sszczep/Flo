const database = require('./index');

function getChannel(channelID) {
  // Get channel data from database
  const channel = database.get('channels').find({ id: channelID });

  // If channel does not exist, add it to database
  if(!channel.value()) {
    database.get('channels').push({ id: channelID, language: 'en' }).write();
  }

  return {
    get data() {
      return channel.value();
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
