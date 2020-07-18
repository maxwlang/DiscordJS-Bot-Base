const debug = require('./debug');

const sentry = {
    enabled: false,
    enabledOnDev: false,

    key: '',
    project: '',
    ingestNode: '',
};

// Handle dev check here
if ((sentry.enabled && !sentry.enabledOnDev) && debug.isDevelopment) sentry.enabled = false;

module.exports = sentry;
