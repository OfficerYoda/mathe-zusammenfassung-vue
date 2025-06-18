<template>
  <div id="app-container">
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
          <div class="image-background">
            <img src="/Graph_Wendestelle.png" alt="Graph der Funktionen"
                 style="max-width: 100%; ">
          </div>
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
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import ContentSection from './components/ContentSection.vue';
import InfoBox from './components/InfoBox.vue';
import MathDisplay from './components/MathDisplay.vue';

export default defineComponent({
  name: 'App',
  components: {
    ContentSection,
    InfoBox,
    MathDisplay,
  },
});
</script>

<style>

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #0f0f0f;
  color: #e0e0e0;
  line-height: 1.6;
}

#app-container {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 2rem;
}

.subsection-title {
  color: #ffffff;
  font-size: 1.6rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #333;
}

.image-background {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2a2a2a;
  border-radius: 0.75rem;
  padding: 0.75rem;
}

p {
  margin-bottom: 1rem;
}

ul, ol {
  padding-left: 1.5rem;
  margin: 0;
}

.two-column-layout, .two-column-layout-image {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;
  margin-top: 0;
}

.two-column-layout-image .column-item:first-child {
  flex: 0 1 55%;
}

.two-column-layout-image .column-item:last-child {
  flex: 0 1 40%;
}

.column-item {
  flex: 1 1 45%;
  min-width: 280px;
}

.column-item ul {
  padding-left: 1.5rem;
  list-style-type: none;
}

.column-item ul li {
  margin-bottom: 0.7rem;
}
</style>