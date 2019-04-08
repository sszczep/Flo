module.exports = ({
  board,
  card,
  sender,
  assignees
}, i18next) => {
  const added = assignees.added.length
    ? assignees.added.map(assignee => assignee.name).join(', ')
    : i18next.t('notifications.glo.cards.assignees_updated.noAdded');
  const removed = assignees.removed.length
    ? assignees.removed.map(assignee => assignee.name).join(', ')
    : i18next.t('notifications.glo.cards.assignees_updated.noRemoved');

  return {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: i18next.t('notifications.glo.cards.assignees_updated.title', { board, card, sender })
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: i18next.t('notifications.glo.cards.assignees_updated.content', { added, removed })
        }
      }
    ]
  };
};
