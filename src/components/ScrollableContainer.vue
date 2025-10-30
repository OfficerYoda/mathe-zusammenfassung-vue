<template>
    <div class="scrollable-container">
        <slot/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'ScrollableContainer',
});
</script>

<style scoped>
.scrollable-container {
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    max-width: 100%;
    /* Add subtle scrollbar styling */
    scrollbar-width: thin;
    scrollbar-color: var(--color-surface) transparent;
}

/* Webkit scrollbar styling for better appearance */
.scrollable-container::-webkit-scrollbar {
    height: 8px;
}

.scrollable-container::-webkit-scrollbar-track {
    background: transparent;
}

.scrollable-container::-webkit-scrollbar-thumb {
    background-color: var(--color-surface);
    border-radius: 4px;
}

.scrollable-container::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-text-secondary);
}
</style>
