module.exports = ({ i18next }) => ({
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: i18next.t('messages.help')
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
});
