const { commandPrefix } = require('@/package.json');
const MiddlewaresRunner = require('./middlewares/MiddlewaresRunner');
const injectI18next = require('./middlewares/injectI18next');
const errorHandler = require('./middlewares/errorHandler');

class Command {
  constructor(params) {
    // Assign properties
    Object.assign(this, params);

    // Set default properties
    this.args = this.args || [];

    // Create string with correct usage of this command
    const args = this.args.reduce((string, { name, required }) => `${string}${required ? `<${name}>` : `[${name}]`} `, '');
    this.syntax = `${commandPrefix} ${this.name} ${args}`;
  }

  exec({ message, args }) {
    const runner = new MiddlewaresRunner();

    runner.use(injectI18next, this.handler, errorHandler);

    runner.run({ message, args });
  }
}

module.exports = Command;
