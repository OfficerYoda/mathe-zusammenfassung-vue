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
</template>

<style scoped>

</style>