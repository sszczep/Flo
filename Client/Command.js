const { commandPrefix } = require('@/package.json');
const MiddlewaresRunner = require('./middlewares/MiddlewaresRunner');
const errorHandler = require('./middlewares/errorHandler');

class Command {
  constructor(params) {
    // Assign properties
    Object.assign(this, params);

    // Set default properties
    this.args = this.args || [];

    // Create string with correct usage of this command
    const args = this.args.map(
      ({ name, required }) => `${required ? `<${name}>` : `[${name}]`}`
    ).join(' ');

    // Remove spaces from both ends of string
    // Also use regex to convert multi spaces into single ones (eg. name is empty)
    this.syntax = `${commandPrefix} ${this.name} ${args}`.trim().replace(/  +/g, ' ');
  }

  exec(req) {
    const runner = new MiddlewaresRunner();

    runner.use(this.handler, errorHandler);

    runner.run(req);
  }
}

module.exports = Command;
