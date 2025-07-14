<script setup lang="ts">
import {defineProps, computed} from 'vue';

const props = defineProps({
  columns: {
    type: Number,
    default: 2
  },
  imageLayout: {
    type: Boolean,
    default: false
  },
  imageWidth: {
    type: Number,
    default: 100
  },
  firstColumnWidth: {
    type: Number,
    default: null
  }
});

const layoutClass = computed(() =>
    props.imageLayout ? 'multi-column-layout-image' : 'multi-column-layout'
);

const columnArray = computed(() => Array.from({length: props.columns}, (_, i) => i + 1));
</script>

<template>
  <div
    :class="layoutClass"
    :style="{
      '--columns': props.columns,
      '--image-width': props.imageWidth + '%',
      ...(props.firstColumnWidth && !props.imageLayout ? {'--first-column-width': props.firstColumnWidth + '%'} : {})
    }"
  >
    <div
        v-for="col in columnArray"
        :key="col"
        class="column-item"
        :class="{
          'image-column': props.imageLayout && col === props.columns,
          'first-column': !props.imageLayout && col === 1 && props.firstColumnWidth
        }"
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

.multi-column-layout-image .column-item.image-column img,
.multi-column-layout-image .column-item.image-column :deep(img) {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  border-radius: 5px;
  margin-left: auto;
  margin-right: 0;
}

.column-item {
  flex: 1 1 calc(100% / var(--columns, 2) - 2rem);
}

.column-item.first-column {
  flex: 0 1 calc(var(--first-column-width, 0%) - 2rem);
  max-width: var(--first-column-width, none);
}

.multi-column-layout-image .column-item.image-column {
  flex: 0 1 calc(var(--image-width) / var(--columns, 2) - 2rem);
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

  /* Reset flex-basis for column layout on smaller screens */
  .multi-column-layout-image .column-item.image-column {
    flex-basis: auto;
  }

  .column-item,
  .column-item.first-column {
    max-width: 100%;
    flex-basis: auto;
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
