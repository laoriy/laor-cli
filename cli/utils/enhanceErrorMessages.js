const program = require('commander');
const chalk = require('chalk');

module.exports = (methodName, log) => {
    program.Command.prototype[methodName] = function prototype(...args) {
        this.outputHelp();
        console.log(`  ${chalk.red(log(...args))}`);
        console.log();
        process.exit(1);
    };
};
