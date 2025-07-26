<script lang="ts" setup>

import ContentSection from "../components/ContentSection.vue";
import InfoBox from "../components/InfoBox.vue";
import Subsection from "../components/Subsection.vue";
import MathDisplay from "../components/MathDisplay.vue";
import MultiColumnLayout from "../components/MultiColumnLayout.vue";
import MatrixTable from "../components/MatrixTable.vue";
import {horizontalAsymptotes} from "../data/matrixTableContents.ts";
import ClickableImage from "../components/ClickableImage.vue";
</script>

<template>
    <ContentSection title="Verschieben, Strecken und Spiegeln">
        <InfoBox color="green">
            <p v-mathjax>
                Der Graph der Funktion $g$ mit $g(x) = a \cdot f(x-c) +d,
                \ a, c, d \in \R, a \neq 0$. entsteht aus dem Graphen von $f$ durch:
            </p>
            <ol v-mathjax>
                <li>Verschiebung entlang der x-Achse um $c$</li>
                <li>Streckung entlang der y-Achse um den Faktor $a$</li>
                <li>Verschiebung entlang der y-Achse um $d$</li>
            </ol>
            <InfoBox color="yellow">
                <p v-mathjax>
                    Reihenfolge beachten: „Von innen nach außen denken“: Welche Variablen wirken zuerst auf $x$ ein?
                </p>
            </InfoBox>
        </InfoBox>
        <p v-mathjax>
            Der Graph der Funktion $g$ entsteht aus dem Graphen von $f$…
        </p>
        <ul v-mathjax>
            <li>...für $g(x) = -f(x)$ durch Spiegelung an der x-Achse.</li>
            <li>...für $g(x) = f(-x)$ durch Spiegelung an der y-Achse.</li>
            <li>...für $g(x) = -f(-x)$ durch Spiegelung am Ursprung.</li>
        </ul>
        <Subsection title="Beispiel">
            <MathDisplay>
                \begin{align*}
                f(x) &= x^2 \\
                g(x) &= 2(x-1)^2 - 3
                \end{align*}
            </MathDisplay>
            <p v-mathjax>
                Der Graph von $g$ geht aus dem Graphen von $f$ hervor durch:
            </p>
            <ol v-mathjax>
                <li>Verschiebung um $1$ in x-Richtung</li>
                <li>Streckung um $2$ in y-Richtung</li>
                <li>Verschiebung um $-3$ in y-Richtung</li>
            </ol>
            <p v-mathjax>

            </p>
        </Subsection>
    </ContentSection>

    <ContentSection title="Trigonometrische Funktionen">
        <InfoBox color="green">
            <p v-mathjax>
                Der Graph der Funktion $g$ mit $g(x) = a \cdot \sin(b\cdot(x-c))+d$ mit $a, b, c, d \in \mathbb{R}, a
                \neq 0, b
                >
                0$ geht aus dem Graphen der Funktion $f$ mit $f(x) = \sin(x)$ hervor durch:
            </p>
            <ol v-mathjax>
                <li>Verschiebung um $c$ in x-Richtung</li>
                <li>Stauchung um $b$ in x-Richtung (mit Streckzentrum $(c\ |\ 0)$)</li>
                <li>Streckung um $a$ in y-Richtung</li>
                <li>Verschiebung um $d$ in y-Richtung</li>
            </ol>
            <p v-mathjax>

                Die Funktion $g$ hat die Amplitude $|a|$ und die Periode $\frac{2\pi}b$.
            </p>
        </InfoBox>
        <Subsection title="Beispiel">
            <MathDisplay>
                \begin{align*}
                f(x) &= \sin(x) \\
                g(x) &= 3\cdot\sin(2\cdot(x-1))+4
                \end{align*}
            </MathDisplay>
            <MultiColumnLayout :columns=2 image-layout>
                <template #col-1>
                    <p v-mathjax>
                        Der Graph von $g$ geht aus dem Graphen von $f$ hervor durch:
                    </p>
                    <ol v-mathjax>
                        <li>Verschiebung um $1$ in x-Richtung</li>
                        <li>Stauchung um $2$ in x-Richtung</li>
                        <li>Streckung um $3$ in y-Richtung</li>
                        <li>Verschiebung um $4$ in y-Richtung</li>
                    </ol>
                    <p v-mathjax>
                        Amplitude: $3$<br>
                        Periode: $\frac{2\pi}2 = \pi$
                    </p>
                </template>
                <template #col-2>
                    <ClickableImage alt="Graph_SinCos.png" src="/images/Graph_SinCos.png"/>
                </template>
            </MultiColumnLayout>
        </Subsection>
    </ContentSection>

    <ContentSection title="Nullstellen ganzrationaler Funktionen">
        <InfoBox color="green">
            <Subsection title="Satz 1">
                <p v-mathjax>
                    Sei $f$ eine ganzrationale Funktion vom Grad $n$ und $c$ eine Nullstelle von $f$. Dann gibt es eine
                    ganzrationale Funktion $g$ vom Grad $n-1$ mit:
                </p>
                <MathDisplay>
                    f(x) = \underbrace{(x-c)}_{\textsf{Linearfaktor}}\cdot g(x)
                </MathDisplay>
            </Subsection>
            <Subsection title="Satz 2">
                <p v-mathjax>
                    Eine ganzrationale Funktion vom Grad $n$ hat höchstens $n$ Nullstellen.
                </p>
            </Subsection>
            <Subsection title="Satz 3">
                <p v-mathjax>
                    Eine ganzrationale Funktion $f$, deren Grad ungerade ist, hat mindestens eine Nullstelle
                </p>
            </Subsection>
            <Subsection title="Satz 4 ">
                <p v-mathjax>
                    Gegeben sein eine ganzrationale Funktion $f$ mit $f(x) = (x-a)^k \cdot g(x),
                    \ g(a) \neq 0, k \in \mathbb{N}$.
                    Dann gilt:
                </p>
            </Subsection>
            <Subsection title="Definition ">
                <MathDisplay>
                    f(x) = (x-1) \cdot \underbrace{(x-3)^k}
                    _{\textsf{k-fache}\atop \textsf{Nullstelle}}
                </MathDisplay>
            </Subsection>
        </InfoBox>
        <InfoBox color="yellow">
            <p v-mathjax>
                Nicht jede ganzrationale Funktion lässt sich vollständig in Linearfaktoren zerlegen.
            </p>
            <p v-mathjax>
                Bsp.: $f(x) = x^2 + 1$, da $f$ keine Nullstellen hat.
            </p>
        </InfoBox>
        <Subsection title="Beispiele">
            <MultiColumnLayout :columns=3>
                <template #col-1>
                    <p v-mathjax>
                        $f(x) = (x+2)(x-1)$
                    </p>
                    <p v-mathjax>
                        $f$ hat bei $x = -2$ und $x = 1$ einfache Nullstellen.
                    </p>
                </template>
                <template #col-2>
                    <p v-mathjax>
                        $g(x) = x (x-3)^2$
                    </p>
                    <p v-mathjax>
                        $g$ hat bei $x=0$ eine einfache Nullstelle und bei $x = 3$ eine Extremstelle
                    </p>
                </template>
                <template #col-3>
                    <p v-mathjax>
                        $h(x) = (x+1)^3 (x-1)^2$
                    </p>
                    <p v-mathjax>
                        $h$ hat bei $x = -1$ einen Sattelpunkt und bei $x = 1$ eine Extremstelle.
                    </p>
                </template>
            </MultiColumnLayout>
        </Subsection>
    </ContentSection>

    <ContentSection title="Gebrochenrationale Funktionen, Polstellen und senkrechte Asymptoten">
        <InfoBox color="green">
            <p v-mathjax>
                Eine Funktion $h$ mit ganzrationalen Funktionen $g$ und $h$
            </p>
            <MathDisplay>
                f(x) = \frac{g(x)}{h(x)}
            </MathDisplay>
            <p v-mathjax>
                heißt <strong>gebrochenrationale</strong> Funktion.
            </p>
        </InfoBox>
        <InfoBox color="green">
            <p v-mathjax>
                Wenn $g(x_0) \neq 0$ und $h(x_0) = 0$, dann ist $x_0$ eine <strong>Polstelle</strong> von $f$ und die
                Gerade mit
                der Gleichung $x=x_0$ eine senkrechte Asymptote des Graphen von $f$.
            </p>
        </InfoBox>
        <Subsection title="Beispiele ">
            <p v-mathjax>
                Siehe Beispiel <a href="/analysis#waagerechte-asymptote">Waagerechte Asymptote</a>.
            </p>
        </Subsection>
    </ContentSection>

    <ContentSection title="Waagerechte Asymptote">
        <InfoBox color="green">
            <p v-mathjax>
                Sei $f(x) = \frac {g(x)}{h(x)}$ eine gebrochenrationale Funktion mit $a$ und $b$ als Koeffizienten der
                höchsten
                Potenzen von $g$ und $h$, d.h.: $g(x) = a \cdot …, \ h(x) = b \cdot …$. Dann gilt:
            </p>
            <ol v-mathjax>
                <li>
                    Grad($g$) < Grad($h$): $y = 0$ ist die waagerechte Asymptote der Graphen von $f$
                </li>
                <li>
                    Grad($g$) = Grad($h$): $y = \frac ab$ ist die waagerechte Asymptote der Graphen von $f$
                </li>
                <li>
                    Grad($g$) > Grad($h$): keine waagerechte Asymptote
                </li>
            </ol>
            <p v-mathjax>
                Zählergrad: Grad($g$)<br>
                Nennergrad: Grad($h$)
            </p>
        </InfoBox>
        <Subsection title="Beispiele ">
            <MatrixTable :matrix-data="horizontalAsymptotes"/>
        </Subsection>
    </ContentSection>

    <ContentSection title="Graph eines Funktionsterms">
        <InfoBox color="green">
            <p v-mathjax>
                Beim Zusammenhang zwischen Graph und Funktionsterm können folgende Punkte helfen:
            </p>
            <ol v-mathjax>
                <li>Nullstellen und Vielfachheit</li>
                <li>Senkrechte Asymptoten und Polstellen</li>
                <li>Verhalten für $x \rightarrow \pm\infty$, ggf. waagerechte Asymptoten</li>
                <li>Symmetrie</li>
                <li>Extrem- und Wendepunkte</li>
                <li>Punktprobe</li>
            </ol>
        </InfoBox>
        <Subsection title="Beispiele ">
            <MultiColumnLayout :columns=2 image-layout>
                <template #col-1>
                    <MathDisplay>
                        \begin{align*}
                        f(x) &= x^2 \cdot e^x \\
                        g(x) &= (x-1)^3 \cdot e^x \\
                        h(x) &= x^3 - x \\
                        i(x) &= \frac{x^2}{x^2+1}
                        \end{align*}
                    </MathDisplay>
                    <p v-mathjax>
                        <strong>Zuordnung: </strong><br>
                        $f:B ,\
                        g:C,\
                        h:D, \
                        i:A$
                    </p>
                </template>
                <template #col-2>
                    <ClickableImage alt="Graph_Graphenzuordnung.png" src="/images/Graph_Graphenzuordnung.png"/>
                </template>
            </MultiColumnLayout>
            <p v-mathjax>
                <strong>Argumente:</strong>
            </p>
            <MultiColumnLayout :columns=2>
                <template #col-1>
                    <p v-mathjax>
                        $f:B$
                    </p>
                    <ul v-mathjax>
                        <li>einfache Nullstelle bei $x=0$</li>
                        <li>Verhalten im Unendlichen:</li>
                        <ul>
                            <li>$x \rightarrow +\infty: f \rightarrow +\infty$</li>
                            <li>$x \rightarrow -\infty: f \rightarrow 0$</li>
                        </ul>
                        <li>$f \geq 0$</li>
                    </ul>
                </template>
                <template #col-2>
                    <p v-mathjax>
                        $g:C$
                    </p>
                    <ul v-mathjax>
                        <li>Sattelpunkt bei $x=1$</li>
                        <li>Verhalten im Unendlichen:</li>
                        <ul>
                            <li>$x \rightarrow +\infty: f \rightarrow +\infty$</li>
                            <li>$x \rightarrow -\infty: f \rightarrow 0$</li>
                            <ul>
                                <li>nähert siich $0$ von unten wegen Vorzeichen durch $x^3$</li>
                            </ul>
                        </ul>
                    </ul>
                </template>
            </MultiColumnLayout>
            <MultiColumnLayout :columns=2>
                <template #col-1>
                    <p v-mathjax>
                        $h:D$
                    </p>
                    <ul v-mathjax>
                        <li>einfache Nullstellen bei $x_1= 1, x_2=0, x_3=1$</li>
                        <li>Verhalten im Unendlichen:</li>
                        <ul>
                            <li>$x \rightarrow +\infty: f \rightarrow +\infty$</li>
                            <li>$x \rightarrow -\infty: f \rightarrow -\infty$$</li>
                        </ul>
                        <li>Symmetrisch zum Ursprung</li>
                    </ul>
                </template>
                <template #col-2>
                    <p v-mathjax>
                        $i : A$
                    </p>
                    <ul v-mathjax>
                        <li>doppelte Nullstelle bei $x=0$</li>
                        <li>waagerechte Asymptote: $y=1$</li>
                        <li>Symmetrisch zur y-Achse</li>
                    </ul>
                </template>
            </MultiColumnLayout>
            <InfoBox color="yellow">
                <p v-mathjax>
                    Es genügen die Argumente, die den Graphen eindeutig von den anderen unterscheiden.
                </p>
            </InfoBox>
        </Subsection>
    </ContentSection>

    <ContentSection title="Gemeinsame Punkte einer Funktionsschar">
        <InfoBox color="green">
            <p v-mathjax>
                Sei $f_k$ eine Funktionsschar. Um gemeinsame Punkte aller Graphen der Funktionsschar zu bestimmen,
                genügt es,
                die Schnittpunkte zweier beliebiger Funktionen der Schar zu finden, da diese Schnittpunkte für alle
                Graphen
                gelten müssen.<br>
                Meist ist die einfachste Gleichung.
            </p>
            <MathDisplay>
                f_0(x) = f_1(x)
            </MathDisplay>
        </InfoBox>
        <Subsection title="Beispiel">
            <MathDisplay>

                f_k(x) = (x-1) \cdot e^{-k\cdot x}
                \\
                \begin{align*}
                \\
                f_0(x) &= f_1(x) \\
                (x-1)\cdot e^0 &= (x-1)\cdot e^{-x} \\
                \Rightarrow x_1=&1 \ \ x_2= 0
                \end{align*}
            </MathDisplay>
            <p v-mathjax>
                <strong>Probe:</strong>
            </p>
            <MathDisplay>
                \begin{align*}
                f_k(0) &= (0-1) \cdot e^0 = -1
                &\checkmark\ \textsf{unanbähngig von k}\\
                f_k(1) &= (1-1) \cdot e^{-k} = 0
                &\checkmark\ \textsf{unanbähngig von k} \\
                \end{align*}
            </MathDisplay>
            <MathDisplay>
                \begin{array}{c}
                \Rightarrow P(0|-1) \textsf{ und } Q(1|0)
                \textsf{ liegen auf } \\ \textsf{allen Graphen der Funktionsschar}
                \end{array}
            </MathDisplay>
            <InfoBox color="red">
                <p v-mathjax>
                    Probe machen! Es könnte sein, dass $f_0$ und $f_1$ einen zusätzlichen „zufälligen“ Schnittpunkt
                    haben.
                </p>
            </InfoBox>
        </Subsection>
    </ContentSection>
</template>

<style scoped>

</style>