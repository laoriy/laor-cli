const webpack = require('webpack');
const { logWithSpinner, stopSpinner } = require('../lib/spinner');
const { logSuccess, log } = require('../lib/logger');
const { formatStats } = require('../lib/formatStats');

const build = async (webpackConfig) => {
    logWithSpinner('Start building...\n');
    return new Promise((resolve, reject) => {
        /* eslint-disable */
        webpack(webpackConfig, async (err, stats) => {
            stopSpinner(false);
            if (err) {
                return reject(err);
            }

            if (stats.hasErrors()) {
                return reject(new Error('Build failed with errors.'));
            }
            console.log();
            log(await formatStats(stats, webpackConfig.output.path));
            logSuccess('Build complete');
            resolve();
        });
    });
};

module.exports = {
    build,
};
