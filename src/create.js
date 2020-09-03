/*
 * @Author: liuruijun
 * @Date: 2020-08-24 10:52:14
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-03 17:06:11
 * @Description: file content
 */
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const metalSmith = require('./metalSmith');// 遍历文件夹
const { logError, log } = require('../utils/log');
const download = require('../utils/download');
const {
  downloadDirectory, projectType, coverFolder, hasYarn, isWindows, templates,
} = require('./constants');
const { ncp, figlet } = require('../utils/promises');
const command = require('../utils/command');

module.exports = async (projectName) => {
  const isFoldExist = fs.existsSync(projectName);
  // 查看项目是否存在
  if (isFoldExist) {
    const { isCover } = await inquirer.prompt(coverFolder(projectName));
    if (!isCover) return;
  }
  const { tempName } = await inquirer.prompt({ // 选择模板
    name: 'tempName',
    type: 'list',
    message: 'Please choose project template',
    choices: Object.keys(templates),
  });
  const choosed = templates[tempName];
  if (choosed) {
    /**
     * 1.模板下载
     */
    const dest = `${downloadDirectory}/.${choosed.downloadUrl}`;// 下载的目录
    const result = await download(choosed.downloadUrl, dest, 'download template');

    /**
     * 2.拷贝下载的内容到当前执行目录
     */
    const hasask = !!fs.existsSync(path.join(result, 'ask.js'));// 判断是否有ask.js文件

    if (!hasask) {
      await ncp(result, path.resolve(projectName));
    } else {
      // 1)项目类型选择pc/h5
      const { type } = await inquirer.prompt(projectType);

      // 2)模板编译
      const isSuccess = await metalSmith({
        result, type, askType: `${type}ask`, projectName,
      });

      // 3)安装依赖
      if (isSuccess) {
        log('start install dependencies......');
        const order = hasYarn() ? 'yarn' : 'npm';
        // 自动安装依赖
        await command(isWindows ? `${order}.cmd` : order, ['install'], { cwd: `./${projectName}` });
        // eslint 校验修正
        await command(isWindows ? `${order}.cmd` : order, ['lint'], { cwd: `./${projectName}` });
        const data = await figlet('success');
        log(data);

        log(`
  successfully created project ${projectName}：
  Get started with the following commands:
  =========================================
  cd ${projectName}
  ${order} run serve
  =========================================
          `);
      }
    }
  } else {
    logError('invalid template');// 模板不存在
  }
};
