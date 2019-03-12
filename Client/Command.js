const MiddlewaresRunner = require('./middlewares/MiddlewaresRunner');
const errorHandler = require('./middlewares/errorHandler');

class Command {
  constructor(params) {
    // Assign properties
    Object.assign(this, params);
  }

  exec({ message, arg }) {
    const runner = new MiddlewaresRunner();

    runner.use(this.handler, errorHandler);

    runner.run({ message, arg });
  }
}

module.exports = Command;
