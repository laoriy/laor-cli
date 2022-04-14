import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import AComponent from './index.vue'; // 引入组件
import './assets/styles/index'; // 引入css文件,如果有，就必须在这里引入

type Comp = typeof AComponent & { install: (v: typeof Vue) => void };

const Component = AComponent as Comp;
// Plugin install
Component.install = function install(v: typeof Vue) {
    v.use(VueCompositionAPI); // vue内部会判断有没有注册过
    v.component(Component.name, Component);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Component);
}

export default Component;
