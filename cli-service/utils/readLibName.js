const fs = require('fs');
const path = require('path');
const { logWarning } = require('../lib/logger');

const packagePath = path.join(process.cwd(), './src/package.json');
const libsPath = path.join(process.cwd(), './utils.json');

let jsonData;
let names; // 需要按需引入的配置
let name = 'main';
if (fs.existsSync(packagePath)) {
    jsonData = fs.readFileSync(packagePath, 'utf-8');
    jsonData = JSON.parse(jsonData);
    if (jsonData && jsonData.main) {
        [name] = jsonData.main.split('.');
    } else {
        logWarning(
            `The main field was not found in ${path.join(process.cwd(), './src/package.json')}`
        );
    }
} else {
    logWarning(`no such file or directory, open ${packagePath}`);
}

if (fs.existsSync(libsPath)) {
    try {
        names = JSON.parse(fs.readFileSync(libsPath, 'utf-8')) || {};
    } catch (error) {
        names = {};
    }
} else {
    names = {};
}

module.exports = {
    libName: name,
    libNames: names,
};
