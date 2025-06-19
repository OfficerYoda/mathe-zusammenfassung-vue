<template>
  <section class="content-section" :id="sectionId">
    <h2 class="section-title">{{ title }}</h2>
    <div class="section-content">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import {kebabUriCase} from "../utils/string.ts";

export default defineComponent({
  name: 'ContentSection',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const sectionId = computed(() => kebabUriCase(props.title));
    return {sectionId};
  },
});
</script>

<style scoped>
.content-section {
  background-color: #1a1a1a; /* Sehr dunkler Hintergrund für die Sektion */
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.section-title {
  color: #ffffff; /* Weißer Titel */
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #333; /* Trennlinie unter dem Titel */
  padding-bottom: 0.8rem;
  letter-spacing: 0.05em;
}

.section-content {
  color: #d0d0d0; /* Hellerer Text für den Inhalt */
  line-height: 1.8;
  font-size: 1.1rem;
}
</style>