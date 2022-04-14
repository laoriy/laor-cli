<template>
    <div class="template-vue-component">
        <HelloLaoriy :text="text" />
    </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import HelloLaoriy from './components/HelloLaoriy.vue';
import { abcd } from './types/cc';

export default defineComponent({
    name: 'template-vue-component',
    props: {
        text: {
            type: String,
            default: 'hello laoriy',
        },
    },
    components: { HelloLaoriy },
    created() {
        const abdd: abcd = { c: '123' };
        console.log(abdd);
    },
});
</script>
