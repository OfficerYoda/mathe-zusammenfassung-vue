<template>
    <div
        ref="containerRef"
        class="clickable-image-container"
        :class="{ 'loading': !imageLoaded && inView }"
    >
        <img
            v-if="inView"
            :alt="alt"
            :aria-label="`Click to view ${alt} in full size`"
            :src="src"
            class="clickable-image"
            role="button"
            tabindex="0"
            v-bind="$attrs"
            @click="handleClick"
            @keydown.enter="handleClick"
            @keydown.space.prevent="handleClick"
            @load="onImageLoad"
            @error="onImageError"
        />
        <div v-else class="image-placeholder">
            <div class="placeholder-content">
                <span>Loading image...</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { inject, ref, onMounted, onUnmounted, nextTick } from 'vue'

interface Props {
    src: string
    alt: string
}

const props = defineProps<Props>()

// Emit events for layout shift tracking
const emit = defineEmits<{
    imageLoaded: []
    layoutShift: []
}>()

// Inject lightbox functionality directly in the component
const lightbox = inject('lightbox') as { openLightbox: (src: string, alt: string) => void }

// Inject layout shift handler
const layoutShiftHandler = inject('layoutShiftHandler') as { handleImageLayoutShift: () => void }

const containerRef = ref<HTMLElement>()
const inView = ref(false)
const imageLoaded = ref(false)
let observer: IntersectionObserver | null = null
let previousHeight = 0

const handleClick = () => {
    if (lightbox && imageLoaded.value) {
        lightbox.openLightbox(props.src, props.alt)
    }
}

const onImageLoad = async () => {
    const currentHeight = containerRef.value?.offsetHeight || 0
    const hasLayoutShift = Math.abs(currentHeight - previousHeight) > 5 // 5px threshold

    imageLoaded.value = true
    emit('imageLoaded')

    if (hasLayoutShift) {
        await nextTick()
        emit('layoutShift')
        layoutShiftHandler.handleImageLayoutShift() // Notify layout shift
    }
}

const onImageError = () => {
    imageLoaded.value = false
    console.warn(`Failed to load image: ${props.src}`)
}

onMounted(() => {
    if (!containerRef.value) return

    // Track initial height for layout shift detection
    previousHeight = containerRef.value.offsetHeight

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    inView.value = true
                    // Once the image is in view, we can stop observing
                    observer?.unobserve(entry.target)
                }
            })
        },
        {
            // Start loading when the image is 100px away from being visible
            rootMargin: '100px',
            threshold: 0
        }
    )

    observer.observe(containerRef.value)
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})
</script>

<style scoped>
.clickable-image-container {
    position: relative;
    display: inline-block;
    min-height: 200px; /* Increased minimum height for better estimation */
    width: 100%;
    max-width: 100%;
}

.clickable-image {
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border-radius: 4px;
    opacity: 0;
    animation: fadeIn 0.3s ease-in-out forwards;
    width: 100%;
    height: auto;
    display: block;
}

.clickable-image:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.clickable-image:focus {
    outline: 2px solid #007acc;
}

.clickable-image:active {
    transform: scale(0.98);
}

.image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px; /* Match container min-height */
    width: 100%;
    background-color: #f5f5f5;
    border: 1px dashed #ccc;
    border-radius: 4px;
    color: #666;
    box-sizing: border-box;
}

.placeholder-content {
    text-align: center;
    padding: 1rem;
    background-color: var(--color-background);
}

.loading .image-placeholder {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes shimmer {
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
}
</style>
