<template>
    <div class="math-display" v-html="processedLatex"></div>
</template>

<script lang="ts">
import {defineComponent, getCurrentInstance, nextTick, ref, watch} from 'vue';

declare global {
    interface Window {
        MathJax: any;
    }
}

export default defineComponent({
    name: 'MathDisplay',
    props: {
        latex: {
            type: String,
            required: false,
        },
    },
    setup(props, {slots}) {
        const processedLatex = ref('');
        const instance = getCurrentInstance();

        const renderMath = async () => {
            if (props.latex !== undefined) {
                processedLatex.value = `$$${props.latex}$$`;
            } else if (slots.default) {
                // Join all slot VNodes as a string
                const slotContent = slots.default().map(vnode => {
                    if (typeof vnode.children === 'string') return vnode.children;
                    return '';
                }).join('');
                processedLatex.value = `$$${slotContent}$$`;
            } else {
                processedLatex.value = '';
            }
            await nextTick();
            if (window.MathJax && instance?.proxy) {
                window.MathJax?.typeset?.([instance.proxy.$el]);
            }
        };

        watch(() => props.latex, renderMath, {immediate: true});
        watch(() => slots.default && slots.default(), renderMath);

        return {processedLatex};
    },
});
</script>

<style scoped>
.math-display {
    text-align: center;
    margin: 0;
    padding: 0.05rem;
    color: var(--color-text-primary);
}
</style>