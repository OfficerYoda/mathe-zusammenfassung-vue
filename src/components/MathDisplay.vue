<template>
  <div class="math-display" v-html="processedLatex"></div>
</template>

<script lang="ts">
import {defineComponent, watch, ref, nextTick, getCurrentInstance} from 'vue';

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
  setup(props, { slots }) {
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
        window.MathJax.typesetPromise([instance.proxy.$el]);
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
  color: var(--color-text-primary);
}

/* MathJax rendert standardmäßig SVGs, die ihre eigene Farbe haben. */
/* Du könntest hier die Farbe der SVGs anpassen, falls nötig (komplexer). */
</style>