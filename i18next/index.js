const { Signale } = require('signale');
const i18next = require('i18next');
const fileLoader = require('@root/helpers/fileLoader');

const signale = new Signale({ scope: 'i18next' });

module.exports = (() => {
  signale.await('Configuring i18next...');

  // Load all translations
  const resources = fileLoader('../i18next/locales')
    .reduce((locales, { filename, content }) => ({ ...locales, [filename]: content }), {});

  // Configure global i18next instance
  i18next.init({
    lng: 'en',
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false
    }
  });

  signale.info(`Available languages: ${Object.keys(resources).join(', ')}`);

  signale.success('i18next successfully configured\n');
})();
