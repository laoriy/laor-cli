const logSymbols = require('log-symbols');
const chalk = require('chalk');

const log = (content) => console.log(chalk.green(content));

const logSuccess = (desc) => console.log(logSymbols.success, chalk.greenBright(desc));
const logInfo = (desc) => console.log(logSymbols.info, chalk.blueBright(desc));
const logWarning = (desc) => console.log(logSymbols.warning, chalk.rgb(230, 162, 60)(desc));
const logError = (desc) => console.log(logSymbols.error, chalk.redBright(desc));

module.exports = {
    logSuccess,
    logInfo,
    logWarning,
    logError,
    log,
};
