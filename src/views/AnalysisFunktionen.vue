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
    <InfoBox type="green">
      <p>Eine ganzrationale Funktion $f$ vom Grad $n$ hat die Form:</p>
      <MathDisplay>f(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x + a_0</MathDisplay>
      <p>mit $a_n \neq 0$.</p>
    </InfoBox>

    <MultiColumnLayout :columns=2>
      <template #col-1>
        <Subsection title="Beispiele"/>
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

  <ContentSection title="Definitions- und Wertemenge">
    <InfoBox type="green">
      <h3>Definitionsmenge</h3>
      <p>Die Definitionsmenge $D_f$ einer Funktion $f$ enthält alle Werte von $x$, für die $f(x)$ definiert ist.</p>
    </InfoBox>
    <InfoBox type="green">
      <h3>Wertemenge</h3>
      <p>Die Wertemenge $W_f$ einer Funktion $f$ enthält alle Werte, die $f(x)$ annehmen kann.</p>
    </InfoBox>
    <Subsection title="Beispiele">
      <MultiColumnLayout :columns=3>
        <template #col-1>
          <MathDisplay>
            \begin{align*}
            f(x) &= x^2 \\
            D_f &= \mathbb{R} \\
            W_f &= [0; \infty[
            \end{align*}
          </MathDisplay>
        </template>
        <template #col-2>
          <MathDisplay>
            \begin{align*}
            g(x) &= \ln(x) \\
            D_g &= \ ]0; \infty[ \\
            W_g &= \mathbb{R}
            \end{align*}
          </MathDisplay>
        </template>
        <template #col-3>
          <MathDisplay>
            \begin{align*}
            h(x) &= \frac1x \\
            D_h &= \mathbb{R} \setminus \{0\} \\
            W_h &= \mathbb{R} \setminus \{0\}
            \end{align*}
          </MathDisplay>
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>

  <ContentSection title="Potenzregel">
    <InfoBox type="green">
      <MathDisplay>
        f(x) = a \cdot x^n
        \quad\Rightarrow\quad
        f'(x) = n \cdot a \cdot x^{n-1}
      </MathDisplay>
    </InfoBox>
    <Subsection title="Beispiele">
      <MultiColumnLayout :columns=3>
        <template #col-1>
          <MathDisplay>
            \begin{align*}
            f(x) &= x^2\\
            f'(x) &= 2x
            \end{align*}
          </MathDisplay>
        </template>
        <template #col-2>
          <MathDisplay>
            \begin{align*}
            g(x) &= 3x^2\\
            g'(x) &= 6x
            \end{align*}
          </MathDisplay>
        </template>
        <template #col-3>
          <MathDisplay>
            \begin{align*}
            h(x) &= \frac1x = x^{-1}\\
            h'(x) &= -\frac1{x^2} = -x^{-2}
            \end{align*}
          </MathDisplay>
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>

  <ContentSection title="Verkettung von Funktionen">
    <InfoBox type="green">
      <MathDisplay>
        u(v(x)) = u \circ v
      </MathDisplay>
      <p>
        Die äußere Funktion $u$ wird mit der inneren Funktion $v$ verkettet.
      </p>
    </InfoBox>
    <Subsection title="Beispiel">
      <MathDisplay>
        u(x) = 1 - x^2
        \quad\quad
        v(x) = 2x + 1
      </MathDisplay>
      <MathDisplay>
        \begin{array}{l}
        u \circ v(x) = 1 - (2x + 1)^2 \\
        v \circ u(x) = 2(1 - x^2) + 1
        \end{array}
      </MathDisplay>
    </Subsection>
  </ContentSection>

  <ContentSection title="Kettenregel">
    <InfoBox type="green">
      <MathDisplay>
        f(x) = u(v(x)) \quad\Rightarrow\quad f’(x) = u’(v(x)) \cdot v’(x)
      </MathDisplay>
    </InfoBox>
    <Subsection title="Beispiel">
      <MathDisplay>
        \begin{array}{l}
        f(x) = (5-3x)^4\\
        f'(x) = -12(5-3x)^3
        \end{array}
        \quad
        \begin{array}{l}
        u(x) = x^4\\
        u'(x) = 4x^3
        \end{array}
        \quad
        \begin{array}{l}
        v(x) = 5-3x\\
        v'(x) = -3
        \end{array}
      </MathDisplay>
    </Subsection>
  </ContentSection>

  <ContentSection title="Produktregel">
    <InfoBox type="green">
      <MathDisplay>
        f = u \cdot v \quad\Rightarrow\quad
        f’ = u' \cdot v + u \cdot v'
      </MathDisplay>
    </InfoBox>
    <Subsection title="Beispiel">
      <MathDisplay>
        \begin{array}{l}
        f(x) = 2x \cdot \sqrt{x^2+1}\\
        f'(x) = 2\sqrt{x^2+1}+\frac{2x^2}{\sqrt{x^2+1}}
        \end{array}
        \qquad
        \begin{array}{l}
        u(x) = 2x\\
        u'(x) = 2
        \end{array}
        \qquad
        \begin{array}{l}
        v(x) = \sqrt{x^2+1}\\
        v'(x) = \frac{x}{\sqrt{x^2+1}}
        \end{array}
      </MathDisplay>
    </Subsection>
  </ContentSection>

  <ContentSection title="Monotonie">
    <Subsection title="Definition">
      <InfoBox type="green">
        <p v-mathjax>
          Gegeben ist eine Funktion $f$ auf dem Intervall $I$.
          <br>
          $f$ heißt...
        </p>
        <ul v-mathjax>
          <li>
            ...<strong>streng monoton wachsend</strong> auf $I$, wenn für alle $x_1, x_2 \in I$ gilt:
            <MathDisplay>h
              x_1 < x_2 \quad\Rightarrow\quad f(x_1) < f(x_2)
            </MathDisplay>
          </li>
          <li>
            ...<strong>streng monoton fallend</strong> auf $I$, wenn für alle $x_1, x_2 \in I$ gilt:
            <math-display>
              x_1 < x_2 \quad\Rightarrow\quad f(x_1) > f(x_2)
            </math-display>
          </li>
        </ul>
      </InfoBox>
      <Subsection title="Satz">
        <InfoBox type="green">
          <p v-mathjax>Ist die Funktion $f$ auf $I$ differenzierbar, so gilt:</p>
          <ul v-mathjax>
            <li>
              $f'(x) > 0$ für alle $x \in I \quad\Rightarrow\quad f$ ist
              <strong>streng monoton wachsend</strong> auf $I$.
            </li>
            <li>
              $f'(x) < 0$ für alle $x \in I \quad\Rightarrow\quad f$ ist
              <strong>streng monoton fallend</strong> auf $I$.
            </li>
          </ul>
          <p v-mathjax>
            Gilt nur $f(x_1)\leq f(x_2)$ bzw. $f(x_1) ≥ f(x_2)$, so nennt man $f$ monoton wachsend bzw. fallend.
          </p>
        </InfoBox>
      </Subsection>
      <InfoBox type="yellow">
        <p v-mathjax>
          Der Monotoniesatz kann irreführende Ergebnisse liefern. Zum Beispiel ist $f(x) = x^3$ streng monoton wachsend,
          obwohl $f'(0) = 0$ ist. Der Monotoniesatz liefert allerdings weder streng monoton wachsend noch fallend.
        </p>
      </InfoBox>
    </Subsection>
  </ContentSection>

  <ContentSection title="Krümmung">
    <Subsection title="Definition">
      <InfoBox type="green">
        <p v-mathjax>Ist die Funktion $f$ auf dem Intervall $I$ streng monoton...</p>
        <ul v-mathjax>
          <li>...steigend, so beschreibt der Graph von $f$ auf $I$ eine <strong>Links</strong>kurve.</li>
          <li>...fallend, so beschreibt der Graph von $f$ auf $I$ eine <strong>Rechts</strong>kurve.</li>
        </ul>
      </InfoBox>
    </Subsection>
    <Subsection title="Satz">
      <InfoBox type="green">
        <p v-mathjax>Ist die Funktion $f$ auf $i$ zweimal differenzierbar, so gilt:</p>
        <ul v-mathjax>
          <li>
            $f''(x) > 0$ für alle $x \in I\quad\Rightarrow\quad $der Graph von $f$ ist <strong>links</strong>gekrümmt.
          </li>
          <li>
            $f''(x) < 0$ für alle $x \in I\quad\Rightarrow\quad $der Graph von $f$ ist <strong>rechts</strong>gekrümmt.
          </li>
        </ul>
      </InfoBox>
    </Subsection>
    <InfoBox type="blue">
      <p v-mathjax>
        Ob eine Funktion $f$ auf $I$ linksgekrümmt ist oder eine Linkskurve beschreibt, ist das gleiche.
      </p>
    </InfoBox>
    <Subsection title="Beispiel">
      <MultiColumnLayout image-layout :image-width=70>
        <template #col-1>
          <MathDisplay>
            \begin{align*}
            f''(-0{,}5) &= 0 \\
            f''(-1) &< 0 \\
            f''(0) &> 0
            \end{align*}
          </MathDisplay>
          <p v-mathjax>
            $f''$ hat bei $x = -0,5$ ihre einzige Nullstelle.<br>
            Links von der Nullstelle ist $f'' < 0$ und Rechts davon ist $f''>0$.<br>
            $f$ ist demnach links von $0{,}5$ rechtsgekrümmt und rechts von $0{,}5$ linksgekrümmt.
          </p>
        </template>
        <template #col-2>
          <img src="../../public/Graph_Wendestelle.png" alt="Graph_Wendestelle.png"/>
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>

</template>

<style scoped>

</style>