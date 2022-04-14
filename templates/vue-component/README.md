# vue 组件开发模板

## 一、背景

基于 [@laoriy/cli-service](https://github.com/laoriy/laor-cli/tree/master/cli-service) 打包工具，统一 vue 组件库开发流程和规范，减少复制粘贴过程，降低对构建开发环境配置的学习成本，提高上手速度。

> 脚手架 [@laoriy/cli](https://github.com/laoriy/laor-cli/tree/master/cli) 版本`v1.1.0+`可以选择该模板

> 构建工具 [@laoriy/cli-service](https://github.com/laoriy/laor-cli/tree/master/cli-service) 版本`v1.1.0+`支持构建该模板

```js
npm i @laoriy/cli -g
laoriy create <myVueComponent>
// @laoriy/cli-service 已在模板中自动引入
```

## 二、模板设计要点

1. 近业务开发的方式进行组件开发  
    a. 支持多种模板语法，支持组合式 api 开发，易于上手。  
    b. 入口文件，打包配置及组件注册方式进行统一，基本不需要配置  
    c. 定义组件 ts 声明模板，方便直接进行扩展。
2. 较完善的开发环境，eslint、typescript、prettier，vscode 等配置,统一开发风格。
3. 支持 jest 对组件进行单元测试 [Vue Test Utils 文档](https://vue-test-utils.vuejs.org/zh/)

## 三、模板文件目录说明

> 注意：开发，生产环境构建入口文件不建议更改

```js
| -- examples
    | -- index.ts 本地开发调试入口 // 不建议更改
    | -- index.html  本地开发调试html模板 // 不建议更改
| -- node_modules 项目依赖
| -- src
    | -- components
        | -- xxx.vue 一些组件
    | -- types ts声明
    | -- index.ts 组件库打包构建入口文件  // 不建议更改
    | -- index.vue 入口组件，可以自定义
    | -- package.json 打包后的组件库库对应的package.json //首次发布需要确认和修改的内容见下方详细说明
| -- tests
    | -- 组件单元测试，暂未支持
| -- .eslintrc
| -- .gitignore
| -- .prettierrc
| -- laoriy.config.js 构建自定义配置，见下方说明 // 约定好的配置方式
| -- jest.config.js jest单元测试配置
| -- package.json 项目本地开发对应的package.json配置
| -- tsconfig.json ts配置

```

## 四、开发流程及须知

> 1、启动命令

```
"dev": "laoriy-cli-service dev",  // 本地开发服务
"serve": "npm run dev",
```

> 2、组件模板中使用的 img 标签不支持引用本地图片文件。推荐使用 cdn 图片资源、css 背景图（可使用本地文件），svg 图标，字体图标等方式。

```js
// nonsupport
<template>
    <img src="./assets/images/laoriy.png"/>
</template>
// support ---> cdn/svg/iconfont
<template>
    <img src="https://laoriy.cdn/assets/laoriy.png"/>
    <svg viewBox="0 0 16 16">
        <rect x="0.5" y="0.5" width="15" height="15" rx="4" />
        <polyline points="4 8 6.66666667 12 12 4" />
    </svg>
    <i class="iconfont iconcalendar"></i>
</template>
// support ---> css --> cdn
.laoriy {
    background: url('https://laoriy.cdn/assets/laoriy.png');
}
// support ---> css --> local file
.laoriy {
    background: url('./laoriy.png');
}
```

> 3、需要自己编写组件的 ts 声明文件，UIComponent 声明了 install 方法(不建议修改)，如：

```js
// src/types/index.d.ts
import { UIComponent } from './component';

/** Component */
export declare class AComponent extends UIComponent {
    /** text */
    text: string;
}

export default AComponent;
```

> 4、vue 组件支持使用组合式 api 开发

```js
// src/index.vue
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
    name: 'vue-template-component',
});
```

> 5、vue 组件支持以下几种语法定义模板

-   template 模板：

    ```js
    <template>
        <div>
            <div>msgInData：{{ msgInData }}</div>
            <div>msgInSetup：{{ msgInSetup }}</div>
        </div>
    </template>
    <script lang="ts">
    import { defineComponent, ref } from '@vue/composition-api';
    export default defineComponent({
        data() {
            return {
                msgInData: 'this is msg define in data option',
            };
        },
        setup() {
            const msgInSetup = ref('this is a msg define in setup option');
            return {
                msgInSetup,
            };
        },
    });
    </script>
    ```

-   jsx 语法：
    ```jsx
    <script lang="tsx">
    import { defineComponent, ref } from '@vue/composition-api';
    export default defineComponent({
        data() {
            return {
                msgInData: 'this is msg define in data option',
            };
        },
        setup() {
            const msgInSetup = ref('this is a msg define in setup option');
            return {
                msgInSetup,
            };
        },
        render() {
            return (
                <div>
                    <div>msgInData：{this.msgInData}</div>
                    <div>msgInSetup：{this.msgInSetup}</div>
                </div>
            );
        },
    });
    </script>
    ```
-   h 函数：
    ```jsx
    <script lang="ts">
    import { defineComponent, ref, h } from '@vue/composition-api';

        export default defineComponent({
            data() {
                return {
                    msgInData: 'this is msg define in data option',
                };
            },
            setup() {
                const msgInSetup = ref('this is a msg define in setup option');
                return {
                    msgInSetup,
                };
            },
            render() {
                return h('div', {}, [
                    h('div', `msgInData：${this.msgInData}`),
                    h('div', `msgInSetup：${this.msgInSetup}`),
                ]);
            },
        });
        </script>
        ```

    > 6、默认取入口组件的 name 作为注册组件名，建议确保组件的 name 选项和最终期望要注册的组件名一致

```js
// src/index.ts
import Component from './index.vue'; // 引入组件
Component.install = function install(v: typeof Vue) {
    v.component(Component.name, Component); // 组件注册
};
// src/index.vue
export default defineComponent({
    name: 'template-vue-component', // name选项
});
// usage in project
import TemplateComponent from 'template-vue-component';
Vue.use(TemplateComponent);

<template>
    <template-vue-component></template-vue-component>
</template>;
```

## 五、配置项

> laoriy.config.js（[更多配置](https://github.com/laoriy/laor-cli/tree/master/cli-service#laoriyconfigjs%E9%85%8D%E7%BD%AE%E9%A1%B9)）

-   打包扩展配置项，会在 build 的时候 merge 到内置的默认配置中，使用方式和 webpack 配置一致。
-   该模板默认已配置 externals 选项的`vue` 和 `@vue/composition-api`。

    ```js
    // laoriy.config.js：
    module.exports = {
        externals: {
            vue: {
                root: 'Vue',
                commonjs: 'vue',
                commonjs2: 'vue',
                amd: 'vue',
            },
            '@vue/composition-api': {
                root: 'VueCompositionAPI',
                commonjs: '@vue/composition-api',
                commonjs2: '@vue/composition-api',
                amd: '@vue/composition-api',
            },
        },
    };
    ```

## 六、构建发布

> 1、构建命令说明：

```json
"build:dev": "laoriy-cli-service build:dev",  // 打包生成非压缩文件
"build:prod": "laoriy-cli-service build:prod"  // 打包生成压缩文件
"build:src": "laoriy-cli-service build:src"   // copy src目录源文件
"build": "laoriy-cli-service build",   // 发包打包方式，实际是各个打包命令的集合
```

> 2、构建发布流程及注意事项：

-   构建发布前需要修改和确认的内容

    1. 每次发布,首次发布前请修改 src/README.md 有关组件的使用说明文档，升级记录；
    2. 每次发布前修改 src/package.json 的`version`字段；
    3. 首次发布确认 src/package.json 的`name`字段，选择使用合适的 npm 包名。
    4. 首次发布确认 src/package.json 的`main`字段，指定组件库入口文件，格式为 dist/xxx.js；
    5. 首次发布确认 src/package.json 的`description`字段的描述和组件功能相符；
    6. 首次发布确认 src/package.json 的`keywords`字段和组件名有相应的关联关系。

-   若插件有依赖的第三方插件以及一些必须的依赖包，需在 src/package.json 内指定对应的`peerDependencies`、`dependencies`；默认配置如下：

    ```json
    // package.json的默认peerDependencies和dependencies配置
    {
        "peerDependencies": {
            "vue": ">=2.6.11",
            "vue-template-compiler": ">=2.6.11",
            "@vue/composition-api": ">=1.4.0"
        },
        "dependencies": {
            "vue": "^2.6.11",
            "@vue/composition-api": "^1.4.0"
        }
    }
    ```

-   构建发布（请确认已登录 npm 私服）
    ```
    npm run build
    cd dist
    npm publish
    ```

## 七、问题

-   1、本地开发直接引用 src 目录下的 vue 组件没有问题。如果有组件使用了组合式 api 的组件`setup`选项，暂不支持直接引用打包后的 js 文件（待排查问题）。

```js
// recommended
import AComponent from '../src/index';
// has some problems
import AComponent from '../dist/dist/template-vue-component.js';
import '../dist/dist/styles/index';
```

## 八、测试

> 1、测试命令(默认已开启 coverage 覆盖率统计)

```json
"test": "jest",  //单元测试
```

## 九、Future

-   更丰富的打包配置
