<script lang="ts" setup>

import InfoBox from "../components/InfoBox.vue";
import MultiColumnLayout from "../components/MultiColumnLayout.vue";
import MathDisplay from "../components/MathDisplay.vue";
import Subsection from "../components/Subsection.vue";
import ContentSection from "../components/ContentSection.vue";
import { behaviorInTheInfinite } from '../data/matrixTableContents';
import MatrixTable from "../components/MatrixTable.vue";
import ClickableImage from "../components/ClickableImage.vue";
</script>

<template>
  <ContentSection title="Ganzrationale Funktionen">
    <Subsection title="Definition">
      <InfoBox color="green">
        <p v-mathjax>Eine ganzrationale Funktion $f$ vom Grad $n$ hat die Form:</p>
        <MathDisplay>f(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x + a_0</MathDisplay>
        <p v-mathjax>mit $a_n \neq 0$.</p>
      </InfoBox>
    </Subsection>
    <MultiColumnLayout :columns=2>
      <template #col-1>
        <Subsection title="Beispiele">
          <MathDisplay>
            \begin{align}
            f(x) &= x^2 - 4x + 3 \\
            g(x) &= 4x^3 - 3x^2 + x + 1 \\
            h(x) &= 6x^9 - 4x^2 \\
            i(x) &= 5 \\
            j(x) &= 8x^4 - 2x^2
            \end{align}
          </MathDisplay>
        </Subsection>
      </template>
      <template #col-2>
        <Subsection title="Nichtbeispiel">
          <MathDisplay>
            \begin{align}
            f(x) &= \sqrt{x} \\
            g(x) &= e^x \\
            h(x) &= \sin(x) \\
            i(x) &= \frac{x^2}{x - 1}
            \end{align}
          </MathDisplay>
        </Subsection>
      </template>
    </MultiColumnLayout>
  </ContentSection>

  <ContentSection title="Definitions- und Wertemenge">
    <MultiColumnLayout :columns=2>
      <template #col-1>
        <InfoBox color="green">
          <Subsection title="Definitionsmenge">
            <p v-mathjax>
              Die Definitionsmenge $D_f$ einer Funktion $f$ enthält alle Werte von $x$, für die $f(x)$
              definiert ist.
            </p>
          </Subsection>
        </InfoBox>
      </template>
      <template #col-2>
        <InfoBox color="green">
          <Subsection title="Wertemenge">
            <p v-mathjax>Die Wertemenge $W_f$ einer Funktion $f$ enthält alle Werte, die $f(x)$ mit $x \in
              D_f$ annehmen
              kann.</p>
          </Subsection>
        </InfoBox>
      </template>
    </MultiColumnLayout>
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
    <InfoBox color="green">
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
    <InfoBox color="green">
      <MathDisplay>
        u(v(x)) = u \circ v
      </MathDisplay>
      <p v-mathjax>
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
    <InfoBox color="green">
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
    <InfoBox color="green">
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
      <InfoBox color="green">
        <p v-mathjax>
          Gegeben ist eine Funktion $f$ auf dem Intervall $I$.<br>
          $f$ heißt...
        </p>
        <ul v-mathjax>
          <li>
            ...<strong>streng monoton wachsend</strong> auf $I$, wenn für alle $x_1, x_2 \in I$ gilt:
            <MathDisplay>
              x_1 < x_2 \quad\Rightarrow\quad f(x_1) < f(x_2) </MathDisplay>
          </li>
          <li>
            ...<strong>streng monoton fallend</strong> auf $I$, wenn für alle $x_1, x_2 \in I$ gilt:
            <math-display>
              x_1 < x_2 \quad\Rightarrow\quad f(x_1)> f(x_2)
            </math-display>
          </li>
        </ul>
      </InfoBox>
      <Subsection title="Satz">
        <InfoBox color="green">
          <p v-mathjax>Ist die Funktion $f$ auf $I$ differenzierbar, so gilt:</p>
          <ul v-mathjax>
            <li>
              $f'(x) > 0$ für alle $x \in I \quad\Rightarrow\quad f$ ist
              <strong>streng monoton wachsend</strong> auf $I$.
            </li>
            <li>
              $f'(x) < 0$ für alle $x \in I \quad\Rightarrow\quad f$ ist <strong>streng monoton fallend</strong> auf
                $I$.
            </li>
          </ul>
          <p v-mathjax>
            Gilt nur $f(x_1)\leq f(x_2)$ bzw. $f(x_1) ≥ f(x_2)$, so nennt man $f$ monoton wachsend bzw.
            fallend.
          </p>
        </InfoBox>
      </Subsection>
      <InfoBox color="yellow">
        <p v-mathjax>
          Der Monotoniesatz kann irreführende Ergebnisse liefern. Zum Beispiel ist $f(x) = x^3$ streng monoton
          wachsend,
          obwohl $f'(0) = 0$ ist. Der Monotoniesatz liefert allerdings weder streng monoton wachsend noch
          fallend.
        </p>
      </InfoBox>
    </Subsection>
  </ContentSection>

  <ContentSection title="Krümmung">
    <Subsection title="Definition">
      <InfoBox color="green">
        <p v-mathjax>Ist die Funktion $f$ auf dem Intervall $I$ streng monoton...</p>
        <ul v-mathjax>
          <li>...steigend, so beschreibt der Graph von $f$ auf $I$ eine <strong>Links</strong>kurve.</li>
          <li>...fallend, so beschreibt der Graph von $f$ auf $I$ eine <strong>Rechts</strong>kurve.</li>
        </ul>
      </InfoBox>
    </Subsection>
    <Subsection title="Satz">
      <InfoBox color="green">
        <p v-mathjax>Ist die Funktion $f$ auf $i$ zweimal differenzierbar, so gilt:</p>
        <ul v-mathjax>
          <li>
            $f''(x) > 0$ für alle $x \in I\quad\Rightarrow\quad $der Graph von $f$ ist
            <strong>links</strong>gekrümmt.
          </li>
          <li>
            $f''(x) < 0$ für alle $x \in I\quad\Rightarrow\quad $der Graph von $f$ ist <strong>rechts</strong>gekrümmt.
          </li>
        </ul>
      </InfoBox>
    </Subsection>
    <InfoBox color="blue">
      <p v-mathjax>
        Ob eine Funktion $f$ auf $I$ linksgekrümmt ist oder eine Linkskurve beschreibt, ist das gleiche.
      </p>
    </InfoBox>
    <Subsection title="Beispiel">
      <MultiColumnLayout :columns=2 :image-width=70 image-layout>
        <template #col-1>
          <MathDisplay>
            \begin{align*}
            f''(-0{,}5) &= 0 \\
            f''(-1) &< 0 \\ f''(0) &> 0
              \end{align*}
          </MathDisplay>
          <p v-mathjax>
            $f''$ hat bei $x = -0,5$ ihre einzige Nullstelle.<br>
            Links von der Nullstelle ist $f'' < 0$ und Rechts davon ist $f''>0$.<br>
              $f$ ist demnach links von $0{,}5$ rechtsgekrümmt und rechts von $0{,}5$ linksgekrümmt.
          </p>
        </template>
        <template #col-2>
          <ClickableImage alt="Graph_Wendestelle.png" src="/images/Graph_Wendestelle.png" />
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>

  <ContentSection title="Extremstellen">
    <Subsection title="Definition">
      <InfoBox color="green">
        <p v-mathjax>
          Ist $f$ eine auf dem Inteval $I$ zweimal differenzierbare Funktion, so muss für eine
          <strong>innere Extremstelle</strong> $x_0 \in I$ von $f$ gelten:
        </p>
        <Subsection title="notwendige Bedingung">
          <MathDisplay>f'(x_0) = 0</MathDisplay>
        </Subsection>
        <Subsection title="hinreichend Bedingung">
          <ul v-mathjax>
            <li>
              $x_0$ ist ein <strong>Maximum</strong>, wenn $f''(x_0) < 0$ ist <strong>oder</strong> wenn $f'$ bei $x_0$
                das Vorzeichen von + nach - wechselt.
            </li>
            <li>
              $x_0$ ist ein <strong>Minimum</strong>, wenn $f''(x_0) > 0$ ist
              <strong>oder</strong> wenn $f'$ bei $x_0$ das Vorzeichen von - nach + wechselt.
            </li>
          </ul>
        </Subsection>
      </InfoBox>
      <InfoBox color="yellow">
        <p v-mathjax>
          Ist $f''(x_0) = 0$, so muss man über das Vorzeichen von $f'$ argumentieren.<br>
          Nur wenn die notwendige <strong>und</strong> die hinreichende Bedingung erfüllt sind, ist $x_0$ eine
          Extremstelle.
        </p>
      </InfoBox>
      <InfoBox color="red">
        <p>
          Wenn eine Funktion nur auf einem bestimmten Intervall definiert ist, muss man zusätzlich die Ränder
          des
          Integrals auf <strong>äußere Extremstellen</strong> untersuchen.
        </p>
      </InfoBox>
    </Subsection>
    <info-box color="blue">
      🚦🔄
    </info-box>
    <Subsection title="Beispiele">
      <MultiColumnLayout :columns=2 :image-width=80 image-layout>
        <template #col-1>
          <MathDisplay>
            \begin{array}{r}
            f'(-1) = 0 \quad\Rightarrow\quad\\
            f'(0) = 0 \quad\Rightarrow\quad
            \end{array}
            \begin{array}{r}
            f''(-1) < 0 \quad\Rightarrow\quad\\ f''(0)> 0 \quad\Rightarrow\quad
              \end{array}
              \begin{array}{c}
              \textsf{Maximum}\\
              \textsf{Minimum}
              \end{array}
          </MathDisplay>
          <MathDisplay>
            \begin{array}{c}
            g(x) = x^4 \quad
            g'(x) = 4x^3 \quad
            g''(x) = 12x^2\\
            \begin{align*}
            \\g'(x) &= 0 \ \ \Rightarrow \ \
            x = 0\\
            g''(0) &= 0 \\\\
            \textsf{Vorzeichen }& \textsf{überprüfen:} \\
            g'(-1) &= -4 \\
            g'(1) &= 4 \\
            \Rightarrow
            \textsf{- zu +: }&\textsf{Minimum}
            \end{align*}
            \end{array}
          </MathDisplay>
        </template>
        <template #col-2>
          <ClickableImage alt="Graph_Extremstellen.png" src="/images/Graph_Extremstellen.png" />
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>

  <ContentSection title="Wendestellen">
    <Subsection title="Definition">
      <InfoBox color="green">
        <p v-mathjax>
          Ist $f$ eine auf dem Intervall $I$ dreimal differenzierbare Funktion, so ist $x_0 \in I$ eine
          <strong>Wendestelle</strong>
          von $f$ falls gilt:

          $f''(x_0) = 0$ und $f''(x)$ hat an der Stelle $x_0$ einen Vorzeichenwechsel
        </p>
        <MathDisplay>
          f''(x_0)=0
          \quad\textsf{und}\quad
          f'''(x_0) \neq 0
        </MathDisplay>
        <p style="text-align: center;"><strong>oder</strong></p>
        <MathDisplay>
          f''(x_0)=0
          \quad\textsf{und}\quad
          f''(x_0) \textsf{ hat an der Stelle } x_0 \textsf{ einen Vorzeichenwechsel}
        </MathDisplay>
      </InfoBox>
      <InfoBox color="yellow">
        <p v-mathjax>
          Ähnlich wie bei den Extremstellen muss man den Vorzeichenwechsel nur überprüfen, wenn $f'''(x_0) =
          0$ ist.
        </p>
      </InfoBox>
    </Subsection>
    <Subsection title="Beispiele">
      <MultiColumnLayout :columns=2 :image-width=70 image-layout>
        <template #col-1>
          <p v-mathjax>$f'''$ ist eine Konstante und außerhalb des sichtbaren Bereichs der Grafik.</p>
          <MathDisplay>
            \begin{align*}
            f''(-0{,}5) &= 0 \\
            f'''(-0{,}5) &\neq 0 \\
            \Rightarrow
            \textsf{Wendestelle } & \textsf{bei } x = 0{,}5
            \end{align*}
          </MathDisplay>
          <MathDisplay>
            \begin{align*}
            h(x) = x^4 \qquad
            h'(x) = 4x^3 \\
            h''(x) = 12x^2 \quad
            h'''(x) = 24x\\
            \end{align*}
          </MathDisplay>
          <MathDisplay>
            \begin{align*}
            h''(x) &= 0 \ \ \Rightarrow \ \
            x = 0\\
            h'''(0) &= 0 \\\\
            \textsf{Vorzeichen }& \textsf{überprüfen:} \\
            h''(-1) &= 12 \\
            h''(1) &= 12 \\
            \Rightarrow
            \textsf{+ zu +: }&
            \textsf{kein Wendepunkt}
            \end{align*}
          </MathDisplay>
        </template>
        <template #col-2>
          <ClickableImage alt="Graph_Wendestelle.png" src="/images/Graph_Wendestelle.png" />
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>

  <ContentSection title="Tangenten- und Normalengleichung">
    <InfoBox color="green">
      <Subsection title="Tangentengleichung">
        <p v-mathjax>für die Tangente $t$ and der Stelle $u$ des Funktionsgraphen von $f$ gilt:</p>
        <MathDisplay>
          t: y = f'(u) \cdot (x-u) + f(u)
        </MathDisplay>
      </Subsection>
    </InfoBox>
    <InfoBox color="green">
      <Subsection title="Normalengleichung">
        <p v-mathjax>für die Normale $n$ and der Stelle $u$ des Funktionsgraphen von $f$ gilt:</p>
        <MathDisplay>
          n: y = -\frac{1}{f'(u)} \cdot (x-u) + f(u)
        </MathDisplay>
      </Subsection>
    </InfoBox>
    <InfoBox color="blue">
      <p v-mathjax>
        Als kleine Erinnerung, die allgemeine Geradengleichung ist:
      </p>
      <MathDisplay>
        y = m \cdot x + c
      </MathDisplay>
      <p v-mathjax>
        $m$: Steigung<br>
        $c$: y-Achsenabschnitt
      </p>
    </InfoBox>
    <Subsection title="Beispiel">
      <MultiColumnLayout :columns=2 image-layout>
        <template #col-1>
          <MathDisplay>
            \begin{array}{}
            f(x) = x^2 \quad f'(x) = 2x \\
            u=-1
            \end{array}
          </MathDisplay>
          <MathDisplay>
            \begin{align*}
            f(u)&=f(-1) = 1\\
            f'(u)&=f'(-1) = -2\\
            \end{align*}
          </MathDisplay>
          <MathDisplay>
            \begin{align*}
            \\
            t: y &= f'(u) \cdot (x-u) + f(u)\\
            &= -2 \cdot (x-(-1))+1\\
            &=-2x-1
            \end{align*}
          </MathDisplay>
          <MathDisplay>
            \begin{align*}
            \\
            n: y &= -\frac{1}{f'(u)} \cdot (x-u) + f(u)\\
            &= -\frac{1}{-2} \cdot (x+1)+1\\
            &=\frac12x+\frac32
            \end{align*}
          </MathDisplay>
        </template>
        <template #col-2>
          <ClickableImage alt="Graph_Tangente+Normale.png" src="/images/Graph_Tangente+Normale.png" />
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>

  <ContentSection title="Berührpunkte von Funktionsgraphen">
    <Subsection title="Definition">
      <InfoBox color="green">
        <p v-mathjax>
          Die Graphen der Funktionen $f$ und $g$ berühren sich ad der Stelle $u$, wenn gilt:
        </p>
        <MathDisplay>
          f(u) = g(u) \quad \textsf{und} \quad f'(u) = g'(u)
        </MathDisplay>
      </InfoBox>
    </Subsection>
    <Subsection title="Beispiel">
      <MultiColumnLayout :columns=2 :image-width=70 image-layout>
        <template #col-1>
          <MultiColumnLayout :columns=2>
            <template #col-1>
              <MathDisplay>
                \begin{align*}
                f(x) &= x^3-3x \\
                f'(x) &= 3x^2-3
                \end{align*}
              </MathDisplay>
            </template>
            <template #col-2>
              <MathDisplay>
                \begin{align*}
                g(x) &= x^2 - 2x -1 \\
                g'(x) &= 2x - 2
                \end{align*}
              </MathDisplay>
            </template>
          </MultiColumnLayout>
          <MathDisplay>
            \begin{array}{c}
            f(x) = g(x) \\
            \Rightarrow x_1 = 1 \quad x_2 = -1
            \end{array}
          </MathDisplay>
          <MathDisplay>
            \begin{array}{c}
            \\
            x_1: \\
            f(1) = -2 = g(1) = -2
            \ \checkmark \\
            f'(1) = 0 = g'(1) = 0
            \ \checkmark \\
            \Rightarrow \textsf{Die Graphen von } f \textsf{ und } g \textsf{ berühren sich bei } x = 1
            \end{array}
          </MathDisplay>
          <MathDisplay>
            \begin{array}{c}
            x_2: \\
            f(-1) = 2 = g(-1) = 2
            \ \checkmark \\
            f'(-1) = 0 = g'(-1) = -4
            \ \times \\
            \Rightarrow \textsf{Die Graphen von } f \textsf{ und } g \textsf{ schneiden sich bei } x = -1
            \end{array}
          </MathDisplay>
        </template>
        <template #col-2>
          <ClickableImage alt="Graph_Berührpunkte.png" src="/images/Graph_Berührpunkte.png" />
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>

  <ContentSection title="Extremwertprobleme">
    <Subsection title="Beispiel">
      <MultiColumnLayout :columns=2 image-layout>
        <template #col-1>
          <p v-mathjax>
            Eine Sportstadion mit einer Laufbahn von 400m Länge soll so angelegt werden, dass die Fläche $A$
            für das
            Fußballfeld möglichst groß wird.
          </p>
        </template>
        <template #col-2>
          <ClickableImage alt="Diagram_Stadion.png" src="/images/Diagram_Stadion.png" />
        </template>
      </MultiColumnLayout>
      <p>1. Aufstellen eines Terms der möglichst groß/klein werden soll</p>
      <MathDisplay>\text{Fläche Fußballfeld:}</MathDisplay>
      <MathDisplay> A = x \cdot2y</MathDisplay>
      <p>2. Formulieren von Nebenbedingungen</p>
      <MathDisplay>\text{Länge Laufbahn:}</MathDisplay>
      <MathDisplay>
        \begin{align}
        2x+2\pi y &= 400
        \qquad\quad |-2\pi y \quad |:2
        \\
        x &= 200 - \pi y
        \end{align}
      </MathDisplay>
      <p>3. Aufstellen der Zielfunktion und Angeben ihrer Definitionsmenge</p>
      <MathDisplay>
        \begin{align*}
        A(y) &= (200 - \pi y) \cdot 2y
        = 400y - 2\pi y^2
        \\
        D_A &= [0; 200] \\
        &\text{für } y \notin D_A \text{ ist die Fläche negativ}
        \end{align*}
      </MathDisplay>
      <p>4. Untersuchen der Zielfunktion nach Maxima/Minima unter Betrachtung der Randextrema</p>
      <MathDisplay>
        \begin{align*}
        A(0) &= A(200) = 0 \\
        \\
        A'(x) &= \frac{-4}{\pi}x + \frac{400}{\pi} \\
        A'(x) &= 0 \\
        0 &= \frac{-4}{\pi}x + \frac{400}{\pi}
        \quad |\cdot \frac{\pi}4 \\
        0 &= -x + 100 \qquad |+x \\
        x &= 100
        \end{align*}
      </MathDisplay>
      <MathDisplay>
        \Rightarrow
        y \approx 31{,8}m \quad
        A \approx 6366m^2
      </MathDisplay>
    </Subsection>
  </ContentSection>

  <ContentSection title="Eulersche Zahl und natürlicher Logarithmus">
    <InfoBox color="green">
      <p v-mathjax>
        Die eulersche Zahl $e \thickapprox 2{,}72$ ist die Zahl für die gilt:
      </p>
      <MathDisplay>
        f(x) = e^x \qquad f'(x) = e^x \\
      </MathDisplay>
    </InfoBox>
    <InfoBox color="green">
      <p v-mathjax>
        Der natürliche Logarithmus $\ln$ ist der Logarithmus zur Basis $e$. Für den $\ln$ gilt:
      </p>
      <MathDisplay>
        \begin{array}{l}
        e^x = a \\
        x = \ln(a)
        \end{array}
        \qquad \textsf{und} \qquad
        \begin{align}
        f(x) &= \ln(x) \\
        f'(x) &= \frac1x
        \end{align}
      </MathDisplay>
    </InfoBox>
  </ContentSection>

  <ContentSection title="Rechenregeln Potenzen und Logarithmen">
    <InfoBox color="green">
      <MultiColumnLayout :columns=2>
        <template #col-1>
          <MathDisplay>
            \begin{align}
            x^a \cdot x^b &= x^{a+b} \\
            \frac{x^a}{x^b} &= x^{a-b} \\
            x^{a^b} &= x^{a \cdot b}
            \end{align}
          </MathDisplay>
        </template>
        <template #col-2>
          <MathDisplay>
            \begin{align}
            \ln(a \cdot b) &= \ln(a) + \ln(b) \\
            \ln(\frac ab) &= \ln(a) - \ln(b) \\
            \ln(a^b) &= b \cdot \ln(a)
            \end{align}
          </MathDisplay>
        </template>
      </MultiColumnLayout>
      <p v-mathjax>
        Die Logarithmusgesetze gelten für alle Logarithmusfunktionen, nicht nur für den natürlichen Logarithmus.
      </p>
    </InfoBox>
    <Subsection title="Beispiele">
      <MultiColumnLayout :columns=2>
        <template #col-1>
          <MathDisplay>
            \begin{align*}
            \ln(\frac1e) &= \ln(1)-\ln(e) = -1
            \\ \\
            \ln(e^4 \cdot e^2)
            &= \ln(e^4) + \ln(e^2) = 6\\
            &= \ln(e^6) = 6
            \end{align*}
          </MathDisplay>
        </template>
        <template #col-2>
          <MathDisplay>
            \begin{align*}
            \frac{8^{16}}{8^{6}} &= 8^6
            \\ \\
            e^{-2 \cdot \ln(4)}
            &= (e^{\ln(4)})^{-2} &= 4^{-2} &= \frac1{16} \\
            &= e^{\ln(4^{-2})} &= 4^{-2} &= \frac1{16}
            \end{align*}
          </MathDisplay>
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>

  <ContentSection title="Verhalten von Exponentialfunktionen im Unendlichen">
    <InfoBox color="green">
      <p v-mathjax>
        Bei Funktionen der Form $f(x) = x^n \cdot e^{a\cdot x} \ (a \neq 0)$ bestimmt $e^{a \cdot x}$ das
        Verhalten für
        $x \rightarrow \pm \infty$. Der Faktor $x^n$ bestimmt das Vorzeichen.
      </p>
    </InfoBox>
    <Subsection title="Beispiele">
      <MatrixTable :matrix-data="behaviorInTheInfinite" />
    </Subsection>
  </ContentSection>

  <ContentSection title="Symmetrie von Funktionsgraphen">
    <InfoBox color="green">
      <p v-mathjax>
        Der Graph von $f$ ist <strong>achsensymmetrisch zur y-Achse</strong>, wenn für alle $x \in D_f : f(-x) =
        f(x)$
      </p>
      <p v-mathjax>
        Der Graph von $f$ ist <strong>punksymmetrisch um Ursprung</strong>, wenn für alle $x \in D_f : f(-x) =
        -f(x)$
      </p>
    </InfoBox>
    <Subsection title="Beispiele">
      <MultiColumnLayout :columns=2 :image-width=85 image-layout>
        <template #col-1>
          <MathDisplay>
            \begin{align*}
            f(x) &= e^{x^2} - 2 \\
            f(-x) &= e^{(-x)^2} - 2 \\
            &= e^{x^2} - 2 \\
            &= f(x) \\
            \Rightarrow
            \textsf{Der Graph von } &f
            \textsf{ ist achsensymmetrisch zur y-Achse}
            \end{align*}
          </MathDisplay>
          <MathDisplay>
            \begin{align*}
            g(x) &=
            \frac15 x \cdot e^{x^2} \\
            g(-x) &=
            \frac15 (-x) \cdot e^{(-x)^2} \\
            &= -\frac15 x \cdot e^{x^2} \\
            &= -g(x) \\
            \Rightarrow
            \textsf{Der Graph von } &f
            \textsf{ ist punktsymmetrisch zum Ursprung}
            \end{align*}
          </MathDisplay>
          <MathDisplay>
            \begin{align*}
            h(x) &= -x^2 \cdot e^x + 1 \\
            h(-x) &= -(-x)^2 \cdot e^{-x} + 1 \\
            &= -x^2 \cdot e^{-x} + 1\\
            \Rightarrow
            \textsf{keine Sy}
            &\textsf{mmetrie erkennbar}
            \end{align*}
          </MathDisplay>
        </template>
        <template #col-2>
          <ClickableImage alt="Graph_Symmetrie.png" src="/images/Graph_Symmetrie.png" />
        </template>
      </MultiColumnLayout>
    </Subsection>
    <InfoBox color="yellow">
      <p v-mathjax>
        Diese Methode funktioniert nur, um die Symmetrie zur y-Achse oder zum Ursprung zu bestimmen.
      </p>
      <p v-mathjax>
        $f(x) = (x-2)^2$ hat eine Achsensymmetrie zu $x=2$, diese kann aber durch diese Methode nicht bestimmt
        werden.
        Es wäre also keine Symmetrie bei $f$ erkennbar.
      </p>
    </InfoBox>
    <InfoBox color="blue">
      <p v-mathjax>
        Es ist eine gute Idee, mit $f(-x)$ zu beginnen und diesen Ausdruck zu vereinfachen. Dadurch kommt man
        oft
        relativ schnell zu einer Lösung.
      </p>
    </InfoBox>
  </ContentSection>

  <ContentSection title="Funktionsschar">
    <InfoBox color="green">
      <p v-mathjax>
        Enthält eine Funktion $f$ neben der Variable $x$ noch einen <strong>Parameter </strong>$k$ (oder a, b, t
        usw.),
        so gehört zu jedem $k$ eine Funktion $f_k$ - Alle Funktionen $f_k$ bilden eine
        <strong>Funktionsschar</strong>.
      </p>
    </InfoBox>
    <Subsection title="Beispiel">
      <MultiColumnLayout :columns=2 :image-width=85 image-layout>
        <template #col-1>
          <MathDisplay>
            \begin{align*}
            f_k(x) = e^x + k \qquad
            f'_k(x) = e^x \\
            \\
            f_0(x) = e^x \qquad f_1(x) = e^x + 1 \quad\textsf{usw.}
            \end{align*}
          </MathDisplay>
          <p v-mathjax>
            <strong>Nullstellen in Abhängigkeit von $k$:</strong>
          </p>
          <MathDisplay>
            \begin{align*}
            f_k(x) &= 0 \\
            0 &= e^x + k \quad|-k \\
            -k &= e^x \qquad \ \ \ |\ln, k < 0 \\ x &=\ln(-k), \quad k < 0 \end{align*} </MathDisplay>
        </template>
        <template #col-2>
          <ClickableImage alt="Graph_Funktionsschar.png" src="/images/Graph_Funktionsschar.png" />
        </template>
      </MultiColumnLayout>
    </Subsection>
  </ContentSection>

  <ContentSection title="Umkehrfunktion">
    <Subsection title="Definition">
      <InfoBox color="green">
        <p v-mathjax>
          Eine Funktion $f$ mit der Definitionsmenge $D_f$ und der Wertemenge $W_f$ heißt
          <strong>umkehrbar</strong>,
          wenn
          es für jedes $y \in W_f$ <strong>genau ein</strong> $x \in D_f$ gibt, mit $f(x) = y$. Bei einer
          umkehrbaren
          Funktion $f$ heißt die Funktion $\bar f$ mit $\bar f(y)=x$ die <strong>Umkehrfunktion</strong> von
          $f$.
        </p>
        <p v-mathjax>
          Es gilt:
        </p>
        <MathDisplay>
          \begin{array}{c}
          D_{\bar f} = W_f \\
          W_{\bar f} = D_f
          \end{array}
          \qquad
          \begin{align*}
          f(\bar f(x)) &= x,
          \textsf{ für alle }
          x \in D_{\bar f}\\
          \bar f(f(x)) &= x,
          \textsf{ für alle }
          x \in D_f
          \end{align*}
        </MathDisplay>
        <p v-mathjax>
          Die Graphen von $f$ und $\bar f$ sind achsensymmetrisch zur ersten Winkelhalbierenden ($y = x$).
        </p>
      </InfoBox>
      <InfoBox color="blue">
        <p v-mathjax>
          Das Wichtige, was man aus dieser Definition mitnehmen sollte, ist: Wenn $f(x) = y$, dann ist $\bar
          f(y) = x$.
          Sowie, dass Definitions- und Wertemenge vertauscht sind.
        </p>
      </InfoBox>
    </Subsection>
    <Subsection title="Satz">
      <InfoBox color="green">
        <p v-mathjax>
          Ist eine Funktion $f$ streng monoton steigend oder fallend, so ist $f$ umkehrbar.
        </p>
      </InfoBox>
    </Subsection>
    <Subsection title="Beispiel">
      <MathDisplay>
        \begin{align*}
        f(x) &= \sqrt{4x-2}+1 \\\\
        y &= f(x) \\
        y &= \sqrt{4x-2}+1
        \qquad{|-1} \quad |^2 \\
        (y-1)^2 &= 4x-2
        \quad \qquad \quad \ \ |+2 \quad |\cdot \frac14 \\
        x &= \frac14(y-1)^2+\frac12 \\
        \\
        \Rightarrow \bar f(x) &= \frac14(x-1)^2+\frac12 \\
        \\
        D_f = W_{\bar f} = [1; \infty[ &
        \quad W_f = D_{\bar f} = [\frac 12; \infty[
        \end{align*}
      </MathDisplay>
      <p v-mathjax>
        Obwohl man bei $\bar f$ jedes $x$ einsetzen könnte, wird $\bar f$ nur auf den Wertebereich von $f$
        definiert.
      </p>
    </Subsection>
  </ContentSection>
</template>

<style scoped></style>
