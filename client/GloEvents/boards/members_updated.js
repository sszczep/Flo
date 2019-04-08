module.exports = ({
  board,
  members,
  sender
}, i18next) => {
  const currentMembers = board.members.map(member => `${member.name} - _${member.role}_`).join('\n');
  const invitedMembers = board.invited_members.map(member => `${member.name} - _${member.role}_`).join('\n');

  const action = (members.invited.length && 'invited')
    || (members.joined.length && 'joined')
    || (members.updated.length && 'updated')
    || (members.removed.length && 'removed');

  const member = members[action][0];

  const fields = [
    {
      type: 'mrkdwn',
      text: i18next.t('notifications.glo.boards.members_updated.members', { members: currentMembers })
    },
    {
      type: 'mrkdwn',
      text: i18next.t('notifications.glo.boards.members_updated.invitedMembers', {
        members: (
          invitedMembers.length
            ? invitedMembers
            : i18next.t('notifications.glo.boards.members_updated.noInvitedMembers')
        )
      })
    }
  ];

  return {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: i18next.t(`notifications.glo.boards.members_updated.${action}.title`, { board, member, sender })
        },
        fields
      }
    ]
  };
};
