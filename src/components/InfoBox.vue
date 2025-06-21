<template>
  <div class="info-box" :class="boxClass">
    <div class="info-icon">{{ icon }}</div>
    <div class="info-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';

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
  margin-bottom: 1.5rem;
  border-radius: 4px;
  display: flex;
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
  flex-grow: 1;
  color: #e0e0e0;
}

/* Color styles for each box type */

.info-box-blue {
  background-color: #2c3e50;
  border-left-color: #3498db;
}

.info-box-green {
  background-color: #2e3b33;
  border-left-color: #6ab04c;
}

.info-box-yellow {
  background-color: #4d3d20;
  border-left-color: #f39c12;
}

.info-box-red {
  background-color: #4a2c2c;
  border-left-color: #e74c3c;
}
</style>