<script lang="ts" setup>

import ContentSection from "../components/ContentSection.vue";
import MultiColumnLayout from "../components/MultiColumnLayout.vue";
import Subsection from "../components/Subsection.vue";
import InfoBox from "../components/InfoBox.vue";
import MathDisplay from "../components/MathDisplay.vue";
import ClickableImage from "../components/ClickableImage.vue";
import MatrixTable from "../components/MatrixTable.vue";
import {
    firstAndSecondError,
    leftSidedTest,
    probabilityDistribution,
    rightSidedTest
} from "../data/matrixTableContents.ts";
</script>

<template>
    <ContentSection title="Grundbegriffe der Wahrscheinlichkeitsrechnung">
        <MultiColumnLayout :columns=2 :image-width=75 image-layout>
            <template #col-1>
                <Subsection title="Zufallsexperiment">
                    <p v-mathjax>
                        z.B.: „Das Glücksrad wird zweimal Gedreht.“
                    </p>
                </Subsection>
                <Subsection title="Ergebnis">
                    <p v-mathjax>
                        z.B.: „zuerst Rot, dann Blau“
                    </p>
                </Subsection>
            </template>
            <template #col-2>
                <ClickableImage alt="Glücksrad.png" src="/images/Glücksrad.png"/>
            </template>
        </MultiColumnLayout>
        <Subsection title="Ergebnismenge">
            <p v-mathjax>
                $S = \{rr, rb, br, bb\}$
            </p>
        </Subsection>
        <Subsection title="Baumdiagramm">
            <MultiColumnLayout :columns=1 :image-width=75 image-layout>
                <template #col-1>
                    <ClickableImage alt="Baumdiagramm.png" src="/images/Baumdiagramm.png"/>
                </template>
            </MultiColumnLayout>
        </Subsection>
        <Subsection title="Ereignis">
            <p v-mathjax>
                z.B.: „mindestens einmal blau drehen“
            </p>
        </Subsection>
        <Subsection title="Ereignismenge">
            <p v-mathjax>
                $E = \{rb, br, bb\}$
            </p>
        </Subsection>
        <Subsection title="Gegenereignis">
            <p v-mathjax>
                $\overline E{:}$ „nie blau drehen“ $\quad\overline E = \{rr\}$
            </p>
            <p v-mathjax>
                $P(E)
                = 1 - P(\overline E)
                = 1-P(rr)
                = 1- \frac9{16}
                = \frac7{16}$
            </p>
        </Subsection>
        <Subsection title="Produktregel">
            <p v-mathjax>
                $P(rb) = P(r) \cdot P(b) = \frac34 \cdot \frac14 = \frac3{16}$
            </p>
        </Subsection>
        <Subsection title="Summenregel">
            <p v-mathjax>
                $P(E) = P(rb) + P(br) + P(bb) = \frac7{16}$
            </p>
        </Subsection>
        <Subsection title="Zufallsvariable">
            <p v-mathjax>
                $X{:}$ „Gewinn in €“
            </p>
            <p v-mathjax>
                $X$kann die Werte $-1, 0, 4$ annehmen
            </p>
        </Subsection>
        <Subsection title="Wahrscheinlichkeitsverteilung">
            <MatrixTable :matrix-data="probabilityDistribution"/>
        </Subsection>
        <Subsection title="Erwartungswert von $X$">
            <MathDisplay>
                E(X)
                = -1 \cdot \frac{9}{16} + 0 \cdot \frac{7}{16} + 4 \cdot \frac{1}{16}
                = -\frac{5}{16}
                \quad \Rightarrow \ \approx -0{,}31 (\text{€})
            </MathDisplay>
        </Subsection>
        <Subsection title="Varianz">
            <MathDisplay>
                \text{Var}(X)
                = (-1-(-\frac5{16}))^2
                \cdot\frac9{16}
                +(0-(-\frac5{16}))^2
                \cdot\frac7{16}
                +(4-(-\frac5{16}))^2
                \cdot\frac1{16}
                \approx 1{,}465(\text{€}^{\color{red} 2})
            </MathDisplay>
        </Subsection>
        <Subsection title="Standardabweichung">
            <MathDisplay>
                \sigma = \sqrt{\text{Var}(X)} \approx \sqrt{1{,}465} = 1{,}21(\text{€})
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Ziehen mit Zurücklegen">
        <InfoBox color="green">
            <p v-mathjax>
                Werden aus einer Urne mit $n$ verschiedene Kugeln, $k$ Stück herausgezogen, nach jedem Zug wieder
                zurückgelegt
                und in ihrer Reihenfolge notiert, so kann die Anzahl an verschiedenen <strong>Reihenfolgen </strong>berechnet
                werden mit:
            </p>
            <MathDisplay>
                n^k
            </MathDisplay>
        </InfoBox>
        <Subsection title="Beispiel ">
            <p v-mathjax>
                Ein Würfel mit $6$ Seiten wird $2$ mal gewürfelt. Wie viele mögliche Zahlenpaare gibt es?
            </p>
            <p v-mathjax>
                <strong>Lösung:</strong>
            </p>
            <MathDisplay>
                6^2 = 36
            </MathDisplay>
            <p v-mathjax>
                ⇒ Es gibt insgesamt $36$ verschiedene Zahlenpaare.
            </p>
        </Subsection>
    </ContentSection>

    <ContentSection title="Ziehen ohne Zurücklegen">
        <InfoBox color="green">
            <p v-mathjax>
                Werden aus einer Urne mit $n$ verschiedenen Kugeln, $k$ Stück nacheinander herausgezogen ohne diese
                zurückzulegen und in ihrer Reihenfolge notiert, so kann die Anzahl an verschiedenen
                <strong>Reihenfolgen </strong>berechnet werden mit:
            </p>
            <MathDisplay>
                \frac{n!}{(n-k)!}
            </MathDisplay>
        </InfoBox>
        <Subsection title="Beispiel">
            <p v-mathjax>
                Ein Wettrennen hat 8 Teilnehmer. Für die schnellsten $3$ gibt es Preise. Wie viele Möglichkeiten gibt
                es, die
                Preise zu vergeben?
            </p>
            <p v-mathjax>
                <strong>Lösung:</strong>
            </p>
            <MathDisplay>
                \frac{8!}{(8-3)!}=\frac{8!}{5!}=
                \frac
                {8\cdot7\cdot6\cdot5\cdot4\cdot3\cdot2\cdot1}
                {5\cdot4\cdot3\cdot2\cdot1}
                =8\cdot7\cdot6=336
            </MathDisplay>
            <p v-mathjax>
                ⇒ Es gibt $336$ verschieden Möglichkeiten die Preise zu vergeben
            </p>
        </Subsection>
    </ContentSection>

    <ContentSection title="Ziehen mit einem Griff">
        <InfoBox color="green">
            <p v-mathjax>
                Werden aus einer Urne mit $n$ verschiedenen Kugeln, $k$ Stück mit einem Griff (gleichzeitig)
                herausgezogen, so
                kann man die Anzahl verschiedener <strong>Möglichkeiten </strong>berechnet werden mit:
            </p>
            <MathDisplay>
                \binom nk =
                \frac{n!}{(n-k)!\cdot k!}
            </MathDisplay>
            <p v-mathjax>
                Taschenrechner: $n \text{ nCr } k$
            </p>
        </InfoBox>
        <Subsection title="Spezialfälle">
            <MultiColumnLayout :columns=2>
                <template #col-1>
                    <MathDisplay>
                        \binom n0 = \binom nn = 1
                    </MathDisplay>
                </template>
                <template #col-2>
                    <MathDisplay>
                        \binom n1 = \binom n{n-1} = n
                    </MathDisplay>
                </template>
            </MultiColumnLayout>
        </Subsection>
        <Subsection title="Beispiel ">
            <p v-mathjax>
                Ein Verein hat $10$ Mitglieder. Eine Mannschaft besteht aus $4$ Spielern. Wie viele mögliche
                Mannschaften hat
                der
                Verein?
            </p>
            <p v-mathjax>
                Lösung:
            </p>
            <MathDisplay>
                \binom{10}{4} =
                \frac{10!}{(10-4)!\cdot4!}
                =\frac{
                10\cdot9\cdot8\cdot7\cdot\cancel{6\cdot5\cdot4\cdot3\cdot2\cdot1}}{\cancel{6\cdot5\cdot4\cdot3\cdot2\cdot1}\cdot4\cdot3\cdot2\cdot1}
                = \frac{10\cdot9\cdot8\cdot7}{4\cdot3\cdot2\cdot1}
                = 210
            </MathDisplay>
            <p v-mathjax>
                ⇒ Der Verein hat $210$ mögliche Mannschaften
            </p>
            <InfoBox color="blue">
                <p v-mathjax>
                    Ein Trick zum berechnen per Hand ist es, die $k$ größten Zahlen aus $n!$ miteinander zu
                    multiplizieren und
                    durch
                    $k!$ zu teilen.
                    In dem Beispiel oben kommt man dadurch schnell auf den letzten Term mit je $4$ Faktoren im Zähler
                    und Nenner.
                    Diese kann man dann oft noch weiter kürzen.
                </p>
            </InfoBox>
        </Subsection>
    </ContentSection>

    <ContentSection title="Erwartungswert, Varianz und Standardabweichung">
        <InfoBox color="green">
            <p v-mathjax>
                Für eine Zufallsvariable $X$, die die Werte $x_1, x_2,..., x_n$ annehmen kann, definiert man den
                <strong>Erwartungswert </strong>$\mu$
                von $X$ als<strong>:</strong>
            </p>
            <MathDisplay>
                E(X) = \sum_{i=1}^n
                x_i \cdot P(X=x_1)
            </MathDisplay>
            <p v-mathjax>
                $E(X)$ gibt an, welcher Wert für $X$ im Durchschnitt auf lange Sicht zu erwarten ist.
            </p>
            <p v-mathjax>
                Ein Spiel heißt <strong>fair</strong>, wenn der Gewinn = 0 ist.
            </p>
        </InfoBox>
        <InfoBox color="green">
            <p v-mathjax>
                Die <strong>Varianz</strong>
            </p>
            <MathDisplay>
                \text{Var}(X) = \sum_{i=1}^n
                (x_i-E(X))^2 \cdot P(X=x_i)
            </MathDisplay>
            <p v-mathjax>
                und die <strong>Standardabweichung</strong>
            </p>
            <MathDisplay>
                \sigma = \sqrt{\text{Var}(X)}
            </MathDisplay>
            <p v-mathjax>
                sind Maße für die durchschnittliche Abweichung von $X$ zum Erwartungswert.
            </p>
        </InfoBox>
        <Subsection title="Beispiel">
            <p v-mathjax>
                Siehe Beispiele <a href="/stochastik#grundbegriffe-der-wahrscheinlichkeitsrechnung">
                Grundbegriffe der Wahrscheinlichkeitsrechnung</a>.
            </p>
        </Subsection>
    </ContentSection>

    <ContentSection title="Bedingte Wahrscheinlichkeit">
        <InfoBox color="green">
            <p v-mathjax>
                Für zwei Ereignisse $A$ und $B$ mit $P(A) \neq 0$ ist die <strong>bedingte Wahrscheinlichkeit</strong>,
                die
                Wahrscheinlichkeit für das Eintreten von $B$ unter der Bedingung, dass $A$ schon eingetreten ist.
            </p>
            <MathDisplay>
                P_A(B) = \frac{P(A \cap B)}{P(A)}
            </MathDisplay>
        </InfoBox>
        <Subsection title="Beispiel">
            <p v-mathjax>
                U: „Einkauf ist unter 10€.“ K: „Einkauf wird mit Karte bezahlt.“
            </p>
            <MathDisplay>
                \begin{array}{c}
                P(U) = 0{,}4 \quad
                P(U \cap K) = 0{,}3
                \\
                \begin{align*}
                \\
                P_U(K) &= \frac{P(U \cap K)}{P(U)}
                = \frac{0{,}3}{0{,}4}
                = 0{,}75
                \\
                {}
                \end{align*}
                \\
                \Rightarrow \textsf{Es werden 75% der Einkäufe unter 10€ mit Karte bezahlt.}
                \end{array}
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Stochastische Unabhängigkeit">
        <Subsection title="Definition">
            <InfoBox color="green">
                <p v-mathjax>
                    Zwei Ereignisse $A$ und $B$ heißen <strong>stochastisch unabhängig</strong>, wenn:
                </p>
                <MathDisplay>
                    P(A \cap B) = P(A) \cdot P(B)
                </MathDisplay>
            </InfoBox>
        </Subsection>
        <Subsection title="Satz">
            <InfoBox color="green">
                <p v-mathjax>
                    Zwei Ereignisse $A$ und $B$ sind genau dann stochastisch unabhängig, wenn:
                </p>
                <MathDisplay>
                    P_A(B) = P(B)
                </MathDisplay>
                <p v-mathjax>
                    Denn:
                </p>
                <MathDisplay>
                    P_A(B)
                    = \frac{P(A \cap B)}{P(A)}
                    = \frac{\cancel{P(A)} \cdot P(B)}{\cancel{P(A)}}
                    = P(B)
                </MathDisplay>
            </InfoBox>
        </Subsection>
        <Subsection title="Beispiel">
            <p v-mathjax>
                In einem Betrieb hat 570 Mitarbeiter. Davon fahren $\frac 23$ mit einem Pkw zur Arbeit. Von den 190
                auswärtigen
                Mitarbeitern kommen 177 mit einem Pkw. Untersuche
                F: „Fährt mit einem Pkw“ und A: „Kommt von Auswärts“
                auf stochastische Unabhängigkeit.
            </p>
            <MathDisplay>
                \begin{array}{c}
                \begin{align*}
                P(F) &= \frac 23
                \\
                P(A) &= \frac{190}{570} = \frac 13
                \\
                P(F \cap A) &= \frac{177}{570} \approx 0{,}311
                \\
                {}
                \end{align*}
                \\
                P(F) \cdot P(A)
                = \frac 29
                \neq P(F \cap A)
                \\
                \Rightarrow F \textsf{ und } A \textsf{ sind stochastisch abhänigig}
                \end{array}
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Bernoulli-Experiment und Bernoulli-Kette">
        <InfoBox color="green">
            <p v-mathjax>
                Ein Zufallsversuch mit genau zwei möglichen Ergebnissen heißt <strong>Bernoulli-Experiment</strong>.
            </p>
            <p v-mathjax>
                Wenn man ein Bernoulli-Experiment $n$-mal wiederholt, sodass die Durchführungen voneinander unabhängig
                sind, so
                spricht man von einer <strong>Bernoulli-Kette</strong> der Länge $n$.
            </p>
        </InfoBox>
        <Subsection title="Beispiel">
            <p v-mathjax>
                5-mal eine Münze werfen ist eine Bernoulli-Kette der Länge 5, da es genau zwei Ergebnisse gibt (Kopf
                oder Zahl)
                und ein einzelner Münzwurf keinen Einfluss auf die anderen Münzwürfe hat.
            </p>
        </Subsection>
    </ContentSection>

    <ContentSection title="Die Formel von Bernoulli">
        <InfoBox color="green">
            <p v-mathjax>
                Für eine Bernoulli-Kette der Länge $n$ und Trefferwahrscheinlichkeit $p$ gilt für die Anzahl an Treffern
                $k$:
            </p>
            <MathDisplay>
                P_p^k(X=k) =
                \binom nk
                \cdot p^k
                \cdot (1-p)^{n-k}
            </MathDisplay>
            <p v-mathjax>
                Man schreibt auch $B_{n;p}(k)$ und sagt $X$ ist <strong>binomialverteilt</strong>.
            </p>
        </InfoBox>
        <InfoBox color="green">
            <p v-mathjax>
                Für den Erwartungswert $E(X)$ gilt:
            </p>
            <MathDisplay>
                E(X) = \mu = n \cdot p
            </MathDisplay>
        </InfoBox>
        <Subsection title="Beispiel">
            <p v-mathjax>
                10-facher Münzwurf
            </p>
            <MathDisplay>
                n = 10 \quad p = \frac12 \quad X\text{: „Anzahl Zahl (binomialverteilt)“}
            </MathDisplay>
            <p v-mathjax>
                <strong>genau 5 mal Zahl</strong>
            </p>
            <MathDisplay>
                \underbrace{
                P_{\frac12}^{10}(X=5)}
                _{\textsf{WTR: binomialpdf}} =
                \binom{10}5
                \cdot \left(\frac12\right)^5
                \cdot \left(\frac12\right)^{10-5}
                \approx 0{,}246
            </MathDisplay>
            <p v-mathjax>
                <strong>höchstens 5 mal Zahl</strong>
            </p>
            <MathDisplay>
                \begin{align*}
                \overbrace{
                P_{\frac12}^{10}(X \leq 5)}
                ^{\textsf{WTR: binomialcdf}}
                &= P_{\frac12}^{10}(X = 0)
                + P_{\frac12}^{10}(X = 1)
                + P_{\frac12}^{10}(X = 2) \\
                &+ P_{\frac12}^{10}(X = 3)
                + P_{\frac12}^{10}(X = 4)
                + P_{\frac12}^{10}(X = 5) \\
                &= \sum_{k=0}^5
                P_{\frac12}^{10}(X = k)
                \approx 0{,}623
                \end{align*}
            </MathDisplay>
        </Subsection>
        <Subsection title="Umformungen">
            <MathDisplay>
                \begin{align*}
                P_p^n(X \geq a)
                &= 1-P_p^n(X \leq a-1)
                \\
                P_p^n(b \leq X \leq c)
                &= P_p^n(X \leq c)
                - P_p^n(X \leq b-1)
                \end{align*}
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Standardabweichung einer Binomialverteilung">
        <InfoBox color="green">
            <p v-mathjax>
                $X$ ist eine binomialverteilte Zufallsgröße.
            </p>
            <MathDisplay>
                \begin{align*}
                \sigma &=
                \sqrt{n \cdot p \cdot (1-p)}
                \\
                \text{Var}(X) &=
                n \cdot p \cdot (1-p)
                \end{align*}
            </MathDisplay>
        </InfoBox>
        <Subsection title="Beispiel">
            <MathDisplay>
                \begin{array}{c}
                n = 10 \quad p = 0{,}4
                \\
                \sigma =
                \sqrt{10 \cdot 0{,}4 \cdot 0{,}6} \approx 1{,}55
                \end{array}
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Zweiseitiger Hypothesentest">
        <Subsection title="Beispiel">
            <InfoBox color="green">
                <p v-mathjax>
                    Es soll eine Münze überprüft werden:
                </p>
                <p v-mathjax>
                    <strong>Nullhypothese </strong>$H_0: p = \frac12$ (Münze ist in Ordnung)
                </p>
                <p v-mathjax>
                    <strong>Gegenhypothese </strong>(Alternative) $H_1: p \neq \frac12$ (Münze ist verbogen)
                </p>
                <p v-mathjax>
                    <strong>Signifikanzniveau </strong>(maximale Irrtumswahrscheinlichkeit) $\hat\alpha = 5\%$
                </p>
                <p v-mathjax>
                    Gesuchte Grenzen $g_1$ und $g_2$:
                </p>
                <MathDisplay>
                    P(x \leq g_1) \leq \frac{\hat\alpha}2 = 2{,}5\% \\
                    P(x \geq g_2) \geq \frac{\hat\alpha}2 = 2{,}5\%
                </MathDisplay>
                <p v-mathjax>
                    $g_1$ soll dabei möglichst groß und $g_2$ möglichst klein sein.
                </p>
            </InfoBox>
            <p v-mathjax>
                $n = 50; X{:} \text{ Anzahl Kopf (binomialverteilt)}$
            </p>
        </Subsection>
        <Subsection title="Tabellenkalkulation">
            <MultiColumnLayout :columns=2>
                <template #col-1>
                    <p v-mathjax>
                        <strong>Linksseitiger Test:</strong><br>
                        $g_1$ ist die größtmögliche Zahl mit $P(X \leq g_1) \leq 2{,}5\%$.
                    </p>
                </template>
                <template #col-2>
                    <p v-mathjax>
                        <strong>Rechtsseitiger Test:</strong><br>
                        $g_2$ ist die kleinstmöglichste Zahl mit $P(X \geq g_2) \leq 2{,}5\%$<br>
                        bzw. die kleinstmöglichste Zahl mit $P(X \leq g_2-1) \geq 97{,}5\%$
                    </p>
                </template>
            </MultiColumnLayout>
            <MultiColumnLayout :columns=2>
                <template #col-1>
                    <MatrixTable :matrix-data="leftSidedTest"/>
                    <p v-mathjax>
                        ⇒ $g_1 = 17$
                    </p>
                </template>
                <template #col-2>
                    <MatrixTable :matrix-data="rightSidedTest"/>
                    <p v-mathjax>
                        ⇒ $g_2 = 32 {\color{red} + 1} = 33$
                    </p>
                </template>
            </MultiColumnLayout>
        </Subsection>
        <InfoBox color="green">
            <p v-mathjax>
                <strong>Ablehnungsbereich der Nullhypothese</strong>: {0; 1; …; 17} und {33; …; 50}
                Die Nullhypothese wird verworfen, wenn maximal 17 oder mindestens 33 mal Kopf geworfen wird (Münze ist
                verbogen).
            </p>
            <p v-mathjax>
                <strong>Annahmebereich der Nullhypothese</strong>: {18; …; 32}
                Die Nullhypothese wird angenommen, wenn mindestens 18 und höchstens 32 mal Kopf geworfen wird (Münze ist
                in
                Ordnung).
            </p>
            <p v-mathjax>
                <strong>Irrtumswahrscheinlichkeit</strong>:<strong>
            </strong>Die Wahrscheinlichkeit, dass die man denkt, dass die Münze verbogen ist, obwohl sie in Ordnung ist.
                Sie
                beträgt:
            </p>
            <MathDisplay>
                \alpha =
                P^{50}_\frac12(X \leq \underbrace{17}_{g_1}) +
                P^{50}_\frac12(X \geq \underbrace{33}_{g_2}) \approx
                3{,}3\% \leq \hat\alpha
            </MathDisplay>
        </InfoBox>
    </ContentSection>

    <ContentSection title="Einseitiger Hypothesentest">
        <p v-mathjax>
            Stichprobenumfang $n$ und Signifikanzniveau $\hat\alpha$ werden festgelegt.
        </p>
        <MultiColumnLayout :columns=2>
            <template #col-1>
                <Subsection title="Linksseitiger Test">
                    <p v-mathjax>
                        <strong>Nullhypothese:</strong> $H_0: p \geq p_0$
                    </p>
                    <p v-mathjax>
                        <strong>Gegenhypothese: </strong>$H_1: p < p_0$
                    </p>
                    <p v-mathjax>
                        <strong>Ablehnungsbereich:</strong> $A=\{0, 1, .., g\}$, wobei $g$ die größte Natürliche Zahl
                        mit
                        $P^n_{p_0}(X \leq g) \leq \hat\alpha$
                        <br>ist.
                    </p>
                </Subsection>
            </template>
            <template #col-2>
                <Subsection title="Rechtsseitiger Test">
                    <p v-mathjax>
                        <strong>Nullhypothese:</strong> $H_0: p \leq p_0$
                    </p>
                    <p v-mathjax>
                        <strong>Gegenhypothese: </strong>$H_1: p > p_0$
                    </p>
                    <p v-mathjax>
                        <strong>Ablehnungsbereich:</strong> $A = \{g, g+1, …, n\}$, wobei $g$ die kleinste natürliche
                        Zahl mit
                        $P^n_{p_0}(X \geq g) =
                        1-P^n_{p_0}(X \leq g-1)
                        \leq \hat\alpha$
                        <br>ist.
                    </p>
                </Subsection>
            </template>
        </MultiColumnLayout>
        <InfoBox color="green">
            <p v-mathjax>
                Man führt eine Stichprobe vom Umfang $n$ durch.
            </p>
            <p v-mathjax>
                <strong>Entscheidungsregel:</strong><br>
                Wenn das Stichprobenergebnis im Ablehnungsbereich liegt, wird $H_0$ verworfen. Ansonsten wird $H_0$
                angenommen.
            </p>
        </InfoBox>
        <p/> <!-- Padding Paragraph -->
        <MultiColumnLayout :columns=2 :image-columns=[1,2] image-layout>
            <template #col-1>
                <ClickableImage alt="Graph_Linksseitiger-Hypothesentest.png"
                                src="/images/Graph_Linksseitiger-Hypothesentest.png"/>
            </template>
            <template #col-2>
                <ClickableImage alt="Graph_Rechtsseitiger-Hypothesentest.png"
                                src="/images/Graph_Rechtsseitiger-Hypothesentest.png"/>
            </template>
        </MultiColumnLayout>
    </ContentSection>

    <ContentSection title="Fehler 1. und 2. Art">
        <InfoBox color="green">
            <MatrixTable :matrix-data="firstAndSecondError"/>
            <ul v-mathjax style="padding-top: 1rem">
                <li>
                    Die Wahrscheinlichkeit für den Fehler 1. Art ist die Irrtumswahrscheinlichkeit $\alpha$.
                </li>
                <li>
                    Die Wahrscheinlichkeit für den Fehler 2. Art ist $\beta$ und lässt sich nur berechnen, wenn die
                    echte
                    Trefferwahrscheinlichkeit gegeben ist.
                </li>
            </ul>
            <ul v-mathjax style="list-style-type: square">
                <li>Wenn man $n$ vergrößert und $\hat \alpha$ beibehält, dann wird $\beta$ kleiner</li>
                <li>Wenn man $n$ beibehält und $\hat \alpha$ verkleinert, dann wird $\beta$ größer</li>
            </ul>
            <ul v-mathjax style="list-style-type: circle">
                <li>$\alpha$ kann verkleinert werden, indem man $\hat \alpha$ verkleinert</li>
                <li>$\beta$ kann verkleinert werden, indem man $n$ vergrößert</li>
            </ul>
        </InfoBox>
        <InfoBox color="blue">
            <p v-mathjax>
                In anderen Worten:
                Der Fehler 1. Art ist, wenn man im Ablehnungsbereich landet, obwohl die Nullhypothese wahr ist.
                Der Fehler 2. Art ist, wenn man nicht im Ablehnungsbereich landet, obwohl die Nullhypothese falsch ist.
            </p>
        </InfoBox>
        <Subsection title="Beispiel">
            <p v-mathjax>
                Angenommen, eine Firma testet, ob eine neue Batterie eine durchschnittliche Laufzeit von <strong>mindestens
                10
                Stunden</strong> hat.
            </p>
            <p v-mathjax>
                $H_0$: Die Batterie hält <strong>weniger</strong> als 10 Stunden.<br>
                $H_1$: Die Batterie hält <strong>mindestens</strong> 10 Stunden.
            </p>
            <p v-mathjax>
                <strong>Fehler 1. Art</strong><br>
                Der Test ergibt, dass die Laufzeit <strong>mindestens </strong>10 Stunden beträgt ($H_0$ wird
                verworfen), obwohl sie in Wirklichkeit <strong>weniger als </strong>10 Stunden beträgt ($H_0$ ist wahr).<br>
                → Die Firma akzeptiert schlechte Batterien.
            </p>
            <p v-mathjax>
                <strong>Fehler 2.Art</strong><br>
                Der Test ergibt, dass die Laufzeit <strong>weniger als</strong> 10 Stunden beträgt ($H_0$ wird
                angenommen),
                obwohl sie in Wirklichkeit <strong>mindestens</strong> 10 Stunden beträgt ($H_0$ ist falsch).<br>
                → Die Firma wirft gute Batterien weg.
            </p>
        </Subsection>
        <Subsection title="Berechnen von $\mathbf{\alpha}$ und $\mathbf{\beta}$">
            <MathDisplay>
                \begin{array}{c}
                n = 50 \quad \hat\alpha = 5\% \\
                H_0 = p \geq 0{,}6 \quad
                H_1 = p < 0{,}6 \\
                {}\\
                P^{50}_{0{,}6}(X \leq g) \leq 5\% \\
                \Rightarrow g = 23
                \\{}\\

                \textsf{Um β zu berechnen brauchen wir die tatsächliche}\\
                \textsf{Wahrscheinlichkeit. Ich gebe sie hier als }
                p = 0{,}55 \textsf{ vor.}
                \\{}\\

                \begin{align*}
                \alpha &= P^{50}_{0{,}6}(X \leq 23)
                \approx 0{,}0314 \\
                \beta &= P^{50}_{\color{red}0{,}55}
                (X \ {\color{red}>} \ 23) = 1 - P^{50}_{0{,}55}(X \leq 23) \approx 0{,}872
                \end{align*}
                \end{array}
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Wahl der Nullhypothese">
        <InfoBox color="green">
            <p v-mathjax>
                Bei einem Hypothesentest wird der Fehler, dass die Nullhypothese $H_0$ aufgrund des
                Stichprobenergebnisses
                fälschlicherweise verworfen wird, kontrolliert
            </p>
            <p v-mathjax>
                Seine Wahrscheinlichkeit ist stets<strong> höchstens</strong> so groß wie das Signifikanzniveau
                $\hat\alpha$.
            </p>
            <Subsection title="1. Faustregel">
                <p v-mathjax>
                    Man wählt die Nullhypothese so, dass der Fehler 1. Art derjenige ist, den man vermeiden möchte.
                </p>
            </Subsection>
            <Subsection title="2. Faustregel">
                <p v-mathjax>
                    Man wählt die Behauptung, die statistisch gestützt werden soll, als Alternative.
                </p>
            </Subsection>
        </InfoBox>
        <Subsection title="Beispiel">
            <p v-mathjax>
                Eine Zeitung behauptet, dass sich maximal 85% der Autofahrer angurten. Ein Autoclub bezweifelt dies.
            </p>
            <p v-mathjax>
                <strong>Aus der 2. Faustregel folgt:</strong><br>
                Der Autoclub möchte zeigen, dass sich mehr als 85% angurten. Daher wählt man $H_1: p > 0{,}85$. Daraus
                folgt
                $H_0:
                p \leq 0{,}85$.
            </p>
            <p v-mathjax>
                <strong>Dadurch ist die 1. Faustregel auch erfüllt:</strong><br>
                Der schlimmere Fehler ist der 1. Art, da der Autoclub der Zeitung vorwirft falsche Informationen zu
                verbreiten.
                Beim Fehler 2. Art würde im schlimmsten Fall unnötigerweise eine Kampagne zur Förderung des Anschnallens
                gestartet
                werden.
            </p>
        </Subsection>
        <InfoBox color="blue">
            <p v-mathjax>
                Die 1. Faustregel folgt meist aus der 2. Faustregel. Daher ist es oft am einfachsten, nach der 2.
                Faustregel zu
                handeln, da diese auch einfacher ist und man nicht argumentieren muss, welcher Fehler schlimmer ist.
            </p>
        </InfoBox>
    </ContentSection>
</template>

<style scoped>

</style>