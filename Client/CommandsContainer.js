const { Signale } = require('signale');

const signale = new Signale({ scope: 'Commands' });

const i18next = require('i18next');

const Command = require('./Command');
const fileLoader = require('@/helpers/fileLoader');

class CommandsContainer {
  constructor() {
    signale.await('Loading commands...');

    this.commands = {};

    // Load all commands and store them in commands object
    fileLoader('../client/commands').forEach(({ filename, content }) => {
      const name = filename === 'index' ? '' : filename;

      this.commands[name] = new Command({ name, ...content });
    });

    // Log all available commands to console
    const availableCommands = Object.keys(this.commands).map(name => (name === '' ? 'index' : name));
    signale.info(`Available commands: ${availableCommands.join(', ')}`);

    signale.success('Commands successfully loaded!\n');
  }

  // Get command by name
  get(name) {
    return this.commands[name];
  }

  // Get listing of all commands
  get listing() {
    return lng => Object.keys(this.commands)
      .map(name => {
        const syntax = `**${this.commands[name].syntax}**`;

        const descriptionKey = `commands.${name === '' ? 'index' : name}.description`;
        const descriptionExists = i18next.exists(descriptionKey);
        const description = descriptionExists ? ` - ${i18next.t(descriptionKey, { lng })}` : '';

        return syntax + description;
      })
      .join('\n');
  }
}

// Export new instance of class CommandsContainer
module.exports = new CommandsContainer();
