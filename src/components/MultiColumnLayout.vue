<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  columns: {
    type: Number,
    default: 2
  },
  imageLayout: {
    type: Boolean,
    default: false
  }
});

const layoutClass = computed(() =>
  props.imageLayout ? 'multi-column-layout-image' : 'multi-column-layout'
);

const columnArray = computed(() => Array.from({ length: props.columns }, (_, i) => i + 1));
</script>

<template>
  <div :class="layoutClass" :style="{ '--columns': props.columns }">
    <div
      v-for="col in columnArray"
      :key="col"
      class="column-item"
      :class="{ 'image-column': props.imageLayout && col === props.columns }"
    >
      <slot :name="`col-${col}`"></slot>
    </div>
  </div>
</template>

<style scoped>
.multi-column-layout, .multi-column-layout-image {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;
  margin-top: 0;
  padding-top: 0;
}

.multi-column-layout-image .column-item.image-column {
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 40%;
  max-height: 400px;
}

.multi-column-layout-image .column-item.image-column img,
.multi-column-layout-image .column-item.image-column :deep(img) {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  border-radius: 4px;
}

.column-item {
  flex: 1 1 calc(100% / var(--columns, 2) - 2rem);
}

.column-item ul {
  padding-left: 1.5rem;
  list-style-type: none;
}

.column-item ul li {
  margin-bottom: 0.7rem;
}

@media (max-width: 900px) {
  .multi-column-layout,
  .multi-column-layout-image {
    flex-direction: column;
    align-items: stretch;
  }
  .column-item {
    max-width: 100%;
  }
  .multi-column-layout-image .column-item.image-column {
    justify-content: flex-start;
    max-height: 400px;
  }
  .multi-column-layout-image .column-item.image-column :deep(img) {
    max-width: 100%;
    height: auto;
    max-height: 400px;
    margin: 0 auto;
    width: 100%;
  }
}
</style>
