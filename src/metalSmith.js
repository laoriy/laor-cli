/*
 * @Author: liuruijun
 * @Date: 2020-09-02 14:54:07
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-03 14:33:24
 * @Description: file content
 */
const Metalsmith = require('metalsmith');// 遍历文件夹
const path = require('path');
const inquirer = require('inquirer');
const latestVersion = require('latest-version');
const { uiInput } = require('./constants');
const { render } = require('../utils/promises');
const checkNpm = require('./checkNpm');

module.exports = ({
  result, projectName, askType, type,
}) => new Promise((resolve, reject) => {
  const obj = { projectName, proxyIp: 'www.baidu.com', isH5: type === 'h5' };
  let compiles = ['js', 'json']; // 需要编译的文件
  Metalsmith(__dirname)
    .source(result)
    .destination(path.resolve(projectName)) // 拷贝文件到该目录
    .use(async (files, metal, done) => {
      const askData = require(path.join(result, 'ask.js'));
      const { CUSTOME_UI, deletePath, ...agrs } = askData;
      compiles = askData.compiles || compiles;
      // 需要删除的多余文件
      const deletePathArr = (deletePath && deletePath[type]) || [];
      // 拿到ask信息
      const asks = agrs[askType];
      // 获取输入信息
      const res = await inquirer.prompt(asks);
      // 需要手动输入的新的UI库
      if (res.uiLibrary === CUSTOME_UI) {
        res.uiLibrary = await checkNpm({ arr: uiInput, inquireName: 'uiLibrary' });
      }
      // 获取ui库版本号
      obj.version = await latestVersion(res.uiLibrary);

      const meta = metal.metadata();
      // 去空值
      Object.keys(res).map((item) => {
        if (!res[item]) {
          delete res[item];
        }
        return true;
      });
      Object.assign(meta, obj, res);
      // 删除需要删除的文件
      delete files['ask.js'];
      deletePathArr.forEach((val) => {
        const oval = val.replace(/\//g, '\\'); // 文件路径修改
        delete files[val];
        delete files[oval];
      });
      done();
    })
    .use((files, metal, done) => {
      Reflect.ownKeys(files).forEach(async (file) => {
        // 文件编译
        compiles.forEach(async (compile) => {
          if (file.includes(compile)) {
            // buffer 转文件
            let content = files[file].contents.toString();
            if (content.includes('<%')) {
              content = await render(content, metal.metadata());
            }
            // buffer 转文件
            files[file].contents = Buffer.from(content);
          }
        });
      });
      done();
    })
    .build(async (err) => {
      if (err) {
        reject();
      } else {
        resolve(true);
      }
    });
});
