<script lang="ts" setup>
import ChapterTitle from "../components/ChapterTitle.vue";
import ContentSection from "../components/ContentSection.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useSearch } from '../composables/useSearch.ts';
import Subsection from "../components/Subsection.vue";
import InfoBox from "../components/InfoBox.vue";
import MultiColumnLayout from "../components/MultiColumnLayout.vue";
import DownloadButton from "../components/DownloadButton.vue";

const { activateSearch } = useSearch();

const chapters = [
  { name: 'Analysis', route: '/analysis', color: '#4f6bf7', bgImage: 'url(/images/cover_analysis.webp)' },
  { name: 'Geometrie', route: '/geometrie', color: '#dc2b71', bgImage: 'url(/images/cover_geometrie.webp)' },
  { name: 'Stochastik', route: '/stochastik', color: '#8E4FF7', bgImage: 'url(/images/cover_stochastik.webp)' },
  { name: 'Notation', route: '/notation', color: '#4FF78E', bgImage: 'url(/images/cover_notation.webp)' },
  { name: 'Gleichungen', route: '/gleichungen', color: '#F78E4F', bgImage: 'url(/images/cover_gleichungen.webp)' },
  { name: 'Zusatz', route: '/zusatz', color: '#F78E4F', bgImage: 'url(/images/cover_zusatz.webp)' },
];

// 3D tilt effect handlers
const handleMouseMove = (event: MouseEvent) => {
  const card = event.currentTarget as HTMLElement;
  const rect = card.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const mouseX = event.clientX - centerX;
  const mouseY = event.clientY - centerY;

  const rotateX = (mouseY / rect.height) * -20; // Max 30 degrees
  const rotateY = (mouseX / rect.width) * 20;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
};

const handleMouseLeave = (event: MouseEvent) => {
  const card = event.currentTarget as HTMLElement;
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
};
</script>

<template>
  <ChapterTitle title="Mathe ABI" />

  <ContentSection title="Übersicht">
    <div class="home-search-bar" @click="activateSearch">
      <FontAwesomeIcon class="home-search-icon" icon="fa-solid fa-magnifying-glass" />
      <span class="home-search-text">Suchen...</span>
    </div>
    <div class="chapter-tiles">
      <RouterLink v-for="chapter in chapters" :key="chapter.route" :style="{
        borderColor: chapter.color,
        backgroundImage: chapter.bgImage
      }" :to="chapter.route" class="chapter-tile" @mouseleave="handleMouseLeave" @mousemove="handleMouseMove">
        <span class="chapter-tile-title">{{ chapter.name }}</span>
      </RouterLink>
    </div>
    <InfoBox color="blue" style="margin-top: 2.5rem">
      <p>
        Der Inhalt dieser Zusammenfassung basiert auf dem Bildungsplan für das ABI 25. Meines Wissens nach hat
        sich für
        das ABI 26 nichts geändert. Falls dies doch der Fall ist bitte ich euch mich zu kontaktieren (siehe
        unten),
        damit ich den Inhalt aktualisieren kann.<br>
        Die paar wenigen Taschenrechner-Befehle beziehen sich auf den TI-30X Pl
      </p>
    </InfoBox>
  </ContentSection>

  <ContentSection title="Downloads">
    <MultiColumnLayout :columns=2>
      <template #col-1>
        <Subsection title="Dark mode">
          <div class="download-buttons">
            <DownloadButton v-for="chapter in chapters" :key="chapter.route" :title="chapter.name"
              :filePath="`pdfs/dark/${chapter.name}_dark.pdf`" />
          </div>
        </Subsection>
      </template>
      <template #col-2>
        <Subsection title="Light mode">
          <div class="download-buttons">
            <DownloadButton v-for="chapter in chapters" :key="chapter.route" :title="chapter.name"
              :filePath="`pdfs/light/${chapter.name}_light.pdf`" />
          </div>
        </Subsection>
      </template>
    </MultiColumnLayout>
    <Subsection title="Vorlage zum ausdrucken">
      <div class="download-buttons-templates">
        <DownloadButton v-for="chapter in chapters" :key="chapter.route" :title="chapter.name"
          :filePath="`pdfs/concatenated/${chapter.name}_concatenated_a4.pdf`" />
      </div>
    </Subsection>
  </ContentSection>

  <ContentSection title="Infoboxen">
    <InfoBox color="blue">
      <p>Blaue Boxen sind Kommentare meinerseits.</p>
    </InfoBox>
    <InfoBox color="green">
      <p>Grüne Boxen sind Definitionen, Sätze oder Merksätze.</p>
    </InfoBox>
    <InfoBox color="yellow">
      <p>Gelbe Boxen sind Hinweise auf die man achten sollte.</p>
    </InfoBox>
    <InfoBox color="red">
      <p>Rote Boxen sind Sachen, die man unbedingt machen muss.</p>
    </InfoBox>
  </ContentSection>

  <ContentSection title="Sonstiges">
    <Subsection title="Weiter Zusammenfassungen">
      <p>
        <strong>Geo: </strong><a href="https://geo.officeryoda.de" rel="noopener"
          target="_blank">geo.officeryoda.de</a><br>
        <strong>Deutsch: </strong><a href="https://deutsch.officeryoda.de" rel="noopener"
          target="_blank">deutsch.officeryoda.de</a><br>
        <strong>Mathe (alt): </strong><a href="https://mathe.archive.officeryoda.dev" rel="noopener"
          target="_blank">mathe.archive.officeryoda.dev</a><br>
      </p>
      <InfoBox color="yellow">
        Diese Zusammenfassungen entsprechen nicht dem Standard dieser Seite und können Fehler enthalten.<br>
        Die Geo-Zusammenfassung ist zudem nicht vollständig, da ich Themen weggelassen habe, die ich für
        offensichtlich gehalten habe.<br>
        Die Deutsch-Zusammenfassung hingegen sollte alles enthalten (sofern ihr die gleichen Bücher habt und
        sich sonst auch nichts geändert hat) und basiert auf der Zusammenfassung von Lea.<br>
      </InfoBox>
    </Subsection>
    <MultiColumnLayout :columns=2>
      <template #col-1>
        <Subsection title="Kontakt">
          <p>
            <strong>Autor: </strong>Liam Verzano<br>
            <strong>E-Mail: </strong>contact@officeryoda.dev<br>
            <strong>GitHub: </strong><a href="https://github.com/OfficerYoda/mathe-zusammenfassung-vue" rel="noopener"
              target="_blank">OfficerYoda/mathe-zusammenfassung-vue</a><br>
          </p>
        </Subsection>
      </template>
      <template #col-2>
        <Subsection title="Lizenz">
          <p>
            Diese Seite und ihre Inhalte stehen unter der Creative Commons Attribution 4.0 International (CC
            BY 4.0)
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 1.5rem;
  perspective: 1000px;
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
  transition: box-shadow 0.3s ease-out, transform 0.2s ease-out;
  cursor: pointer;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  transform-style: preserve-3d;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
}

.chapter-tile:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.24);
}

.chapter-tile-title {
  font-size: 2rem;
  font-weight: 700;
  color: #e0e0e0;
  /* hardcoded color (dark mode heading color) because light mode color is hard to read */
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.25);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0 0 0.75rem rgba(0, 0, 0, .5);
  -webkit-box-shadow: 0 0 0.75rem rgba(0, 0, 0, .5);
  box-shadow: 0 0 0.75rem rgba(0, 0, 0, .5);
  padding: 0 1rem 0.5rem;
  z-index: 1;
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

.download-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.download-buttons-templates {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
}

@media (max-width: 1024px) {
  .chapter-tiles {
    grid-template-columns: repeat(2, 1fr);
  }

  .download-buttons-templates {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .chapter-tile-title {
    font-size: 3rem;
  }
}

@media (max-width: 400px) {
  .download-buttons-templates {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
