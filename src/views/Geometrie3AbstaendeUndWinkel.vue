<script lang="ts" setup>

import ContentSection from "../components/ContentSection.vue";
import MultiColumnLayout from "../components/MultiColumnLayout.vue";
import InfoBox from "../components/InfoBox.vue";
import MathDisplay from "../components/MathDisplay.vue";
import Subsection from "../components/Subsection.vue";
import ClickableImage from "../components/ClickableImage.vue";
</script>

<template>
    <ContentSection title="Abstandsberechnungen (Übersicht)">
        <InfoBox color="green">
            <ClickableImage alt="Diagram_Abstandberechnung.png" src="/images/Diagram_Abstandberechnung.png"
                            style="max-width:100%; height:auto; display:block; margin:0 auto; border-radius: 5px"/>
        </InfoBox>
    </ContentSection>

    <ContentSection title="Hesse’sche Normal(en)form (HNF)">
        <InfoBox color="green">
            <p v-mathjax>
                Eine Ebenengleichung $E: (\vec x - \vec p) \circ \vec n_0 = 0$ heißt <strong>Hesse’sche
                Normal(en)form</strong>
                (HNF) von $E$. $\vec n_0$ heißt dabei <strong>Einheitsnormalenvektor</strong>.
            </p>
            <p v-mathjax>
                Der Abstand $d(E, Q)$ zwischen $E$ und einem Punkt $Q$ bestimmt man mit der Formel
            </p>
            <MathDisplay>
                d(E, Q) = |(\vec q - \vec p)\circ\vec n_0|
            </MathDisplay>
        </InfoBox>
        <InfoBox color="green">
            <p v-mathjax>
                Für die Koordinatengleichung von $E:a_1x_1+a_2x_2+a_3x_3=b$ gilt:
            </p>
            <MathDisplay>
                d(E, Q) = \frac{
                |a_1x_1 + a_2x_2 + a_3x3 - b|
                }{
                \sqrt{a_1\! ^2 + a_2\! ^2 + a_3\! ^2}
                }
            </MathDisplay>
        </InfoBox>
        <Subsection title="Beispiele">
            <h3>Normalenform</h3>
            <MathDisplay>
                E:
                \left[
                \vec x
                -
                \left(\begin{matrix}
                9 \\ -8 \\ 6
                \end{matrix}\right)
                \right]
                \circ
                \left(\begin{matrix}
                2 \\ 2 \\ 1
                \end{matrix}
                \right)
                = 0
                \qquad
                P(1 \, | \, {-1} \, | \, 0)
            </MathDisplay>
            <MathDisplay>
                d(E, P) = \left|
                \left(\begin{matrix}
                0 \\ -1 \\ 1
                \end{matrix}\right)
                -
                \left(\begin{matrix}
                9 \\ -8 \\ 6
                \end{matrix}\right)
                \circ
                \right.
                \underbrace{
                \left.
                \left(\begin{matrix}
                2 \\ 2 \\ 1
                \end{matrix}\right)
                \right|
                \cdot\frac13
                }_{\vec n_0} =
                \left|
                \left(\begin{matrix}
                -9 \\ 7 \\ -5
                \end{matrix}\right)
                \circ
                \left(\begin{matrix}
                2 \\ 2 \\ 1
                \end{matrix}\right)
                \right|
                \cdot\frac13
                =
                9 \cdot \frac 13 =3
            </MathDisplay>
            <h3>Koordinatenform</h3>
            <MathDisplay>
                F: 2x_1-4x_2+4x_3 = 2 \qquad
                Q(4 \, | \, 2 \, | \, 5)
            </MathDisplay>
            <MathDisplay>
                d(F,Q) = \frac{
                |2 \cdot 4 - 4 \cdot 2 +
                4 \cdot 5 - 2|
                }{
                \sqrt{2^2+4^2+4^2}
                }
                =
                \frac{|18|}{\sqrt{36}}
                =
                3
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Abstand Punkt-Ebene">
        <InfoBox color="green">
            <p v-mathjax>
                Unter dem Abstand $d$ eines Punktes $P$ von der Ebene $E$ versteht man die kleinste Entfernung von $P$
                zu $E$.
            </p>
        </InfoBox>
        <Subsection title="Beispiel">
            <MathDisplay>
                E: x_1 + 8x_2 -4x_3 = 25 \qquad
                P(2 \, | \, 0 \, | \, 1)
            </MathDisplay>
            <h3>Variante 1: HNF</h3>
            <MathDisplay>
                d(E, P) = \frac{
                |2-4-25|
                }{
                \sqrt{1^2+8^2+4^2}
                }
                =
                \frac{|{-27}|}{\sqrt{81}}
                =
                \frac{27}{9}=3
            </MathDisplay>
            <h3>Variante 2: Durchstoßpunkt</h3>
            <MathDisplay>
                \begin{array}{c}
                \text{Hilfsgerade }g \text{ durch }P \text{ in Richtung des Normalenvektors} \\
                g: \vec x =
                \left(\begin{matrix}
                2 \\ 0 \\ 1
                \end{matrix}\right)
                + r \cdot \left(\begin{matrix}
                1 \\ 8 \\ -4
                \end{matrix}\right)
                \end{array}
            </MathDisplay>
            <MathDisplay>
                \begin{array}{c}
                E \& g \text{ schneiden um Lotfußpunkt zu bestimmen} \\
                \begin{align*}
                2+r + 8 \cdot 8r -
                4 \cdot (1-4r) &= 25
                \\
                \Rightarrow r &= \frac13
                \end{align*}
                \\\Rightarrow
                F\left(
                \frac73 \, \left| \,
                \frac83 \, \right|
                {-\frac13}
                \right)
                \end{array}
            </MathDisplay>
            <MathDisplay>
                \begin{align*}
                d(E,P) = d(F,P) =
                |\overrightarrow{FR}| &=
                \left|
                \left(\begin{matrix}
                2 \\ 0 \\ 1
                \end{matrix}\right)
                -
                \left(\begin{matrix}
                \frac73 \\ \frac83 \\ -\frac13
                \end{matrix}\right)
                \right|
                \\
                &=\sqrt{
                \left(\frac13\right)^2 +
                \left(\frac83\right)^2 +
                \left(\frac43\right)^2
                }
                =
                \sqrt9 = 3
                \end{align*}
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Abstand Punkt-Gerade">
        <InfoBox color="green">
            <Subsection title="Formel">
                <p v-mathjax>
                    Für den Abstand eines Punktes $R$ zu einer Geraden $g: \vec x = \vec p + s \cdot \vec u$, gilt:
                </p>
                <MathDisplay>
                    d(R, g) = |\overrightarrow{PR} \times \vec u_0|
                </MathDisplay>
            </Subsection>
        </InfoBox>
        <InfoBox color="green">
            <Subsection title="Algorithmus">
                <ol v-mathjax>
                    <li>
                        Stelle Hilfsebene $H$ auf, die den Punkt $P$ enthält und den Richtungsvektor von $g$ als
                        Normalenvektor hat.
                    </li>
                    <li>Erhalte Punkt $F$ als Schnittpunkt von $g$ und $H$.</li>
                    <li>$d(R, g) = |\overrightarrow{FR}|$</li>
                </ol>
            </Subsection>
        </InfoBox>
        <Subsection title="Beispiel">
            <MathDisplay>
                g: \vec x =
                \left(\begin{matrix}
                4 \\ 3 \\ 1
                \end{matrix}\right)
                + s \cdot
                \left(\begin{matrix}
                2 \\ 1 \\ -2
                \end{matrix}\right)
                \qquad
                R(2 \, | {-3} \, | \,5)
            </MathDisplay>
            <h3>Variante 1: Formel</h3>
            <MathDisplay>
                \overrightarrow{RP} =
                \left(\begin{matrix}
                2 \\ 6 \\ -4
                \end{matrix}\right)
                \qquad
                |\vec u| = 3
                \ \ \Rightarrow \ \
                \vec u_0 =
                \frac1{3} \cdot
                \left(\begin{matrix}
                2 \\ 1 \\ -2
                \end{matrix}\right)
            </MathDisplay>
            <MathDisplay>
                \begin{align*}
                d(R, g) =
                |\overrightarrow{RP}
                \times \vec u_0| &=
                \left|
                \left(\begin{matrix}
                2 \\ 6 \\ -4
                \end{matrix}\right)
                \times
                \right.
                \underbrace{
                \left.
                \left(\begin{matrix}
                2 \\ 1 \\ -2
                \end{matrix}\right)
                \right|
                \cdot \frac 13
                }_{\vec u_0}\\
                &=
                \left|
                \left(\begin{matrix}
                -8 \\ -4 \\ -10
                \end{matrix}\right)
                \right|
                \cdot \frac 13
                =\sqrt{180}\cdot\sqrt{\frac19}
                =\sqrt{20}
                \end{align*}
            </MathDisplay>
            <h3>Variante 2: Algorithmus</h3>
            <MathDisplay>
                \begin{array}{c}
                \text{1. Hilfsebene aufstellen} \\
                \Rightarrow H: 2x_1 +x_2 -2x_3 = -9
                \qquad
                \text{NR: }
                2\cdot2 + (-3) - 2 \cdot 5 = -9
                \end{array}
            </MathDisplay>
            <MathDisplay>
                \begin{array}{c}
                \text{2. Schnittpunkt bestimmen}\\
                \begin{align*}
                2 \cdot (4+2s) + 3 + s -
                2 \cdot (1 - 2s)
                &= -9 \\
                9+9s &= -9 \quad |-9 \ |:9 \\
                s &= -2
                \end{align*}
                \\
                \Rightarrow
                F(0 \, | \, 1 \, | \,5)
                \end{array}
            </MathDisplay>
            <MathDisplay>
                \begin{array}{c}
                \text{3. Abstand berechnen}\\
                d(R, g) = d(R, F) = |\overrightarrow{RF}| =
                \sqrt{2^2+4^2+0^2}=\sqrt{20}
                \end{array}
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Abstand Gerade-Gerade (Parallel)">
        <MultiColumnLayout :columns=2 :image-width=59 image-layout>
            <template #col-1>
                <InfoBox color="green">
                    <p v-mathjax>
                        Um den Abstand zwei paralleler Geraden $g$ und $h$ zu berechnen, berechnet man den Abstand des
                        Stützpunktes
                        $R$ von $h$ zur Geraden $g$.
                    </p>
                    <MathDisplay>
                        d(g, h) = d(g,R)
                    </MathDisplay>
                </InfoBox>
            </template>
            <template #col-2>
                <ClickableImage alt="Graph_Abstand-Geraden-Parallel.png"
                                src="/images/Graph_Abstand-Geraden-Parallel.png"/>
            </template>
        </MultiColumnLayout>
        <Subsection title="Beispiel">
            <p v-mathjax>
                Siehe Beispiel <a href="/geometrie#abstand-punkt-gerade">Abstand Punkt-Gerade</a>.
            </p>
        </Subsection>
    </ContentSection>

    <ContentSection title="Abstand Gerade-Gerade (Windschief)">
        <InfoBox color="green">
            <p v-mathjax>
                Gegeben sind die Geraden $g: \vec x = \vec p + r \cdot \vec u$ und $h: \vec x = \vec q + s \cdot \vec v$
            </p>
            <ol v-mathjax>
                <li>Stelle eine Hilfsebene $E$ mit Normalenvektor $\vec n = \vec u \times \vec v$ auf, die $P$ enthält.
                    Dadurch
                    ist $E$ parallel zu $h$ und enthält $g$.
                </li>
                <li>$d(g, h) = d(E, h) = \underbrace{d(E, Q)}_{\text{HNF}}$</li>
            </ol>
            <p v-mathjax>
                <strong>ODER</strong>
            </p>
            <p v-mathjax>
                $d(g, h) = \left | (\vec q - \vec p) \circ \vec n_0 \right |$
            </p>
        </InfoBox>
        <ClickableImage alt="3D_Abstand-Geraden-Windschief.png" src="/images/3D_Abstand-Geraden-Windschief.png"
                        style="max-width:50%; height:auto; display:block; margin:0 auto; padding-top: 1rem; border-radius: 5px;"/>
        <Subsection title="Beispiel">
            <MathDisplay>
                g: \vec x =
                \left(\begin{matrix}
                9 \\ -8 \\ 6
                \end{matrix}\right)
                + r \cdot
                \left(\begin{matrix}
                2 \\ -3 \\ 2
                \end{matrix}\right)
                \qquad
                h: \vec x =
                \left(\begin{matrix}
                6 \\ 5 \\ 4
                \end{matrix}\right)
                + s \cdot
                \left(\begin{matrix}
                1 \\ -1 \\ 0
                \end{matrix}\right)
            </MathDisplay>
            <MathDisplay>
                \vec n =
                \left(\begin{matrix}
                2 \\ -3 \\ 2
                \end{matrix}\right)
                \times
                \left(\begin{matrix}
                1 \\ -1 \\ 0
                \end{matrix}\right)
                =
                \left(\begin{matrix}
                2 \\ 2 \\ 1
                \end{matrix}\right)
                \qquad
                |\vec n| =3
            </MathDisplay>
            <MathDisplay>
                d(E, Q) = \left|
                \left(\begin{matrix}
                6 \\ 5 \\ 4
                \end{matrix}\right)
                -
                \left(\begin{matrix}
                9 \\ -8 \\ 6
                \end{matrix}\right)
                \circ
                \right.
                \underbrace{
                \left.
                \left(\begin{matrix}
                2 \\ 2 \\ 1
                \end{matrix}\right)
                \right|
                \cdot\frac13
                }_{\vec n_0} =
                \left|
                \left(\begin{matrix}
                -3 \\ 13 \\ -2
                \end{matrix}\right)
                \circ
                \left(\begin{matrix}
                2 \\ 2 \\ 1
                \end{matrix}\right)
                \right|
                \cdot\frac13
                =
                18 \cdot \frac 13 = 6
            </MathDisplay>
            <p v-mathjax>
                <strong>ODER</strong>
            </p>
            <MathDisplay>
                d(g, h) = \left|
                \left(
                \left(\begin{matrix}
                6 \\ 5 \\ 4
                \end{matrix}\right)
                -
                \left(\begin{matrix}
                9 \\ -8 \\ 6
                \end{matrix}\right)
                \right)
                \circ
                \underbrace {
                \frac13 \cdot
                \left(\begin{matrix}
                2 \\ 2 \\ 1
                \end{matrix}\right)
                }_{\vec n_0}
                \right|
                =
                \left|
                \left(\begin{matrix}
                -3 \\ 13 \\ -2
                \end{matrix}\right)
                \circ
                \left(\begin{matrix}
                \frac23 \\ \frac23 \\ \frac13
                \end{matrix}\right)
                \right|
                =6
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Abstand Gerade-Ebene (Parallel)">
        <InfoBox color="green">
            <p v-mathjax>
                Um den Abstand der Ebene $E$ und der parallelen Gerade $g$ zu berechnen, nimmt man den Stützpunkt $Q$
                von $g$.
                Dann gilt:
            </p>
            <MathDisplay>
                d(E, g) =
                \underbrace{d(E, Q)}
                _{\text{HNF}}
            </MathDisplay>
        </InfoBox>
        <Subsection title="Beispiel ">
            <MathDisplay>
                E: x_1 + 2x_2 - 2x_3 = 4
                \qquad
                g: \vec x =
                \left(\begin{matrix}
                4 \\ 2 \\ 1
                \end{matrix}\right)
                + t \cdot
                \left(\begin{matrix}
                0 \\ 1 \\ 1
                \end{matrix}\right)
            </MathDisplay>
            <MathDisplay>
                d(E, g) =
                d(E, (4 \, | \, 2 \, | \, 1)) =
                \frac{|4+4-2-4|}{3} = \frac23
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Abstand Ebene-Ebene (Parallel)">
        <InfoBox color="green">
            <p v-mathjax>
                Um den Abstand der parallelen Ebenen $E$ und $F$ zu berechnen, bestimmt man einen Punkt $P$, der auf $F$
                liegt.
                Dann gilt:
            </p>
            <MathDisplay>
                d(E, F) =
                \underbrace{d(E, P)}
                _{\text{HNF}}
            </MathDisplay>
        </InfoBox>
        <Subsection title="Beispiel">
            <MathDisplay>
                \begin{align*}
                E: x_1 + 2x_2 - 2x_3 = 4
                \qquad
                &F: 3x_1 + 6x_2 - 6x_3 = 21
                \\&\quad\Rightarrow
                P(7 \, | \, 0 \, | \, 0)
                \end{align*}
            </MathDisplay>
            <MathDisplay>
                d(E, F) = d(E, P) =
                \frac{|7-4|}{3} = 1
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Gemeinsames Lot windschiefer Geraden bestimmen">
        <InfoBox color="green">
            <p v-mathjax>
                Um das gemeinsame Lot zweier windschiefer Geraden $g$ und $h$ zu bestimmen, findet man Punkte $P$ auf
                $g$ und
                $Q$ auf $h$, sodass der Verbindungsvektor $\overrightarrow{PQ}$ sowohl senkrecht zu $g$ als auch
                senkrecht zu
                $h$ ist.
            </p>
        </InfoBox>
        <Subsection title="Beispiel">
            <MathDisplay>
                \begin{align*}
                &g: \vec x =
                \left(\begin{matrix}
                7 \\ 7 \\ 0
                \end{matrix}\right)
                + r \cdot
                \left(\begin{matrix}
                4 \\ -5 \\ 2
                \end{matrix}\right)
                \qquad
                h: \vec x &=
                \left(\begin{matrix}
                0 \\ 1 \\ 2
                \end{matrix}\right)
                + s \cdot
                \left(\begin{matrix}
                0 \\ 1 \\ 1
                \end{matrix}\right)
                \\
                &P_r(7+4r \, | \, 7-5r \, | \, 2r)
                &Q_s(0 \, | \, 1+s \, | \, 2+s)
                \end{align*}
            </MathDisplay>
            <MathDisplay>
                \text{Suche } t \ \& \ s
                \text{, sodass }
                \overrightarrow{P_rQ_s} \perp g
                \ \& \
                \overrightarrow{P_rQ_s} \perp h
            </MathDisplay>
            <MultiColumnLayout :columns=2>
                <template #col-1>
                    <MathDisplay>
                        \begin{align*}
                        \left(\begin{matrix}
                        7+4r \\ 7-5r-(1+s) \\ 2s-(2+s)
                        \end{matrix}\right)
                        \circ
                        \left(\begin{matrix}
                        4 \\ -5 \\ 2
                        \end{matrix}\right)
                        &= 0
                        \\
                        28+16r-35+25r+5+5s+4r-4+2s &= 0
                        \\
                        -6 + 45r + 3s &= 0
                        \\
                        \Rightarrow
                        s = 2-&15r
                        \\
                        \xrightarrow {\text{In ander gleichung einsetzen}}
                        \end{align*}
                        \qquad
                    </MathDisplay>
                </template>
                <template #col-2>
                    <MathDisplay>
                        \begin{align*}
                        \left(\begin{matrix}
                        7+4r \\ 7-5r-(1+s) \\ 2r-(2+s)
                        \end{matrix}\right)
                        \circ
                        \left(\begin{matrix}
                        0 \\ 1 \\ 1
                        \end{matrix}\right)
                        &= 0
                        \\
                        7-5r-1-s+2r-2-s &=0
                        \\
                        4-3r-2s &=0
                        \quad |\ s =2-15r
                        \\
                        4-3r-4+30r &= 0
                        \\
                        r &= 0
                        \\
                        \Rightarrow &s=2
                        \end{align*}
                    </MathDisplay>
                </template>
            </MultiColumnLayout>
            <MathDisplay>
                \boxed{
                \Rightarrow
                G(\, 7 \, | \, 7 \, | \, 0)
                \quad
                H(\, 0 \, | \, 3 \, | \, 4)
                }
            </MathDisplay>
        </Subsection>
        <InfoBox color="blue">
            <p v-mathjax>
                Wenn die Fragestellung nach den Lotfußpunkten fragt, reicht es die Punkte $G$ und $H$ zu bestimmen.
                Wenn nach einer Geraden gefragt ist, muss man zusätzlich die Gerade durch $G$ und $H$ bestimmen.
            </p>
        </InfoBox>
    </ContentSection>

    <ContentSection title="Winkel zwischen Vektoren">
        <MultiColumnLayout :columns=2 :image-width=80 image-layout>
            <template #col-1>
                <InfoBox color="green">
                    <p v-mathjax>
                        Für den Winkel $\alpha$ zwischen $\vec a$ und $\vec b$ gilt:
                    </p>
                    <MathDisplay>
                        \cos(\alpha)=\frac{
                        \vec a \circ \vec b
                        }{
                        |\vec a| \cdot |\vec b|}
                    </MathDisplay>
                </InfoBox>
            </template>
            <template #col-2>
                <ClickableImage alt="Winkel_Vektoren.png" src="/images/Winkel_Vektoren.png"/>
            </template>
        </MultiColumnLayout>
        <Subsection title="Beispiel">
            <MathDisplay>
                \vec a =
                \left(\begin{matrix}
                -2 \\ 3 \\ 1
                \end{matrix}\right)
                \qquad
                \vec b =
                \left(\begin{matrix}
                4 \\ 0 \\ 3
                \end{matrix}\right)
            </MathDisplay>
            <MathDisplay>
                \begin{array}{c}
                |\vec a| = \sqrt{14}
                \qquad
                |\vec b| = 5
                \\
                \begin{align*}
                \\
                \cos(\alpha) &= \frac{
                \left(\begin{matrix}
                -2 \\ 3 \\ 1
                \end{matrix}\right)
                \circ
                \left(\begin{matrix}
                4 \\ 0 \\ 3
                \end{matrix}\right)
                }{
                \sqrt{14} \cdot 5
                }
                \\
                \cos(\alpha) &= \frac{
                -5}{
                \sqrt{14} \cdot 5
                }
                \\
                \alpha &=
                \underbrace{
                \cos^{-1}\left(-\frac{1}{\sqrt{14}}\right)
                }_{
                \color{red} \text{DEGREE!}
                }
                \boxed{\approx 105{,}5°}
                \end{align*}
                \end{array}
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Schnittwinkel Gerade-Gerade">
        <MultiColumnLayout :columns=2 :image-width=80 image-layout>
            <template #col-1>
                <InfoBox color="green">
                    <p v-mathjax>
                        Für den Schnittwinkel zwischen zwei Geraden $g$ und $h$ mit Richtungsvektoren $\vec u$ und $\vec
                        v$ gilt:
                    </p>
                    <MathDisplay>
                        \cos(\alpha) = \frac{
                        |\vec u \circ \vec v|}{
                        |\vec u| \cdot |\vec v|}
                    </MathDisplay>
                </InfoBox>
            </template>
            <template #col-2>
                <ClickableImage alt="Winkel_Gerade-Gerade.png" src="/images/Winkel_Gerade-Gerade.png"/>
            </template>
        </MultiColumnLayout>
        <Subsection title="Beispiel">
            <MathDisplay>
                \vec u =
                \left(\begin{matrix}
                -2 \\ 3 \\ 1
                \end{matrix}\right)
                \qquad
                \vec v =
                \left(\begin{matrix}
                4 \\ 0 \\ 3
                \end{matrix}\right)
            </MathDisplay>
            <MathDisplay>
                \begin{array}{c}
                |\vec u| = \sqrt{14}
                \qquad
                |\vec v| = 5
                \\
                \begin{align*}
                \\
                \cos(\alpha) &= \frac{
                \left|
                \left(\begin{matrix}
                -2 \\ 3 \\ 1
                \end{matrix}\right)
                \circ
                \left(\begin{matrix}
                4 \\ 0 \\ 3
                \end{matrix}\right)
                \right|
                }{
                \sqrt{14} \cdot 5
                }
                \\
                \cos(\alpha) &= \frac{
                |-5|}{
                \sqrt{14} \cdot 5
                }
                \\
                \alpha &=
                \underbrace{
                \cos^{-1}\left(\frac{1}{\sqrt{14}}\right)
                }_{
                \color{red} \text{DEGREE!}
                }
                \boxed{\approx 74{,}5°}
                \end{align*}
                \end{array}
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Schnittwinkel Ebene-Ebene">
        <MultiColumnLayout :columns=2 :image-width=80 image-layout>
            <template #col-1>
                <InfoBox color="green">
                    <p v-mathjax>
                        Für den Schnittwinkel zwischen zwei Ebenen $E$ und $F$ mit Normalenvektoren $\vec n_E$ und $\vec
                        n_f$ gilt:
                    </p>
                    <MathDisplay>
                        \cos(\alpha) = \frac{
                        |\vec n_E \circ \vec n_F|}{
                        |\vec n_E| \cdot |\vec n_F|}
                    </MathDisplay>
                </InfoBox>
            </template>
            <template #col-2>
                <ClickableImage alt="Winkel_Ebene-Ebene.png" src="/images/Winkel_Ebene-Ebene.png"/>
            </template>
        </MultiColumnLayout>
        <Subsection title="Beispiel">
            <p v-mathjax>
                Siehe Beispiel Schnittwinkel Gerade-Gerade.
            </p>
        </Subsection>
    </ContentSection>

    <ContentSection title="Schnittwinkel Gerade-Ebene">
        <MultiColumnLayout :columns=2 :image-width=80 image-layout>
            <template #col-1>
                <InfoBox color="green">
                    <p v-mathjax>
                        Für den Schnittwinkel zwischen einer Geraden mit Richtungsvektoren $\vec u$ und einer Ebene mit
                        Normalenvektor $\vec n$ gilt:
                    </p>
                    <MathDisplay>
                        {\color{red}\sin}(\alpha) = \frac{
                        |\vec u \circ \vec n|}{
                        |\vec u| \cdot |\vec n|}
                    </MathDisplay>
                </InfoBox>
            </template>
            <template #col-2>
                <ClickableImage alt="Winkel_Ebene-Gerade.png" src="/images/Winkel_Ebene-Gerade.png"/>
            </template>
        </MultiColumnLayout>
        <Subsection title="Beispiel">
            <MathDisplay>
                \vec u =
                \left(\begin{matrix}
                4 \\ -3 \\ 0
                \end{matrix}\right)
                \qquad
                \vec n =
                \left(\begin{matrix}
                2 \\ 4 \\ 1
                \end{matrix}\right)
            </MathDisplay>
            <MathDisplay>
                \begin{array}{c}
                |\vec u| = 5
                \qquad
                |\vec n| = \sqrt{21}
                \\
                \begin{align*}
                \\
                \sin(\alpha) &= \frac{
                \left|
                \left(\begin{matrix}
                4 \\ -3 \\ 0
                \end{matrix}\right)
                \circ
                \left(\begin{matrix}
                2 \\ 4 \\ 1
                \end{matrix}\right)
                \right|
                }{
                5 \cdot \sqrt{21}
                }
                \\
                \sin(\alpha) &= \frac{
                |-4|}{
                5 \cdot \sqrt{21}
                }
                \\
                \alpha &=
                \underbrace{
                \sin^{-1}\left(\frac{4}{5 \cdot \sqrt{21}}\right)
                }_{
                \color{red} \text{DEGREE!}
                }
                \boxed{\approx 10{,}1°}
                \end{align*}
                \end{array}
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Flächeninhalt Parallelogramm">
        <MultiColumnLayout :columns=2 :image-width=60 image-layout>
            <template #col-1>
                <InfoBox color="green">
                    <p v-mathjax>
                        Für den Flächeninhalt $A$ eines Parallelogramms, dass von den Vektoren $\vec a$ und $\vec b$
                        aufgespannt
                        wird, gilt:
                    </p>
                    <MathDisplay>
                        A=|\vec a \times \vec b|
                    </MathDisplay>
                </InfoBox>
            </template>
            <template #col-2>
                <ClickableImage alt="Fläche_Parallelogramm.png" src="/images/Fläche_Parallelogramm.png"/>
            </template>
        </MultiColumnLayout>
        <Subsection title="Beispiel">
            <MathDisplay>
                \vec a =
                \left(\begin{matrix}
                4 \\ -2 \\ 7
                \end{matrix}\right)
                \qquad
                \vec b =
                \left(\begin{matrix}
                1 \\ 5 \\ 0
                \end{matrix}\right)
            </MathDisplay>
            <MathDisplay>
                A = \left|
                \left(\begin{matrix}
                4 \\ -2 \\ 7
                \end{matrix}\right)
                \times
                \left(\begin{matrix}
                1 \\ 5 \\ 0
                \end{matrix}\right)
                \right|
                =
                \left|
                \left(\begin{matrix}
                -35 \\ 7 \\ 22
                \end{matrix}\right)
                \right|
                \approx
                \boxed{ 41{,}93 \ (FE) }
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Flächeninhalt Dreieck">
        <MultiColumnLayout :columns=2 :image-width=60 image-layout>
            <template #col-1>
                <InfoBox color="green">
                    <p v-mathjax>
                        Für den Flächeninhalt $A$ eines Dreiecks, dass von den Vektoren $\vec a$ und $\vec b$
                        aufgespannt wird,
                        gilt:
                    </p>
                    <MathDisplay>
                        A = \frac12 \cdot
                        |\vec a \times \vec b|
                    </MathDisplay>
                </InfoBox>
            </template>
            <template #col-2>
                <ClickableImage alt="Fläche_Dreieck.png" src="/images/Fläche_Dreieck.png"/>
            </template>
        </MultiColumnLayout>
        <Subsection title="Beispiel">
            <MathDisplay>
                \vec a =
                \left(\begin{matrix}
                4 \\ -2 \\ 7
                \end{matrix}\right)
                \qquad
                \vec b =
                \left(\begin{matrix}
                1 \\ 5 \\ 0
                \end{matrix}\right)
            </MathDisplay>
            <MathDisplay>
                A =
                \frac12 \cdot
                \left|
                \left(\begin{matrix}
                4 \\ -2 \\ 7
                \end{matrix}\right)
                \times
                \left(\begin{matrix}
                1 \\ 5 \\ 0
                \end{matrix}\right)
                \right|
                =
                \frac12 \cdot
                \left|
                \left(\begin{matrix}
                -35 \\ 7 \\ 22
                \end{matrix}\right)
                \right|
                \approx
                \frac12 \cdot
                41{,}93 =
                \boxed { 20{,}965 \ (FE) }
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Volumen Spat">
        <MultiColumnLayout :columns=2 :image-width=60 image-layout>
            <template #col-1>
                <InfoBox color="green">
                    <p v-mathjax>
                        Für das Volumen $V$ eines Spats, der von den Vektoren $\vec a, \vec b$ und $\vec c$ aufgespannt
                        wird, gilt:
                    </p>
                    <MathDisplay>
                        V =
                        |(\vec a \times \vec b)
                        \circ \vec c \, |
                    </MathDisplay>
                </InfoBox>
            </template>
            <template #col-2>
                <ClickableImage alt="Volumen_Spat.png" src="/images/Volumen_Spat.png"/>
            </template>
        </MultiColumnLayout>
        <Subsection title="Beispiel">
            <MathDisplay>
                \vec a =
                \left(\begin{matrix}
                -4 \\ 2 \\ 0
                \end{matrix}\right)
                \qquad
                \vec b =
                \left(\begin{matrix}
                -4 \\ -3 \\ 5
                \end{matrix}\right)
                \qquad
                \vec c =
                \left(\begin{matrix}
                -2 \\ 0 \\ 10
                \end{matrix}\right)
            </MathDisplay>
            <MathDisplay>
                \begin{align*}
                V &= \left|
                \left[
                \left(\begin{matrix}
                -4 \\ 2 \\ 0
                \end{matrix}\right)
                \times
                \left(\begin{matrix}
                -4 \\ -3 \\ 5
                \end{matrix}\right)
                \right]
                \circ
                \left(\begin{matrix}
                -2 \\ 0 \\ 10
                \end{matrix}\right)
                \right|
                \\
                &= \left|
                \left(\begin{matrix}
                10 \\ 20 \\ 20
                \end{matrix}\right)
                \circ
                \left(\begin{matrix}
                -2 \\ 0 \\ 10
                \end{matrix}\right)
                \right|
                \\&=|{-20}+200|
                \\&= \boxed { 180 \ (VE) }
                \end{align*}
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Volumen Pyramide mit viereckiger Grundfläche">
        <MultiColumnLayout :columns=2 :image-width=60 image-layout>
            <template #col-1>
                <InfoBox color="green">
                    <p v-mathjax>
                        Für das Volumen $V$ einer Pyramide mit viereckiger Grundfläche, die von den Vektoren $\vec a,
                        \vec b$ und
                        $\vec c$ aufgespannt wird, gilt:
                    </p>
                    <MathDisplay>
                        V = \frac13\cdot
                        |(\vec a \times \vec b)
                        \circ \vec c \, |
                    </MathDisplay>
                </InfoBox>
            </template>
            <template #col-2>
                <ClickableImage alt="Volumen_Pyramide_Viereckig.png" src="/images/Volumen_Pyramide_Viereckig.png"/>
            </template>
        </MultiColumnLayout>
        <Subsection title="Beispiel">
            <MathDisplay>
                \vec a =
                \left(\begin{matrix}
                -4 \\ 2 \\ 0
                \end{matrix}\right)
                \qquad
                \vec b =
                \left(\begin{matrix}
                -4 \\ -3 \\ 5
                \end{matrix}\right)
                \qquad
                \vec c =
                \left(\begin{matrix}
                -2 \\ 0 \\ 10
                \end{matrix}\right)
            </MathDisplay>
            <MathDisplay>
                \begin{align*}
                V &= \frac13 \cdot
                \left|
                \left[
                \left(\begin{matrix}
                -4 \\ 2 \\ 0
                \end{matrix}\right)
                \times
                \left(\begin{matrix}
                -4 \\ -3 \\ 5
                \end{matrix}\right)
                \right]
                \circ
                \left(\begin{matrix}
                -2 \\ 0 \\ 10
                \end{matrix}\right)
                \right|
                \\
                &= \frac13 \cdot
                \left|
                \left(\begin{matrix}
                10 \\ 20 \\ 20
                \end{matrix}\right)
                \circ
                \left(\begin{matrix}
                -2 \\ 0 \\ 10
                \end{matrix}\right)
                \right|
                \\&=\frac13 \cdot|{-20}+200|
                \\&=\frac13 \cdot 180
                \\&= \boxed { 60 \ (VE) }
                \end{align*}
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Volumen Pyramide mit dreieckiger Grundfläche">
        <MultiColumnLayout :columns=2 :image-width=60 image-layout>
            <template #col-1>
                <InfoBox color="green">
                    <p v-mathjax>
                        Für das Volumen $V$ einer Pyramide mit dreieckiger Grundfläche, die von den Vektoren $\vec a,
                        \vec b$ und
                        $\vec c$ aufgespannt wird, gilt:
                    </p>
                    <MathDisplay>
                        V = \frac16\cdot
                        |(\vec a \times \vec b)
                        \circ \vec c \, |
                    </MathDisplay>
                </InfoBox>
            </template>
            <template #col-2>
                <ClickableImage alt="Volumen_Pyramide.png" src="/images/Volumen_Pyramide.png"/>
            </template>
        </MultiColumnLayout>
        <Subsection title="Beispiel">
            <MathDisplay>
                \vec a =
                \left(\begin{matrix}
                -4 \\ 2 \\ 0
                \end{matrix}\right)
                \qquad
                \vec b =
                \left(\begin{matrix}
                -4 \\ -3 \\ 5
                \end{matrix}\right)
                \qquad
                \vec c =
                \left(\begin{matrix}
                -2 \\ 0 \\ 10
                \end{matrix}\right)
            </MathDisplay>
            <MathDisplay>
                \begin{align*}
                V &= \frac16 \cdot
                \left|
                \left[
                \left(\begin{matrix}
                -4 \\ 2 \\ 0
                \end{matrix}\right)
                \times
                \left(\begin{matrix}
                -4 \\ -3 \\ 5
                \end{matrix}\right)
                \right]
                \circ
                \left(\begin{matrix}
                -2 \\ 0 \\ 10
                \end{matrix}\right)
                \right|
                \\
                &= \frac16 \cdot
                \left|
                \left(\begin{matrix}
                10 \\ 20 \\ 20
                \end{matrix}\right)
                \circ
                \left(\begin{matrix}
                -2 \\ 0 \\ 10
                \end{matrix}\right)
                \right|
                \\&=\frac16 \cdot|{-20}+200|
                \\&=\frac16 \cdot 180
                \\&= \boxed { 30 \ (VE) }
                \end{align*}
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Spiegelung an einem Punkt">
        <MultiColumnLayout :columns=2 :image-width=75 image-layout>
            <template #col-1>
                <InfoBox color="green">
                    <MathDisplay>
                        \begin{align*}
                        \overrightarrow{OP'} &=
                        \overrightarrow{OP} + 2 \cdot \overrightarrow{PZ}\\
                        &=
                        \overrightarrow{OZ} +
                        \overrightarrow{PZ}
                        \end{align*}
                    </MathDisplay>
                </InfoBox>
            </template>
            <template #col-2>
                <ClickableImage alt="Spiegelung_Punkt.png" src="/images/Spiegelung_Punkt.png"/>
            </template>
        </MultiColumnLayout>
    </ContentSection>

    <ContentSection title="Spiegelung an einer Geraden">
        <MultiColumnLayout :columns=2 :image-width=75 image-layout>
            <template #col-1>
                <InfoBox color="green">
                    <ol v-mathjax>
                        <li>Stelle eine Hilfsebene $H$ auf, die durch $P$ verläuft und als Normalenvektor den
                            Richtungsvektor von
                            $g$ hat.
                        </li>
                        <li>Erhalte den Punkt $F$ als Schnittpunkt von $g$ und $H$.</li>
                        <li>Punktspiegelung an $F$: $\overrightarrow{OP'} = \overrightarrow{OF} + \overrightarrow{PF}$
                        </li>
                    </ol>
                </InfoBox>
            </template>
            <template #col-2>
                <ClickableImage alt="Spiegelung_Gerade.png" src="/images/Spiegelung_Gerade.png"/>
            </template>
        </MultiColumnLayout>
    </ContentSection>

    <ContentSection title="Spiegelung an einer Ebene">
        <MultiColumnLayout :columns=2 :image-width=75 image-layout>
            <template #col-1>
                <InfoBox color="green">
                    <ol v-mathjax>
                        <li>Stelle eine Gerade $g$ auf, deren Richtungsvektor dem Normalenvektor von $E$ entspricht und
                            $P$
                            enthält.
                        </li>
                        <li>Erhalte den Punkt $F$ als Schnittpunkt von $g$ und $E$.</li>
                        <li>Punktspiegelung an $F$: $\overrightarrow{OP'} = \overrightarrow{OF} + \overrightarrow{PF}$
                        </li>
                    </ol>
                </InfoBox>
            </template>
            <template #col-2>
                <ClickableImage alt="Spiegelung_Ebene.png" src="/images/Spiegelung_Ebene.png"/>
            </template>
        </MultiColumnLayout>
    </ContentSection>

    <ContentSection title="Symmetrieebene bestimmen">
        <MultiColumnLayout :columns=2 :image-width=75 image-layout>
            <template #col-1>
                <InfoBox color="green">
                    <ol v-mathjax>
                        <li>Berechne den Mittelpunkt $M$ von $P$ und $P’$.</li>
                        <li>Stelle eine Gleichung für $E$ auf, sodass $M$ in $E$ liegt und $\overrightarrow{PP'}$ der
                            Normalenvektor
                            von $E$ ist.
                        </li>
                    </ol>
                </InfoBox>
            </template>
            <template #col-2>
                <ClickableImage alt="Spiegelung_Symmetrieebene.png" src="/images/Spiegelung_Symmetrieebene.png"/>
            </template>
        </MultiColumnLayout>
    </ContentSection>
</template>

<style scoped>

</style>