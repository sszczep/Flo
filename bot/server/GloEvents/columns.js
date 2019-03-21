const colors = require('@root/colors');

module.exports = {
  added: ({
    board,
    column,
    sender
  }, i18next) => ({
    embed: {
      title: i18next.t('webhooks.columns.added'),
      description: i18next.t('webhooks.columns.description', {
        columnName: column.name,
        boardName: board.name,
        sender,
        url: `https://app.gitkraken.com/glo/board/${board.id}`
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
    column,
    sender
  }, i18next) => {
    const newColumn = { ...column, previous: undefined };
    const oldColumn = column.previous;

    return {
      embed: {
        title: i18next.t('webhooks.columns.updated'),
        description: i18next.t('webhooks.columns.description', {
          columnName: column.name,
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
`${i18next.t('keywords.new')}: ${newColumn.name}
${i18next.t('keywords.old')}: ${oldColumn.name}`
        }],
        color: colors.updated,
        timestamp: new Date()
      }
    };
  },
  archived: ({
    board,
    column,
    sender
  }, i18next) => ({
    embed: {
      title: i18next.t('webhooks.columns.archived'),
      description: i18next.t('webhooks.columns.description', {
        columnName: column.name,
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
    column,
    sender
  }, i18next) => ({
    embed: {
      title: i18next.t('webhooks.columns.unarchived'),
      description: i18next.t('webhooks.columns.description', {
        columnName: column.name,
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
    column,
    sender
  }, i18next) => ({
    embed: {
      title: i18next.t('webhooks.columns.deleted'),
      description: i18next.t('webhooks.columns.description', {
        columnName: column.name,
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
  reordered: () => null
};
