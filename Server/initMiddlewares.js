const bodyParser = require('body-parser');

function initMiddlewares(server) {
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
}

module.exports = initMiddlewares;
