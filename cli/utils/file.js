const { readdirSync, lstatSync } = require('fs-extra');
const path = require('path');

const readAllDir = (dirPath) => {
    const filePaths = readdirSync(dirPath);
    const dirs = {};
    filePaths.forEach((pathName) => {
        const filePath = path.join(dirPath, pathName);
        const stat = lstatSync(filePath);
        if (stat.isDirectory()) {
            dirs[pathName] = filePath;
        }
    });
    return dirs;
};

module.exports = {
    readAllDir,
};
