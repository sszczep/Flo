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
  const { team_id, channel_id } = req.body;

  // If we didn't receive team_id nor channel_id, it probably means that we were
  // configuring URLs in app's settings and Slack is validating them
  // Just send 200 status code
  if(!team_id || !channel_id) {
    res.sendStatus(200);
    return;
  }

  // Get preferred channel's language
  const { language } = database.team(team_id).channel(channel_id);

  // Clone i18next instance so we can set local language
  const i18nextInstance = i18next.cloneInstance({ lng: language });

  // Return home page
  res.status(200).json(actions.home({ i18next: i18nextInstance }));
}

async function processInteractiveMessage(req, res) {
  const payload = JSON.parse(req.body.payload);

  // If we didn't receive channel object, it probably means that we were
  // configuring URLs in app's settings and Slack is validating them
  // Just send 200 status code
  if(!payload.channel) {
    res.sendStatus(200);
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
