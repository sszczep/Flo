const { WebClient } = require('@slack/web-api');
const { Signale } = require('signale');

const signale = new Signale({ scope: 'Slack' });

const { slack: { token } } = require('@root/config');

module.exports = (async () => {
  const Web = new WebClient(token);

  signale.success('Established Slack HTTP connection\n');

  return Web;
})();
