module.exports = ({
  board,
  sender
}, i18next) => ({
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: i18next.t('notifications.glo.boards.updated.title', { board, sender })
      }
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: i18next.t('notifications.glo.boards.updated.content', { board, sender })
      }
    }
  ]
});
