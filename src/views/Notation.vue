<script setup lang="ts">
import ContentSection from "../components/ContentSection.vue";
import ChapterTitle from "../components/ChapterTitle.vue";
import SubsectionTitle from "../components/SubsectionTitle.vue";
import DefinitionTable from "../components/DefinitionTable.vue";
import InfoBox from "../components/InfoBox.vue";
import {mathSetsContent} from "../data/tableSetsContent.ts";
import {mathIntervalsContent} from "../data/tableIntervalsConent.ts";
</script>

<template>
  <ChapterTitle title="Notation"/>
  <ContentSection title="Mengen">
    <p>
      Eine Menge ist eine Zusammenfassung von einzelnen Objekten (meist Zahlen)
      ohne bestimmte Reihenfolge.
    </p>

    <SubsectionTitle text="Beispiele"/>
    <p>
      Jeder dieser Beispielmengen enthält alle Elemente der Mengen, die in der Tabelle darüber liegen.
    </p>
    <DefinitionTable :items="mathSetsContent"/>
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
    <DefinitionTable :items="mathIntervalsContent"/>
  </ContentSection>
</template>

<style scoped>
</style>