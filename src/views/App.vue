<script lang="ts">
import {defineComponent, ref, computed} from 'vue';
import ContentSection from '../components/ContentSection.vue';
import InfoBox from '../components/InfoBox.vue';
import MathDisplay from '../components/MathDisplay.vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useRoute} from "vue-router";
import chaptersData from '../data/chapters.json';
import {kebabUriCase} from "../utils/string.ts";

export default defineComponent({
  name: 'App',
  methods: {kebabUriCase},
  components: {
    FontAwesomeIcon,
    ContentSection,
    InfoBox,
    MathDisplay,
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

    // Get minor chapters for current major chapter
    const currentTopics = computed(() => {
      if (!currentChapter.value) return [];
      return chaptersData[currentChapter.value.name as keyof typeof chaptersData] || [];
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

    return {
      chapters,
      handleReportClick,
      currentChapter,
      currentTopics,
      getTopicLink,
      smoothScrollToHash
    };
  }
});
</script>

<template>
  <div class="app-layout">
    <aside class="sidebar left-sidebar">
      <div class="sidebar-top-section">
        <div class="search-icon-wrapper">
          <button class="search-button">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
          </button>
        </div>
        <nav class="chapter-navigation">
          <ul>
            <li v-for="chapter in chapters" :key="chapter.path">
              <router-link
                  :to="chapter.path"
                  class="chapter-link"
                  active-class="chapter-link--active"
                  exact-active-class="chapter-link--active"
              >
                {{ chapter.name }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="sidebar-bottom-section">
        <router-link to="/report" class="report-error-button" @click="handleReportClick">
          Fehler melden
        </router-link>
      </div>
    </aside>
    <main class="content-area">
      <div id="app-container">
        <router-view></router-view>
      </div>
    </main>
    <aside class="sidebar right-sidebar">
      <div v-if="currentChapter" class="chapter-overview">
        <h2 class="chapter-overview-title">Unterkapitel</h2>
        <router-link
            v-for="topic in currentTopics"
            :key="topic"
            :to="getTopicLink(topic)"
            class="chapter-overview-link"
            @click.native.prevent="smoothScrollToHash(getTopicLink(topic).split('#')[1] ? '#' + getTopicLink(topic).split('#')[1] : '')"
        >
          {{ topic }}
        </router-link>
      </div>
      <div v-else class="placeholder-content">
        <span>Chapter Overview (select a chapter)</span>
      </div>
    </aside>
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

.search-icon-wrapper {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.search-button {
  background: none;
  border: none;
  color: var(--color-text-headings);
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.search-button:hover {
  color: var(--color-accent);
}

.search-button:focus {
  outline: none;
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
  text-decoration: none;
  transition: color 0.2s, padding-right 0.2s, padding-left 0.2s;
  padding: 0.25rem 0.75rem 0.25rem 1.5rem;
  border-radius: 4px;
  display: block;
  text-align: right;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chapter-overview-link:hover {
  color: var(--color-text-primary);
  padding-right: 1.75rem;
  padding-left: 0.5rem;
  background-color: var(--color-surface);
}

.placeholder-content {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  text-align: center;
  padding: 1rem;
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

  .sidebar-top-section {
    padding-bottom: 1rem;
  }

  .sidebar.left-sidebar {
    width: 100vw;
    min-width: 0;
    max-width: none;
    height: auto;
    position: static;
    z-index: 2;
  }

  .chapter-navigation ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0;
    margin: 0;
    justify-content: center;
  }

  .chapter-navigation li {
    margin-bottom: 0;
    margin-right: 0;
  }

  .chapter-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin: 0;
    min-width: 0;
    width: auto;
    white-space: nowrap;
  }

  .sidebar-bottom-section {
    display: none;
  }

  .content-area {
    padding: 1rem;
    height: auto;
    min-height: 0;
  }
}
</style>