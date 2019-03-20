const JsDiff = require('diff');

const colors = require('@root/colors');

const diffToText = require('@root/helpers/diffToText');

module.exports = {
  added: ({
    board,
    card,
    comment,
    sender
  }, i18next) => ({
    embed: {
      title: i18next.t('webhooks.comments.added'),
      description: i18next.t('webhooks.comments.description', {
        cardName: card.name,
        boardName: board.name,
        sender,
        url: `https://app.gitkraken.com/glo/board/${board.id}/card/${card.id}`
      }),
      fields: [{
        name: i18next.t('keywords.content'),
        value:
`\`\`\`
${comment.text}
\`\`\``
      }],
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
    comment,
    sender
  }, i18next) => {
    const newComment = { ...comment, previous: undefined };
    const oldComment = comment.previous;

    if(oldComment.text === undefined) oldComment.text = '';
    if(newComment.text === undefined) newComment.text = '';
    const diffObj = JsDiff.diffTrimmedLines(oldComment.text, newComment.text);

    return {
      embed: {
        title: i18next.t('webhooks.comments.updated'),
        description: i18next.t('webhooks.comments.description', {
          cardName: card.name,
          boardName: board.name,
          sender,
          url: `https://app.gitkraken.com/glo/board/${board.id}/card/${card.id}`
        }),
        footer: {
          text: i18next.t('webhooks.footer')
        },
        fields: [{
          name: i18next.t('keywords.content'),
          value:
    `\`\`\`diff
    ${diffToText(diffObj)}
    \`\`\``
        }],
        color: colors.updated,
        timestamp: new Date()
      }
    };
  },
  deleted: ({
    board,
    card,
    comment,
    sender
  }, i18next) => ({
    embed: {
      title: i18next.t('webhooks.comments.deleted'),
      description: i18next.t('webhooks.comments.description', {
        cardName: card.name,
        boardName: board.name,
        sender,
        url: `https://app.gitkraken.com/glo/board/${board.id}/card/${card.id}`
      }),
      fields: [{
        name: i18next.t('keywords.content'),
        value:
`\`\`\`
${comment.text}
\`\`\``
      }],
      footer: {
        text: i18next.t('webhooks.footer')
      },
      color: colors.deleted,
      timestamp: new Date()
    }
  })
};
