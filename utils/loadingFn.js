/*
 * @Author: liuruijun
 * @Date: 2020-08-24 11:56:42
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-03 09:48:59
 * @Description: file content
 */
const ora = require('ora');

module.exports = (fn, message) => async (...args) => {
  const spinner = ora(message);
  spinner.start();
  const result = await fn(...args);
  spinner.succeed(message);
  if (result) {
    spinner.fail();
  }
  return result;
};
