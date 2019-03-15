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
      webhooks: {
        description: 'show URL for webhooks',
        help: 'help regarding webhooks...',
        message:
`here is your URL for webhooks: **{{ url }}**.

Specify this URL in your board settings to start receiving notifications!`
      }
    }
  }
};
