<script lang="ts" setup>

import ContentSection from "../components/ContentSection.vue";
import MultiColumnLayout from "../components/MultiColumnLayout.vue";
import InfoBox from "../components/InfoBox.vue";
import MathDisplay from "../components/MathDisplay.vue";
import Subsection from "../components/Subsection.vue";
import ClickableImage from "../components/ClickableImage.vue";
</script>

<template>
    <ContentSection title="Skalarprodukt">
        <Subsection title="Definition">
            <InfoBox color="green">
                <p v-mathjax>
                    Das Skalarprodukt zwischen $\vec a = \left(\begin{smallmatrix}
                    a_1\\a_2\\a_3
                    \end{smallmatrix}\right)$und $\vec b = \left(\begin{smallmatrix}
                    b_1\\b_2\\b_3
                    \end{smallmatrix}\right)$ berechnet man mit:
                </p>
                <MathDisplay>
                    \vec a \circ \vec b =
                    a_1 \cdot b_1 +
                    a_2 \cdot b_2 +
                    a_3 \cdot b_3
                </MathDisplay>
            </InfoBox>
        </Subsection>
        <Subsection title="Satz">
            <InfoBox color="green">
                <p v-mathjax>
                    Zwei Vektoren $\vec a \neq \vec 0$ und $\vec b \neq \vec 0$ sind genau dann senkrecht zueinander,
                    wenn
                </p>
                <MathDisplay>
                    \vec a \circ \vec b = 0
                </MathDisplay>
            </InfoBox>
        </Subsection>
        <Subsection title="Rechenregeln">
            <InfoBox color="green">
                <MathDisplay>
                    \begin{align}
                    \vec a \circ \vec b &=
                    \vec b \circ \vec a
                    \\
                    r \cdot \vec a \circ \vec b &=
                    (r \cdot \vec a) \circ \vec b =
                    \vec a \circ ( r \cdot \vec b)
                    \\
                    (\vec a + \vec b) \circ \vec c &=
                    \vec a \circ \vec c + \vec b \circ \vec c
                    \\
                    \vec a \circ \vec a &=
                    |\vec a|^2 \geq 0
                    \end{align}
                </MathDisplay>
            </InfoBox>
        </Subsection>
        <Subsection title="Beispiele">
            <MathDisplay>
                \left(\begin{matrix}
                -2 \\ 0 \\ 2
                \end{matrix}\right)
                \circ
                \left(\begin{matrix}
                1 \\ 2 \\ 4
                \end{matrix}\right)
                =
                -2 \cdot 1 + 0 \cdot 2 + 2 \cdot 4 = 6
            </MathDisplay>
            <MathDisplay>
                \left(\begin{matrix}
                1 \\ -2 \\ -1
                \end{matrix}\right)
                \circ
                \left(\begin{matrix}
                3 \\ 1 \\ 1
                \end{matrix}\right)
                =
                1 \cdot 3 + (-2) \cdot 1 + (-1) \cdot 1 = 0
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Kreuzprodukt">
        <MultiColumnLayout :columns=2 :image-width=70 image-layout>
            <template #col-1>
                <InfoBox color="green">
                    <p v-mathjax>
                        Das Kreuzprodukt zwischen $\vec a = \left(\begin{smallmatrix}
                        a_1\\a_2\\a_3
                        \end{smallmatrix}\right)$und $\vec b = \left(\begin{smallmatrix}
                        b_1\\b_2\\b_3
                        \end{smallmatrix}\right)$ berechnet man mit:
                    </p>
                    <MathDisplay>
                        \vec a \times \vec b =
                        \left(\begin{matrix}
                        \color{#58C4DD}a_2b_3 - a_3b_2 \\
                        \color{#FC6255}a_3b_1 - a_1b_3 \\
                        \color{#83C167}a_1b_2 - a_2b_1
                        \end{matrix}\right)
                    </MathDisplay>
                    <p v-mathjax>
                        <strong>Eselsbrücke </strong>(siehe Diagramm):
                    </p>
                    <ol v-mathjax>
                        <li>Man schreibt die Vektoren zweimal untereinander.</li>
                        <li>Streicht die erste und letzte Zeile weg.</li>
                        <li>Multipliziert die verbleibenden Werte über Kreuz und bilde die Differenz der Produkte.</li>
                    </ol>
                </InfoBox>
            </template>
            <template #col-2>
                <ClickableImage alt="Kreuzprodukt-Eselsbrücke.png" src="/images/Kreuzprodukt-Eselsbrücke.png"/>
            </template>
        </MultiColumnLayout>
        <Subsection title="Satz">
            <InfoBox color="green">
                <p v-mathjax>
                    Der resultierende Vektor aus $\vec a \times \vec b$ steht <strong>senkrecht </strong>auf $\vec a$
                    und $\vec
                    b$.
                    Seine Länge entspricht der Fläche des von $\vec a$ und $\vec b$ aufgespannten Parallelogramms.
                </p>
            </InfoBox>
        </Subsection>
        <Subsection title="Beispiele">
            <MathDisplay>
                \left(\begin{matrix}
                3 \\ -5 \\ 1
                \end{matrix}\right)
                \times
                \left(\begin{matrix}
                -2 \\ 0 \\ 4
                \end{matrix}\right)
                =
                \left(\begin{matrix}
                -5 \cdot 4 - 1 \cdot 0\\
                1 \cdot (-2) - 3 \cdot 4 \\
                3 \cdot 0 - (-5) \cdot -2
                \end{matrix}\right)
                =
                \left(\begin{matrix}
                -20 \\ -14 \\ -10
                \end{matrix}\right)
            </MathDisplay>
            <MathDisplay>
                \left(\begin{matrix}
                2 \\ 4 \\ -1
                \end{matrix}\right)
                \times
                \left(\begin{matrix}
                1 \\ -3 \\ 2
                \end{matrix}\right)
                =
                \left(\begin{matrix}
                4 \cdot 2 - (-1) \cdot (-3) \\
                (-1) \cdot 1 - 2 \cdot 2 \\
                2 \cdot (-3) - 4 \cdot 1\end{matrix}\right)
                =
                \left(\begin{matrix}
                5 \\ -5 \\ -10
                \end{matrix}\right)
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Geradengleichung">
        <InfoBox color="green">
            <p v-mathjax>
                Gegeben sind ein Punkt $P$ mit seinem Ortsvektor $\vec p$ und ein Vektor $\vec u \neq \vec 0$.
                Die Gerade durch den Punkt $P$ in Richtung $\vec u$ ist:
            </p>
            <MathDisplay>
                g: \vec x =
                \vec p + t \cdot \vec u, \ t \in \mathbb{R}
            </MathDisplay>
            <p v-mathjax>
                $\vec x$: Ortsvektor eines Punktes auf $g$<br>
                $\vec p$: <strong>Stützvektor</strong><br>
                $\vec u$: <strong>Richtungsvektor</strong><br>
                $t$: <strong>Parameter</strong>
            </p>
        </InfoBox>
        <Subsection title="Gerade durch zwei Punkte aufstellen">
            <MathDisplay>
                A = (1 \, | \, 2 \, | \, 1) \qquad
                B = (3 \, | \, 5 \, | \, 5)
            </MathDisplay>
            <MathDisplay>
                g: \vec x =
                \overrightarrow{OA} + t\cdot
                \overrightarrow{AB}
                =
                \left(\begin{matrix}
                1 \\ 2 \\ 1
                \end{matrix}\right)
                + t \cdot
                \left(\begin{matrix}
                2 \\ 3 \\ 4
                \end{matrix}\right)
            </MathDisplay>
        </Subsection>
        <Subsection title="Punktprobe">
            <p v-mathjax>
                Liegt $P$ auf $g$?
            </p>
            <MathDisplay>
                P(3 \, | \, 8 \, | -3)
                \qquad
                g: \vec x =
                \left(\begin{matrix}
                1 \\ 2 \\ 1
                \end{matrix}\right)
                + t \cdot
                \left(\begin{matrix}
                2 \\ 3 \\ 4
                \end{matrix}\right)
            </MathDisplay>
            <MathDisplay>
                \begin{align*}
                \left(\begin{matrix}
                3 \\ 8 \\ -3
                \end{matrix}\right)
                &=
                \left(\begin{matrix}
                1 \\ 2 \\ 1
                \end{matrix}\right)
                + t \cdot
                \left(\begin{matrix}
                2 \\ 3 \\ 4
                \end{matrix}\right)
                \quad \left|-
                \left(\begin{matrix}
                1 \\ 2 \\ 1
                \end{matrix}\right)\right.

                \\
                \left(\begin{matrix}
                2 \\ 6 \\ -4
                \end{matrix}\right)

                &=
                t \cdot
                \left(\begin{matrix}
                2 \\ 3 \\ 4
                \end{matrix}\right)
                \begin{array}{l}
                \Rightarrow t &= 1\\
                \Rightarrow t &= 2\\
                \Rightarrow t &= -1
                \end{array}
                \end{align*}
            </MathDisplay>
            <MathDisplay>
                \boxed{
                \begin{array}{l}
                \Rightarrow \text{unterschiedliche } t \\
                \Rightarrow P \text{ liegt nicht auf }g
                \end{array}
                }
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Ebenengleichung: Parametergleichung">
        <InfoBox color="green">
            <p v-mathjax>
                Gegeben ist ein Stützvektor $\vec p$ und zwei Spannvektoren $\vec u$ und $\vec v$, die keine Vielfache
                voneinander sind.<br>
                Die <strong>Parameterform </strong>oder <strong>Parametergleichung</strong> der Ebene $E$ ist:
            </p>
            <MathDisplay>
                \begin{array}{c}
                E: \vec x +
                r \cdot \vec u +
                s \cdot \vec v
                \\
                r,s \in \mathbb{R},
                \vec u \neq \vec 0 \neq \vec v
                \end{array}
            </MathDisplay>
        </InfoBox>
        <Subsection title="Ebene durch drei Punkte aufstellen">
            <MathDisplay>
                A(1 \, | -1 \, | \, 1) \qquad
                B(1{,}5 \, | \, 1 \, | \ 0) \qquad
                C(0 \, | \, 1 \, | \, 1)
            </MathDisplay>
            <MathDisplay>
                E: \vec x =
                \underbrace{
                \left(\begin{matrix}
                1 \\ -1 \\ 1
                \end{matrix}\right)
                }_{\overrightarrow{OA}}
                + r \cdot
                \underbrace{
                \left(\begin{matrix}
                0{,}5 \\ 2 \\ -1
                \end{matrix}\right)
                }_{\overrightarrow{AB}}
                + s \cdot
                \underbrace{
                \left(\begin{matrix}
                -1 \\ 2 \\ 0
                \end{matrix}\right)
                }_{\overrightarrow{AC}}
            </MathDisplay>
        </Subsection>
        <Subsection title="Punktprobe">
            <p v-mathjax>
                Liegt $P$ auf $E$?
            </p>
            <MathDisplay>
                P(5 \, | \, 3 \, | -5)
                \qquad
                E: \vec x =
                \left(\begin{matrix}
                1 \\ -1 \\ 1
                \end{matrix}\right)
                + r \cdot
                \left(\begin{matrix}
                0{,}5 \\ 2 \\ -1
                \end{matrix}\right)
                + s \cdot
                \left(\begin{matrix}
                -1 \\ 2 \\ 0
                \end{matrix}\right)
            </MathDisplay>
            <MathDisplay>
                \begin{align*}
                \left(\begin{matrix}
                5 \\ 3 \\ -5
                \end{matrix}\right)
                &=
                \left(\begin{matrix}
                1 \\ -1 \\ 1
                \end{matrix}\right)
                + r \cdot
                \left(\begin{matrix}
                0{,}5 \\ 2 \\ -1
                \end{matrix}\right)
                + s \cdot
                \left(\begin{matrix}
                -1 \\ 2 \\ 0
                \end{matrix}\right)
                \quad\left |-
                \left(\begin{matrix}
                1 \\ -1 \\ 1
                \end{matrix}\right)
                \right.
                \\
                \left(\begin{matrix}
                4 \\ 4 \\ -6
                \end{matrix}\right)
                &=
                r \cdot
                \left(\begin{matrix}
                0{,}5 \\ 2 \\ -1
                \end{matrix}\right)
                + s \cdot
                \left(\begin{matrix}
                -1 \\ 2 \\ 0
                \end{matrix}\right)
                \end{align*}
            </MathDisplay>
            <MathDisplay>
                \Rightarrow
                \left(
                \begin{array}{cc|c}
                0{,}5 & -1 & 4 \\
                2 & 2 & 4 \\
                -1 & 0 & -6
                \end{array}
                \right)
                \begin{align*}
                \Rightarrow s &= -1 \\
                \Rightarrow s &= -4 \\
                \Rightarrow r &= 6
                \end{align*}
            </MathDisplay>
            <MathDisplay>
                \boxed{
                \begin{array}{l}
                \Rightarrow \text{unterschiedliche } s \\
                \Rightarrow P \text{ liegt nicht auf } E
                \end{array}
                }
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Ebenengleichung: Normalengleichung">
        <InfoBox color="green">
            <p v-mathjax>
                Jede Ebene $E$ kann durch einen <strong>Normalenvektor </strong>$\vec n$ und einen
                <strong>Stützvektor</strong>
                $\vec p$ beschrieben werden:
            </p>
            <MathDisplay>
                E:
                (\vec x - \vec p)
                \circ \vec n = 0
            </MathDisplay>
        </InfoBox>
        <Subsection title="Ebene aufstellen">
            <MultiColumnLayout :columns=2 image-layout>
                <template #col-1>
                    <MathDisplay>
                        \begin{array}{l}
                        P(4 \, | \, 1 \, | \, 3) \qquad
                        \vec n =
                        \left(\begin{matrix}
                        2 \\ -1 \\ 5
                        \end{matrix}\right)
                        \\
                        \Rightarrow
                        E:
                        \left[
                        \vec x -
                        \left(\begin{matrix}
                        4 \\ 1 \\ 3
                        \end{matrix}\right)
                        \right]
                        \circ
                        \left(\begin{matrix}
                        2 \\ -1 \\ 5
                        \end{matrix}\right)
                        = 0
                        \end{array}
                    </MathDisplay>
                </template>
                <template #col-2>
                    <ClickableImage alt="3D_Ebene-Normalengleichung.png" src="/images/3D_Ebene-Normalengleichung.png"/>
                </template>
            </MultiColumnLayout>
        </Subsection>
        <Subsection title="Punktprobe">
            <p v-mathjax>
                Liegt $Q$ auf $E$?
            </p>
            <MathDisplay>
                Q(2 \, | \, 1 \, | \, 4)
                \qquad
                E:
                \left[
                \vec x -
                \left(\begin{matrix}
                4 \\ 1 \\ 3
                \end{matrix}\right)
                \right]
                \circ
                \left(\begin{matrix}
                2 \\ -1 \\ 5
                \end{matrix}\right)
                = 0
            </MathDisplay>
            <MathDisplay>
                \begin{align*}
                \left[
                \left(\begin{matrix}
                2 \\ 1 \\ 4
                \end{matrix}\right)
                -
                \left(\begin{matrix}
                4 \\ 1 \\ 3
                \end{matrix}\right)
                \right]
                \circ
                \left(\begin{matrix}
                2 \\ -1 \\ 5
                \end{matrix}\right)
                &\stackrel{?}{=} 0
                \\
                \left(\begin{matrix}
                -2 \\ 0 \\ 1
                \end{matrix}\right)
                \circ
                \left(\begin{matrix}
                2 \\ -1 \\ 5
                \end{matrix}\right)
                &= 0
                \\
                -2 \cdot 2 +
                0 \cdot (-1) +
                1 \cdot 5
                &= 0
                \\
                1 &\neq 0
                \end{align*}
            </MathDisplay>
            <MathDisplay>
                \boxed{
                \Rightarrow P \text{ liegt nicht auf } E
                }
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Ebenengleichung: Koordinatengleichung">
        <InfoBox color="green">
            <p v-mathjax>
                Jede Ebene $E$ kann durch eine <strong>Koordinatengleichung</strong> beschrieben werden:
            </p>
            <MathDisplay>
                E: ax_1 + bx_2 + cx_3 = d
            </MathDisplay>
            <p v-mathjax>
                Dabei ist $\left(\begin{smallmatrix}
                a \\ b \\ c
                \end{smallmatrix}\right)$ ein Normalenvektor der Ebene $E$.
            </p>
        </InfoBox>
        <Subsection title="Ebene durch drei Punkte aufstellen">
            <MathDisplay>
                A(5 \, | -2 \, | \, 4) \quad
                B(-3 \, | \ 0 \, | \, 1) \quad
                C(3 \, | \ 4 \, | \, 2)
            </MathDisplay>
            <MathDisplay>
                \begin{array}{c}
                \overrightarrow{AB} = \left(\begin{matrix}
                -8 \\ 2 \\ -3
                \end{matrix}\right)
                \qquad
                \overrightarrow{AC} = \left(\begin{matrix}
                -2 \\ 4 \\ -2
                \end{matrix}\right)
                \\
                \overrightarrow{AB} \times \overrightarrow{AC} =
                \left(\begin{matrix}
                -8 \\ 2 \\ -3
                \end{matrix}\right)
                \times
                \left(\begin{matrix}
                -2 \\ 4 \\ -2
                \end{matrix}\right)
                =
                \left(\begin{matrix}
                8 \\ -10 \\ -28
                \end{matrix}\right)
                \quad\Rightarrow
                \vec n =
                \left(\begin{matrix}
                4 \\ -5 \\ -14
                \end{matrix}\right)
                \end{array}
            </MathDisplay>
            <InfoBox color="red">
                <p v-mathjax>
                    Probe machen: $\color{df5441}\vec n \circ \overrightarrow{AB} = 0$ und $\color{df5441}\vec n \circ
                    \overrightarrow{AC} = 0$.
                </p>
            </InfoBox>
            <MathDisplay>
                \begin{array}{c}
                E: 4x_1-5x_2-14x_3=
                \underbrace{-26}
                \\
                \text{NR (B eingesetzt): }
                4 \cdot (-3) -
                5 \cdot 0 -
                14 \cdot 1 = -26
                \end{array}
            </MathDisplay>
        </Subsection>
        <Subsection title="Punktprobe">
            <p v-mathjax>
                Liegt $P$ auf $E$?
            </p>
            <MathDisplay>
                P(3 \ | \ 2 \ | \ 2) \quad
                E: 4x_1 - 5x_2 - 14x_3 = -26
            </MathDisplay>
            <MathDisplay>
                \begin{align*}
                4 \cdot 3 -
                5 \cdot 2 -
                14 \cdot 2
                &\stackrel{?}{=} -26
                \\
                -26 &= -26
                \end{align*}
            </MathDisplay>
            <MathDisplay>
                \boxed{
                \Rightarrow P \text{ liegt auf }E
                }
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Spurpunkte und Spurgeraden">
        <InfoBox color="green">
            <p v-mathjax>
                Um eine Ebene in einem Koordinatensystem zu veranschaulichen, zeichnet man einen Ausschnitt der Ebene.
                Dabei
                orientiert man sich an den jeweiligen Schnittpunkten der Ebene mit den Koordinatenachsen. Diese Punkte
                heißen
                <strong>Spurpunkte</strong>.
            </p>
        </InfoBox>
        <InfoBox color="green">
            <p v-mathjax>
                Die Gesamtheit aller Schnittpunkte einer Ebene mit einer Koordinatenebene heißen
                <strong>Spurgerade</strong>.
            </p>
        </InfoBox>
        <p v-mathjax>
            In den folgenden Beispielen sind stets alle $\color{#FF862F} \text{Spurpunkte}$ und
            $\color{#FC6255}\text{Spurgeraden}$ eingezeichnet. Allerdings wird nur ein Teil der unendlichen Spurgeraden
            gezeigt.
        </p>
        <MultiColumnLayout :columns=2 :image-width=130 image-layout>
            <template #col-1>
                <h2>Drei Spurpunkte</h2>
            </template>
            <template #col-2>
                <p/>
                <ClickableImage alt="3D_Spurpunkte-3.png" src="/images/3D_Spurpunkte-3.png"/>
            </template>
        </MultiColumnLayout>
        <MultiColumnLayout :columns=2 :image-width=130 image-layout>
            <template #col-1>
                <h2>Zwei Spurpunkte</h2>
            </template>
            <template #col-2>
                <p/>
                <ClickableImage alt="3D_Spurpunkte-2.png" src="/images/3D_Spurpunkte-2.png"/>
            </template>
        </MultiColumnLayout>
        <MultiColumnLayout :columns=2 :image-width=130 image-layout>
            <template #col-1>
                <h2>Ein Spurpunkte</h2>
            </template>
            <template #col-2>
                <p/>
                <ClickableImage alt="3D_Spurpunkte-1.png" src="/images/3D_Spurpunkte-1.png"/>
            </template>
        </MultiColumnLayout>
    </ContentSection>

    <ContentSection title="Achsenabschnittsform">
        <InfoBox color="green">
            <p v-mathjax>
                Wenn man alle Spurpunkte einer Ebene kennt, die nicht durch den Ursprung verläuft, so kann man direkt
                deren
                <strong>Achsenabschnittsform </strong>(eine spezielle Koordinatengleichung) anlegen.
            </p>
        </InfoBox>
        <Subsection title="Beispiel">
            <MathDisplay>
                S_1 (5 \, | \, 0 \, | \, 0) \quad
                S_2 (0 \, | \ {-2} \, | \, 0) \quad
                S_3 (0 \, | \, 0 \, | \, 0{,}5)
            </MathDisplay>
            <MathDisplay>
                \begin{align*}
                \Rightarrow
                E: \frac 15 x_1 -
                \frac12 x_2 + 2x_3 &= 1
                \quad | \cdot 10
                \\
                E: 2x_1 - 5x_2 + 20x_3 &= 10
                \end{align*}
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Gegenseitige Lage von Ebenen und Geraden">
        <InfoBox color="green">
            <ol v-mathjax>
                <li>Wenn der Normalenvektor der Ebene ein Vielfaches des Richtungsvektors ist, so schneidet die Gerade
                    die Ebene
                    orthogonal.
                </li>
                <li>Wenn das Skalarprodukt von Normalenvektor der Ebene und Richtungsvektor der Geraden 0 ist, so ist
                    die Gerade
                    in der Ebene enthalten, wenn der Stützvektor in der Ebene enthalten ist. Ist der Stützvektor nicht
                    in der
                    Ebene enthalten, so ist die Gerade parallel zur Ebene.
                </li>
                <li>Ansonsten und in Fall 1 gibt es genau einen Schnittpunkt (<strong>Durchstoßpunkt</strong>).</li>
            </ol>
        </InfoBox>
        <MathDisplay>
            E: x_1 -x_2 + 2x_3 = 9 \qquad
            g: \vec x =
            \left(\begin{matrix}
            3 \\ 2 \\ 0
            \end{matrix}\right)
            +
            t \cdot
            \left(\begin{matrix}
            -2 \\ 2 \\ 3
            \end{matrix}\right)
            \qquad
        </MathDisplay>
        <MathDisplay>
            \begin{array}{c}
            \text{Schneide } E \& g
            \text{ (} g \text{ in } E \text{ einsetzen): }
            \\
            \begin{align*}
            (3-2t) - (2+2t) +
            2 \cdot (0 + 3t) &= 9
            \\
            1 + 2t &= 9
            \quad
            | -1 \quad |:2
            \\
            t &= 4
            \end{align*}
            \end{array}
        </MathDisplay>
        <MathDisplay>
            \begin{array}{c}
            t=4 \text{ in } g \text{ einsetzen:}
            \\
            \boxed{
            S(-5 \, | \, 10 \, | 12)
            }
            \end{array}
        </MathDisplay>
    </ContentSection>

    <ContentSection title="Gegenseitige Lage von Ebenen">
        <MultiColumnLayout :columns=2 :image-columns="[1, 2]" image-layout>
            <template #col-1>
                <Subsection title="Identisch">
                    <ClickableImage alt="3D_Ebenen-Identisch.png" src="/images/3D_Ebenen-Identisch.png"/>
                    <p v-mathjax>
                        Normalenvektoren und Koordinatengleichungen sind Vielfache voneinander.
                    </p>
                </Subsection>
            </template>
            <template #col-2>
                <Subsection title="Parallel">
                    <ClickableImage alt="3D_Ebenen-Parallel.png" src="/images/3D_Ebenen-Parallel.png"/>
                    <p v-mathjax>
                        Normalenvektoren sind Vielfache voneinander, aber Koordinatengleichungen sind keine vielfache
                        voneinander.
                    </p>
                </Subsection>
            </template>
        </MultiColumnLayout>
        <Subsection title="Schneidend">
            <MultiColumnLayout :columns=2 image-layout>
                <template #col-1>
                    <h3>Schnittgerade bestimmen</h3>
                    <MathDisplay>
                        E_1: 3x_1 - 4x_2 + x_3 = 1 \\
                        E_2: x_1 + 2x_2 - 3x_3 = 2
                    </MathDisplay>
                </template>
                <template #col-2>
                    <ClickableImage alt="3D_Ebenen-Schneiden.png" src="/images/3D_Ebenen-Schneiden.png"/>
                </template>
            </MultiColumnLayout>
            <MultiColumnLayout :columns=2>
                <template #col-1>
                    <MathDisplay>
                        \begin{array}{c}
                        \text{Unterbestimmtes LGS:}
                        \\
                        \begin{array}{r}
                        \textit{I) } \ \\
                        \textit{II) } \ \\
                        \textit{I } -3 {II) } \
                        \end{array}
                        \begin{alignat*} {5}
                        3 &x_1 - &4 &x_2 + &&x_3 = 1 \\
                        &x_1 + &2 &x_2 - & 3 &x_3 = 2 \\
                        &\phantom{x_1} - &10 &x_2 + &10 &x_3 = 5
                        \end{alignat*}
                        \end{array}
                    </MathDisplay>
                </template>
                <template #col-2>
                    <MathDisplay>
                        \text{Wähle } x_3 = t:
                        \quad
                        \begin{align*}
                        \Rightarrow x_2 &= -\frac12 + t\\
                        \Rightarrow x_1 &= 3 + t
                        \end{align*}
                    </MathDisplay>
                    <MathDisplay>
                        \boxed{
                        \Rightarrow g: \vec x =
                        \left(\begin{matrix}
                        3 \\ -\frac12 \\ 0
                        \end{matrix}\right)
                        +
                        t \cdot
                        \left(\begin{matrix}
                        1 \\ 1 \\ 1
                        \end{matrix}\right)
                        }
                    </MathDisplay>
                </template>
            </MultiColumnLayout>
        </Subsection>
    </ContentSection>
</template>

<style scoped>

</style>