const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs-extra');
const download = require('../utils/download');
const { ncp, figlet } = require('../utils/promises');
const { logError, log } = require('../utils/log');
const { coverFolder, templateRepo } = require('./constants');
const { executeCommand } = require('../utils/command');
const { readAllDir } = require('../utils/file');

module.exports = async (projectName) => {
    const targetDir = path.resolve(process.cwd(), projectName || '.');
    const isFoldExist = fs.existsSync(targetDir);

    /**
     * 1.查看项目是否存在
     */
    let isOverwrite;
    if (isFoldExist) {
        const result = await inquirer.prompt(coverFolder(projectName));
        isOverwrite = result.isOverwrite;
        if (isOverwrite === false) return;
    }
    /**
     * 2.模板下载
     */
    const { url, directory } = templateRepo;
    const templateDirectory = await download(url, 'downloading template...');
    const templates = readAllDir(path.join(templateDirectory, directory));
    /**
     * 3.模板选择
     */
    const { tempName } = await inquirer.prompt({
        name: 'tempName',
        type: 'list',
        message: 'Please choose project template',
        choices: Object.keys(templates),
    });
    const templatePath = templates[tempName];

    if (templatePath) {
        if (isOverwrite === true) {
            await fs.remove(targetDir);
        }
        /**
         * 4.复制对应项目到临时文件
         */
        await ncp(templatePath, path.resolve(projectName));
        /**
         * 5.删除临时文件
         */
        await fs.remove(templateDirectory);
        /**
         * 6.安装依赖
         */
        console.log('📦 Installing dependencies...');
        console.log();
        await executeCommand('npm install', { cwd: path.resolve(`./${projectName}`) });
        const data = await figlet('  success');
        log(data);
        log(`
    successfully created project ${projectName}：
    Get started with the following commands:
    =========================================
    
    cd ${projectName}
    npm run serve
    
    =========================================
            `);
    } else {
        logError('Invalid template'); // 模板不存在
    }
};
