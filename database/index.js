const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const crypto = require('crypto');

// Create database instance
const database = (() => {
  const adapter = new FileSync('./database/database.json');
  const db = lowdb(adapter);

  db.defaults({ teams: [], channels: [] }).write();

  return db;
})();

module.exports = {
  instance: database,
  team(teamID) {
    // Get team data from database
    const team = database.get('teams').find({ id: teamID });

    // If team does not exist, create it
    if(!team.value()) {
      database.get('teams').push({
        id: teamID,
        token: null
      }).write();
    }

    return {
      // Return getters and setters regarding teams
      get id() {
        return team.value().id;
      },

      get token() {
        return team.value().token;
      },

      set token(token) {
        team.assign({ token }).write();
      },

      // Chain channel
      channel(channelID) {
        // Get channel data from database
        const channel = database.get('channels').find({ teamID, id: channelID });

        // If channel does not exist, create it
        if(!channel.value()) {
          database.get('channels').push({
            teamID,
            id: channelID,
            language: 'en',
            secret: crypto.createHash('sha1').update(`${teamID}:${channelID}:${Date.now()}`).digest('hex')
          }).write();
        }

        // Return getters and setters regarding channels
        return {
          get id() {
            return channel.value().id;
          },

          get teamID() {
            return channel.value().teamID;
          },

          get secret() {
            return channel.value().secret;
          },

          set secret(secret) {
            channel.assign({ secret }).write();
          },

          get language() {
            return channel.value().language;
          },

          set language(language) {
            channel.assign({ language }).write();
          }
        };
      }
    };
  }
};
