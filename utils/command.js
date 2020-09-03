/*
 * @Author: liuruijun
 * @Date: 2020-09-02 19:42:53
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-03 15:00:26
 * @Description: file content
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
