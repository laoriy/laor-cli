// 基础配置
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            plugins: [
                [
                    'autoprefixer',
                    {
                        overrideBrowserslist: [
                            'Android >= 4.0',
                            'iOS >= 7',
                            '> 1%',
                            'last 2 versions',
                        ],
                    },
                ],
            ],
        },
    },
};

const babelOptions = {
    presets: [
        [
            '@babel/preset-env',
            {
                /**
                 * @todo 暂不开启打包低版本兼容，以减小包体积，后续可能会用
                 */
                // "targets": "> 1%, last 2 versions, not ie <= 8",
                // useBuiltIns: 'usage',
                // corejs: '2',
                // modules: false,
            },
        ],
        ['@vue/babel-preset-jsx'],
    ],
};
const getStyleLoader = (shouldExtract) => {
    const miniCssLoader = [
        {
            loader: MiniCssExtractPlugin.loader, // 保证css中引用的图片，字体路径正确,  保证less中引用的字体文件路径正确
            options: {
                publicPath: '../../',
            },
        },
    ];

    return shouldExtract ? miniCssLoader : ['vue-style-loader'];
};
const getImgLoader = (shouldExtract) => {
    const resource = {
        type: 'asset/resource',
        generator: {
            filename: 'dist/static/img/[name].[contenthash][ext]',
        },
    };
    return shouldExtract ? resource : { type: 'asset/inline' };
};

const getFontLoader = (shouldExtract) => {
    const resource = {
        type: 'asset/resource',
        generator: {
            filename: 'dist/static/fonts/[name].[contenthash][ext]',
        },
    };
    return shouldExtract ? resource : { type: 'asset/inline' };
};
function resolve(dir) {
    return path.join(process.cwd(), dir);
}

module.exports = (customConfig = {}) => {
    const shouldExtract = customConfig.css && customConfig.css.extract;

    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: babelOptions,
                    },
                    exclude: /node_modules/,
                },
                {
                    test: /\.(ts)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: babelOptions,
                        },
                        {
                            loader: 'ts-loader',
                            options: {
                                transpileOnly: true,
                                appendTsSuffixTo: [/\.vue$/],
                                happyPackMode: false,
                            },
                        },
                    ],
                },
                {
                    test: /\.(tsx)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: babelOptions,
                        },
                        {
                            loader: 'ts-loader',
                            options: {
                                transpileOnly: true,
                                appendTsxSuffixTo: [/\.vue$/], // 支持vue中使用tsx语法
                                happyPackMode: false,
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|webp|svg)$/,
                    ...getImgLoader(shouldExtract),
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    ...getFontLoader(shouldExtract),
                },
                {
                    test: /\.less$/,
                    use: [
                        ...getStyleLoader(shouldExtract),
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        postcssLoader,
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: [...getStyleLoader(shouldExtract), 'css-loader', postcssLoader],
                },
                {
                    test: /\.vue$/,
                    use: [
                        {
                            loader: 'vue-loader',
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx', '.vue', '.json', '.less', '.css'],
            alias: {
                '@': resolve('src'),
            },
        },
        plugins: [
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                filename: 'dist/styles/index.css',
            }),
        ],
    };
};
