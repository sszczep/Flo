module.exports = {
  args: [
    {
      name: 'code',
      required: false
    }
  ],
  async handler({
    message,
    i18next,
    databaseChannel,
    args
  }, _next) {
    const languages = Object.keys(i18next.options.resources).join(', ');

    if(args.length === 0) {
      const currentLanguage = i18next.language;
      message.reply(i18next.t('commands.language.message', { currentLanguage, languages }));
    } else {
      const languageCode = args[0];

      if(languages.includes(languageCode)) {
        databaseChannel.language = languageCode;
        await i18next.changeLanguage(languageCode);
        message.reply(i18next.t('commands.language.changed'));
      } else {
        message.reply(i18next.t('commands.language.noLanguage', { languages }));
      }
    }
  }
};
