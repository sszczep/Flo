module.exports = ({
  board,
  column,
  sender
}, i18next) => ({
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: i18next.t('notifications.glo.columns.updated.title', { board, column, sender })
      }
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: i18next.t('notifications.glo.columns.updated.content', { board, column, sender })
      }
    }
  ]
});
