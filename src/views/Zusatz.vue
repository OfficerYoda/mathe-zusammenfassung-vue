<script lang="ts" setup>

import MathDisplay from "../components/MathDisplay.vue";
import InfoBox from "../components/InfoBox.vue";
import ContentSection from "../components/ContentSection.vue";
import Subsection from "../components/Subsection.vue";
import ChapterTitle from "../components/ChapterTitle.vue";
import MultiColumnLayout from "../components/MultiColumnLayout.vue";
</script>

<template>
    <ChapterTitle title="Zusatz"/>

    <InfoBox color="blue">
        <p>
            Die Kapitel hier sind entweder nicht Abiturrelevant oder Abiturrelevant (deutlich gekennzeichnet) aber so
            irrelevant, dass man sie eigentlich nicht braucht, selbst wenn man 15 Punkte schreiben will.
        </p>
    </InfoBox>
    <br>

    <ContentSection title="Integralfunktion">
        <InfoBox color="blue"><p>Theoretisch Abiturrelevant</p></InfoBox>
        <InfoBox color="green">
            <p v-mathjax>
                Die <strong>Integralfunktion</strong> $J_u(x)$ zu einer integrierbaren Funktion $f$ ist definiert als:
            </p>
            <MathDisplay>
                J_u(x) = \int_u^x f(t) \,dt
            </MathDisplay>
            <p>
                Es gilt:
            </p>
            <p v-mathjax>
                $J_u'(x) = f(x)$, d.h. $J_u$ ist eine Stammfunktion von $f$.
            </p>
            <p v-mathjax>
                $J_u(u) = 0$, d.h. jede Integralfunktion<strong> </strong>hat eine Nullstelle.
            </p>
        </InfoBox>
        <InfoBox color="green">
            <p v-mathjax>
                $f(x) = x \ \ \Rightarrow \ \ F(x) = \frac12x^2 + 10$ hat keine Nullstelle und ist daher keine
                Integralfunktion
                (aber trotzdem eine Stammfunktion von $f$).
            </p>
        </InfoBox>
        <Subsection title="Beispiel">
            <p v-mathjax>
                $f(x) = 3e^x-2$ mit $u=0$, $J_u$ als integralfreien Term darstellen:
            </p>
            <MathDisplay>
                \begin{align*}
                J_0(x) = \int_0^x3e^t-2 \,dt &=
                \left[3e^t-2t\right]_0^x \\ &=
                3e^x-2x-(3e^0-2\cdot0) \\ &=
                \underbrace{3e^x - 2x - 3 }_{\textsf{integralfreier Term}}
                \end{align*}
            </MathDisplay>
        </Subsection>
    </ContentSection>

    <ContentSection title="Differentialquotient">
        <InfoBox color="blue"><p>Theoretisch Abiturrelevant</p></InfoBox>
        <InfoBox color="green">
            <p v-mathjax>
                Eine Funktion $f'$ ist an der Stelle $a$ definiert, wenn der Differenzquotient $\frac{f(a+h)-f(a)}{h}$
                für $h \to 0$ gegen einen Grenzwert strebt. In diesem Fall ist $f$ an der Stelle $a$ differenzierbar.
            </p>
            <MathDisplay>
                f'(a) = \lim_{h \to 0} \frac{f(a+h)-f(a)}{h}
            </MathDisplay>
        </InfoBox>
        <Subsection title="nicht alle Funktionen sind (überall) differenzierbar">
            <MultiColumnLayout :columns=2>
                <template #col-1>
                    <MathDisplay>
                        \begin{array}{}
                        f(x) &= \sqrt x \\
                        f(0) &= 0\
                        \end{array}{}
                        \quad\Rightarrow\quad
                        \begin{align*}
                        f'(x) &= \frac1{2\sqrt x}\\
                        f'(0) &= \frac10 \Rightarrow\times
                        \end{align*}
                    </MathDisplay>
                </template>
                <template #col-2>
                    <p v-mathjax>
                        Die Wurzelfunktion ist zwar für $x=0$ definiert, jedoch nicht differenzierbar.
                    </p>
                </template>
            </MultiColumnLayout>
        </Subsection>
        <Subsection title="Beispiel">
            <MathDisplay>
                \begin{align*}
                f(x) &= x^2\\

                f'(a) &= \lim_{h \to 0} \frac{(a+h)^2 - a^2}{h}\\

                f'(a) &= \lim_{h \to 0} \frac{a^2 + 2ah + h^2 - a^2}{h}\\
                f'(a) &= \lim_{h \to 0} 2a+h\\

                f'(a) &=2a
                \end{align*}
            </MathDisplay>
            <InfoBox color="blue">
                <p>Dass man das im Abi machen muss, ist sehr unwahrscheinlich, aber grob zu wissen, wie es geht, kann
                    nicht schaden.</p>
            </InfoBox>
        </Subsection>
    </ContentSection>

    <ContentSection title="Quotientenregel">
        <InfoBox color="blue"><p>Nicht Abiturrelevant</p></InfoBox>
        <InfoBox color="green">
            <MathDisplay>
                f = \frac uv \quad\Rightarrow\quad
                f’ = \frac{u' \cdot v - u \cdot v'}{v^2}
            </MathDisplay>
        </InfoBox>
        <Subsection title="Beispiel">
            <MathDisplay>
                \begin{align*}{l}
                f(x) &= \frac{x^2}{x^2-3}\\
                f'(x) &= \frac{2x\cdot(x^2-3)-x^2\cdot2x}{(x^2-3)^2}
                \end{align*}
                \qquad
                \begin{array}{l}
                u(x) \ = x^2\\
                u'(x) = 2x
                \end{array}
                \qquad
                \begin{array}{l}
                v(x) \ = x^2-3\\
                v'(x) = 2x
                \end{array}
            </MathDisplay>
        </Subsection>
    </ContentSection>
</template>

<style scoped>

</style>