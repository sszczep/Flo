const settings = require('./settings');

module.exports = ({
  payload, team, channel, i18next
}) => {
  // Get selected language and set it in database and i18next local instance
  const selectedLanguage = payload.actions[0].selected_option.value;

  channel.language = selectedLanguage;
  i18next.changeLanguage(selectedLanguage);

  // Return updated settings page
  return settings({ team, channel, i18next });
};
