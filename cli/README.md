# @laoriy/cli

> 脚手架工具

### 使用

```js
// 全局安装
npm i @laoriy/cli -g
// cd 对应开发目录 projectName是自定义项目名称
laoriy create <projectName>
```
> 支持选择lib模板 `v1.0.0+`

> 支持选择vue-template模板 `v1.1.0+`

### 开发调试
> 使用[npm link](https://docs.npmjs.com/cli/v8/commands/npm-link)方式

```
// 调试
cd 当前项目根目录
npm link

// 调试完毕
npm unlink
```

### 问题

- 1、由于拉取gitlab代码仓库需要权限，需要保证代码仓库有权限，才能保证git clone能够正常使用，且创建成功

### Change logs
-   Publish v1.1.1 2021/03/04
    1. 分支改为ops

-   Publish v1.1.1 2021/01/21
    1. 优化异常参数流程处理
    2. 优化子进程install过程，控制台的输出

-   Publish v1.1.0 2021/01/18
    1. 修改模板选择为动态选择git仓库模板目录
    2. 优化流程，使用execa优化。
    3. 其它bug修改。

-   Publish v1.0.0 2021/11/22
    @laoriy/cli初始版本。支持lib库模板下载

### Feture

- 支持不同类型项目或模板初始化扩展
