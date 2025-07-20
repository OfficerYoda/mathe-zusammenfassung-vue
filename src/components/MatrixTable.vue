<script setup lang="ts">
import {defineProps, computed} from "vue";
import type {MatrixTableData} from "../data/matrixTableContents";

const props = defineProps<{
  // Option 1: Direct props
  columnHeaders?: Array<string>;
  rowHeaders?: Array<string>;
  data?: Array<Array<string>>;
  topLeftCell?: string;

  // Option 2: Load from external data
  matrixData?: MatrixTableData;
}>();

// Computed properties to handle both data sources
const tableData = computed(() => {
  if (props.matrixData) {
    return props.matrixData;
  }

  return {
    columnHeaders: props.columnHeaders || [],
    rowHeaders: props.rowHeaders || [],
    data: props.data || [],
    topLeftCell: props.topLeftCell
  };
});

const hasColumnHeaders = computed(() => tableData.value.columnHeaders && tableData.value.columnHeaders.length > 0);
const hasRowHeaders = computed(() => tableData.value.rowHeaders && tableData.value.rowHeaders.length > 0);
</script>

<template>
  <table class="matrix-table">
    <thead v-if="hasColumnHeaders">
    <tr>
      <th v-if="hasRowHeaders" class="top-left-cell">{{ tableData.topLeftCell || '' }}</th>
      <th v-for="header in tableData.columnHeaders" :key="header" v-mathjax>
        <span v-mathjax v-html="header"></span>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(rowData, rowIndex) in tableData.data" :key="hasRowHeaders ? tableData.rowHeaders[rowIndex] : rowIndex">
      <th v-if="hasRowHeaders" class="row-header" v-mathjax>
        <span v-mathjax v-html="tableData.rowHeaders[rowIndex]"></span>
      </th>
      <td v-for="(cellData, colIndex) in rowData" :key="colIndex" v-mathjax class="data-cell">
        <span v-mathjax v-html="cellData"></span>
      </td>
    </tr>
    <!-- If no row headers and no column headers, just render data rows -->
    <tr v-if="!hasRowHeaders && !hasColumnHeaders" v-for="(rowData, rowIndex) in tableData.data" :key="rowIndex">
      <td v-for="(cellData, colIndex) in rowData" :key="colIndex" v-mathjax class="data-cell">
        <span v-mathjax v-html="cellData"></span>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
.matrix-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
/*  background-color: rgba(from var(--color-background-secondary) r g b, 0.8); */
  color: var(--color-text-primary);
}

.matrix-table th,
.matrix-table td {
  border: 1px solid var(--color-surface);
  padding: 0.3rem 1rem;
  text-align: center;
  vertical-align: middle;
}

.matrix-table th {
  background-color: rgb(from var(--color-background) r g b / 0.8);
  font-weight: bold;
}

.top-left-cell {
  background-color: rgb(from var(--color-background) r g b / 0.8);
}

.row-header {
  background-color: rgb(from var(--color-background) r g b / 0.8);
  text-align: left;
  font-weight: bold;
}

.matrix-table tbody tr:nth-child(even) .data-cell {
  background-color: rgb(from #282828 r g b / 0.8);
}

.matrix-table tbody tr:nth-child(odd) .data-cell {
  background-color: rgb(from var(--color-background-secondary) r g b / 0.8);
}

.data-cell {
  font-size: 1rem;
  min-width: 60px;
}
</style>