<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <h3 class="subsection-title">{{ title }}</h3>
  <slot/>
</template>

<style scoped>
.subsection-title {
  color: var(--color-text-headings);
  font-size: 1.6rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-surface);
}
</style>