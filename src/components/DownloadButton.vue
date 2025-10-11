<template>
    <a
        :href="filePath"
        :download="fileName"
        class="download-button"
    >
        <div class="left-content">
            <FontAwesomeIcon class="pdf-icon" icon="fa-solid fa-file-pdf"/>
            <span class="download-text">{{ title }}</span>
        </div>
        <FontAwesomeIcon class="download-icon" icon="fa-solid fa-download"/>
    </a>
</template>

<script lang="ts" setup>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {computed} from 'vue';

interface Props {
    title: string;
    filePath: string;
}

const props = withDefaults(defineProps<Props>(), {});

const fileName = computed(() => props.filePath.split('/').pop() ?? 'download.pdf');
</script>

<style scoped>
.download-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background: transparent;
    color: var(--color-text-primary);
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 0.2s ease;
    border: 2px solid var(--color-text-primary);
    width: 100%;
}

.download-button:hover {
    background: var(--color-background);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.left-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.pdf-icon {
    font-size: 1rem;
}

.download-text {
    font-size: 1rem;
}

.download-icon {
    font-size: 1rem;
}

@media (max-width: 768px) {
    .download-button {
        padding: 0.6rem 1.2rem;
        min-width: 160px;
    }

    .pdf-icon,
    .download-text,
    .download-icon {
        font-size: 0.9rem;
    }
}
</style>
