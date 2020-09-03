/*
 * @Author: liuruijun
 * @Date: 2020-09-02 15:16:18
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-02 17:37:35
 * @Description: file content
 */

const inquirer = require('inquirer');
const npmName = require('npm-name'); // 检测指定包名在npm是不是没有注册的
const { logError } = require('../utils/log');

const getName = (arr, inquireName) => new Promise((reslove) => {
  const asks = async () => {
    const res = await inquirer.prompt(arr);
    const name = (res[inquireName] || '').trim();
    if (name) {
      const result = await npmName(name);
      if (!result) {
        reslove(name);
      } else {
        logError('invalid npm package');
        asks();
      }
    } else {
      logError('invalid npm package');
      asks();
    }
  };
  asks();
});

module.exports = async ({ arr, inquireName }) => {
  const name = await getName(arr, inquireName);

  return name;
};
