const JsDiff = require('diff');

const colors = require('@root/colors');

const diffToText = require('@root/helpers/diffToText');

module.exports = {
  added: ({
    board,
    card,
    sender
  }, i18next) => ({
    embed: {
      title: i18next.t('webhooks.cards.added'),
      description: i18next.t('webhooks.cards.description', {
        cardName: card.name,
        boardName: board.name,
        sender,
        url: `https://app.gitkraken.com/glo/board/${board.id}/card/${card.id}`
      }),
      footer: {
        text: i18next.t('webhooks.footer')
      },
      color: colors.added,
      timestamp: new Date()
    }
  }),
  updated: ({
    board,
    card,
    sender
  }, i18next) => {
    const newCard = { ...card, previous: undefined };
    const oldCard = card.previous;

    const fields = [];

    if(oldCard.name !== newCard.name) {
      fields.push({
        name: i18next.t('keywords.name'),
        value:
`${i18next.t('keywords.new')}: ${newCard.name}
${i18next.t('keywords.old')}: ${oldCard.name}`
      });
    }

    if(oldCard.description.text === undefined) oldCard.description.text = '';
    if(newCard.description.text === undefined) newCard.description.text = '';
    if(oldCard.description.text !== newCard.description.text) {
      const diffObj = JsDiff.diffTrimmedLines(oldCard.description.text, newCard.description.text);

      fields.push({
        name: i18next.t('keywords.description'),
        value:
`\`\`\`diff
${diffToText(diffObj)}
\`\`\``
      });
    }

    if(oldCard.due_date !== newCard.due_date) {
      fields.push({
        name: i18next.t('keywords.dueDate'),
        value:
`${i18next.t('keywords.new')}: ${newCard.due_date}
${i18next.t('keywords.old')}: ${oldCard.due_date}`
      });
    }

    return {
      embed: {
        title: i18next.t('webhooks.cards.updated'),
        description: i18next.t('webhooks.cards.description', {
          cardName: card.name,
          boardName: board.name,
          sender,
          url: `https://app.gitkraken.com/glo/board/${board.id}/card/${card.id}`
        }),
        footer: {
          text: i18next.t('webhooks.footer')
        },
        fields,
        color: colors.updated,
        timestamp: new Date()
      }
    };
  },
  copied: ({
    board,
    card,
    sender
  }, i18next) => {
    const fields = [];

    if(card.description.text) {
      fields.push({
        name: i18next.t('keywords.description'),
        value:
`\`\`\`
${card.description.text}
\`\`\``
      });
    }

    if(card.labels.length) {
      fields.push({
        name: i18next.t('keywords.labels'),
        value: card.labels.map(label => label.name).join(', ')
      });
    }

    if(card.assignees.length) {
      fields.push({
        name: i18next.t('keywords.assignees'),
        value: card.assignees.map(assignee => `${assignee.name}`).join('\n')
      });
    }

    if(card.due_date) {
      fields.push({
        name: i18next.t('keywords.dueDate'),
        value: card.due_date
      });
    }

    return {
      embed: {
        title: i18next.t('webhooks.cards.copied'),
        description: i18next.t('webhooks.cards.description', {
          cardName: card.name,
          boardName: board.name,
          sender,
          url: `https://app.gitkraken.com/glo/board/${board.id}/card/${card.id}`
        }),
        footer: {
          text: i18next.t('webhooks.footer')
        },
        fields,
        color: colors.copied,
        timestamp: new Date()
      }
    };
  },
  archived: ({
    board,
    card,
    sender
  }, i18next) => ({
    embed: {
      title: i18next.t('webhooks.cards.archived'),
      description: i18next.t('webhooks.cards.description', {
        cardName: card.name,
        boardName: board.name,
        sender,
        url: `https://app.gitkraken.com/glo/board/${board.id}/card/${card.id}`
      }),
      footer: {
        text: i18next.t('webhooks.footer')
      },
      color: colors.archived,
      timestamp: new Date()
    }
  }),
  unarchived: ({
    board,
    card,
    sender
  }, i18next) => ({
    embed: {
      title: i18next.t('webhooks.cards.unarchived'),
      description: i18next.t('webhooks.cards.description', {
        cardName: card.name,
        boardName: board.name,
        sender,
        url: `https://app.gitkraken.com/glo/board/${board.id}/card/${card.id}`
      }),
      footer: {
        text: i18next.t('webhooks.footer')
      },
      color: colors.unarchived,
      timestamp: new Date()
    }
  }),
  deleted: ({
    board,
    card,
    sender
  }, i18next) => ({
    embed: {
      title: i18next.t('webhooks.cards.deleted'),
      description: i18next.t('webhooks.cards.description', {
        cardName: card.name,
        boardName: board.name,
        sender,
        url: `https://app.gitkraken.com/glo/board/${board.id}/card/${card.id}`
      }),
      footer: {
        text: i18next.t('webhooks.footer')
      },
      color: colors.deleted,
      timestamp: new Date()
    }
  }),
  reordered: () => null,
  moved_column: ({
    board,
    card,
    sender
  }, i18next) => ({
    embed: {
      title: i18next.t('webhooks.cards.moved_column'),
      description: i18next.t('webhooks.cards.description', {
        cardName: card.name,
        boardName: board.name,
        sender,
        url: `https://app.gitkraken.com/glo/board/${board.id}/card/${card.id}`
      }),
      footer: {
        text: i18next.t('webhooks.footer')
      },
      color: colors.moved,
      timestamp: new Date()
    }
  }),
  moved_to_board: ({
    board,
    card,
    sender
  }, i18next) => ({
    embed: {
      title: i18next.t('webhooks.cards.moved_to_board'),
      description: i18next.t('webhooks.cards.description', {
        cardName: card.name,
        boardName: board.name,
        sender,
        url: `https://app.gitkraken.com/glo/board/${board.id}/card/${card.id}`
      }),
      footer: { text: i18next.t('webhooks.footer') },
      color: colors.moved,
      timestamp: new Date()
    }
  }),
  moved_from_board: ({
    board,
    card,
    sender
  }, i18next) => ({
    embed: {
      title: i18next.t('webhooks.cards.moved_from_board'),
      description: i18next.t('webhooks.cards.description', {
        cardName: card.name,
        boardName: board.name,
        sender,
        url: `https://app.gitkraken.com/glo/board/${board.id}/card/${card.id}`
      }),
      footer: {
        text: i18next.t('webhooks.footer')
      },
      color: colors.moved,
      timestamp: new Date()
    }
  }),
  labels_updated: ({
    board,
    card,
    sender,
    labels
  }, i18next) => {
    const added = labels.added.map(label => label.name).join(', ');
    const removed = labels.removed.map(label => label.name).join(', ');

    const value = `${i18next.t('keywords.added')}: ${added || `*${i18next.t('keywords.none')}*`}
${i18next.t('keywords.removed')}: ${removed || `*${i18next.t('keywords.none')}*`}`;

    return {
      embed: {
        title: i18next.t('webhooks.cards.updated'),
        description: i18next.t('webhooks.cards.description', {
          cardName: card.name,
          boardName: board.name,
          sender,
          url: `https://app.gitkraken.com/glo/board/${board.id}/card/${card.id}`
        }),
        footer: {
          text: i18next.t('webhooks.footer')
        },
        fields: [{
          name: i18next.t('keywords.labels'),
          value
        }],
        color: colors.updated,
        timestamp: new Date()
      }
    };
  },
  assignees_updated: ({
    board,
    card,
    sender,
    assignees
  }, i18next) => {
    const added = assignees.added.map(label => label.name).join(', ');
    const removed = assignees.removed.map(label => label.name).join(', ');

    const value = `${i18next.t('keywords.added')}: ${added || `*${i18next.t('keywords.none')}*`}
${i18next.t('keywords.removed')}: ${removed || `*${i18next.t('keywords.none')}*`}`;

    return {
      embed: {
        title: i18next.t('webhooks.cards.updated'),
        description: i18next.t('webhooks.cards.description', {
          cardName: card.name,
          boardName: board.name,
          sender,
          url: `https://app.gitkraken.com/glo/board/${board.id}/card/${card.id}`
        }),
        footer: {
          text: i18next.t('webhooks.footer')
        },
        fields: [{
          name: i18next.t('keywords.assignees'),
          value
        }],
        color: colors.updated,
        timestamp: new Date()
      }
    };
  }
};
