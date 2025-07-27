<script lang="ts" setup>
defineProps<{
    title: string,
}>();
</script>

<template>
    <h1 class="chapter-title">
        {{ title }}
    </h1>
</template>

<style scoped>
.chapter-title {
    color: var(--color-text-headings);
    font-size: 5rem;
    margin-top: 0;
    margin-bottom: 2rem;
    letter-spacing: 0.05em;
    display: flex;
    justify-content: center;
}
</style>