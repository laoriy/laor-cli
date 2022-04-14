// dev生产环境构建
const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = require('./webpack.base.config');
const { libName } = require('../utils/readLibName');

module.exports = (customConfig) => {
    return merge(baseConfig(customConfig), {
        mode: 'development',
        devtool: 'source-map',
        entry: {
            main: './src/index.ts',
        },
        output: {
            path: path.resolve(process.cwd(), './dist'),
            publicPath: '/dist/',
            filename: `${libName}.js`,
            library: libName,
            libraryTarget: 'umd',
            umdNamedDefine: true,
        },
        // https://webpack.docschina.org/configuration/externals/#root
        externals: {},
        plugins: [
            new CleanWebpackPlugin({
                dry: false,
                cleanOnceBeforeBuildPatterns: [
                    path.resolve(process.cwd(), './dist'),
                    path.resolve(process.cwd(), './src/**/*.js'),
                ],
            }),
        ],
    });
};
