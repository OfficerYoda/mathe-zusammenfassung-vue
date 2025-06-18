<template>
  <div class="info-box">
    <div class="info-icon">💡</div>
    <div class="info-content">
      <slot></slot> </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InfoBox',
});
</script>

<style scoped>
.info-box {
  background-color: #2e3b33;
  border-left: 5px solid #6ab04c;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
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
</style>