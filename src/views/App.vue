<script lang="ts">
import {defineComponent, ref} from 'vue';
import ContentSection from '../components/ContentSection.vue';
import InfoBox from '../components/InfoBox.vue';
import MathDisplay from '../components/MathDisplay.vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useRoute} from "vue-router";

export default defineComponent({
  name: 'App',
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
    ]);

    const route = useRoute();

    // reload page when already on /report
    function handleReportClick(event: MouseEvent) {
      if (route.path === '/report') {
        event.preventDefault();
        window.location.reload();
      }
    }

    return {chapters, handleReportClick};
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
      <div class="placeholder-content">
        <span>Chapter Overview (coming soon)</span>
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
  color: #ffffff;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.search-button:hover {
  color: #6ab04c;
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
  color: #e0e0e0;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.chapter-link:hover {
  background-color: #2a2a2a;
  color: #ffffff;
}

/* Used dynamically as active-class by Vue Router */
.chapter-link--active {
  background-color: #6ab04c !important;
}

.sidebar-bottom-section {
  margin-top: auto;
  padding: 1.5rem;
  border-top: 1px solid #333;
  text-align: center;
}

.report-error-button {
  display: inline-block;
  background-color: #ff6347;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.report-error-button:hover {
  background-color: #ce3f22;
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
}

.content-area > * {
  max-width: 1024px;
  width: 100%;
  height: 100%;
}

/* ---Right Sidebar--- */
.right-sidebar {
  justify-content: center;
}

.placeholder-content {
  color: #888;
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