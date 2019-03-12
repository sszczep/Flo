const Command = require('./Command');
const fileLoader = require('@/helpers/fileLoader');

class CommandsContainer {
  constructor() {
    this.commands = {};

    // Load all commands and store them in commands object
    // Path must be relative to helpers directory
    fileLoader('../client/commands').forEach(({ filename, content }) => {
      const name = filename === 'index' ? '' : filename;

      this.commands[name] = new Command({ name, ...content });
    });
  }

  // Get command by name
  get(name) {
    return this.commands[name];
  }
}

// Export new instance of class CommandsContainer
module.exports = new CommandsContainer();
