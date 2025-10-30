<script lang="ts" setup>

import ContentSection from "../components/ContentSection.vue";
import MultiColumnLayout from "../components/MultiColumnLayout.vue";
import Subsection from "../components/Subsection.vue";
import MathDisplay from "../components/MathDisplay.vue";
import InfoBox from "../components/InfoBox.vue";
</script>

<template>
    <ContentSection title="Gauß-Verfahren">
        <Subsection title="Vorgehen">
            <InfoBox color="green">
                <ol v-mathjax>
                    <li>
                        Man eliminiert mithilfe <strong>einer Gleichung</strong> die Variable $x_1$ aus allen anderen
                        Gleichungen.
                    </li>
                    <li>Mit den <strong>restlichen Gleichungen</strong> verfährt man für die Variable $x_2, x_3, ...$
                    </li>
                    <li>Man löst die Gleichung der <strong>Stufenform</strong> schrittweise nach $x_n, x_{n-1}, …, x_1$
                        auf.
                    </li>
                </ol>
            </InfoBox>
        </Subsection>
        <Subsection title="Beispiel">
            <MathDisplay>
                \begin{alignat*} {5}
                3 &x_1+ &6 &x_2- &2 &x_3= 4 \\
                3 &x_1+ &2 &x_2+ &&x_3= 0 \\
                1{,}5 &x_1+ &5 &x_2- &5 &x_3= -9
                \end{alignat*}
            </MathDisplay>
            <h4 v-mathjax><strong>Schritt 1:</strong></h4>
            <MultiColumnLayout :columns=2 :first-column-width=30>
                <template #col-1>
                    <p v-mathjax>
                        $\color{orange}x_1$ eliminieren
                    </p>
                </template>
                <template #col-2>
                    <MathDisplay>
                        \begin{array}{r}
                        \textit{I)} \\
                        \textit{II)} \\
                        \textit{III)}
                        \end{array}
                        \left(
                        \begin{array}{ccc|c}
                        3 & 6 & -2 & -4 \\
                        {\color{orange}3} & 2 & 1 & 0 \\
                        {\color{orange}{1{,}5}} & 5 & -5 & -9
                        \end{array}
                        \right)
                    </MathDisplay>
                </template>
            </MultiColumnLayout>
            <h4><strong>Schritt 2:</strong></h4>
            <MultiColumnLayout :columns=2 :first-column-width=30>
                <template #col-1>
                    <p v-mathjax>
                        $\color{orange}x_2$ eliminieren
                    </p>
                </template>
                <template #col-2>
                    <MathDisplay>
                        \begin{array}{r}
                        \textit{I)} \\
                        \textit{IIb) = II) - I)} \\
                        \textit{IIIb) = }2\textit{III) - I)}
                        \end{array}
                        \left(
                        \begin{array}{ccc|c}
                        3 & 6 & -2 & -4 \\
                        0 & -4 & 3 & 4 \\
                        0 & {\color{orange}4} & -8 & -14
                        \end{array}
                        \right)

                    </MathDisplay>
                </template>
            </MultiColumnLayout>
            <h4><strong>Schritt 3:</strong></h4>
            <MultiColumnLayout :columns=2 :first-column-width=30>
                <template #col-1>
                    <p v-mathjax>
                        $\color{orange}\textsf{Stufenform}$ auflösen
                    </p>
                </template>
                <template #col-2>
                    <MathDisplay>
                        \begin{array}{r}
                        \textit{I)} \\
                        \textit{IIb)} \\
                        \textit{IIIc) = IIb) + IIIb)}
                        \end{array}
                        \left(
                        \begin{array}{ccc|c}
                        3 & 6 & -2 & -4 \\
                        {\color{orange}0} & -4 & 3 & 4 \\
                        {\color{orange}0} & {\color{orange}0} & -5 & -10
                        \end{array}
                        \right)
                    </MathDisplay>
                </template>
            </MultiColumnLayout>
            <h4><strong>Lösung:</strong></h4>
            <MultiColumnLayout :columns=2 :first-column-width=30>
                <template #col-1>
                    <MathDisplay>
                        \boxed{
                        \Rightarrow L = \{({\color{lightblue}-1}; {\color{purple}0{,}5};{\color{darkgreen}2})\}
                        }
                    </MathDisplay>
                </template>
                <template #col-2>
                    <MathDisplay>
                        \begin{array}{l}
                        \begin{align*}
                        -5 \cdot x_3 &= -10
                        \\
                        -4 \cdot x_2+3 \cdot {\color{darkgreen}2} &= -4
                        \\
                        3 \cdot x_1 + 6 \cdot {\color{purple}0{,}5} - 2 \cdot {\color{darkgreen}2} &= -4
                        \end{align*}
                        \quad
                        \begin{array}{}
                        \Rightarrow &x_3 = {\color{darkgreen}2} \\
                        \Rightarrow &x_2 = {\color{purple}0{,}5} \\
                        \Rightarrow &x_1 = {\color{lightblue}-1}
                        \end{array}
                        \end{array}
                    </MathDisplay>
                </template>
            </MultiColumnLayout>
        </Subsection>
    </ContentSection>

    <ContentSection title="Lösungsmenge von LGS">
        <InfoBox color="green">
            <p v-mathjax>
                Lineare Gleichungssysteme können…
            </p>
            <ol v-mathjax>
                <li>…eindeutig Lösbar sein.</li>
                <li>…unlösbar sein (z.B. mit der Zeile $0 \ 0 \ 0 \ | \ 2$).</li>
                <li>…unendlich viele Lösungen haben (Nullzeile $0 \ 0 \ 0 \ | \ 0$ ⇒ Parameter einführen)</li>
            </ol>
        </InfoBox>
        <Subsection title="Beispiel">
            <MathDisplay>
                \left(
                \begin{array}{ccc|c}
                1 & 2 & 1 & 5 \\
                1 & 3 & 2 & 7 \\
                2 & 5 & 3 & 12
                \end{array}
                \right)
                \rightarrow
                \left(
                \begin{array}{ccc|c}
                1 & 2 & 1 & 5 \\
                0 & 1 & 1 & 2 \\
                0 & 1 & 1 & 2
                \end{array}
                \right)
                \rightarrow
                \left(
                \begin{array}{ccc|c}
                1 & 2 & 1 & 5 \\
                0 & 1 & 1 & 2 \\
                \color{orange}0 & \color{orange}0 & \color{orange}0 & \color{orange}0
                \end{array}
                \right)
            </MathDisplay>
            <MathDisplay>
                \text{Wähle } x_3 = {\color{orange}t}:
                \quad
                \Rightarrow
                \quad
                \begin{align*}
                x_2 + t &= 2 \\
                x_2 &= \color{darkgreen}2-t
                \end{align*}
                \quad
                \Rightarrow
                \quad
                \begin{array}{r}
                x_1 + {\color{darkgreen}4 - 2t} + t = 5 \\
                x_1 = {\color{purple}1+t}
                \end{array}
            </MathDisplay>
            <MathDisplay>
                \boxed{
                \Rightarrow L_t = \{({\color{purple}1+t}; {\color{darkgreen}2-t}; {\color{orange}t}:)\}
                }
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Unterbestimmtes LGS">
        <InfoBox color="green">
            <p v-mathjax>
                Ein unterbestimmtes LGS hat weniger Gleichungen als Unbekannte.
            </p>
            <p v-mathjax>
                So ein LGS ist niemals eindeutig Lösbar, sondern hat in der Regel <strong>unendlich viele
                Lösungen</strong>.
            </p>
        </InfoBox>
        <Subsection title="Beispiel">
            <MathDisplay>
                \begin{alignat*} {3}
                2 &x_1+ &x_2 + &x_3 = 3 \\
                &&x_2 - &x_3 = 1 \\
                \end{alignat*}
            </MathDisplay>
            <MathDisplay>
                \text{Wähle } x_3 = t:
                \quad
                \begin{align*}
                \Rightarrow x_2 &= 1 + t \\
                \Rightarrow x_1 &= 1 - t
                \end{align*}
            </MathDisplay>
            <MathDisplay>
                \boxed{
                \Rightarrow
                L_t = {(1-t; 1+t; t)}
                }
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Überbestimmtes LGS">
        <InfoBox color="green">
            <p v-mathjax>
                Ein überbestimmtes LGS hat mehr Gleichungen als Unbekannte.
            </p>
            <p v-mathjax>
                In diesen Fällen kann das LGS eine Lösung, keine Lösung oder unendlich viele Lösungen haben.
            </p>
        </InfoBox>
        <Subsection title="Vorgehen">
            <p v-mathjax>
                Man klammert eine Lösung aus und löst das restliche LGS
            </p>
        </Subsection>
        <Subsection title="Beispiel">
            <MultiColumnLayout :columns=2>
                <template #col-1>
                    <MathDisplay>
                        \begin{alignat*} {5}
                        (&x_1 + &&x_2 + &&x_3 = 1) \\
                        &x_1 - &2 &x_2 + &2 &x_3 = 2 \\
                        -&x_1 - &&x_2 + &&x_3 = 7 \\
                        &&&x_2 - &&x_3 = -3
                        \end{alignat*}
                    </MathDisplay>
                </template>
                <template #col-2>
                    <MathDisplay>
                        \begin{align*}
                        &\left(
                        \begin{array}{ccc|c}
                        1 & -2 & 2 & 2 \\
                        -1 & -1 & 1 & 7 \\
                        0 & 1 & -1 & -3
                        \end{array}
                        \right)
                        \\
                        \begin{array}{r}
                        \\\textit{IIb) = I) + II)}
                        \\\textit{}
                        \\\textit{}
                        \end{array}
                        &\left(
                        \begin{array}{ccc|c}
                        1 & -2 & 2 & 2 \\
                        0 & -3 & 3 & 9 \\
                        0 & 1 & -1 & -3
                        \end{array}
                        \right)
                        \\
                        \begin{array}{r}
                        \\\textit{}
                        \\\textit{IIIb) = }3\textit{III)+IIb)}
                        \end{array}
                        &\left(
                        \begin{array}{ccc|c}
                        1 & -2 & 2 & 2 \\
                        0 & -3 & 3 & 9 \\
                        0 & 0 & 0 & 0
                        \end{array}
                        \right)
                        \end{align*}
                    </MathDisplay>
                </template>
            </MultiColumnLayout>
            <MathDisplay>
                \text{Wähle } x_3 = t:
                \qquad
                \begin{align*}
                \Rightarrow x_2 &= -3 + t \\
                \Rightarrow x_1 &=-4
                \end{align*}
            </MathDisplay>
            <MathDisplay>
                \text{Probe mit ausgeklammerten Gleichungen:}
                \qquad
                \begin{align*}
                t + (-3 + t) - 4 = 1 \\
                2t - 7 = 1 \\
                t = 4
                \end{align*}
            </MathDisplay>
            <MathDisplay>
                \boxed{
                \Rightarrow \text{Eindeutige Lösung mit } t = 4 : L={(-4;1;4)}
                }
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="LGS mit Parameter auf der rechten Seite">
        <InfoBox color="green">
            <p v-mathjax>
                Stehen bei einem LGS auf der rechten Seite ein oder mehrere <strong>Parameter</strong>, so wird das LGS
                auf
                Stufenform gebracht und schrittweise nach $x_n, x_{n-1}, …, x_1$ aufgelöst.
            </p>
            <p v-mathjax>
                Dabei ist die Lösungsmenge in der Regel von dem oder den Parametern abhängig.
            </p>
        </InfoBox>
        <Subsection title="Beispiel">
            <MathDisplay>
                \begin{align*}
                \begin{array}{r}
                \textit{I)} \\
                \textit{II)} \\
                \textit{III)}
                \end{array}
                &\left(
                \begin{array}{ccc|c}
                3 & -2 & 1 & 2r \\
                5 & -4 & -1 & 2 \\
                1 & 3 & -2 & 2r+6
                \end{array}
                \right)

                \\

                \begin{array}{r}
                \textit{} \\
                \textit{IIb) = II) + I)} \\
                \textit{IIIb) = III) + }2\textit{I)}
                \end{array}
                &\left(
                \begin{array}{ccc|c}
                3 & -2 & 1 & 2r \\
                8 & -6 & 0 & 2r+2 \\
                7 & -1 & 0 & 6r+6
                \end{array}
                \right)

                \\
                \begin{array}{r}
                \textit{} \\
                \textit{} \\
                \textit{IIIc) = }6\textit{IIIb) - IIb)}
                \end{array}

                &\left(
                \begin{array}{ccc|c}
                3 & -2 & 1 & 2r \\
                8 & -6 & 0 & 2r+2 \\
                34 & 0 & 0 & 34r+34
                \end{array}
                \right)
                \end{align*}
            </MathDisplay>
            <MathDisplay>
                \begin{align*}
                \Rightarrow &x_1 = r+1 \\
                \Rightarrow &x_2 = r+1 \\
                \Rightarrow &x_3 = r-1
                \end{align*}
            </MathDisplay>
            <MathDisplay>
                \boxed{
                \Rightarrow L=\{(r+1; r+1; r-1)\}
                }
            </MathDisplay>
        </Subsection>
    </ContentSection>
</template>

<style scoped>

</style>