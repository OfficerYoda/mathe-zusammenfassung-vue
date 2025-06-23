<script setup lang="ts">

import ContentSection from "../components/ContentSection.vue";
import MathDisplay from "../components/MathDisplay.vue";
import ChapterTitle from "../components/ChapterTitle.vue";
import InfoBox from "../components/InfoBox.vue";
import Subsection from "../components/Subsection.vue";
import TwoColumnLayout from "../components/TwoColumnLayout.vue";
</script>

<template>
  <ChapterTitle title="Gleichungen"/>

  <ContentSection title="Gleichungen">
    <InfoBox type="green">
      <p v-mathjax>
        Die Lösungsmenge $L$ einer (Un-)Gleichung enthält alle Werte der Variablen, welche die (Un-)Gleichung erfüllen.
      </p>
    </InfoBox>
    <Subsection title="Beispiele">
      <MathDisplay>
        \begin{align}
        x+4 &= 7
        \quad&\Rightarrow\quad
        L &= \{3\} \\

        x^2 &= 4
        \quad&\Rightarrow\quad
        L &= \{-2; 2\} \\

        x+3 &> 8
        \quad&\Rightarrow\quad
        L &= \ ]5; \infty[ \\

        \sin(x) &= 1
        \quad&\Rightarrow\quad
        L &=
        \{x \in \mathbb R \ | \
        x = \frac12 \pi+k \cdot 2\pi,\
        k \in \mathbb Z
        \}
        \end{align}
      </MathDisplay>
    </Subsection>
  </ContentSection>

  <ContentSection title="Satz vom Nullprodukt">
    <InfoBox type="green">
      <p v-mathjax>
        Ein Produkt ist $0$, wenn mindestens einer der Faktoren $0$ ist.
      </p>
    </InfoBox>
    <Subsection title="Beispiel">
      <MathDisplay>
        \begin{align*}
        (x-5)\cdot(x^2-x+4) &= 0
        \quad\Rightarrow\quad
        \begin{cases}
        x-5=0 \\
        x^2-x+4=0
        \end{cases}
        \quad\Rightarrow\quad
        \begin{cases}
        x_1 = 5 \\
        \text{keine Lösung}
        \end{cases}
        \end{align*}
      </MathDisplay>
    </Subsection>
  </ContentSection>

  <ContentSection title="(spezielle) kubische Gleichungen">
    <Subsection title="Beispiele"></Subsection>
    <TwoColumnLayout>
      <template #left>
        <MathDisplay>
          \begin{align}
          x^3+27&=0 \\
          x^3&=-27 \\
          x &= \color{red}{-}\sqrt[3]{27} \\
          x&=-3
          \end{align}
        </MathDisplay>
        <p v-mathjax>$\color{red} x} + {\color{blue} y$</p>
      </template>
      <template #right>

      </template>
    </TwoColumnLayout>
  </ContentSection>
</template>

<style scoped>

</style>