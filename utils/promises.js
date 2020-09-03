/*
 * @Author: liuruijun
 * @Date: 2020-08-25 15:05:35
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-03 11:36:40
 * @Description: promise转换
 */
const { promisify } = require('util');
let ncp = require('ncp');
let download = require('download-github-repo');
let { render } = require('consolidate').ejs;// consolidate统一了所有模板引擎
const figlet = promisify(require('figlet'));

ncp = promisify(ncp);
download = promisify(download);
render = promisify(render);

module.exports = {
  ncp, // 文件拷贝
  download, // 下载仓库模板
  render, // 模板统一处理
  figlet, // 特殊文字
};
