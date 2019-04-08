module.exports = {
  boards: {
    archived: require('./boards/archived'),
    unarchived: require('./boards/unarchived'),
    updated: require('./boards/updated'),
    deleted: require('./boards/deleted'),
    labels_updated: require('./boards/labels_updated'),
    members_updated: require('./boards/members_updated')
  },
  columns: {
    added: require('./columns/added'),
    updated: require('./columns/updated'),
    reordered: require('./columns/reordered'),
    archived: require('./columns/archived'),
    unarchived: require('./columns/unarchived'),
    deleted: require('./columns/deleted')
  },
  cards: {
    added: require('./cards/added'),
    updated: require('./cards/updated'),
    copied: require('./cards/copied'),
    archived: require('./cards/archived'),
    unarchived: require('./cards/unarchived'),
    deleted: require('./cards/deleted'),
    reordered: require('./cards/reordered'),
    moved_column: require('./cards/moved_column'),
    moved_to_board: require('./cards/moved_to_board'),
    moved_from_board: require('./cards/moved_from_board'),
    labels_updated: require('./cards/labels_updated'),
    assignees_updated: require('./cards/assignees_updated')
  },
  comments: {
    added: require('./comments/added'),
    updated: require('./comments/updated'),
    deleted: require('./comments/deleted')
  }
};
