const { merge } = require('webpack-merge');
const fs = require('fs');
const path = require('path');
const { customWebpackConfig, customConfig } = require('../utils/readCustomConfig');
const { BUILD_DEV, BUILD_PROD, BUILD_SRC, TSC, BUILD, DEV, SERVE } = require('../lib/constants');
const { buildSrc } = require('../build/build-file');
const { build } = require('./build');
const { server } = require('./server');
const { command } = require('../lib/command');
const buildDevConfig = require('../build/webpack.dist.dev.config');
const buildProdConfig = require('../build/webpack.dist.prod.config');
const buildProdUtilsConfig = require('../build/webpack.utils.prod.config');
const { logError, log } = require('../lib/logger');

const doneHandler = () => {
    log(
        `
  Successfully build
  Now, you can publish package by:
  =========================================
  cd dist
  npm publish
  =========================================
        `
    );
};

const handleBuild = async (arg) => {
    let webpackConfig = null;
    if (arg === BUILD_PROD) {
        await build(merge(buildProdUtilsConfig(customConfig), customWebpackConfig)); // 构建按需引入的包
        webpackConfig = buildProdConfig(customConfig);
    } else {
        webpackConfig = buildDevConfig(customConfig);
    }
    webpackConfig = merge(webpackConfig, customWebpackConfig);
    await build(webpackConfig);
};

const handleDevServer = async () => {
    server();
};

const handleTsc = async () => {
    const packagePath = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), './package.json'), 'utf-8')
    );
    if (!packagePath.scripts.tsc) {
        return;
    }
    await command('npm run tsc', { cwd: process.cwd() });
};

let handleBuildAll;

const handle = async (arg) => {
    switch (arg) {
        case BUILD_DEV:
        case BUILD_PROD:
            await handleBuild(arg);
            break;
        case DEV:
        case SERVE:
            await handleDevServer();
            break;
        case BUILD_SRC:
            await buildSrc();
            break;
        case BUILD:
            await handleBuildAll();
            doneHandler();
            break;
        case TSC:
            handleTsc();
            break;
        default:
            logError(`Unknown handle command type: ${arg}`);
    }
};

handleBuildAll = async () => {
    const packagePath = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), './package.json'), 'utf-8')
    );
    const orderName = 'build:all';

    if (!packagePath.scripts[orderName]) {
        await handleTsc();
        await handle(BUILD_DEV);
        await handle(BUILD_PROD);
        await handle(BUILD_SRC);
    } else {
        await command(`npm run ${orderName}`, { cwd: process.cwd() });
    }
};

module.exports = {
    handle,
};
