const { args } = require('../lib/constants');
const { logError } = require('../lib/logger');
const { handle } = require('./handle');

const start = async () => {
    const arg = process.argv.slice(2)[0];
    // 正确的命令
    const correctOrder = args.indexOf(arg) > -1;
    if (correctOrder) {
        handle(arg);
    } else {
        logError(`Unknown command type: ${arg}`);
    }
};

start();
