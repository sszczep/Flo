const colors = require('@root/colors');

module.exports = {
  updated: ({
    board,
    sender
  }, i18next) => {
    const newBoard = { ...board, previous: undefined };
    const oldBoard = board.previous;

    return {
      embed: {
        title: i18next.t('webhooks.boards.updated'),
        description: i18next.t('webhooks.boards.description', {
          boardName: board.name,
          sender,
          url: `https://app.gitkraken.com/glo/board/${board.id}`
        }),
        footer: {
          text: i18next.t('webhooks.footer')
        },
        fields: [{
          name: i18next.t('keywords.name'),
          value:
`${i18next.t('keywords.new')}: ${newBoard.name}
${i18next.t('keywords.old')}: ${oldBoard.name}`
        }],
        color: colors.updated,
        timestamp: new Date()
      }
    };
  },
  archived: ({
    board,
    sender
  }, i18next) => ({
    embed: {
      title: i18next.t('webhooks.boards.archived'),
      description: i18next.t('webhooks.boards.description', {
        boardName: board.name,
        sender,
        url: `https://app.gitkraken.com/glo/board/${board.id}`
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
    sender
  }, i18next) => ({
    embed: {
      title: i18next.t('webhooks.boards.unarchived'),
      description: i18next.t('webhooks.boards.description', {
        boardName: board.name,
        sender,
        url: `https://app.gitkraken.com/glo/board/${board.id}`
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
    sender
  }, i18next) => ({
    embed: {
      title: i18next.t('webhooks.boards.deleted'),
      description: i18next.t('webhooks.boards.description', {
        boardName: board.name,
        sender,
        url: `https://app.gitkraken.com/glo/board/${board.id}`
      }),
      footer: {
        text: i18next.t('webhooks.footer')
      },
      color: colors.deleted,
      timestamp: new Date()
    }
  }),
  labels_updated: ({
    board,
    sender,
    labels
  }, i18next) => {
    const added = labels.added.map(label => label.name).join(', ');
    const removed = labels.removed.map(label => label.name).join(', ');

    const value = `${i18next.t('keywords.added')}: ${added || `*${i18next.t('keywords.none')}*`}
${i18next.t('keywords.removed')}: ${removed || `*${i18next.t('keywords.none')}*`}`;

    return {
      embed: {
        title: i18next.t('webhooks.boards.updated'),
        description: i18next.t('webhooks.boards.description', {
          boardName: board.name,
          sender,
          url: `https://app.gitkraken.com/glo/board/${board.id}`
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
  members_updated: ({
    board,
    sender,
    members
  }, i18next) => {
    const added = members.added.map(label => label.name).join(', ');
    const removed = members.removed.map(label => label.name).join(', ');

    const value = `${i18next.t('keywords.added')}: ${added || `*${i18next.t('keywords.none')}*`}
${i18next.t('keywords.removed')}: ${removed || `*${i18next.t('keywords.none')}*`}`;

    return {
      embed: {
        title: i18next.t('webhooks.boards.updated'),
        description: i18next.t('webhooks.boards.description', {
          boardName: board.name,
          sender,
          url: `https://app.gitkraken.com/glo/board/${board.id}`
        }),
        footer: {
          text: i18next.t('webhooks.footer')
        },
        fields: [{
          name: i18next.t('keywords.mambers'),
          value
        }],
        color: colors.updated,
        timestamp: new Date()
      }
    };
  }
};
