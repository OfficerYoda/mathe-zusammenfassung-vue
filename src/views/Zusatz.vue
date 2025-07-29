<script lang="ts" setup>

import MathDisplay from "../components/MathDisplay.vue";
import InfoBox from "../components/InfoBox.vue";
import ContentSection from "../components/ContentSection.vue";
import Subsection from "../components/Subsection.vue";
import ChapterTitle from "../components/ChapterTitle.vue";
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
</template>

<style scoped>

</style>