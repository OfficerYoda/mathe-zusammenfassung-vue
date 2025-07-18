<script setup lang="ts">
import ContentSection from "../components/ContentSection.vue";
import InfoBox from "../components/InfoBox.vue";
import MultiColumnLayout from "../components/MultiColumnLayout.vue";
import Subsection from "../components/Subsection.vue";
import MathDisplay from "../components/MathDisplay.vue";
import MatrixTable from "../components/MatrixTable.vue";
import {determineStemFunctions, stemFunctions1, stemFunctions2} from "../data/matrixTableContents.ts";
</script>

<template>
  <ContentSection title="Das Integral">
    <InfoBox color="green">
      <p v-mathjax>
        Sei $f$ eine auf dem Intervall $[a; b]$ integrierbare Funktion.
      </p>
      <p v-mathjax>
        Das <strong>Integral </strong>$\int_a^b f(x) \,dx$ von $f$ über Intervall $[a; b]$ ist der <strong>orientierte
        Flächeninhalt</strong> den der Graphen von $f$ mit der x-Achse zwischen der <strong>unteren Grenze</strong> $a$
        und der <strong>oberen Grenze </strong>$b$ einschließt.
      </p>
    </InfoBox>
    <Subsection title="Beispiel ">
      <MultiColumnLayout :columns=2 image-layout>
        <template #col-1>
          <MathDisplay>
            \int_0^5 f(x) \,dx
          </MathDisplay>
          <p v-mathjax>
            Der rote Bereich stellt den negativen orientierten Flächeninhalt dar, während die grüne Fläche den positiven
            orientierten Flächeninhalt repräsentiert.
          </p>
        </template>
        <template #col-2>
          <img src="/images/Graph_Integral-Perfect.png" alt="Graph_Integral">
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>

  <ContentSection title="Rechenregeln Integrale ">
    <InfoBox color="green">
      <MathDisplay>
        \int_a^b f(x) \,dx +
        \int_b^c f(x) \,dx =
        \int_a^c f(x) \,dx
        \tag{1}
      </MathDisplay>
      <MathDisplay>
        \int_a^b c\cdot f(x) \,dx=
        c\cdot \int_a^b f(x) \,dx
        \tag{2}
      </MathDisplay>
      <MathDisplay>
        \int_a^b f(x) + g(x) \,dx =
        \int_a^b f(x) \,dx +
        \int_a^b g(x) \,dx
        \tag{3}
      </MathDisplay>
      <MathDisplay>
        \int_b^a f(x) \,dx =
        -\int_a^b f(x) \,dx
        \tag{4}
      </MathDisplay>
    </InfoBox>
    <p v-mathjax>

    </p>
  </ContentSection>

  <ContentSection title="Stammfunktion">
    <InfoBox color="green">
      <p v-mathjax>
        Für eine Funktion $f$ mit einer Stammfunktion $F$ gilt: $f = F'$
      </p>
      <p v-mathjax>
        Zwei Stammfunktionen $F$ und $G$ unterscheiden sich nur um eine Konstante $c$: $F(X) = G(X) +c, \, c\in
        \mathbb{R}$
      </p>
    </InfoBox>
    <Subsection title="Beispiele">
      <MathDisplay>
        f(x) = 3x^2
        \qquad\Rightarrow\qquad
        F(X) = x^3
        \quad\textsf{ oder }\quad
        G(X) = x^3 + 2
      </MathDisplay>
      <MatrixTable :matrix-data="stemFunctions1"/>
      <MatrixTable :matrix-data="stemFunctions2"/>
    </Subsection>
    <InfoBox color="yellow">
      <p>
        Stammfunktionen können durch Ableiten überprüft werden.
      </p>
    </InfoBox>
  </ContentSection>

  <ContentSection title="Stammfunktionen bestimmen">
    <InfoBox color="green">
      <p v-mathjax>
        Sind $G$ und $H$ Stammfunktionen von $g$ und $h$, so gilt:
      </p>
      <MatrixTable :matrix-data="determineStemFunctions"/>
    </InfoBox>
    <Subsection title="Beispiel">
      <MathDisplay>
        \begin{align*}
        f(x) &= 4\cdot\sin(3x+2)+4x \\
        F(X) &= -\frac43\cos(3x+2)+2x^2
        \end{align*}
      </MathDisplay>
    </Subsection>
  </ContentSection>

  <ContentSection title="Hauptsatz der Differenzial- und Integralrechnung">
    <InfoBox color="green">
      <p v-mathjax>
        Sei $f$ eine im Intervall $[a; b]$ integrierbare und $F$ eine Stammfunktion von $f$.
        Dann gilt:
      </p>
      <MathDisplay>
        \int_a^b f(x) \,dx = F(b) - F(a)
      </MathDisplay>
    </InfoBox>
    <Subsection title="Beispiele">
      <MathDisplay>
        \int_0^2 x^2 \,dx =
        \left[\frac13 x^3 \right]_0^2 =
        \frac13\cdot2^3 - \frac13\cdot0^3 = \frac83
      </MathDisplay>
      <MathDisplay>
        \int_2^5 x+2 \,dx =
        \left[\frac12x^2+2x\right]_2^5 =
        \frac12\cdot5^2+2\cdot5 - {\color{red}(}
        \frac12\cdot2^2+2\cdot2
        {\color{red})}
        = 22{,}5-6 = 16,5
      </MathDisplay>
    </Subsection>
  </ContentSection>

  <ContentSection title="Flächen zwischen Graphen">
    <InfoBox color="green">
      <p v-mathjax>
        Gegeben sind zwei differenzierbare und auf dem Intervall $I$ definierte Funktionen $f$ und $g$, sowie zwei
        Zahlen $a, b \in I$.<br>
        Gilt $f(x) \geq g(x)$ für alle $x \in \ ]a; b[$, so bestimmt man den Inhalt $A$ der Fläche
        zwischen den Graphen der beiden Funktionen auf dem Intervall $]a; b[$ mit
      </p>
      <MathDisplay>
        A = \int_a^bf(x)-g(x) \,dx
      </MathDisplay>
      <p v-mathjax>
        Andernfalls betrachtet man die Teilintervalle zwischen den Schnittpunkten von $f$ und $g$ separat.
      </p>
    </InfoBox>
    <Subsection title="Beispiel">
      <MultiColumnLayout :columns=2 image-layout :image-width=80>
        <template #col-1>
          <MathDisplay>
            \begin{align*}
            A=
            &\int_{-2}^0 g(x)-f(x) \,dx \\
            &+\int_0^2 f(x)-g(x) \,dx \\
            =&\ ...
            \end{align*}
          </MathDisplay>
        </template>
        <template #col-2>
          <img src="/images/Graph_Fläche-zw-Graphen.png" alt="Graph_Fläche-zw-Graphen">
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>

  <ContentSection title="Rotationskörper">
    <InfoBox color="green">
      <p v-mathjax>
        Gegeben ist ein über dem Intervall $[a; b]$ integrierbare Funktion $f$. Rotiert die Fläche zwischen dem Graphen
        von $f$ und der x-Achse über dem Intervall $[a; b]$ um die x-Achse, so entsteht ein
        <strong>Rotationskörper</strong>. Sein Volumen $V$ berechnet man mit
      </p>
      <MathDisplay>
        V = \pi \int_a^b (f(x))^2 \,dx
      </MathDisplay>
    </InfoBox>
    <Subsection title="Beispiel">
      <MultiColumnLayout :columns=2 image-layout>
        <template #col-1>
          <MathDisplay>
            \begin{align*}
            V &= \pi \int_0^4 (\sqrt x)^2 \,dx
            \\
            &= \pi \int_0^4 x \,dx
            \\
            &= \pi \left[\frac12 x^2\right]_0^4
            \\
            &=\pi(\frac12\cdot 4^2-\frac12\cdot0^2)
            \\
            &=8\pi
            \end{align*}
          </MathDisplay>
        </template>
        <template #col-2>
          <img src="/images/3D_Rotationskörper.png" alt="3D_Rotationskörper">
          <sub>links der Graph, rechts der Rotationskörper</sub>
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>
</template>

<style scoped>

</style>