<script setup lang="ts">
import ContentSection from "../components/ContentSection.vue";
import ChapterTitle from "../components/ChapterTitle.vue";
import Subsection from "../components/Subsection.vue";
import DefinitionTable from "../components/DefinitionTable.vue";
import InfoBox from "../components/InfoBox.vue";
import {
  definitionsContent,
  intervalsContent,
  limesContent,
  setNotationContent,
  setsContent
} from "../data/notationTableContents.ts";
import MathDisplay from "../components/MathDisplay.vue";
import TwoColumnLayout from "../components/TwoColumnLayout.vue";
</script>

<template>
  <ChapterTitle title="Notation"/>

  <ContentSection title="Mengen">
    <p>
      Jeder dieser Beispielmengen enthält alle Elemente der Mengen, die in der Tabelle darüber liegen.
    </p>
    <DefinitionTable :items="setsContent"/>
    <InfoBox type="yellow">
      <p v-mathjax>
        Ob bei $\mathbb{N}/\mathbb{R}^+$ die $0$ enthalten ist, ist nicht klar definiert. Ich werde daher immer
        $\mathbb{N}_0/\mathbb{R}^+_0$ verwenden,
        um die Null klar zu kennzeichnen. <br>
        Im Abitur wird es klar gekennzeichnet sein, ob die $0$ enthalten ist oder nicht.
      </p>
    </InfoBox>
    <InfoBox type="blue">
      <p v-mathjax>
        Was genau Mengen sind und welche Zahlenmengen ($\mathbb{N}$, $\mathbb{R}$, etc.) es gibt, ist nicht direkt
        abiturrelevant. Ich werde sie allerdings in manchen Notationen verwenden.
      </p>
    </InfoBox>
  </ContentSection>

  <ContentSection title="Intervalle">
    <p v-mathjax>
      Intervalle sind ebenfalls Mengen. So enthält $[0; 1]$ alle reellen Zahlen von $0$ bis $1$.
    </p>
    <DefinitionTable :items="intervalsContent"/>
  </ContentSection>

  <ContentSection title="Mengennotation">
    <DefinitionTable :items="setNotationContent"/>
  </ContentSection>

  <ContentSection title="Definitionsbereiche">
    <DefinitionTable :items="definitionsContent"/>
  </ContentSection>

  <ContentSection title="Limes">
    <DefinitionTable :items="limesContent"/>
  </ContentSection>

  <ContentSection title="Summenzeichen">
    <Subsection title="Beispiele">
      <MathDisplay>
        \sum_{k=1}^n a_k =
        a_1 + a_2 +...+ a_n
      </MathDisplay>
      <MathDisplay>
        \sum_{i=1}^n i \cdot \ln(i) =
        1 \cdot \ln(1) +
        2 \cdot \ln(2) +
        ... +
        n \cdot \ln(n)
      </MathDisplay>
    </Subsection>
  </ContentSection>

  <ContentSection title="Vektoren">
    <TwoColumnLayout>
      <template #left>
        <Subsection title="Schreibweise">
          <MathDisplay>
            \vec a =
            \begin{pmatrix}
            a_1 \\ a_2 \\ a_3
            \end{pmatrix}
            \qquad
            \vec b =
            \begin{pmatrix}
            b_1 \\ b_2 \\ b_3
            \end{pmatrix}
          </MathDisplay>
        </Subsection>
      </template>
      <template #right>
        <Subsection title="Addition">
          <MathDisplay>
            \vec{a} + \vec{b}
            = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix} + \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix}
            = \begin{pmatrix} a_1 + b_1 \\ a_2 + b_2 \\ a_3 + b_3 \end{pmatrix}
          </MathDisplay>
        </Subsection>
      </template>
    </TwoColumnLayout>

    <TwoColumnLayout>
      <template #left>
        <Subsection title="Skalarprodukt">
          <MathDisplay>
            \vec a \circ \vec b =
            \begin{pmatrix}
            a_1 \\ a_2 \\ a_3
            \end{pmatrix}
            \circ
            \begin{pmatrix}
            b_1 \\ b_2 \\ b_3
            \end{pmatrix}
          </MathDisplay>
        </Subsection>
      </template>
      <template #right>
        <Subsection title="Kreuzprodukt">
          <MathDisplay>
            \vec a \times \vec b =
            \begin{pmatrix}
            a_1 \\ a_2 \\ a_3
            \end{pmatrix}
            \times
            \begin{pmatrix}
            b_1 \\ b_2 \\ b_3
            \end{pmatrix}
          </MathDisplay>
        </Subsection>
      </template>
    </TwoColumnLayout>

    <TwoColumnLayout>
      <template #left>
        <Subsection title="Länge">
          <MathDisplay>
            |\vec a| = \sqrt{ {a_1}^2 + {a_2}^2 + {a_3}^2 }
          </MathDisplay>
        </Subsection>
      </template>
      <template #right>
        <Subsection title="Einheitsvektor">
          <MathDisplay>
            \vec a_0 =
            \frac 1{|\vec a|}
            \cdot
            \begin{pmatrix}
            a_1 \\ a_2 \\ a_3
            \end{pmatrix}
          </MathDisplay>
        </Subsection>
      </template>
    </TwoColumnLayout>
  </ContentSection>
</template>

<style scoped>
</style>