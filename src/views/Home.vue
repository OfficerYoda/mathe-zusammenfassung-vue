<script setup lang="ts">
import ChapterTitle from "../components/ChapterTitle.vue";
import ContentSection from "../components/ContentSection.vue";
import MultiColumnLayout from "../components/MultiColumnLayout.vue";

const chapters = [
  {name: 'Analysis', route: '/analysis', color: '#4f6bf7', bgImage: 'url(/images/cover_analysis.webp)'},
  {name: 'Geometrie', route: '/geometrie', color: '#dc2b71', bgImage: 'url(/images/cover_geometrie.webp)'},
  {name: 'Stochastik', route: '/stochastik', color: '#8E4FF7', bgImage: 'url(/images/cover_stochastik.webp)'},
  {name: 'Notation', route: '/notation', color: '#4FF78E', bgImage: 'url(/images/cover_notation.webp)'},
  {name: 'Gleichungen', route: '/gleichungen', color: '#F78E4F', bgImage: 'url(/images/cover_gleichungen.webp)'},
];
</script>

<template>
  <ChapterTitle title="Mathe ABI"/>

  <ContentSection title="Übersicht">
    <div class="chapter-tiles">
      <MultiColumnLayout :columns=3>
        <template #col-1>
          <RouterLink
              :key="chapters[0].route"
              :to="chapters[0].route"
              class="chapter-tile"
              :style="{
              borderColor: chapters[0].color,
              backgroundImage: chapters[0].bgImage
        }"
          >
            <span class="chapter-tile__name">{{ chapters[0].name }}</span>
          </RouterLink>
        </template>
        <template #col-2>
          <RouterLink
              :key="chapters[1].route"
              :to="chapters[1].route"
              class="chapter-tile"
              :style="{
              borderColor: chapters[1].color,
              backgroundImage: chapters[1].bgImage
        }"
          >
            <span class="chapter-tile__name">{{ chapters[1].name }}</span>
          </RouterLink>
        </template>
        <template #col-3>
          <RouterLink
              :key="chapters[2].route"
              :to="chapters[2].route"
              class="chapter-tile"
              :style="{
              borderColor: chapters[2].color,
              backgroundImage: chapters[2].bgImage
        }"
          >
            <span class="chapter-tile__name">{{ chapters[2].name }}</span>
          </RouterLink>
        </template>
      </MultiColumnLayout>
      <MultiColumnLayout :columns=2>
        <template #col-1>
          <RouterLink
              :key="chapters[3].route"
              :to="chapters[3].route"
              class="chapter-tile chapter-tile--wide"
              :style="{
              borderColor: chapters[3].color,
              backgroundImage: chapters[3].bgImage
        }"
          >
            <span class="chapter-tile__name">{{ chapters[3].name }}</span>
          </RouterLink>
        </template>
        <template #col-2>
          <RouterLink
              :key="chapters[4].route"
              :to="chapters[4].route"
              class="chapter-tile chapter-tile--wide"
              :style="{
              borderColor: chapters[4].color,
              backgroundImage: chapters[4].bgImage
        }"
          >
            <span class="chapter-tile__name">{{ chapters[4].name }}</span>
          </RouterLink>
        </template>
      </MultiColumnLayout>
    </div>
  </ContentSection>
</template>

<style scoped>
.chapter-tiles {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.chapter-tile {
  justify-content: center;
  display: flex;
  align-items: flex-end;
  width: 100%;
  min-height: 350px;
  border: 3px solid;
  border-radius: 18px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  text-decoration: none;
}

.chapter-tile--wide {
  min-height: 280px;
}

.chapter-tile:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
  transform: scale(1.02);
}

.chapter-tile__name {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-headings);
  background-color: rgba(0, 0, 0, 0.25);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  -moz-box-shadow: 0 0 0.75rem rgba(0, 0, 0, .5);
  -webkit-box-shadow: 0 0 0.75rem rgba(0, 0, 0, .5);
  box-shadow: 0 0 0.75rem rgba(0, 0, 2, .5);
  padding: 0 1rem 0.5rem;
  z-index: 1;
  text-decoration: none;
}
</style>