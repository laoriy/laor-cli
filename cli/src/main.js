const { program } = require('commander');
const path = require('path');
const chalk = require('chalk');
const { version } = require('./constants');

const mapAction = {
    'create <project-name>': {
        name: 'create',
        alias: 'c <project-name>',
        description: 'create a project',
        examples: ['laoriy create <project-name>'],
    },
};

program.version(version); // --version

program.on('--help', () => {
    // 监听--help,打印example
    console.log('\nExapmles:');
    Reflect.ownKeys(mapAction).forEach((action) => {
        const { examples } = mapAction[action];
        examples.forEach((example) => {
            console.log(`  ${example}`);
        });
    });
});
program.on('command:*', ([cmd]) => {
    program.outputHelp();
    console.log(`  ${chalk.red(`Unknown command ${chalk.yellow(cmd)}.`)}`);
    console.log();
    process.exitCode = 1;
});

Reflect.ownKeys(mapAction).forEach((action) => {
    const curAction = mapAction[action];
    program
        .command(action) // 配置命令的名字
        .alias(curAction.alias) // 命令的别名
        .description(curAction.description) // 命令对应的描述
        .action(() => {
            const params = process.argv.slice(3);
            console.log();
            // 回调create.js，执行create命令
            require(path.resolve(__dirname, curAction.name))(...params);
        });
});

const enhanceErrorMessages = require('../utils/enhanceErrorMessages');

enhanceErrorMessages('missingArgument', (argName) => {
    return `Missing required argument ${chalk.yellow(`<${argName}>`)}.`;
});

program.parse(process.argv);
