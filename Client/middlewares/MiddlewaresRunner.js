class MiddlewaresRunner {
  constructor() {
    // Array holding all middlewares to use
    this.queue = [];

    // Property holding last middleware error
    this.error = null;
  }

  // Add middlewares to the queue
  use(...functions) {
    this.queue.push(...functions);

    return this;
  }

  // Run chain of middlewares
  async run(req) {
    // If callback returns error, throw it so it can be handled in try catch block
    const onError = error => {
      throw error;
    };

    // Iterate over queue
    while(this.queue.length) {
      // Get first middleware in queue
      const middleware = this.queue.shift();

      try {
        // If there was an error, call error handler
        if(this.error) await middleware(this.error, req, onError);

        // If not, call regular middleware
        else await middleware(req, onError);

        // If we have reached this line, it means that no errors were thrown, clear error property
        this.error = null;
      } catch(error) {
        // If any errors were thrown, store them in error property
        this.error = error;
      } finally {
        // Trim queue so we can use a valid middleware in next iteration

        /*
         * Find index of next middleware
         *
         * If there was an error, find error handling middleware
         * Error handler has 3 arguments (err, req and next)
         *
         * If there weren't any errors, find regular middleware
         * Regular middleware has 2 arguments (req and next)
         */

        const nextIndex = this.queue.findIndex(fn => fn.length === (this.error ? 3 : 2));

        // If no middlewares were found, clear queue
        if(nextIndex === -1) this.queue.length = 0;

        // Splice queue so it starts with an appropriate middleware
        this.queue.splice(0, nextIndex);
      }
    }
  }
}

module.exports = MiddlewaresRunner;
