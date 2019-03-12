const i18next = require('i18next');

function inject(req) {
  req.i18next = i18next.cloneInstance();
}

module.exports = inject;
