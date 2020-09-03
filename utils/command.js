/*
 * @Author: liuruijun
 * @Date: 2020-09-02 19:42:53
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-03 16:04:54
 * @Description: npm 命令执行
 */
const { spawn } = require('child_process');

const command = (...args) => new Promise((resolve) => {
  const proc = spawn(...args);
  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);
  proc.on('close', () => {
    resolve();
  });
});

module.exports = command;
