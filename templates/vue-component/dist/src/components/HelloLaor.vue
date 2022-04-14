<template>
    <div>
        <div>{{ text }}：{{ welcome }}</div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
    props: {
        text: {
            type: String,
            default: 'test text',
        },
    },
    setup() {
        const welcome = ref('welcome to develop your components');
        return {
            welcome,
        };
    },
});
</script>
