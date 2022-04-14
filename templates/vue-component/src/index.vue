<template>
    <div class="template-vue-component">
        <HelloLaoriy :text="text" />
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api';
import HelloLaoriy from './components/HelloLaoriy.vue';

export default defineComponent({
    name: 'template-vue-component',
    props: {
        text: {
            type: String,
            default: 'hello laoriy',
        },
    },
    components: { HelloLaoriy },
});
</script>
