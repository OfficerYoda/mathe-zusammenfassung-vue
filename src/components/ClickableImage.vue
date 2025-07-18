<template>
  <img
      :src="src"
      :alt="alt"
      class="clickable-image"
      @click="handleClick"
      @keydown.enter="handleClick"
      @keydown.space.prevent="handleClick"
      tabindex="0"
      role="button"
      :aria-label="`Click to view ${alt} in full size`"
      v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import {inject} from 'vue'

interface Props {
  src: string
  alt: string
}

const props = defineProps<Props>()

// Inject lightbox functionality directly in the component
const lightbox = inject('lightbox') as { openLightbox: (src: string, alt: string) => void }

const handleClick = () => {
  if (lightbox) {
    lightbox.openLightbox(props.src, props.alt)
  }
}
</script>

<style scoped>
.clickable-image {
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border-radius: 4px;
}

.clickable-image:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.clickable-image:focus {
  outline: 2px solid#007acc;
}

.clickable-image:active {
  transform: scale(0.98);
}
</style>
