<script lang="ts" setup>

import ContentSection from "../components/ContentSection.vue";
import InfoBox from "../components/InfoBox.vue";
import MathDisplay from "../components/MathDisplay.vue";
import Subsection from "../components/Subsection.vue";
import MultiColumnLayout from "../components/MultiColumnLayout.vue";
import MatrixTable from "../components/MatrixTable.vue";
import { exampleMeasurements, sigmaRules } from "../data/matrixTableContents.ts";
import ClickableImage from "../components/ClickableImage.vue";
</script>

<template>
  <ContentSection title="Normalverteilung und Gaußsche Glockenfunktion">
    <InfoBox color="green">
      <p v-mathjax>
        Eine Zufallsgröße $X$ heißt <strong>normalverteilt </strong>mit den Parametern $\mu$ (Erwartungswert)
        und
        $\sigma$ (Standardabweichung), wenn für zwei reellen Zahlen $a$ und $b$ mit $a \leq b$ gilt:
        Die Wahrscheinlichkeit, dass $X$ Werte zwischen $a$ und $b$ annimmt, ist
      </p>
      <MathDisplay>
        P(a \leq X \leq b) = \int_a^b
        \varphi_{\mu;\sigma}(x) \, dx
      </MathDisplay>
      <p v-mathjax>
        Man sagt kurz: $X$ ist $N_{\mu;\sigma}$-verteilt. Die Normalverteilung ist eine
        <strong>stetige </strong>Verteilung.
      </p>
    </InfoBox>
    <InfoBox color="green">
      <p v-mathjax>
        Man nennt die Funktion $\varphi_{\mu;\sigma}$ mit
      </p>
      <MathDisplay>
        \varphi_{\mu;\sigma}(x) =
        \frac{1}{\sigma\sqrt{2\pi}} \cdot
        e^{-\frac{(x-\mu)^2}{2\sigma^2}}
      </MathDisplay>
      <p v-mathjax>
        <strong>Gaußsche Glockenfunktion </strong>und ihren Graphen <strong>Gaußsche Glockenkurve</strong>.
      </p>
    </InfoBox>
    <InfoBox color="green">
      <p v-mathjax>
        $\varphi_{\mu;\sigma}$ hat die Extremstelle $\mu$ und die Wendestellen $\mu \pm \sigma$ und ist die
        <strong>Dichtefunktion</strong>
        einer $N_{\mu;\sigma}$-verteilten Zufallsgröße.
      </p>
    </InfoBox>
    <InfoBox color="green">
      <p v-mathjax>
        Es gilt
      </p>
      <MathDisplay>
        \begin{array}{c}
        P(X = a) = \int_a^a \varphi_{\mu;\sigma}(x) \, dx
        =0
        \\ \textsf{somit gilt auch} \\
        P(X \leq a) = P(X < a) \end{array} </MathDisplay>
          <p v-mathjax>
            Zusätzlich gilt:
          </p>
          <MathDisplay>
            \varphi_{\mu;\sigma}(x) > 0
            \text{ für alle } x \in \mathbb{R}
          </MathDisplay>
          <MathDisplay>
            \int_{-\infty}^{+\infty}
            \varphi_{\mu;\sigma}(x) \, dx = 1
          </MathDisplay>
    </InfoBox>
    <Subsection title="Beispiele">
      <MathDisplay>
        \begin{array}{c}
        \mu = 100 \quad \sigma = 15 \\
        \begin{align*}
        P(70 \leq X < 110) &=\int_{70}^{110} \varphi_{100;15} \, dx \approx 0{,}725 \\ P(X < 85) &=\int_{-\infty}^{85}
          \varphi_{100;15} \, dx \approx 0{,}159 \end{align*} \end{array} </MathDisplay>
    </Subsection>
  </ContentSection>

  <ContentSection title="μ und σ aus gegebenen Daten ermitteln">
    <InfoBox color="green">
      <p v-mathjax>
        Gemessene Daten können häufig durch eine Normalverteilung mit Mittelwert $\mu$ und Standardabweichung
        $\sigma$
        modelliert werden.
        Für die Messwerte $x_1, x_2, …, x_n$ gilt:
      </p>
      <MathDisplay>
        \begin{array}{c}
        \mu &= \frac1n \sum_{i=1}^{n}x_i
        \end{array}
        \qquad
        \begin{align*}
        \sigma &= \sqrt{
        \frac1n
        \sum_{i=1}^{n}(x_i-\mu)^2
        }
        \end{align*}
      </MathDisplay>
    </InfoBox>
    <Subsection title="Beispiel">
      <p v-mathjax>
        Punkte in der nächsten Mathe Klausur:
      </p>
      <MatrixTable :matrix-data="exampleMeasurements" />
      <MathDisplay>
        \begin{align*}
        \mu &= \frac16\cdot(11+13+...+12) \\
        &=\frac16\cdot77 \\
        &\approx 12{,}83
        \end{align*}
      </MathDisplay>
      <MathDisplay>
        \begin{align*}
        \sigma &= \sqrt{\frac16 \cdot
        ((11-12{,}83)^2+(13-12{,}83)^2...+(12-12{,}83)^2)
        } \\
        &= \sqrt{\frac16\cdot10{,}83} \\
        &\approx 1{,}34
        \end{align*}
      </MathDisplay>
      <p v-mathjax>
        ⇒ Die Messwerte können durch eine $N_{12,83;1,34}$-verteilte Zufallsgröße modelliert werden.
      </p>
    </Subsection>
  </ContentSection>

  <ContentSection title="Umkehrung der Normalverteilung">
    <InfoBox color="green">
      <p v-mathjax>
        Für eine $N_{\mu;\sigma}$-verteilte Zufallsgröße $X$ lässt sich für eine vorgegebene Wahrscheinlichkeit
        $p$
        durch den WTR-Befehl <strong>invNormal</strong> die Zahl $g$ mit $P(X \leq g) = p$ bestimmen.
      </p>
    </InfoBox>
    <Subsection title="Beispiel">
      <MultiColumnLayout :columns=2 image-layout>
        <template #col-1>
          <MathDisplay>
            \begin{array}{c}
            \mu = 250 \quad
            \sigma = 20 \quad
            p = 0.7 \\
            \text{invNormal } \Rightarrow
            g \approx 260{,}49
            \end{array}
          </MathDisplay>
        </template>
        <template #col-2>
          <ClickableImage alt="Graph_InvNormal.png" src="/images/Graph_InvNormal.png" />
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>

  <ContentSection title="Normalverteilung zur Annäherung einer diskreten Zufallsgröße">
    <InfoBox color="green">
      <p v-mathjax>
        Nutzt man die Normalverteilung um die Wahrscheinlichkeit für eine diskrete Zufallsgröße näherungsweise
        zu
        bestimmen, muss man die Integralgrenzen entsprechend anpassen.
      </p>
    </InfoBox>
    <Subsection title="Beispiel">
      <MultiColumnLayout :columns=2 image-layout>
        <template #col-1>
          <p v-mathjax>
            Notenpunkte $0..15$ sind $N_{10;2}$-verteilt.
          </p>
          <MathDisplay>
            \underbrace{P(7 \leq X \leq 13)}
            _{\underbrace{
            7,8,9,10,11,12,13}
            _{7 \textsf{ diskrete Werte}}}
            = \underbrace{
            \int_{6{,}5}^{13{,}5}}
            _{\text{Interval-}\atop
            \text{länge } 7}
            \varphi_{10;2}(x) \, dx
            \approx 0{,}92
          </MathDisplay>
        </template>
        <template #col-2>
          <ClickableImage alt="Graph_Diskrete-Näherung.png" src="/images/Graph_Diskrete-Näherung.png" />
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>

  <ContentSection title="Sigma-Regeln">
    <MultiColumnLayout :columns=2 image-layout>
      <template #col-1>
        <InfoBox color="green">
          <p v-mathjax>
            Für eine $N_{\mu;\sigma}$-verteilte Zufallsgröße gelten folgende Sigma-Regeln
          </p>
          <MatrixTable :matrix-data="sigmaRules" />
          <p v-mathjax>
            Diese Regeln gelten auch näherungsweise für eine Binomialverteilung.
          </p>
        </InfoBox>
      </template>
      <template #col-2>
        <ClickableImage alt="Graph_Sigma-Rules.png" src="/images/Graph_Sigma-Rules.png" />
      </template>
    </MultiColumnLayout>
  </ContentSection>
</template>

<style scoped></style>
