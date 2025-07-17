<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps<{
  items: Array<{ notation: string; description: string }>
}>();
</script>

<template>
  <table class="definition-table">
    <thead>
    <tr>
      <th>Notation</th>
      <th>Beschreibung</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in props.items" :key="item.notation">
      <td v-mathjax class="notation-cell">
        <span v-mathjax v-html="item.notation"></span>
      </td>
      <td v-mathjax>{{ item.description }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
.definition-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: var(--color-background-secondary);
  color: var(--color-text-primary);
}

.definition-table th,
.definition-table td {
  border: 1px solid var(--color-surface);
  padding: 0.3rem 1rem;
  text-align: left;
  vertical-align: middle;
}

.definition-table th {
  background-color: var(--color-background);
  font-weight: bold;
}

.definition-table tr:nth-child(even) {
  background-color: #282828
}

.matrix-table tr:nth-child(odd) {
  background-color: var(--color-background-secondary);
}

.notation-cell {
  font-size: 1.1rem;
  width: 35%;
}
</style>
