const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const readFiles = require('../utils/readFileTree');
const writeFileTree = require('../utils/writeFileTree');

const { logError, logInfo, logSuccess } = require('../lib/logger');

class Creator {
    constructor(fileDir) {
        this.dir = fileDir;
        this.srcFileMiddlewares = [];
        this.subFileMiddlewares = [];
    }

    async create() {
        const fileDir = path.resolve(process.cwd(), './src');
        const isExist = fs.existsSync(fileDir);

        if (isExist) {
            logInfo('Start writing, it will take a while...\n');

            await this.setFileMiddleware(fileDir);

            // write src fileMiddleware
            for (const file of this.srcFileMiddlewares) {
                // eslint-disable-next-line no-await-in-loop
                await writeFileTree(this.dir, file);
            }

            // write sub fileMiddleware
            for (const file of this.subFileMiddlewares) {
                // eslint-disable-next-line no-await-in-loop
                await writeFileTree(this.dir.replace('src', ''), file);
            }

            console.log(chalk.greenBright(`  From  [${fileDir}]`));
            console.log(`${chalk.greenBright(`  To    [${this.dir}]`)}\n`);
            logSuccess('Writed successfully.');
        } else {
            logError(`The '${fileDir}' folder is not exist, please check it.`);
        }
    }

    async setFileMiddleware(fileDir, addtion = {}) {
        const files = await readFiles(fileDir, addtion);
        Object.keys(files).forEach((filePath) => {
            const isSubFile =
                ['package.json', 'README.md'].includes(filePath) || filePath.indexOf('types/') > -1;

            if (isSubFile) {
                this.subFileMiddlewares.push({ [filePath]: files[filePath] });
            } else {
                this.srcFileMiddlewares.push({ [filePath]: files[filePath] });
            }
        });
    }
}

const buildSrc = async () => {
    await new Creator(path.resolve(process.cwd(), './dist/src')).create();
};
module.exports = {
    buildSrc,
};
