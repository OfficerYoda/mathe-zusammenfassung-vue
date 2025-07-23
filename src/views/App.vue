<script lang="ts">
import {defineComponent, ref, computed, provide} from 'vue';
import ContentSection from '../components/ContentSection.vue';
import InfoBox from '../components/InfoBox.vue';
import MathDisplay from '../components/MathDisplay.vue';
import ImageLightbox from '../components/ImageLightbox.vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useRoute} from "vue-router";
import chaptersData from '../data/chapters.json';
import {kebabUriCase} from "../utils/string.ts";
import {useImageLightbox} from "../composables/useImageLightbox.ts";
import {useSearch} from "../composables/useSearch.ts";
import router from "../router";

export default defineComponent({
  name: 'App',
  components: {
    FontAwesomeIcon,
    ContentSection,
    InfoBox,
    MathDisplay,
    ImageLightbox,
  },
  setup() {
    const chapters = ref([
      {name: 'Notation', path: '/notation'},
      {name: 'Gleichungen', path: '/gleichungen'},
      {name: 'Analysis', path: '/analysis'},
      {name: 'Geometrie', path: '/geometrie'},
      {name: 'Stochastik', path: '/stochastik'},
    ]);

    const route = useRoute();

    function handleReportClick(event: MouseEvent) {
      if (route.path === '/report') {
        event.preventDefault();
        window.location.reload();
      }
    }

    // Find current major chapter by route
    const currentChapter = computed(() => {
      return chapters.value.find(ch => route.path.startsWith(ch.path));
    });

    // Get minor chapters for current major chapter, including all subfiles (e.g., Analysis_*)
    const currentTopics = computed(() => {
      if (!currentChapter.value) return [];
      const chapterName = currentChapter.value.name;
      // Collect topics from the main chapter
      let topics: string[] = [];
      if (chaptersData[chapterName as keyof typeof chaptersData]) {
        topics = topics.concat(chaptersData[chapterName as keyof typeof chaptersData]);
      }
      // Collect topics from all subchapter keys starting with the main chapterName
      Object.keys(chaptersData).forEach(key => {
        if (key.startsWith(chapterName)) {
          topics = topics.concat(chaptersData[key as keyof typeof chaptersData]);
        }
      });
      // Remove duplicates and falsy values
      return Array.from(new Set(topics.filter(Boolean)));
    });

    // Generate link for a topic
    function getTopicLink(topic: string) {
      if (!currentChapter.value) return '#';
      return `${currentChapter.value.path}#${kebabUriCase(topic)}`;
    }

    // Smooth scroll to element by hash
    function smoothScrollToHash(hash: string) {
      if (!hash) return;
      const id = hash.replace(/^#/, '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    }

    // Image lightbox functionality
    const {isLightboxOpen, currentImageSrc, currentImageAlt, openLightbox, closeLightbox} = useImageLightbox();

    // Provide lightbox functionality to all child components
    provide('lightbox', {openLightbox});

    // Search functionality
    const {
      isSearchActive,
      searchQuery,
      searchResults,
      activateSearch,
      deactivateSearch,
      handleSearchResultClick,
      handleSearchKeydown,
      setSearchHelpers,
      activeResultIndex
    } = useSearch();

    setSearchHelpers(smoothScrollToHash, router);

    // Wrapper for search result click to pass smoothScrollToHash
    function onSearchResultClick(link: string) {
      handleSearchResultClick(link);
    }

    return {
      chapters,
      handleReportClick,
      currentChapter,
      currentTopics,
      getTopicLink,
      smoothScrollToHash,
      isLightboxOpen,
      currentImageSrc,
      currentImageAlt,
      closeLightbox,
      isSearchActive,
      searchQuery,
      searchResults,
      activateSearch,
      deactivateSearch,
      handleSearchResultClick: onSearchResultClick,
      handleSearchKeydown,
      activeResultIndex
    };
  }
});
</script>

<template>
  <div class="app-layout">
    <aside class="sidebar left-sidebar">
      <div class="sidebar-top-section">
        <div class="icon-row">
          <RouterLink to="/" class="icon-btn home-btn">
            <FontAwesomeIcon icon="fa-house"/>
          </RouterLink>
          <div class="search-bar" @click="activateSearch">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" class="search-bar-icon"/>
            <input
                v-if="isSearchActive"
                v-model="searchQuery"
                class="search-input"
                type="text"
                placeholder="Suchen..."
                @blur="deactivateSearch"
                @keydown="handleSearchKeydown"
            />
            <span v-else class="search-bar-text">Suchen</span>
          </div>
        </div>
        <nav class="chapter-navigation">
          <ul>
            <li v-for="chapter in chapters" :key="chapter.path">
              <RouterLink
                  :to="chapter.path"
                  class="chapter-link"
                  active-class="chapter-link--active"
                  exact-active-class="chapter-link--active"
              >
                {{ chapter.name }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="sidebar-bottom-section">
        <RouterLink to="/report" class="report-error-button" @click="handleReportClick">
          Fehler melden
        </RouterLink>
      </div>
    </aside>
    <main class="content-area">
      <div id="app-container">
        <RouterView/>
      </div>
    </main>
    <aside class="sidebar right-sidebar">
      <div v-if="currentChapter" class="chapter-overview">
        <h2 class="chapter-overview-title">Unterkapitel</h2>
        <RouterLink
            v-for="topic in currentTopics"
            :key="topic"
            :to="getTopicLink(topic)"
            class="chapter-overview-link"
            @click.native.prevent="smoothScrollToHash(getTopicLink(topic).split('#')[1] ? '#' + getTopicLink(topic).split('#')[1] : '')"
        >
          {{ topic }}
        </RouterLink>
      </div>
      <div v-else class="placeholder-content">
        <span>Chapter Overview (select a chapter)</span>
      </div>
    </aside>

    <!-- Global Image Lightbox -->
    <ImageLightbox
        :is-open="isLightboxOpen"
        :image-src="currentImageSrc"
        :image-alt="currentImageAlt"
        @close="closeLightbox"
    />

    <!-- Search Results Dropdown -->
    <div v-if="isSearchActive" class="search-popup-overlay" @click="deactivateSearch">
      <div class="search-popup" @click.stop>
        <div class="search-popup-header">
          <div class="search-popup-input-container">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" class="search-popup-icon"/>
            <input
                v-model="searchQuery"
                class="search-popup-input"
                type="text"
                placeholder="Suchen..."
                @keydown="handleSearchKeydown"
                ref="searchInput"
            />
          </div>
          <button class="search-popup-close" @click="deactivateSearch">
            <FontAwesomeIcon icon="fa-solid fa-xmark"/>
          </button>
        </div>
        <div class="search-popup-content">
          <div
              v-for="(result, idx) in searchResults"
              :key="result.link"
              class="search-result-item"
              :class="{ 'search-result-item--active': idx === activeResultIndex }"
              @click="handleSearchResultClick(result.link)"
          >
            <span class="search-result-topic">{{ result.topic }} </span>
            <span class="search-result-chapter">&nbsp;{{ result.chapter }}</span>
          </div>
          <div v-if="searchQuery && searchResults.length === 0" class="search-result-empty">
            Keine Ergebnisse gefunden.
          </div>
          <div v-if="!searchQuery" class="search-result-placeholder">
            Geben Sie einen Suchbegriff ein...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

/* ---Left Sidebar--- */
.sidebar {
  width: 15vw;
  min-width: 180px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a;
  color: #e0e0e0;
  /* Make sidebar fixed */
  height: 100vh;
  position: sticky;
  top: 0;
  z-index: 2;
}

.icon-row {
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.icon-btn {
  background: none;
  color: var(--color-text-headings);
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.3rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  border-radius: 4px;
}

.icon-btn:focus {
  outline: none;
}

.icon-btn:hover {
  background-color: var(--color-surface);
  color: var(--color-text-headings);
}

.home-btn {
  margin-right: 0.5rem;
}

.search-bar {
  flex: 1;
  display: flex;
  align-items: center;
  border: 2px solid var(--color-surface);
  border-radius: 6px;
  padding: 0.5rem 1rem;
  background: var(--color-background);
  min-width: 0;
  height: 2.5rem;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.3s background, 0.3s border-color;
}

.search-bar:hover {
  background: var(--color-surface);
  border-color: var(--color-background-secondary);
}

.search-bar-icon {
  font-size: 1.3rem;
  color: var(--color-text-headings);
  margin-right: 0.75rem;
}

.search-bar-text {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.search-input {
  background: transparent;
  border: none;
  color: var(--color-text-primary);
  font-size: 1.1rem;
  outline: none;
  flex: 1;
  min-width: 0;
}

.search-input::placeholder {
  color: var(--color-text-secondary);
}

.chapter-navigation ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.chapter-navigation li {
  margin-bottom: 0.75rem;
}

.chapter-link {
  display: block;
  padding: 0.75rem 1rem;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  color: var(--color-text-primary);
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.chapter-link:hover {
  background-color: var(--color-surface);
  color: var(--color-text-headings);
}

/* Used dynamically as active-class by Vue Router */
.chapter-link--active {
  background-color: var(--color-accent) !important;
  color: var(--color-background) !important;
}

.sidebar-bottom-section {
  margin-top: auto;
  padding: 1.5rem;
  border-top: 1px solid var(--color-surface);
  text-align: center;
}

.report-error-button {
  display: inline-block;
  background-color: color-mix(in srgb, var(--color-error) 80%, transparent);
  color: var(--color-text-primary);
  padding: 0.75rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s, color 0.2s;
}

.report-error-button:hover {
  background-color: var(--color-error);
  color: var(--color-text-headings);
}

/* ---Center Area--- */
.content-area {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  min-width: 0;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.content-area::-webkit-scrollbar {
  display: none;
}

.content-area > * {
  max-width: 1024px;
  width: 100%;
  height: 100%;
}

/* ---Right Sidebar--- */
.right-sidebar {
  text-align: left;
  color: var(--color-text-primary);
  padding: 1rem;
}

.chapter-overview-title {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
}

.chapter-overview-link {
  color: var(--color-text-secondary);
  line-height: 1rem;
  text-decoration: none;
  transition: color 0.2s, padding-right 0.2s, padding-left 0.2s;
  padding: 0.25rem 0.25rem 0.25rem 1.5rem;
  border-radius: 4px;
  display: block;
  text-align: right;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chapter-overview-link:hover {
  color: var(--color-text-primary);
  padding-right: 1.5rem;
  padding-left: 0.25rem;
  background-color: var(--color-surface);
}

.placeholder-content {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  text-align: center;
  padding: 1rem;
  opacity: 0.7;
}

/* --- Search Results Dropdown --- */
.search-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10vh;
  padding-bottom: 10vh;
  z-index: 1000;
}

.search-popup {
  background-color: var(--color-background);
  border-radius: 8px;
  padding: 1.5rem;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
}

.search-popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-shrink: 0;
}

.search-popup-input-container {
  flex: 1;
  display: flex;
  align-items: center;
  background-color: var(--color-background);
  border: 2px solid var(--color-surface);
  border-radius: 8px;
  padding: 0.5rem 1rem;
}

.search-popup-icon {
  font-size: 1.2rem;
  color: var(--color-text-headings);
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}

.search-popup-input {
  background: transparent;
  border: none;
  color: var(--color-text-primary);
  font-size: 1.2rem;
  outline: none;
  flex: 1;
}

.search-popup-input::placeholder {
  color: var(--color-text-secondary);
}

.search-popup-close {
  background: none;
  border: none;
  color: var(--color-text-headings);
  cursor: pointer;
  font-size: 1.5rem;
}

.search-popup-content {
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem 0;
  min-height: 0;
}

.search-result-item {
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 4px;
}

.search-result-item:hover, .search-result-item--active {
  background-color: var(--color-surface);
}

.search-result-topic {
  font-weight: 500;
}

.search-result-chapter {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}

.search-result-empty {
  padding: 0.5rem 1rem;
  text-align: center;
  color: var(--color-text-secondary);
}

.search-result-placeholder {
  padding: 0.5rem 1rem;
  text-align: center;
  color: var(--color-text-secondary);
  opacity: 0.7;
}

/* --- Responsive Design --- */

/* Hide right sidebar below 1100px */
@media (max-width: 1100px) {
  .right-sidebar {
    display: none;
  }
}

/* Stack left sidebar on top and content below at 700px and below */
@media (max-width: 700px) {
  .app-layout {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
  }

  .sidebar.left-sidebar {
    width: 100vw;
    min-width: 0;
    max-width: none;
    height: auto;
    position: static;
    z-index: 2;
    padding: 0.5rem 1rem;
  }

  .sidebar-top-section {
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon-row {
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  .home-btn {
    margin-right: 0.5rem;
  }

  .search-bar {
    flex: 1;
    min-width: 0;
    padding: 0.5rem 0.75rem;
    height: 2.2rem;
  }

  .chapter-navigation ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    justify-content: center;
  }

  .chapter-navigation li {
    margin-bottom: 0;
    margin-right: 0;
    padding: 0.5rem;
  }

  .chapter-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin: 0;
    min-width: 0;
    width: auto;
    white-space: nowrap;
    font-size: 1.5rem;
  }

  .sidebar-bottom-section {
    margin-top: 0;
    padding: 0;
    border-top: none;
    text-align: center;
    position: absolute;
    top: 0.5rem;
    right: 1rem;
  }

  .report-error-button {
    margin-top: 0.5rem;
  }

  .content-area {
    padding: 0.8rem;
    height: auto;
    min-height: 0;
  }
}
</style>