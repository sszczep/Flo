module.exports = ({ i18next }) => ({
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: i18next.t('messages.home')
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
            text: i18next.t('buttons.aboutMe')
          },
          action_id: 'aboutMe'
        },
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: i18next.t('buttons.help')
          },
          action_id: 'help'
        },
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: i18next.t('buttons.settings')
          },
          action_id: 'settings'
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
});
