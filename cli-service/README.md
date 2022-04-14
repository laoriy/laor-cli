# @laoriy/cli-service

 > 打包工具

### 使用

> 支持lib模板打包 `v1.0.0+`

> 支持vue-template模板打包 `v1.1.0+`

```js
// 注意，这里只是介绍说明，实际已在模板中自动添加了打包工具，无需手动添加

// install
npm i @laoriy/cli-service -D

// 启动本地开发服务
laoriy-cli-service dev
// 打包生成非压缩文件
laoriy-cli-service build:dev
// 打包生成压缩文件
laoriy-cli-service build:prod
// copy src目录源文件
laoriy-cli-service build:src
// 发布打包，实际是各个打包命令的集合
laoriy-cli-service build

```
### laoriy.config.js配置项
> 基本的webpack配置项（[链接](https://webpack.js.org/configuration/)），内部会进行merge；如下列举是已测试可正常使用的。
- externals

> 扩展配置项
- css.extract
    
    Type: boolean  
    
    Default: true

    是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。false时，会将css中的静态资源转换为base64格式，增加包的体积，所以对于vue组件中css样式中引用本地静态文件很少（字体，图片等）的情况下。可以设置为false，便于使用。
    

### 问题

- 1、目前打包处理只对es6+的语法（如var，const）做了babel编译，如果库里面有用到新的api（如Array.prototype.includes）
，需在工程化项目中配置语法转换处理，如vue项目vue.config.js中配置：

    ```js
    transpileDependencies: ['laoriy-lib'],
    ```
- 2、插件间相互引用，按需引入插件后重复代码的处理问题

- 3、只做了打包js库的测试，vue组件库的待完善更新

### 开发调试
> 使用[npm link](https://docs.npmjs.com/cli/v8/commands/npm-link)方式

```
// 调试
cd 当前项目根目录(如，cd /AIOT_laoriy-npm-libs/laoriy-cli/cli-service)
npm link
cd 当前插件项目根目录(如，cd /Users/projects/test-lib)
laoriy-cli-service dev
// ...
laoriy-cli-service build


// 调试完毕
npm unlink
```
### 构建输入输出说明
- 输入
 
  1. 构建入口为根目录index.ts，不建议更改
  2. 本地开发调试入口examples/index.ts，模板为examples/index.html，不建议更改

- 输出

  1. 打包后的js文件名根据scr/package.json的main字段配置，其中lib设置为xx.js，vue组件设置为dist/xx.js（默认是设置好的,只需要改个自己的名字）。
  2. lib输出在根目录结构如下：

        ```js
        | -- dist
            | -- src src目录源代码
            | -- types ts声明
            | -- utils 按需引入打包处理的各个分包
                | -- a.js
                | -- b.js
            | -- package.json lib库对应包的package.json说明文件
            | -- xx.js   打包产物
            | -- xx.min.js  打包产物
        ```

  3. vue组件输出在根目录结构如下：

        ```js
        | -- dist
            | -- dist
                | -- styles
                    | -- index.css  打包后的css产物
                | -- xx.js   打包产物
                | -- xx.min.js  打包产物
            | -- src src目录源代码
            | -- types ts声明
            | -- package.json lib库对应包的package.json说明文件
        ```




### Change logs
-   Publish v1.1.5 2021/03/07
    优化本地服务启动host配置
-   Publish v1.1.4 2021/01/23
    优化devServer不设置css.extract逻辑
-   Publish v1.1.3 2021/01/20
    支持laoriy.config.js配置css.extract
-   Publish v1.1.2 2021/01/20
    优化打包命令使用execa
-   Publish v1.1.1 2021/01/19
    处理css中的图片，字体文件等
-   Publish v1.1.0 2021/01/18
    支持打包vue组件库，处理图片，字体打包为base64格式；
-   Publish v1.0.0 2021/11/22
    @laoriy/cli-service初始版本，支持打包js工具库

### Future

- 支持打包环境参数配置扩展

- 支持不同版本ES语法babel编译输出（ES3-ES5，ES6+）

- 支持不同工具打包扩展（webpack、rollup）

