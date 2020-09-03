/*
 * @Author: liuruijun
 * @Date: 2020-08-24 09:45:55
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-03 09:37:28
 * @Description: file content
 */
const { execSync } = require('child_process');
const { version } = require('../package.json');// 版本号

const isWindows = process.platform === 'win32';

const downloadDirectory = process.env[isWindows ? 'USERPROFILE' : 'HOME']; // 模板下载目录

const projectType = [{
  type: 'list',
  message: 'Please choose type of your project',
  name: 'type',
  choices: [
    'pc',
    'h5',
  ],
}];

const uiInput = [{
  type: 'input',
  message: 'Please enter a ui library name',
  name: 'uiLibrary',
}];

const coverFolder = (projectName) => ([{
  type: 'confirm',
  message: `project ${projectName} has already exist，continue to cover it? (yes)`,
  name: 'isCover',
}]);

const hasYarn = () => {
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
};

module.exports = {
  version,
  downloadDirectory,
  projectType,
  uiInput,
  coverFolder,
  hasYarn,
  isWindows,
};
