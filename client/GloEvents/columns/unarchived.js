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
        text: i18next.t('notifications.glo.columns.unarchived.title', { board, column, sender })
      }
    }
  ]
});
