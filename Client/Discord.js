const Discord = require('discord.js');

class DiscordClient extends Discord.Client {
  get username() {
    return this.user.tag;
  }
}

module.exports = DiscordClient;
