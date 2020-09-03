/*
 * @Author: liuruijun
 * @Date: 2020-08-21 15:20:51
 * @LastEditors: liuruijun
 * @LastEditTime: 2020-09-02 18:59:39
 * @Description: file content
 */
const { program } = require('commander');
const path = require('path');
const { version } = require('./constants');

const mapAction = {
  create: {
    alias: 'c',
    description: 'create a project',
    examples: ['laor-cli create <project-name>'],
  },
  '*': {
    alias: '',
    description: 'commond not found',
    examples: [],
  },
};

program
  .version(version); // --version

program.on('--help', () => { // 监听--help,打印example
  console.log('\nExapmles:');
  Reflect.ownKeys(mapAction).forEach((action) => {
    const { examples } = mapAction[action];
    examples.forEach((example) => {
      console.log(`  ${example}`);
    });
  });
});

Reflect.ownKeys(mapAction).forEach((action) => {
  program
    .command(action) // 配置命令的名字
    .alias(mapAction[action].description)// 命令的别名
    .description('create a project') // 命令对应的描述
    .action(() => {
      if (action === '*') {
        console.log(mapAction[action].description);
      } else {
        const params = process.argv.slice(3);
        require(path.resolve(__dirname, action))(...params);
      }
    });
});

program.parse(process.argv);
