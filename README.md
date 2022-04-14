# CLI 脚手架

> laoriy Cli 脚手架工具

```
| -- cli 脚手架工具
| -- cli-service 打包工具
| -- templates 模板，供@laoriy/cli创建项目使用
```

# @laoriy/cli

> 脚手架工具

### 使用

```js
// 全局安装
npm i @laoriy/cli -g
// cd 对应开发目录 projectName是自定义项目名称
laoriy create <projectName>
```

[查看更多](http://git.aqara.com/root/AIOT_aqara-npm-libs/-/blob/ops/aqara-cli/cli/README.md)

# @laoriy/cli-service

> 打包工具

### 使用

```js
// 注意，这里只是介绍说明，实际已在模板中自动添加了打包工具，无需手动添加

// install
npm i @laoriy/cli-service -D

// 启动本地开发服务
laor-cli-service dev
// 打包生成非压缩文件
laor-cli-service build:dev
// 打包生成压缩文件
laor-cli-service build:prod
// copy src目录源文件
laor-cli-service build:src
// 发布打包，实际是各个打包命令的集合
laor-cli-service build

```

[查看更多](http://git.aqara.com/root/AIOT_aqara-npm-libs/-/blob/ops/aqara-cli/cli-service/README.md)

# templates/lib

> 工具库开发模板

### 使用

```js
// 全局安装
npm i @laoriy/cli -g
// cd 对应开发目录 projectName是自定义项目名称
laoriy create <projectName>
// 供@laoriy/cli脚手架 create 项目的时候进行模板选择
? Please choose project template (Use arrow keys)
> lib
```

[查看更多](http://git.aqara.com/root/AIOT_aqara-npm-libs/-/blob/ops/aqara-cli/templates/lib/README.md)

# templates/vue-component

> vue 组件开发模板

### 使用

```js
// 全局安装
npm i @laoriy/cli -g
// cd 对应开发目录 projectName是自定义项目名称
laoriy create <projectName>
// 供@laoriy/cli脚手架 create 项目的时候进行模板选择
? Please choose project template (Use arrow keys)
> vue-component
```

[查看更多](http://git.aqara.com/root/AIOT_aqara-npm-libs/-/blob/ops/aqara-cli/templates/vue-component/README.md)

## 问题

- 1、模板目录结构规范化

### Feture

- 1、开发、测试文档完善

- 2、更加丰富项目或模板
