import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import App from './App.vue';
import AComponent from '../src/index';

Vue.use(AComponent);
Vue.use(VueCompositionAPI);
new Vue({
    render: (h) => h(App),
}).$mount('#app');
