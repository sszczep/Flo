module.exports = ({
  board,
  labels,
  sender
}, i18next) => {
  const action = (labels.added.length && 'added')
    || (labels.updated.length && 'updated')
    || (labels.deleted.length && 'deleted');

  const label = labels[action][0];

  const fields = [];

  if (action === 'added') {
    fields.push(
      {
        type: 'mrkdwn',
        text: i18next.t('notifications.glo.boards.labels_updated.added.content', { board, label, sender })
      }
    );
  } else if(action === 'updated') {
    fields.push(
      {
        type: 'mrkdwn',
        text: i18next.t('notifications.glo.boards.labels_updated.updated.previous', { board, label, sender })
      },
      {
        type: 'mrkdwn',
        text: i18next.t('notifications.glo.boards.labels_updated.updated.current', { board, label, sender })
      }
    );
  }

  return {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: i18next.t(`notifications.glo.boards.labels_updated.${action}.title`, { board, label, sender })
        },
        fields: fields.length ? fields : undefined
      }
    ]
  };
};
