import { shallowMount } from '@vue/test-utils';
import Component from '../src/index.vue';
import HelloLaoriy from '../src/components/HelloLaoriy.vue';

describe('index.vue', () => {
    it('renders hello laor and check text props option', () => {
        const text = 'hello laor';

        const wrapper = shallowMount(Component, {
            propsData: { text },
        });
        const helloLaoriy = wrapper.findComponent(HelloLaoriy); // => 通过组件实例找到 HelloLaoriy 组件

        expect(helloLaoriy.exists()).toBe(true);
        expect(helloLaoriy.props().text).toBe(text);
    });
});
