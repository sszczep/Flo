module.exports = {
  translation: {
    keywords: {
      name: 'Name',
      description: 'Description',
      dueDate: 'Due date',
      labels: 'Labels',
      members: 'Members',
      assignees: 'Assignees',
      old: 'Old',
      new: 'New',
      added: 'Added',
      removed: 'Removed',
      none: 'none'
    },
    errors: {
      NoCommand:
`there is no such a command.

List of available commands:
{{ listing }}`
    },
    commands: {
      index: {
        description: 'short info about me',
        message:
`welcome! My name is **{{ name }} v{{ version }}**.

I will notify you about recent changes made to your GitKraken Glo's boards.
For more details, type **{{ prefix }} help**
For list of all available commands, type **{{ prefix }} list**`
      },
      help: {
        description: 'show general or command specific help page',
        message: 'general help message...',
        noHelpPage: 'this command does not have help page.'
      },
      list: {
        description: 'list all available commands',
        message:
`list of available commands:
{{ listing }}`
      },
      language: {
        description: 'list available languages or change the default one',
        message: 'available languages: **{{ languages }}**.',
        changed: 'successfully changed language to **English**',
        noLanguage:
`this language is not supported yet.

Available languages: **{{ languages }}**.`
      },
      webhooks: {
        description: 'show webhooks data',
        help: 'help regarding webhooks...',
        message:
`webhooks credentials:
URL: **{{ url }}**
Secret: **{{ secret }}**

Specify these data in your board settings to start receiving notifications!`
      },
      regenerateSecret: {
        description: 'regenerate secret for webhooks',
        message: 'your new secret is: **{{ secret }}**'
      }
    },
    webhooks: {
      footer: 'GitKraken Glo with ❤︎',

      boards: {
        description:
`Board name: {{ boardName }}
Changed by: {{ sender.name }} ({{ sender.username }})
[Open in browser]({{ url }})`,

        updated: 'Board has been updated',
        archived: 'Board has been archived',
        unarchived: 'Board has been unarchived',
        deleted: 'Board has been deleted',
        labels_updated: '$t(webhooks.boards.updated)',
        members_updated: '$t(webhooks.boards.updated)'
      },

      columns: {
        description:
`Column name: {{ columnName }}
Board name: {{ boardName }}
Changed by: {{ sender.name }} ({{ sender.username }})
[Open in browser]({{ url }})`,

        added: 'New column has been added',
        updated: 'Column has been updated',
        archived: 'Column has been archived',
        unarchived: 'Column has been unarchived',
        deleted: 'Column has been deleted'
      },

      cards: {
        description:
`Card name: {{ cardName }}
Board name: {{ boardName }}
Changed by: {{ sender.name }} ({{ sender.username }})
[Open in browser]({{ url }})`,

        added: 'New card has been added',
        updated: 'Card has been updated',
        copied: 'Card has been duplicated',
        archived: 'Card has been archived',
        unarchived: 'Card has been unarchived',
        deleted: 'Card has been deleted',
        moved_column: 'Card has been moved to the other column',
        moved_to_board: 'Card has been moved to the other board',
        moved_from_board: 'Card has been moved from the other board',
        labels_updated: '$t(webhooks.cards.updated)',
        assignees_updated: '$t(webhooks.cards.updated)'
      }
    }
  }
};
