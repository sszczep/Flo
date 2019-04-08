module.exports = ({
  board,
  card,
  sender
}, i18next) => {
  const description = card.description.text || i18next.t('keywords.none');

  const details = {
    labels: card.labels.length
      ? card.labels.map(label => label.name).join(', ')
      : `_${i18next.t('keywords.none')}_`,
    assignees: card.assignees.length
      ? card.assignees.map(assignee => assignee.name).join(', ')
      : `_${i18next.t('keywords.none')}_`,
    tasks: card.completed_task_count
      ? `${card.completed_task_count}/${card.total_task_count}`
      : `_${i18next.t('keywords.none')}_`,
    attachments: card.attachment_count || `_${i18next.t('keywords.none')}_`,
    comments: card.comment_count || `_${i18next.t('keywords.none')}_`
  };

  return {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: i18next.t('notifications.glo.cards.moved_from_board.title', { board, card, sender })
        },
        fields: [
          {
            type: 'mrkdwn',
            text: i18next.t('notifications.glo.cards.moved_from_board.description', { description })
          },
          {
            type: 'mrkdwn',
            text: i18next.t('notifications.glo.cards.moved_from_board.details', details)
          }
        ]
      }
    ]
  };
};
