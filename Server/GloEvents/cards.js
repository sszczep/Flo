const JsDiff = require('diff');

const diffToText = require('@root/helpers/diffToText');

module.exports = {
  updated: ({ board, card, sender }) => {
    const boardName = board.name;
    const cardName = card.name;
    const modifiedBy = { name: sender.name, username: sender.username };

    const newCard = { ...card, previous: undefined };
    const oldCard = card.previous;

    let name;
    if(oldCard.name !== newCard.name) {
      name = `- ${oldCard.name}\n+ ${newCard.name}`;
    } else name = cardName;

    let description;
    if(oldCard.description.text !== newCard.description.text) {
      const diff = JsDiff.diffTrimmedLines(oldCard.description.text, newCard.description.text);
      description = diffToText(diff);
    } else description = newCard.description.text;

    return {
      boardName,
      cardName,
      modifiedBy,
      name,
      description
    };
  }
};
