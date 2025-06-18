<template>
  <div id="app-container">
    <ContentSection title="Krümmung">
      <h3 class="subsection-title">Definition</h3>
      <InfoBox v-mathjax>
        <ul>
          <li>Ist die Funktion $f$ streng monoton...</li>
          <li>a)...steigend, so beschreibt der Graph von $f$ eine Linkskurve.</li>
          <li>b)...fallend, so beschreibt der Graph von $f$ eine Rechtskurve.</li>
        </ul>
      </InfoBox>

      <h3 class="subsection-title">Satz</h3>
      <InfoBox>
        <p v-mathjax>Ist die Funktion $f$ auf $I$ zweimal differenzierbar, so gilt:</p>
        <ul v-mathjax>
          <li>a) $f''(x) > 0$ für alle $x \in I \implies$ der Graph von $f$ ist linksgekrümmt.</li>
          <li>b) $f''(x) < 0$ für alle $x \in I \implies$ der Graph von $f$ ist rechtsgekrümmt.</li>
        </ul>
      </InfoBox>

      <h3 class="subsection-title">Beispiel</h3>
      <div class="example-layout">
        <div class="example-text">
          <MathDisplay latex="f''(-0.5) = 0"/>
          <MathDisplay latex="f''(-1) < 0"/>
          <MathDisplay latex="f''(0) > 0"/>

          <p v-mathjax>
            $f''$ hat bei $x = -0,5$ ihre einzige Nullstelle. <br>
            Links von der Nullstelle ist $f'' < 0$ und Rechts davon ist $f'' > 0$. <br>
            $f$ ist demnach links von 0,5 rechtsgekrümmt und rechts von 0,5 linksgekrümmt.
          </p>
        </div>
        <div class="example-image-placeholder">
          <img src="/Graph_Wendestelle.png" alt="Graph der Funktionen"
               style="max-width: 100%; height: auto; border-radius: 4px;">
          <p class="image-caption" v-mathjax>Graph von $f(x)$, $f'(x)$ und $f''(x)$</p>
        </div>
      </div>
    </ContentSection>
    <ContentSection title="Andere Überschrift">
      <InfoBox v-mathjax>
        Was passiert wenn ich hier schreibe mit $a^2 + b^2 = c^2$
      </InfoBox>
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
/* Allgemeine Stile für den Body und Root-Container */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #0f0f0f; /* Sehr dunkler Hintergrund */
  color: #e0e0e0;
  line-height: 1.6;
}

#app-container {
  max-width: 1000px; /* Maximale Breite des Inhalts */
  margin: 2rem auto; /* Zentriert den Container */
  padding: 0 2rem; /* Polsterung an den Seiten */
}

/* Stile für Unterüberschriften wie 'Definition', 'Satz', 'Beispiel' */
.subsection-title {
  color: #ffffff;
  font-size: 1.6rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #333;
}

/* Layout für das Beispiel mit Text und Bild nebeneinander */
.example-layout {
  display: flex;
  flex-wrap: wrap; /* Erlaubt Umbruch auf kleineren Bildschirmen */
  gap: 2rem;
  align-items: flex-start; /* Oben ausgerichtet */
}

.example-text {
  flex: 1 1 55%; /* Nimmt 55% Breite ein, kann aber schrumpfen/wachsen */
  min-width: 300px; /* Minimale Breite, bevor es umbricht */
}

.example-image-placeholder {
  flex: 1 1 40%; /* Nimmt 40% Breite ein, kann aber schrumpfen/wachsen */
  display: flex;
  flex-direction: column;
  align-items: center; /* Bild und Bildunterschrift zentrieren */
  min-width: 250px; /* Minimale Breite, bevor es umbricht */
  background-color: #2a2a2a; /* Leichter Hintergrund für den Platzhalter */
  border-radius: 4px;
  padding: 1rem;
}

.image-caption {
  font-size: 0.9rem;
  color: #b0b0b0;
  margin-top: 0.5rem;
  text-align: center;
}

/* Allgemeine Textformatierung */
p {
  margin-bottom: 1rem;
}

ul {
  padding-left: 1.5rem;
}
</style>