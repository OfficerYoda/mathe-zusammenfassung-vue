<template>
  <div class="math-display" v-html="processedLatex"></div>
</template>

<script lang="ts">
import {defineComponent, watch, ref, nextTick, onMounted} from 'vue';

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

    const renderMath = async () => {
      processedLatex.value = `$$${props.latex}$$`; // Umschließt den LaTeX-String für Display-Modus
      await nextTick(); // Warten, bis das DOM aktualisiert ist
      if (window.MathJax) {
        window.MathJax.typesetPromise([document.querySelector('.math-display')]);
      }
    };

    // Beobachte Änderungen an der Latex-Prop und rendere neu
    watch(() => props.latex, renderMath, {immediate: true});

    return {processedLatex};
  },
});
</script>

<style scoped>
.math-display {
  text-align: center; /* Zentriert die Formeln */
  margin: 1.5rem 0; /* Abstand über und unter der Formel */
  color: #d0d0d0; /* Farbe des Textes, falls MathJax Text rendert */
}

/* MathJax rendert standardmäßig SVGs, die ihre eigene Farbe haben. */
/* Du könntest hier die Farbe der SVGs anpassen, falls nötig (komplexer). */
</style>