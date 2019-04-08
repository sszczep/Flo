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
        text: i18next.t('notifications.glo.comments.updated.title', { board, card, sender })
      },
      fields: [
        {
          type: 'mrkdwn',
          text: i18next.t('notifications.glo.comments.updated.previous', { comment })
        },
        {
          type: 'mrkdwn',
          text: i18next.t('notifications.glo.comments.updated.current', { comment })
        }
      ]
    }
  ]
});
