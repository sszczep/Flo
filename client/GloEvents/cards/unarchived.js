module.exports = ({
  board,
  card,
  sender
}, i18next) => ({
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: i18next.t('notifications.glo.cards.unarchived.title', { board, card, sender })
      }
    }
  ]
});
