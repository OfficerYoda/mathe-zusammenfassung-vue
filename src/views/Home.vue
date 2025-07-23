<script setup lang="ts">
import ChapterTitle from "../components/ChapterTitle.vue";
import ContentSection from "../components/ContentSection.vue";
import MultiColumnLayout from "../components/MultiColumnLayout.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useSearch} from '../composables/useSearch.ts';
import Subsection from "../components/Subsection.vue";
import InfoBox from "../components/InfoBox.vue";

const {activateSearch} = useSearch();

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
    <div class="home-search-bar" @click="activateSearch">
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" class="home-search-icon"/>
      <span class="home-search-text">Suchen...</span>
    </div>
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
    <InfoBox color="blue" style="margin-top: 2.5rem">
      <p>
        Der Inhalt dieser Zusammenfassung basiert auf dem Bildungsplan für das ABI 25. Meines Wissens nach hat sich für
        das ABI 26 nichts geändert. Falls dies doch der Fall ist bitte ich euch mich zu kontaktieren (siehe unten),
        damit ich den Inhalt aktualisieren kann.<br>
        Die paar wenigen Taschenrechner-Befehle beziehen sich auf den TI-30X Pl
      </p>
    </InfoBox>
  </ContentSection>

  <ContentSection title="Downloads">
    <p><i>Coming soon...</i></p>
  </ContentSection>

  <ContentSection title="Sonstiges">
    <Subsection title="Weiter Zusammenfassungen">
      <p>
        <strong>Geo: </strong><a href="https://geo.officeryoda.de" target="_blank" rel="noopener">geo.officeryoda.de</a><br>
        <strong>Deutsch: </strong><a href="https://deutsch.officeryoda.de" target="_blank" rel="noopener">deutsch.officeryoda.de</a><br>
        <strong>Mathe (alt): </strong><a href="https://mathe.archive.officeryoda.dev" target="_blank" rel="noopener">mathe.archive.officeryoda.dev</a><br>
      </p>
      <InfoBox color="yellow">
        Diese Zusammenfassungen entsprechen nicht dem Standard dieser Seite und können Fehler enthalten.<br>
        Die Geo-Zusammenfassung ist zudem nicht vollständig, da ich Themen weggelassen habe, die ich für offensichtlich
        gehalten habe.<br>
        Die Deutsch-Zusammenfassung hingegen sollte alles enthalten (sofern ihr die gleichen Bücher habt und sich sonst
        auch nichts geändert hat) und basiert
        auf der Zusammenfassung von Lea.<br>
      </InfoBox>
    </Subsection>
    <MultiColumnLayout :columns=2>
      <template #col-1>
        <Subsection title="Kontakt">
          <p>
            <strong>Autor: </strong>Liam Verzano<br>
            <strong>E-Mail: </strong>contact@officeryoda.dev<br>
            <strong>GitHub: </strong><a href="https://github.com/OfficerYoda/mathe-zusammenfassung-vue" target="_blank"
                                        rel="noopener">OfficerYoda/mathe-zusammenfassung-vue</a><br>
          </p>
        </Subsection>
      </template>
      <template #col-2>
        <Subsection title="Lizenz">
          <p>
            Diese Seite und ihre Inhalte stehen unter der Creative Commons Attribution 4.0 International (CC BY 4.0)
            Lizenz.<br>
            Der vollständige Lizenztext ist <a href="/LICENSE.txt">hier</a> verfügbar.
          </p>
        </Subsection>
      </template>
    </MultiColumnLayout>
  </ContentSection>
</template>

<style scoped>
.chapter-tiles {
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

.home-search-bar {
  width: 100%;
  display: flex;
  align-items: center;
  background: var(--color-background);
  border: 3px solid var(--color-surface);
  border-radius: 16px;
  padding: 1.5rem 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: var(--color-text-headings);
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.10);
  transition: box-shadow 0.2s, border-color 0.2s;
}

.home-search-bar:hover {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
  border-color: var(--color-text-secondary);
}

.home-search-icon {
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
}

.home-search-text {
  font-size: 2rem;
  color: var(--color-text-secondary);
  font-weight: 500;
}
</style>