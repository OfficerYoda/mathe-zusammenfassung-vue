<template>
  <section class="content-section" :id="sectionId">
    <h2
      class="section-title"
      @click="handleTitleClick"
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
      @focus="hovered = true"
      @blur="hovered = false"
      tabindex="0"
    >
      {{ title }}
      <img
        src="/link.svg"
        class="section-indicator"
        :class="{ 'clicked': indicatorClicked }"
        :style="{ opacity: (hovered || indicatorClicked) ? 1 : 0 }"
        alt=""
        aria-hidden="true"
      />
    </h2>
    <div class="section-content">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref} from 'vue';
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
    const hovered = ref(false);

    // Smooth scroll to element with given id
    const smoothScrollToSection = (id: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
    };

    const handleTitleClick = (event: MouseEvent) => {
      event.preventDefault();
      // Change the URL hash without jumping
      const newUrl = `#${sectionId.value}`;
      history.replaceState(null, '', newUrl);
      navigator.clipboard?.writeText(window.location.origin + window.location.pathname + newUrl);

      smoothScrollToSection(sectionId.value);
      indicatorClicked.value = true;
      setTimeout(() => {
        indicatorClicked.value = false;
      }, 100);
    };

    onMounted(() => {
      // On initial load, if hash exists, smooth scroll
      if (window.location.hash) {
        setTimeout(() => {
          smoothScrollToSection(window.location.hash.slice(1));
        }, 0);
      }
    });

    return {sectionId, handleTitleClick, indicatorClicked, hovered};
  },
});
</script>

<style scoped>
.content-section {
  background-color: var(--color-background-secondary);
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.section-title {
  color: var(--color-text-headings);
  font-size: 2.2rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--color-surface);
  padding-bottom: 0.8rem;
  letter-spacing: 0.05em;
  display: flex;
  justify-content: space-between;
  transition: border-color 0.2s;
}

.section-indicator {
  margin-right: 0.7em;
  margin-top: 1rem;
  flex-shrink: 0;
  align-items: center;
  width: 1em;
  height: 1em;
  filter: brightness(0) saturate(100%) invert(55%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), filter 0.15s;
  display: inline-flex;
}

.section-indicator.clicked {
  filter: brightness(2) saturate(200%) invert(20%) sepia(80%) hue-rotate(220deg) contrast(150%);
}

.section-title:hover {
  border-bottom: 2px solid var(--color-text-secondary);
  outline: none;
}

.section-content {
  color: var(--color-text-primary);
  line-height: 1.8;
  font-size: 1.1rem;
  margin-top: 1rem;
}
</style>