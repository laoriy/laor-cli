/*
 * @Author: liuruijun
 * @Date: 2020-08-24 10:41:21
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-08-24 10:49:27
 * @Description: file content
 */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-console': 'off',
    'linebreak-style': ['off', 'windows'],
  },
};
