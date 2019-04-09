// Load environment variables from .env files
require('dotenv').config();

const fs = require('fs');

// Get some data from package.json
const packageJSON = require('@root/package.json');

module.exports = {
  name: packageJSON.name,
  version: packageJSON.version,
  server: {
    url: process.env.SERVER_URL || 'localhost'
  },
  slack: {
    id: process.env.SLACK_ID,
    clientSecret: process.env.SLACK_CLIENT_SECRET,
    signingSecret: process.env.SLACK_SIGNING_SECRET
  },
  certificates: {
    key: process.env.CERT_KEY && fs.readFileSync(process.env.CERT_KEY),
    cert: process.env.CERT_CERT && fs.readFileSync(process.env.CERT_CERT),
    ca: process.env.CERT_CA && fs.readFileSync(process.env.CERT_CA)
  }
};
