<script setup lang="ts">

import ContentSection from "../components/ContentSection.vue";
import MathDisplay from "../components/MathDisplay.vue";
import ChapterTitle from "../components/ChapterTitle.vue";
</script>

<template>
  <ChapterTitle title="Gleichungen"/>

  <ContentSection title="Gleichungen">
    <MathDisplay>
      \begin{align}
      2x &= 10 \\
      x &= 5
      \end{align}
    </MathDisplay>
  </ContentSection>
</template>

<style scoped>

</style>