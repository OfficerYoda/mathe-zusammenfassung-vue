<script setup lang="ts">

import ChapterTitle from "../components/ChapterTitle.vue";
import ContentSection from "../components/ContentSection.vue";
</script>

<template>
    <ChapterTitle title="Loading..."/>

    <ContentSection title="" class="loading-section loading-delay-1">
        <br v-for="i in 20" :key="i">
    </ContentSection>

    <ContentSection title="" class="loading-section loading-delay-2">
        <br v-for="i in 13" :key="i">
    </ContentSection>

    <ContentSection title="" class="loading-section loading-delay-3">
        <br v-for="i in 16" :key="i">
    </ContentSection>
</template>

<style scoped>
.loading-section {
    position: relative;
    overflow: hidden;
}

.loading-section::before {
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    right: 0;
    height: 4rem;
    background: linear-gradient(
        to bottom,
        transparent 0%,
        var(--color-surface) 25%,
        var(--color-surface) 75%,
        transparent 100%
    );
    animation: loadingBar 2s ease-in-out infinite;
    z-index: 1;
}

.loading-delay-1::before {
    animation-delay: 0s;
}

.loading-delay-2::before {
    animation-delay: 0.3s;
}

.loading-delay-3::before {
    animation-delay: 0.6s;
}

@keyframes loadingBar {
    0% {
        top: -100%;
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        top: 100%;
        opacity: 0;
    }
}
</style>