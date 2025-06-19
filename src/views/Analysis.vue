<script setup lang="ts">

import ContentSection from "../components/ContentSection.vue";
import MathDisplay from "../components/MathDisplay.vue";
import InfoBox from "../components/InfoBox.vue";
</script>

<template>
  <ContentSection title="Krümmung">
    <h3 class="subsection-title">Definition</h3>
    <InfoBox v-mathjax>
      <p>Ist die Funktion $f$ streng monoton...</p>
      <ul>
        <li>...steigend, so beschreibt der Graph von $f$ eine Linkskurve.</li>
        <li>...fallend, so beschreibt der Graph von $f$ eine Rechtskurve.</li>
      </ul>
    </InfoBox>

    <h3 class="subsection-title">Satz</h3>
    <InfoBox v-mathjax>
      <p>Ist die Funktion $f$ auf $I$ zweimal differenzierbar, so gilt:<br></p>
      <ol type="I">
        <li>$f''(x) > 0$ für alle $x \in I \implies$ der Graph von $f$ ist linksgekrümmt.</li>
        <li>$f''(x) < 0$ für alle $x \in I \implies$ der Graph von $f$ ist rechtsgekrümmt.</li>
      </ol>
    </InfoBox>

    <h3 class="subsection-title">Beispiel</h3>
    <div class="two-column-layout-image">
      <div class="column-item">
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
      </div>
      <div class="column-item">
        <img src="/Graph_Wendestelle.png" alt="Graph der Funktionen">
      </div>
    </div>
  </ContentSection>

  <ContentSection title="Ganzrationale Funktionen">
    <h3 class="subsection-title">Definition</h3>
    <InfoBox v-mathjax>
      <p>Eine ganzrationale Funktion $f$ vom Grad $n$ hat die Form:</p>
      <MathDisplay latex="f(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x + a_0"/>
      <p>mit $a_n \neq 0$.</p>
    </InfoBox>

    <div class="two-column-layout">
      <div class="column-item">
        <h3 class="subsection-title">Beispiele</h3>
        <MathDisplay>
          \begin{align}
          f(x) &= x^2 - 4x + 3 \\
          g(x) &= 4x^3 - 3x^2 + x + 1 \\
          h(x) &= 6x^9 - 4x^2 \\
          i(x) &= 5 \\
          j(x) &= 8x^4 - 2x^2
          \end{align}
        </MathDisplay>
      </div>
      <div class="column-item">
        <h3 class="subsection-title">Nichtbeispiele</h3>
        <MathDisplay>
          \begin{align}
          f(x) &= \sqrt{x} \\
          g(x) &= e^x \\
          h(x) &= \sin(x) \\
          i(x) &= \frac{x^2}{x - 1}
          \end{align}
        </MathDisplay>
      </div>
    </div>
  </ContentSection>
</template>

<style scoped>

</style>