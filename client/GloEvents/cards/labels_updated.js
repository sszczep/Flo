module.exports = ({
  board,
  card,
  sender,
  labels
}, i18next) => {
  const added = labels.added.length
    ? labels.added.map(label => label.name).join(', ')
    : i18next.t('notifications.glo.cards.labels_updated.noAdded');
  const removed = labels.removed.length
    ? labels.removed.map(label => label.name).join(', ')
    : i18next.t('notifications.glo.cards.labels_updated.noRemoved');

  return {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: i18next.t('notifications.glo.cards.labels_updated.title', { board, card, sender })
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: i18next.t('notifications.glo.cards.labels_updated.content', { added, removed })
        }
      }
    ]
  };
};
