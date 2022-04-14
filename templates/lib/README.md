# template-lib 工具库开发模板

## 一、背景

基于 [@laoriy/cli-service](https://github.com/laoriy/laor-cli/tree/master/cli-service) 打包工具，统一 js 工具库开发流程和规范，减少复制粘贴过程，降低对构建开发环境配置的学习成本，提高上手速度。

> 脚手架 [@laoriy/cli](https://github.com/laoriy/laor-cli/tree/master/cli) 版本`v1.0.0+`可以选择该模板

> 构建工具 [@laoriy/cli-service](https://github.com/laoriy/laor-cli/tree/master/cli-service) 版本`v1.0.0+`支持构建该模板

## 二、设计要点

1. 优化开发流程，支持自动生成 ts 声明
2. 支持分模块打包
3. 支持 jest 单元测试

## 三、文件目录

```js
| -- examples
    | -- index.ts 本地开发入口 // 不建议更改
    | -- index.html  本地开发html模板 // 不建议更改
| -- node_modules 项目依赖
| -- src
    | -- types ts声明，自动生成
    | -- utils 各个模块的工具方法
        | -- sum.ts 示例文件
    | -- index.ts 打包构建入口文件
    | -- package.json 打包后的库对应的package.json //首次发布需要确认和修改的内容见下方详细说明
| -- tests
    | -- sum.test.ts jest单元测试文件
| -- .eslintrc
| -- .gitignore
| -- .prettierrc
| -- laoriy.config.js 暂时支持度比较低。配置和webpack打包配置一致，最终会merge到一起。只支持build的相关配置
| -- babel.config.js babel配置
| -- jest.config jest单元测试配置
| -- package.json 项目开发对应的package.json配置
| -- tsconfig.json ts配置
| -- utils.json 分包处理
```

## 四、开发

> 1、启动命令：

```js
"dev": "laoriy-cli-service dev",  // 本地开发服务
"serve": "npm run dev",
```

> 2、开发须知：

-   不推荐使用 `export default` 导出模块方法

-   减少使用 es6+新的 api。

-   建议将各个模块拆分，不要全部写在一个文件中，这样在分模块打包才能尽可能保证每个模块的功能独立且体积更小，如：

    ```js
    //index.ts bad
    import { a, b, c, d, e, f } from 'module1';
    import { g } from 'module2';

    export { a, b, c, d, e, f, g };

    //index.ts good
    import { a } from 'module1';
    import { b } from 'module11';
    import { c } from 'module12';
    import { d } from 'module13';
    import { e } from 'module14';
    import { f } from 'module15';
    import { g } from 'module2';

    export { a, b, c, d, e, f, g };
    ```

## 五、配置

> utils.json 用于按需引入的文件打包的多个入口配置

-   key 代表要导出的单独的模块，value 是文件的相对路径
-   需要单独打包的模块名（key），要和全局 index.ts 入口导出的对应木块名保持一致

```js
// utils.json
{
    "a": "./src/utils/module1.ts" // 这里的key是a ,要和index.ts中导出的a名称保持一致
    "b": "./src/utils/module11.ts"
    "c": "./src/utils/module12.ts"
    "d": "./src/utils/module13.ts"
    "e": "./src/utils/module14.ts"
}
```

> laoriy.config.json（[更多配置](https://github.com/laoriy/laor-cli/tree/master/cli-service#laoriyconfigjs%E9%85%8D%E7%BD%AE%E9%A1%B9)）

-   打包扩展配置项，会在 build 的时候 merge 到内置的默认配置中，使用方式和 webpack 配置一致。

    ```js
    // 例如：
    module.exports = {
        externals: {
            // 项目中使用到的第三方库不需要打包进来。
            'js-cookie': {
                root: 'Cookies',
                commonjs: 'js-cookie',
                commonjs2: 'js-cookie',
                amd: 'js-cookie',
            },
        },
    };
    ```

## 六、构建发布

> 打包命令说明：

```json
"build:dev": "laoriy-cli-service build:dev",  // 打包生成非压缩文件
"build:prod": "laoriy-cli-service build:prod"  // 打包生成非压缩文件
"build:src": "laoriy-cli-service build:src"   // copy src目录源文件
"build": "laoriy-cli-service build",   // 发包打包方式，实际是各个打包命令的集合
"tsc": "tsc",  // 生成ts声明及ts校验

```

> 构建发布流程：

-   构建发布前注意修改和确认的内容

    1. 每次发布,首次发布前请修改 src/README.md 有关组件的使用说明文档，升级记录；
    2. 每次发布前修改 src/package.json 的`version`字段；
    3. 首次发布确认 src/package.json 的`name`字段，选择使用合适的 npm 包名。
    4. 首次发布确认 src/package.json 的`main`字段，指定组件库入口文件，格式为 dist/xxx.js；
    5. 首次发布确认 src/package.json 的`description`字段的描述和组件功能相符；
    6. 首次发布确认 src/package.json 的`keywords`字段和组件名有相应的关联关系。

-   若插件有依赖的第三方插件以及一些必须的依赖包，需在 src/package.json 内指定`peerDependencies`、`dependencies`；

    ```json
    {
        "peerDependencies": {
            "js-cookie": ">=2.2.1"
        },
        "dependencies": {
            "js-cookie": "^2.2.1"
        }
    }
    ```

-   打包发布（请确认已登录 npm 私服）
    ```
    npm run build
    cd dist
    npm publish
    ```

## 七、实际项目中使用

> 项目使用按需引入说明：

```js
// 1.项目中引入babel-plugin-transform-imports包（npm i babel-plugin-transform-imports -D）
// 2.在项目的babel.config.js中配置中添加
module.exports = {
    plugins: [
        [
            'transform-imports',
            {
                'template-lib': {
                    // eslint-disable-next-line no-template-curly-in-string
                    transform: 'template-lib/utils/${member}',
                    skipDefaultConversion: true,
                    preventFullImport: true,
                },
            },
        ],
    ],
};
```

## 八、测试

> 1、测试命令(默认已开启 coverage 覆盖率统计)

```json
"test": "jest",   // 单元测试
```

## 九、注意事项

-   请在封住库的时候尽量少的使用 es6+的新的 api；

-   由于项目目前打包处理只对 es6+的语法（如 var，const）做了 babel 编译，如果库里面有用到新的 api（如 Array.prototype.includes）;
    请在需要兼容该语法的项目中 vue.config.js 中配置编译该库；

        ```js
        transpileDependencies: ['laoriy-lib'],
        ```
