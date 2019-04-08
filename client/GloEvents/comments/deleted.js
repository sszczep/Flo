module.exports = ({
  board,
  card,
  comment,
  sender
}, i18next) => ({
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: i18next.t('notifications.glo.comments.deleted.title', {
          board, card, comment, sender
        })
      }
    }
  ]
});
