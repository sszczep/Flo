const express = require('express');

class ExpressServer {
  constructor() {
    this.instance = express();

    // Set all routes
    this.setRoutes();
  }

  async listen(token) {
    return new Promise(resolve => this.instance.listen(token, resolve));
  }

  setRoutes() {}
}

module.exports = ExpressServer;
