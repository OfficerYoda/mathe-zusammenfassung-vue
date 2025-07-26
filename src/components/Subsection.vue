<script lang="ts" setup>
import {inject} from 'vue';

defineProps<{ title: string }>();

const insideInfoBox = inject('insideInfoBox', false);
</script>

<template>
    <!-- Only use subsection-title class when outside an InfoBox. This is because it makes the parsing from Notion easier -->
    <h3 v-mathjax :class="!insideInfoBox ? 'subsection-title' : ''">{{ title }}</h3>
    <slot/>
</template>

<style scoped>
.subsection-title {
    color: var(--color-text-headings);
    font-size: 1.6rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--color-surface);
}
</style>
