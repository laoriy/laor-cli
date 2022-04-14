// 本地开发预览
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.config');

module.exports = (customConfig) => {
    return merge(baseConfig(customConfig), {
        mode: 'development',
        devtool: 'eval-source-map',
        entry: {
            index: './examples/index',
        },
        output: {
            path: path.join(process.cwd(), './examples/dist'),
            publicPath: '',
            filename: '[name].js',
            chunkFilename: '[name].chunk.js',
        },
        optimization: {
            splitChunks: {
                name: 'vendors',
                filename: 'vendor.bundle.js',
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: true,
                filename: path.join(process.cwd(), './examples/dist/index.html'),
                template: path.join(process.cwd(), './examples/index.html'),
            }),
        ],
        stats: 'none',
        devServer: {
            allowedHosts: 'all',
            static: {
                directory: path.join(process.cwd(), './examples/dist'),
            },
            compress: true,
            port: 'auto',
            open: true,
            client: {
                logging: 'none',
            },
        },
    });
};
