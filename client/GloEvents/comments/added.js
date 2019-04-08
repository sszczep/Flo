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
        text: i18next.t('notifications.glo.comments.added.title', {
          board, card, comment, sender
        })
      }
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: i18next.t('notifications.glo.comments.added.content', { comment })
      }
    }
  ]
});
