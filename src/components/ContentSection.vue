<template>
  <section class="content-section" :id="sectionId">
    <h2 class="section-title" @click="handleTitleClick" tabindex="0">
      {{ title }}
      <img
        src="/link.svg"
        class="section-indicator"
        :class="{ 'clicked': indicatorClicked }"
        alt=""
        aria-hidden="true"
        style="color: #535bf2;"
      />
    </h2>
    <div class="section-content">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue';
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
    const indicatorClicked = ref(false);

    const handleTitleClick = () => {
      // Change the URL to link to the chapter
      window.location.hash = `#${sectionId.value}`;
      indicatorClicked.value = true;
      setTimeout(() => {
        indicatorClicked.value = false;
      }, 180); // Duration of the click effect in ms
    };
    return {sectionId, handleTitleClick, indicatorClicked};
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
  margin-top: 0;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #333; /* Trennlinie unter dem Titel */
  padding-bottom: 0.8rem;
  letter-spacing: 0.05em;
  display: flex;
  justify-content: space-between;
  transition: border-color 0.2s;
}

.section-indicator {
  display: none;
  margin-right: 0.7em;
  margin-top: 1rem;
  flex-shrink: 0;
  align-items: center;
  transition: opacity 0.2s, filter 0.15s;
  width: 1em;
  height: 1em;
  /* Default filter */
  filter: brightness(0) saturate(100%) invert(55%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
}

.section-indicator.clicked {
  /* Change filter on click */
  filter: brightness(2) saturate(200%) invert(20%) sepia(80%) hue-rotate(220deg) contrast(150%);
}

.section-title:hover .section-indicator {
  display: inline-flex;
}

.section-title:hover {
  border-bottom: 2px solid #c2c2c2;
  outline: none;
}

.section-content {
  color: #d0d0d0; /* Hellerer Text für den Inhalt */
  line-height: 1.8;
  font-size: 1.1rem;
}
</style>