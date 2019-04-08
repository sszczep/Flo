const { WebClient } = require('@slack/web-api');
const { Signale } = require('signale');

const signale = new Signale({ scope: 'Slack' });

const { slack: { token } } = require('@root/config');

module.exports = (() => {
  const Web = new WebClient(token);

  signale.success('Established Slack connection\n');

  return Web;
})();
