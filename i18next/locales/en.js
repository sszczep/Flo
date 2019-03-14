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
For more details, type **{{ prefix }} help**`
      },
      webhooks: {
        description: 'show URL for webhooks',
        message:
`here is your URL for webhooks: **{{ url }}**.

Specify this URL in your board settings to start receiving notifications!`
      }
    }
  }
};
