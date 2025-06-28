<script setup lang="ts">

import InfoBox from "../components/InfoBox.vue";
import MultiColumnLayout from "../components/MultiColumnLayout.vue";
import MathDisplay from "../components/MathDisplay.vue";
import Subsection from "../components/Subsection.vue";
import ContentSection from "../components/ContentSection.vue";
</script>

<template>
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
    <MultiColumnLayout :columns="2" image-layout>
      <template #col-1>
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
      <template #col-2>
        <img src="/Graph_Wendestelle.png" alt="Graph der Funktionen">
      </template>
    </MultiColumnLayout>
  </ContentSection>
</template>

<style scoped>

</style>