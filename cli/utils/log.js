const logSymbols = require('log-symbols');
const chalk = require('chalk');

const log = (content) => console.log(chalk.green(content));

const logSuccess = (desc) => console.log(logSymbols.success, desc);
const logInfo = (desc) => console.log(logSymbols.info, desc);
const logWarning = (desc) => console.log(logSymbols.warning, desc);
const logError = (desc) => console.log(logSymbols.error, desc);

module.exports = {
    logSuccess,
    logInfo,
    logWarning,
    logError,
    log,
};
