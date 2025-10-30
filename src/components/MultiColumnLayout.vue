<script lang="ts" setup>
import {computed, defineProps, nextTick, onMounted, ref, watch} from 'vue';

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
    },
    imageColumns: {
        type: Array,
        default: () => []
    }
});

const layoutClass = computed(() =>
    props.imageLayout ? 'multi-column-layout-image' : 'multi-column-layout'
);

const columnArray = computed(() => Array.from({length: props.columns}, (_, i) => i + 1));

// Calculate widths for image columns if imageLayout is true and imageColumns is set
const imageColumnCount = computed(() =>
    props.imageLayout && Array.isArray(props.imageColumns) && props.imageColumns.length > 0
        ? props.imageColumns.length
        : (props.imageLayout ? 1 : 0)
);

const otherColumnsWidth = computed(() => {
    if (props.imageLayout && props.imageWidth > 100 && props.columns > imageColumnCount.value) {
        const remaining = Math.max(0, 100 - props.imageWidth * imageColumnCount.value);
        return (remaining / (props.columns - imageColumnCount.value));
    }
    return null;
});

const root = ref<HTMLElement | null>(null);

const isMultiImageColumns = computed(() =>
    props.imageLayout &&
    Array.isArray(props.imageColumns) &&
    props.imageColumns.length > 1
);

watch(isMultiImageColumns, (val) => {
    nextTick(() => {
        if (root.value) {
            if (val) {
                root.value.classList.add('multi-image-columns');
            } else {
                root.value.classList.remove('multi-image-columns');
            }
        }
    });
});

onMounted(() => {
    if (root.value && isMultiImageColumns.value) {
        root.value.classList.add('multi-image-columns');
    }
});
</script>

<template>
    <div
        ref="root"
        :class="layoutClass"
        :style="{
      '--columns': props.columns,
      '--image-width': props.imageWidth + '%',
      ...(props.firstColumnWidth && !props.imageLayout ? {'--first-column-width': props.firstColumnWidth + '%'} : {}),
      ...(otherColumnsWidth !== null ? {'--other-columns-width': otherColumnsWidth + '%'} : {})
    }"
    >
        <div
            v-for="col in columnArray"
            :key="col"
            :class="{
          'image-column': props.imageLayout && (
            (Array.isArray(props.imageColumns) && props.imageColumns.includes(col)) ||
            (!Array.isArray(props.imageColumns) || props.imageColumns.length === 0) && col === props.columns
          ),
          'first-column': !props.imageLayout && col === 1 && props.firstColumnWidth,
          'other-image-column': props.imageLayout && !(
            (Array.isArray(props.imageColumns) && props.imageColumns.includes(col)) ||
            (!Array.isArray(props.imageColumns) || props.imageColumns.length === 0) && col === props.columns
          )
        }"
            class="column-item"
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

/* Only apply top padding to image column if not a multi-image column layout */
.multi-column-layout-image:not(.multi-image-columns) .column-item.image-column {
    padding-top: 1rem;
}

.column-item {
    flex: 1 1 calc(100% / var(--columns, 2) - 2rem);
}

.column-item.first-column {
    flex: 0 1 calc(var(--first-column-width, 0%) - 2rem);
    max-width: var(--first-column-width, none);
}

.multi-column-layout-image .column-item.image-column {
    /* Remove padding-top here, now handled conditionally above */
    flex: 0 1 calc(var(--image-width) / var(--columns, 2) - 2rem);
}

/* shrink other columns if image width > 100% */
.multi-column-layout-image .column-item.other-image-column {
    flex: 1 1 clamp(
        0%,
        var(--other-columns-width, calc((100% - var(--image-width, 100%)) / max(1, calc(var(--columns, 2) - 1)))),
        100%
    );
    min-width: 0;
}

.column-item ul {
    padding-left: 1.5rem;
    list-style-type: none;
}

.column-item ul li {
    margin-bottom: 0.7rem;
}
</style>