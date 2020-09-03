/*
 * @Author: liuruijun
 * @Date: 2020-09-03 15:56:18
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-03 16:11:54
 * @Description: file content
 */
const removeEmptyField = (res) => {
  Object.keys(res).map((item) => {
    if (!res[item]) {
      delete res[item];
    }
    return true;
  });
};

module.exports = {
  removeEmptyField,
};
