// prod生产环境构建
const path = require('path');
const { merge } = require('webpack-merge');
/**
 * @todo 未来可能开启的功能所需插件，先保留代码
 */
// const TerserPlugin = require('terser-webpack-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const baseConfig = require('./webpack.base.config');
const { libNames } = require('../utils/readLibName');

module.exports = () => {
    return merge(baseConfig(), {
        mode: 'production',
        devtool: false,
        entry: libNames,
        optimization: {
            minimize: false,
            /**
             * @todo 该配置项后面可能会开启，先保留代码
             */
            // minimizer: [
            //     new TerserPlugin({
            //         parallel: true,
            //         terserOptions: {
            //             compress: {
            //                 drop_console: true,
            //                 drop_debugger: true,
            //             },
            //         },
            //     }),
            //     new CssMinimizerPlugin(),
            // ],
        },
        output: {
            path: path.resolve(process.cwd(), './dist/utils'),
            publicPath: '/dist/',
            filename: `[name].js`,
            libraryTarget: 'umd',
            umdNamedDefine: true,
        },
        externals: {},
    });
};
