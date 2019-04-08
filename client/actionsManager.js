const axios = require('axios');
const i18next = require('i18next');

const fileLoader = require('@root/helpers/fileLoader');
const getChannel = require('@database/channel');

const actions = fileLoader('../client/actions')
  .reduce((actionsObject, { filename, content }) => ({
    ...actionsObject,
    [filename]: content
  }), {});

async function processAction(req, res) {
  const payload = req.body.payload ? JSON.parse(req.body.payload) : req.body;

  // Get database object containing info about channel
  const channel = getChannel(payload.channel_id || payload.channel.id);

  // Clone i18next instance so we can set local language
  const i18nextInstance = i18next.cloneInstance({ lng: channel.language });

  // If user entered a command, show home message
  if(payload.command) {
    res.status(200).json(actions.home({ payload, i18next: i18nextInstance, channel }));
    return;
  }

  // Otherwise get action name and execute it
  const actionName = payload.actions[0].action_id;

  // If there is no action with given name, send 404 status code
  if(!actions[actionName]) {
    res.sendStatus(404);
    return;
  }

  // Get message returned by action
  const message = actions[actionName]({ payload, i18next: i18nextInstance, channel });

  // If function didn't return object, don't send a request
  if(!message) {
    res.sendStatus(200);
    return;
  }

  try {
    await axios.post(payload.response_url, {
      ...message,
      channel: payload.channel.id,
      timestamp: payload.container.message_ts
    });

    // Send 200 status code
    res.sendStatus(200);
  } catch(err) {
    // Send 400 status code
    res.sendStatus(400);
  }
}

module.exports = processAction;
