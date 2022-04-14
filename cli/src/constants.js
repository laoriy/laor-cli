const { version } = require('../package.json'); // 版本号

const templateRepo = {
    url: 'direct:https://github.com/laoriy/laor-cli#master',
    directory: 'templates',
};

const coverFolder = (projectName) => [
    {
        default: false,
        type: 'confirm',
        message: `Project ${projectName} has already exist，continue to overwrite it? (no)`,
        name: 'isOverwrite',
    },
];

module.exports = {
    version,
    coverFolder,
    templateRepo,
};
