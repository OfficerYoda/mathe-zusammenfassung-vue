<template>
  <div class="info-box" :class="boxClass">
    <div class="info-icon">{{ icon }}</div>
    <div class="info-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import type { PropType } from 'vue';

// Define the allowed types for the info box
type BoxType = 'blue' | 'green' | 'yellow' | 'red';

export default defineComponent({
  name: 'InfoBox',
  props: {
    type: {
      type: String as PropType<BoxType>,
      required: true,
      // Validator ensures that only the allowed types are used
      validator: (value: string) => ['blue', 'green', 'yellow', 'red'].includes(value),
    },
  },
  setup(props) {
    // Computes the CSS class based on the type prop
    const boxClass = computed(() => `info-box-${props.type}`);

    // Computes the icon based on the type prop
    const icon = computed(() => {
      switch (props.type) {
        case 'blue':
          return '💬';
        case 'green':
          return '💡';
        case 'yellow':
          return '⚠️';
        case 'red':
          return '❗';
        default:
          return '💡';
      }
    });

    return {
      boxClass,
      icon,
    };
  },
});
</script>

<style scoped>
/* Base styles for all boxes */
.info-box {
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  margin-top: 1rem;
  align-items: flex-start;
  gap: 1rem;
  border-left-width: 5px;
  border-left-style: solid;
}

.info-icon {
  font-size: 1.5rem;
  line-height: 1;
  flex-shrink: 0;
}

.info-content {
  padding: 0;
  flex-grow: 1;
  color: var(--color-text-primary);
}

.info-content * {
  margin-top: 0;
  margin-bottom: 0;
}

/* Color styles for each box type */

.info-box-blue {
  background-color: color-mix(in srgb, var(--color-info) 40%, transparent);
  border-left-color: var(--color-info);
}

.info-box-green {
  background-color: color-mix(in srgb, var(--color-success) 40%, transparent);
  border-left-color: var(--color-success);
}

.info-box-yellow {
  background-color: color-mix(in srgb, var(--color-warning) 40%, transparent);
  border-left-color: var(--color-warning);
}

.info-box-red {
  background-color: color-mix(in srgb, var(--color-error) 40%, transparent);
  border-left-color: var(--color-error);
}
</style>