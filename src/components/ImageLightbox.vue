<template>
    <Teleport to="body">
        <div
            v-if="isOpen"
            aria-labelledby="lightbox-title"
            aria-modal="true"
            class="lightbox-overlay"
            role="dialog"
            tabindex="0"
            @click="closeLightbox"
            @keydown.esc="closeLightbox"
        >
            <div class="lightbox-content" @click.stop>
                <button
                    aria-label="Close lightbox"
                    class="lightbox-close"
                    @click="closeLightbox"
                >
                    ×
                </button>
                <div class="lightbox-image-container">
                    <img
                        :alt="imageAlt"
                        :src="imageSrc"
                        class="lightbox-image"
                        @error="onImageError"
                        @load="onImageLoad"
                    />
                    <div v-if="loading" class="lightbox-loading">
                        Loading...
                    </div>
                    <div v-if="error" class="lightbox-error">
                        Failed to load image
                    </div>
                </div>
                <div v-if="imageAlt" id="lightbox-title" class="lightbox-caption">
                    {{ imageAlt }}
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts" setup>
import {nextTick, ref, watch} from 'vue'

interface Props {
    isOpen: boolean
    imageSrc: string
    imageAlt: string
}

interface Emits {
    (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const loading = ref(true)
const error = ref(false)

const closeLightbox = () => {
    emit('close')
}

const onImageLoad = () => {
    loading.value = false
    error.value = false
}

const onImageError = () => {
    loading.value = false
    error.value = true
}

// Reset loading state when image changes
watch(() => props.imageSrc, () => {
    loading.value = true
    error.value = false
})

// Focus the overlay when opened for keyboard navigation
watch(() => props.isOpen, async (isOpen) => {
    if (isOpen) {
        await nextTick()
        const overlay = document.querySelector('.lightbox-overlay') as HTMLElement
        overlay?.focus()
    }
})

// Prevent body scrolling when lightbox is open
watch(() => props.isOpen, (isOpen) => {
    if (isOpen) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
})
</script>

<style scoped>
.lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 2rem;
    animation: fadeIn 0.2s ease-out;
}

.lightbox-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: slideIn 0.2s ease-out;
}

.lightbox-close {
    position: absolute;
    top: -3rem;
    right: -1rem;
    background: none;
    border: none;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    width: 2.2rem;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
    z-index: 1001;
}

.lightbox-close:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.lightbox-image-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
}

.lightbox-image {
    max-width: 100%;
    max-height: calc(90vh - 4rem);
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border: 2px solid var(--color-surface);
}

.lightbox-caption {
    color: white;
    text-align: center;
    margin-top: 1rem;
    font-size: 1.1rem;
    max-width: 80vw;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.5rem 1rem;
    border-radius: 4px;
}

.lightbox-loading,
.lightbox-error {
    position: absolute;
    color: white;
    font-size: 1.2rem;
    text-align: center;
}

.lightbox-error {
    color: #ff6b6b;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: scale(0.9) translateY(20px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

@media (max-width: 850px) {
    .lightbox-overlay {
        padding: 1rem;
    }

    .lightbox-close {
        top: -2.5rem;
        right: -0.5rem;
        font-size: 1.5rem;
        width: 2.5rem;
        height: 2.5rem;
    }

    .lightbox-caption {
        font-size: 1rem;
        max-width: 90vw;
    }
}
</style>
