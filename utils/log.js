/*
 * @Author: liuruijun
 * @Date: 2020-08-31 17:32:26
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-02 19:36:03
 * @Description: 打印文案
 */
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
