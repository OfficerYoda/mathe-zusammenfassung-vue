<script setup lang="ts">

import ContentSection from "../components/ContentSection.vue";
import MathDisplay from "../components/MathDisplay.vue";
import ChapterTitle from "../components/ChapterTitle.vue";
import InfoBox from "../components/InfoBox.vue";
import Subsection from "../components/Subsection.vue";
import MultiColumnLayout from "../components/MultiColumnLayout.vue";
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
        (x-5)\cdot(x^2-x+4) = 0
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
      </MathDisplay>
    </Subsection>
  </ContentSection>

  <ContentSection title="(spezielle) kubische Gleichungen">
    <Subsection title="Beispiele">
      <MultiColumnLayout :columns="2">
        <template #col-1>
          <MathDisplay>
            \begin{align}
            x^3+27&=0 \\
            x^3&=-27 \\
            x &= {\color{red}-}\sqrt[3]{27} \\
            x&=-3
            \end{align}
          </MathDisplay>
        </template>
        <template #col-2>
          <MathDisplay>
            \begin{align*}
            4x^3-12x^2-40x&=0\\
            4x\cdot (x^2-3x-10)&=0\\
            \Rightarrow x_1=0 \quad x_2=5 \quad& x_3=-2
            \end{align*}
          </MathDisplay>
        </template>
      </MultiColumnLayout>
    </Subsection>
    <Subsection title="Nicht (analytisch) Lösbar">
      <MultiColumnLayout :columns="1">
        <template #col-1>
          <MathDisplay>
            x^3-7x^2+5=0
          </MathDisplay>
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>

  <ContentSection title="Biquadratische Gleichungen">
    <MultiColumnLayout :columns="2" style="margin-top: -1.5rem">
      <template #col-1>
        <Subsection title="Substitution">
          <MathDisplay>
            \begin{align*}
            x^4-13x^2+36&=0 \\
            \textsf{Substitution: } x^2=z \\
            \Rightarrow z^2-13z+36&=0 \\
            \Rightarrow z_1=9 \quad z_2=4
            \end{align*}
          </MathDisplay>
        </Subsection>
      </template>
      <template #col-2>
        <Subsection title="Rücksubstitution">
          <MultiColumnLayout :columns="2">
            <template #col-1>
              <MathDisplay>
                \begin{align*}
                x^2&=z_1\\
                x^2&=9 \quad |\sqrt{} \\
                \Rightarrow \ &x_1=3\\
                &x_2=-3
                \end{align*}
              </MathDisplay>
            </template>
            <template #col-2>
              <MathDisplay>
                \begin{align*}
                x^2&=z_2\\
                x^2&=4 \quad |\sqrt{} \\
                \Rightarrow \ &x_3=2\\
                &x_4=-2
                \end{align*}
              </MathDisplay>
            </template>
          </MultiColumnLayout>
        </Subsection>
      </template>
    </MultiColumnLayout>
  </ContentSection>

  <ContentSection title="Bruchgleichungen">
    <Subsection title="Beispiele">
      <MultiColumnLayout>
        <template #col-1>
          <MathDisplay>
            \begin{align*}
            \frac{x+5}{x-3}-3&=0 \quad|\cdot(x-3)\\
            5+x-3\cdot(x-3)&=0\\
            &...\\
            x&=7 \ \checkmark
            \end{align*}
          </MathDisplay>
        </template>
        <template #col-2>
          <MathDisplay>
            \begin{align*}
            \frac{1}{x^2}++\frac{5}{x}&=0
            \qquad|\cdot x^2\\
            1+5x&=0
            \qquad|-1 \quad|:5\\
            x&=-\frac{1}{5} \ \checkmark
            \end{align*}
          </MathDisplay>
        </template>
      </MultiColumnLayout>
      <InfoBox type="red">
        Probe machen
      </InfoBox>
    </Subsection>
  </ContentSection>

  <ContentSection title="Wurzelgleichungen">
    <Subsection title="Beispiel">
      <MathDisplay>
        \begin{align*}
        \sqrt{3x-5} + 4 &= 2x
        &|-4 \quad |^2\\
        3x-5&=(2x-4)^2 \quad\\
        &...\\
        x_1 = 3 \ \checkmark&\quad x_2 = \frac{7}{4} \ \times
        \end{align*}
      </MathDisplay>
      <InfoBox type="red">
        Probe machen
      </InfoBox>
    </Subsection>
  </ContentSection>

  <ContentSection title="Exponentialgleichungen">
    <Subsection title="Allgemein">
      <MultiColumnLayout :columns="3">
        <template #col-1>
          <MathDisplay>
            \begin{align*}
            a^x&=c \\
            x&=\log_a(c) \\
            \end{align*}
          </MathDisplay>
        </template>
        <template #col-2>
          <MathDisplay>
            b^0 = 1, \quad b \neq 0
          </MathDisplay>
        </template>
        <template #col-3>
          <MathDisplay>
            \log_e(x) = \ln(x)
          </MathDisplay>
        </template>
      </MultiColumnLayout>
    </Subsection>
    <Subsection title="Beispiele">
      <MultiColumnLayout :columns="3">
        <template #col-1>
          <MathDisplay>
            \begin{align*}
            2^x&=64 \\
            x&=\log_2(64) \\
            x&=6
            \end{align*}
          </MathDisplay>
        </template>
        <template #col-2>
          <MathDisplay>
            \begin{align*}
            4^x&=42 \\
            x&=\log_4(42) \\
            x&\approx2.696
            \end{align*}
          </MathDisplay>
        </template>
        <template #col-3>
          <MathDisplay>
            \begin{align*}
            e^{2x} - 3e^x &= 0 \\
            (e^x)^2 - 3e^x &= 0 \\
            e^x \cdot (e^x-3) &= 0 \\
            \Rightarrow x &= \ln(3)
            \end{align*}
          </MathDisplay>
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>

  <ContentSection title="Betragsgleichungen">
    <Subsection title="Beispiele">
      <MathDisplay>
        |2x-5| = 3
        \quad\Rightarrow\quad
        \begin{cases}
        2x-5 = 3 \\
        -(2x-5) = 3
        \end{cases}
        \quad\Rightarrow\quad
        \begin{cases}
        x_1 = 4 \\
        x_2 = 1
        \end{cases}
      </MathDisplay>
      <MathDisplay>
        |x-4| = 2x-11
        \quad\Rightarrow\quad
        \begin{cases}
        x-4 = 2x-11 \\
        x-4 = -(2x-11)
        \end{cases}
        \quad\Rightarrow\quad
        \begin{cases}
        x_1 = 7 \ \checkmark \\
        x_2 = 5 \ \times
        \end{cases}
      </MathDisplay>
    </Subsection>
    <InfoBox type="red">
      <p>
        Bei Betragsgleichungen mit einer Variablen außerhalb der Betragsstriche: Probe machen.
      </p>
    </InfoBox>
  </ContentSection>

  <ContentSection title="Ungleichungen">
    <InfoBox type="green">
      Lässt sich wie eine normale Gleichung lösen, mit der Ausnahme, dass beim Multiplizieren/Dividieren mit einer
      negativen Zahl oder bei Logarithmen mit einer Basis kleiner als 1 das Ungleichheitszeichen umgedreht wird.
    </InfoBox>
    <Subsection title="Beispiele">
      <MultiColumnLayout>
        <template #col-1>
          <MathDisplay>
            \begin{align*}
            2x + 5 &> 1 \quad | -5 \\
            2x &> -4 \quad |:2 \\
            x &> -2
            \end{align*}
          </MathDisplay>
        </template>
        <template #col-2>
          <MathDisplay>
            \begin{align*}
            4 - x &\leq 8 \quad |-4 \\
            -x &\leq 4 \quad
            |{\color{red} \cdot (-1)} \\
            x & \; {\color{red}\geq} \ {-4}
            \end{align*}
          </MathDisplay>
        </template>
      </MultiColumnLayout>
      <MultiColumnLayout>
        <template #col-1>
          <MathDisplay>
            \begin{alignat*} {3}
            1-\left(\frac56\right)^x & > 0{,}9 \quad &|&-1 \\
            -\left(\frac56\right)^x & > -0{,}1
            \quad &|&\cdot (-1) \\
            \left(\frac56\right)^x & < 0{,}1
            \quad &| &\log_{\color{red}\frac56} \\
            x \ &\;{\color{red}>} \ \log_{\frac56}(0{,}1) \\
            x &\approx 12{,}63
            \\
            \frac56 < 1, \text{des}&\text{halb '<' umdrehen}
            \end{alignat*}
          </MathDisplay>
        </template>
        <template #col-2>
          <MathDisplay>
            \begin{align*}
            x^2+x-6 &< 0 \\
            \Rightarrow x^2+x-6 &= 0 \\
            \Rightarrow x_1 = -3 \quad &x_2 = 2 \\
            \\
            \text{Parabel nach oben}&\text{ geöffnet } \\
            \text{mit Nullstellen -3}&\text{ und 2:} \\
            \Rightarrow L =  {]}{-3}; &2[
            \end{align*}
          </MathDisplay>
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>
  
  <ContentSection title="Trigonometrische Gleichungen">
    <p>TODO</p>
  </ContentSection>
</template>

<style scoped>

</style>