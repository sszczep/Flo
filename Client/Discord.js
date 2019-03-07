const Discord = require('discord.js');
const { Signale } = require('signale');

class DiscordClient {
  constructor() {
    this.client = new Discord.Client();
  }

  async login({ token }) {
    // Create interactive Signale instance for logging
    const signaleInteractive = new Signale({ interactive: true });

    // Login to Discord using token provided in environmental variables
    signaleInteractive.await('Logging to Discord...');

    try {
      await this.client.login(token);
      signaleInteractive.success(`Successfully logged to Discord as ${this.client.user.tag}`);
    } catch (error) {
      signaleInteractive.fatal(error);
      process.exit(1);
    }
  }
}

module.exports = DiscordClient;
