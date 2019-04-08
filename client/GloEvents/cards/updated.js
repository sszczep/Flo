module.exports = ({
  board,
  card,
  sender
}, i18next) => {
  // If only due_time changed, ignore webhook
  // It's buggy for now and not documented so we don't report it back to the user
  if(
    card.description.text === card.previous.description.text
    && card.name === card.previous.name
  ) return;

  return {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: i18next.t('notifications.glo.cards.updated.title', { board, card, sender })
        },
        fields: [
          {
            type: 'mrkdwn',
            text: i18next.t('notifications.glo.cards.updated.previous', { board, card, sender })
          },
          {
            type: 'mrkdwn',
            text: i18next.t('notifications.glo.cards.updated.current', { board, card, sender })
          }
        ]
      }
    ]
  };
};
