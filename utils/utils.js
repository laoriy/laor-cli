/*
 * @Author: liuruijun
 * @Date: 2020-09-03 15:56:18
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-04 17:26:17
 * @Description: file content
 */
const removeEmptyField = (res) => {
  Reflect.ownKeys(res).map((item) => {
    if (res[item] === undefined || res[item] === '') {
      delete res[item];
    }
    return true;
  });
};

module.exports = {
  removeEmptyField,
};
