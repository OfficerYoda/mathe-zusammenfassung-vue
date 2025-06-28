<script setup lang="ts">

import InfoBox from "../components/InfoBox.vue";
import MultiColumnLayout from "../components/MultiColumnLayout.vue";
import MathDisplay from "../components/MathDisplay.vue";
import Subsection from "../components/Subsection.vue";
import ContentSection from "../components/ContentSection.vue";
</script>

<template>

  <ContentSection title="Ganzrationale Funktionen">
    <Subsection title="Definition"/>
    <InfoBox type="green" v-mathjax>
      <p>Eine ganzrationale Funktion $f$ vom Grad $n$ hat die Form:</p>
      <MathDisplay latex="f(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x + a_0"/>
      <p>mit $a_n \neq 0$.</p>
    </InfoBox>

    <MultiColumnLayout :columns="2">
      <template #col-1>
        <Subsection title="Beispiel"/>
        <MathDisplay>
          \begin{align}
          f(x) &= x^2 - 4x + 3 \\
          g(x) &= 4x^3 - 3x^2 + x + 1 \\
          h(x) &= 6x^9 - 4x^2 \\
          i(x) &= 5 \\
          j(x) &= 8x^4 - 2x^2
          \end{align}
        </MathDisplay>
      </template>
      <template #col-2>
        <Subsection title="Nichtbeispiel"/>
        <MathDisplay>
          \begin{align}
          f(x) &= \sqrt{x} \\
          g(x) &= e^x \\
          h(x) &= \sin(x) \\
          i(x) &= \frac{x^2}{x - 1}
          \end{align}
        </MathDisplay>
      </template>
    </MultiColumnLayout>
  </ContentSection>
</template>

<style scoped>

</style>