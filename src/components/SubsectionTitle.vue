<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <h3 class="subsection-title">{{ text }}</h3>
</template>

<style scoped>
.subsection-title {
  color: #ffffff;
  font-size: 1.6rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #333;
}
</style>