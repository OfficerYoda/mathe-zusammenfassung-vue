<script setup lang="ts">

import ContentSection from "../components/ContentSection.vue";
import InfoBox from "../components/InfoBox.vue";
</script>

<template>
  <ContentSection title="Notation">
    <InfoBox type="blue">Das ist ein Kommentar.</InfoBox>
    <InfoBox type="green">Das ist eine Definition.</InfoBox>
    <InfoBox type="yellow">Das ist ein wichtiger Hinweis.</InfoBox>
    <InfoBox type="red">Das muss unbedingt gemacht werden.</InfoBox>
  </ContentSection>
</template>

<style scoped>

</style>