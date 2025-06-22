<script setup lang="ts">
defineProps<{
  title: string,
}>();
</script>

<template>
  <h1 class="chapter-title">
    {{ title }}
  </h1>
</template>

<style scoped>
.chapter-title {
  background: linear-gradient(to bottom, var(--color-text-headings, #ffffff), #e0e0e0 65%, #1a1a1a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-size: 5rem;
  margin-top: 0;
  margin-bottom: 2rem;
  letter-spacing: 0.05em;
  display: flex;
  justify-content: center;
}
</style>