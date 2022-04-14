/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const { logError } = require('../lib/logger');

const customDefaultConfig = {
    css: {
        extract: true,
    },
};

const customDefaultConfigKeys = Object.keys(customDefaultConfig);

const formatConfig = (customWebpackConfig) => {
    const customConfig = JSON.parse(JSON.stringify(customDefaultConfig));
    customDefaultConfigKeys.forEach((key) => {
        if (customWebpackConfig[key]) {
            customConfig[key] = customWebpackConfig[key];
            delete customWebpackConfig[key];
        }
    });
    return customConfig;
};

const readCustomConfig = () => {
    let selfConfig = {};
    const selfConfigPath = path.join(process.cwd(), '/laoriy.config.js');
    if (fs.existsSync(selfConfigPath)) {
        try {
            selfConfig = require(selfConfigPath);
        } catch (err) {
            selfConfig = {};
            logError('Invalid laoriy.config.js config found...');
            logError(err);
        }
    }
    return selfConfig;
};
const customWebpackConfig = readCustomConfig();
const customConfig = formatConfig(customWebpackConfig);

module.exports = {
    customWebpackConfig,
    customConfig,
};
