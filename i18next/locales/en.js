module.exports = {
  translation: {
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
    }
  }
};
