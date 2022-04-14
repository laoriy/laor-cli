const execa = require('execa');

const command = (command, { args, cwd = process.cwd() }) => {
    if (!args) {
        [command, ...args] = command.split(/\s+/);
    }
    return execa(command, args, { cwd });
};

const executeCommand = (command, { args, cwd = process.cwd() }) => {
    if (!args) {
        [command, ...args] = command.split(/\s+/);
    }
    const child = execa(command, args, {
        cwd,
        stdio: ['inherit', 'pipe', 'inherit'],
    });
    child.stdout.pipe(process.stdout);
    return child;
};

module.exports = { command, executeCommand };
