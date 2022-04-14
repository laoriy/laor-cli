const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { merge } = require('webpack-merge');
const chalk = require('chalk');
const devServerConfig = require('../build/webpack.dev.config');

const server = () => {
    const webpackConfig = merge(devServerConfig());
    const compiler = webpack(webpackConfig);
    const devServerOptions = {
        ...webpackConfig.devServer,
    };
    const serve = new WebpackDevServer(devServerOptions, compiler);
    serve.startCallback(async () => {
        if (serve.options.port) {
            const { port } = serve.options;
            const localIPv4 = await WebpackDevServer.internalIP('v4');

            console.log();
            console.log(`  Project running at:`);
            console.log(`  - Local:   ${chalk.cyan(`http://localhost:${port}`)}`);
            console.log(`  - Local:   ${chalk.cyan(`http://${localIPv4}:${port}`)}`);
        }
    });
};

module.exports = {
    server,
};
