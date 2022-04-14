const execa = require('execa');

const command = (command, { args, cwd = process.cwd() }) => {
    if (!args) {
        [command, ...args] = command.split(/\s+/);
    }
    return execa(command, args, { cwd });
};

module.exports = { command };
