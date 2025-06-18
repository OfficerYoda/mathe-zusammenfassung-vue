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
      required: true,
    },
  },
  setup(props) {
    const processedLatex = ref('');
    const instance = getCurrentInstance();

    const renderMath = async () => {
      processedLatex.value = `$$${props.latex}$$`;
      await nextTick();
      if (window.MathJax && instance?.proxy) {
        window.MathJax.typesetPromise([instance.proxy.$el]);
      }
    };

    watch(() => props.latex, renderMath, {immediate: true});

    return {processedLatex};
  },
});
</script>

<style scoped>
.math-display {
  text-align: center;
  margin: 0;
  color: #d0d0d0;
}

/* MathJax rendert standardmäßig SVGs, die ihre eigene Farbe haben. */
/* Du könntest hier die Farbe der SVGs anpassen, falls nötig (komplexer). */
</style>