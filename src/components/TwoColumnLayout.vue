<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  imageLayout: {
    type: Boolean,
    default: false
  }
});

const layoutClass = computed(() =>
  props.imageLayout ? 'two-column-layout-image' : 'two-column-layout'
);
</script>

<template>
  <div :class="layoutClass">
    <div class="column-item">
      <slot name="left"></slot>
    </div>
    <div class="column-item">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped>
.two-column-layout, .two-column-layout-image {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;
  margin-top: 0;
  padding-top: 0;
}

.two-column-layout-image .column-item:first-child {
  flex: 1 1 0;
  min-width: 0;
}

.two-column-layout-image .column-item:last-child {
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 40%;
  max-height: 400px;
}

.two-column-layout-image .column-item:last-child img,
.two-column-layout-image .column-item:last-child :deep(img) {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  border-radius: 4px;
}

.column-item {
  flex: 1 1 45%;
}

.column-item ul {
  padding-left: 1.5rem;
  list-style-type: none;
}

.column-item ul li {
  margin-bottom: 0.7rem;
}

/* Stack image below when it would take more than 50% width */
@media (max-width: 900px) {
  .two-column-layout-image {
    flex-direction: column;
    align-items: stretch;
  }

  .two-column-layout-image .column-item:first-child,
  .two-column-layout-image .column-item:last-child {
    max-width: 100%;
  }

  .two-column-layout-image .column-item:last-child {
    justify-content: flex-start;
    max-height: 400px;
  }

  .two-column-layout-image .column-item:last-child :deep(img) {
    max-width: 100%;
    height: auto;
    max-height: 400px;
    margin: 0 auto;
    width: 100%;
  }
}
</style>