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
  background-color: #2d2d2d;
  color: #e0e0e0;
}

.definition-table th,
.definition-table td {
  border: 1px solid #444;
  padding: 0.3rem 1rem;
  text-align: left;
  vertical-align: middle;
}

.definition-table th {
  background-color: #353535;
  font-weight: bold;
}

.definition-table tr:nth-child(even) {
  background-color: #333;
}

.notation-cell {
  font-size: 1.1rem;
  width: 35%;
}
</style>
