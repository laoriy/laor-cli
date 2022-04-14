// prod生产环境构建
const path = require('path');
const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
// webpack 自带 terser-webpack-plugin 插件
// eslint-disable-next-line import/no-extraneous-dependencies
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const baseConfig = require('./webpack.base.config');
const { libName } = require('../utils/readLibName');

module.exports = (customConfig) => {
    return merge(baseConfig(customConfig), {
        mode: 'production',
        devtool: 'source-map',
        entry: {
            [libName]: './src/index.ts',
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    terserOptions: {
                        compress: {
                            drop_console: true,
                            drop_debugger: true,
                        },
                    },
                }),
                new CssMinimizerPlugin(),
            ],
        },
        output: {
            path: path.resolve(process.cwd(), './dist'),
            publicPath: '/dist/',
            filename: `${libName}.min.js`,
            library: libName,
            libraryTarget: 'umd',
            umdNamedDefine: true,
        },
        // https://webpack.docschina.org/configuration/externals/#root
        externals: {},
        plugins: [
            new CompressionPlugin({
                filename: '/dist/[name].gz[query]',
                algorithm: 'gzip',
                test: /\.(js|css)$/,
                threshold: 10240,
                minRatio: 0.8,
                deleteOriginalAssets: false,
            }),
        ],
    });
};
