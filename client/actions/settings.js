const { server } = require('@root/config');

module.exports = ({ channel, i18next }) => {
  // Get all available languages and map them to array
  const availableLanguages = Object.keys(i18next.options.resources);
  const languagesOptions = availableLanguages.map(lng => (
    {
      text: {
        type: 'plain_text',
        text: `${i18next.t(`languages.${lng}`)} [${lng}]`
      },
      value: lng
    }
  ));

  // Save currently selected language to variable
  const currentLanguageObject = languagesOptions.find(option => option.value === i18next.language);

  return {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: i18next.t('messages.settings.header')
        }
      },
      {
        type: 'divider'
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*${i18next.t('messages.settings.chooseLanguage')}*`
        },
        accessory: {
          type: 'static_select',
          placeholder: {
            type: 'plain_text',
            text: i18next.t('messages.settings.chooseLanguage')
          },
          options: languagesOptions,
          initial_option: currentLanguageObject,
          action_id: 'language'
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text:
`*${i18next.t('messages.settings.GloUrl')}*
${server.url}/glo/${channel.id}`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text:
`*${i18next.t('messages.settings.GloSecret')}*
${channel.secret}`
        },
        accessory: {
          type: 'button',
          text: {
            type: 'plain_text',
            text: i18next.t('buttons.regenerate')
          },
          confirm: {
            title: {
              type: 'plain_text',
              text: i18next.t('confirmationDialogs.titles.areYouSure')
            },
            text: {
              type: 'plain_text',
              text: i18next.t('confirmationDialogs.texts.regenerateGloSecret')
            },
            confirm: {
              type: 'plain_text',
              text: i18next.t('confirmationDialogs.confirm')
            },
            deny: {
              type: 'plain_text',
              text: i18next.t('confirmationDialogs.deny')
            }
          },
          action_id: 'regenerateGloSecret'
        }
      },
      {
        type: 'divider'
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: i18next.t('buttons.goBack')
            },
            action_id: 'home'
          },
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: i18next.t('buttons.close')
            },
            action_id: 'close'
          }
        ]
      }
    ]
  };
};
