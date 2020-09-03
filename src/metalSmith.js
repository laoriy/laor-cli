/*
 * @Author: liuruijun
 * @Date: 2020-09-02 14:54:07
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-03 16:13:47
 * @Description: file content
 */
const Metalsmith = require('metalsmith');// 遍历文件夹
const path = require('path');
const inquirer = require('inquirer');
const latestVersion = require('latest-version');
const { uiInput } = require('./constants');
const { render } = require('../utils/promises');
const checkNpm = require('./checkNpm');
const { removeEmptyField } = require('../utils/utils');

module.exports = ({
  result, projectName, askType, type,
}) => new Promise((resolve, reject) => {
  /**
   * 默认项目名称，默认代理地址，是不是h5项目
   */
  const obj = { projectName, proxyIp: 'www.baidu.com', isH5: type === 'h5' };
  // 默认需要编译js及json格式的文件
  let compiles = ['js', 'json'];

  Metalsmith(__dirname)
    .source(result)
    .destination(path.resolve(projectName)) // 拷贝文件到该目录
    .use(async (files, metal, done) => {
      /**
       * 1.拿到模板的ask文件
       */
      const askData = require(path.join(result, 'ask.js'));
      const { CUSTOME_UI, deletePath, ...agrs } = askData; // 自定义ui库的提示，需要删除的文件
      compiles = askData.compiles || compiles;
      const asks = agrs[askType];// 拿到askType:h5/pc对应的询问
      const res = await inquirer.prompt(asks);// 获取输入信息
      removeEmptyField(res);// 去空

      if (res.uiLibrary === CUSTOME_UI) { // 需要手动输入的新的UI库
        res.uiLibrary = await checkNpm({ arr: uiInput, inquireName: 'uiLibrary' });
      }

      /**
       * 2.获取ui库最近的版本号
       */
      obj.version = await latestVersion(res.uiLibrary);

      /**
       * 3.需要删除的多余文件
       */
      const deletePathArr = (deletePath && deletePath[type]) || [];
      delete files['ask.js'];
      deletePathArr.forEach((val) => {
        const oval = val.replace(/\//g, '\\'); // 文件路径修改
        delete files[val];
        delete files[oval];
      });

      /**
       * 4.传递数据给下一层use
       */
      const meta = metal.metadata();
      Object.assign(meta, obj, res);
      done();
    })
    .use((files, metal, done) => {
      /**
      * 5.编译
      */
      Reflect.ownKeys(files).forEach(async (file) => {
        compiles.forEach(async (compile) => {
          if (file.includes(compile)) {
            let content = files[file].contents.toString();// buffer 转文件
            if (content.includes('<%')) {
              content = await render(content, metal.metadata());
            }
            files[file].contents = Buffer.from(content);// 文件转buffer
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
