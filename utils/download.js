/*
 * @Author: liuruijun
 * @Date: 2020-08-25 15:05:35
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-01 14:42:25
 * @Description: file content
 */

const loadingFn = require('./loadingFn');
const { download } = require('./promises');

module.exports = async (repo, dest, message) => {
  await loadingFn(download, message)(repo, dest);
  return dest;
};
