<script setup lang="ts">

import ContentSection from "../components/ContentSection.vue";
import MathDisplay from "../components/MathDisplay.vue";
import InfoBox from "../components/InfoBox.vue";
import Subsection from "../components/Subsection.vue";
import ChapterTitle from "../components/ChapterTitle.vue";
import TwoColumnLayout from "../components/TwoColumnLayout.vue";
</script>

<template>
  <ChapterTitle title="Analysis"/>

  <ContentSection title="Krümmung">
    <Subsection title="Definition"/>
    <InfoBox type="green" v-mathjax>
      <p>Ist die Funktion $f$ streng monoton...</p>
      <ul>
        <li>...steigend, so beschreibt der Graph von $f$ eine Linkskurve.</li>
        <li>...fallend, so beschreibt der Graph von $f$ eine Rechtskurve.</li>
      </ul>
    </InfoBox>

    <Subsection title="Satz"/>
    <InfoBox type="green" v-mathjax>
      <p>Ist die Funktion $f$ auf $I$ zweimal differenzierbar, so gilt:<br></p>
      <ol type="I">
        <li>$f''(x) > 0$ für alle $x \in I \implies$ der Graph von $f$ ist linksgekrümmt.</li>
        <li>$f''(x) < 0$ für alle $x \in I \implies$ der Graph von $f$ ist rechtsgekrümmt.</li>
      </ol>
    </InfoBox>

    <Subsection title="Beispiel"/>
    <TwoColumnLayout image-layout>
      <template #left>
        <MathDisplay>
          \begin{align}
          f''(-0.5) &= 0 \\
          f''(-1) &< 0 \\
          f''(0) &> 0
          \end{align}
        </MathDisplay>

        <p v-mathjax>
          $f''$ hat bei $x = -0,5$ ihre einzige Nullstelle.
          Links von der Nullstelle ist $f'' < 0$ und Rechts davon ist $f'' > 0$. <br>
          $f$ ist demnach links von $0,5$ rechtsgekrümmt und rechts von $0,5$ linksgekrümmt.
        </p>
      </template>
      <template #right>
        <img src="/Graph_Wendestelle.png" alt="Graph der Funktionen">
      </template>
    </TwoColumnLayout>
  </ContentSection>

  <ContentSection title="Ganzrationale Funktionen">
    <Subsection title="Definition"/>
    <InfoBox type="green" v-mathjax>
      <p>Eine ganzrationale Funktion $f$ vom Grad $n$ hat die Form:</p>
      <MathDisplay latex="f(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x + a_0"/>
      <p>mit $a_n \neq 0$.</p>
    </InfoBox>

    <TwoColumnLayout>
      <template #left>
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
      <template #right>
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
    </TwoColumnLayout>
  </ContentSection>
</template>

<style scoped>

</style>
