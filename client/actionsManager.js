const axios = require('axios');
const i18next = require('i18next');

const fileLoader = require('@root/helpers/fileLoader');
const database = require('@database');

const actions = fileLoader('../client/actions')
  .reduce((actionsObject, { filename, content }) => ({
    ...actionsObject,
    [filename]: content
  }), {});

function processCommand(req, res) {
  // Send 200 status code when Slack is checking if URL is valid
  if(req.body.ssl_check) {
    res.sendStatus(200);
    return;
  }

  // If these values are missing, respond with 400 status code
  if(!req.body.team_id || !req.body.team_id) {
    res.sendStatus(400);
    return;
  }

  const { team_id, channel_id } = req.body; // eslint-disable-line camelcase

  // Get team and channel from database
  const team = database.team(team_id);
  const channel = team.channel(channel_id);

  // Get preferred channel's language
  const { language } = channel;

  // Clone i18next instance so we can set local language
  const i18nextInstance = i18next.cloneInstance({ lng: language });

  let action;

  // Return appropriate page
  switch(req.body.text) {
  case 'help':
    action = actions.help;
    break;
  case 'settings':
    action = actions.settings;
    break;
  default:
    action = actions.home;
  }

  res.status(200).json(action({ i18next: i18nextInstance, team, channel }));
}

async function processInteractiveMessage(req, res) {
  // Send 200 status code when Slack is checking if URL is valid
  if(req.body.ssl_check) {
    res.sendStatus(200);
    return;
  }

  let payload;

  // Check if we got proper payload
  try {
    payload = JSON.parse(req.body.payload);

    // If these values are missing, throw error
    if(!payload.actions || !payload.team || !payload.channel) throw new Error();
  } catch(err) {
    res.sendStatus(400);
    return;
  }

  // Extract action name
  // We are assuming that there was only one action
  const actionName = payload.actions[0].action_id;

  // If there is no action with given name, send 404 status code
  if(!actions[actionName]) {
    res.sendStatus(404);
    return;
  }

  // Get team and channel from database
  const team = database.team(payload.team.id);
  const channel = team.channel(payload.channel.id);

  // Clone i18next instance so we can set local language
  const i18nextInstance = i18next.cloneInstance({ lng: channel.language });

  // Get message returned by action
  const message = actions[actionName]({
    payload, i18next: i18nextInstance, team, channel
  });

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

module.exports = { processCommand, processInteractiveMessage };
