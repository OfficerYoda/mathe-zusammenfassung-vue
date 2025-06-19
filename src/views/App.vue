<template>
  <div id="app-layout">
    <aside class="sidebar" ref="sidebarLeftRef">
      <div class="sidebar-top-section">
        <div class="search-icon-wrapper">
          <button class="search-button">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
          </button>
        </div>

        <nav class="chapter-navigation">
          <ul>
            <li v-for="chapter in chapters" :key="chapter.path">
              <router-link :to="chapter.path" class="chapter-link">
                {{ chapter.name }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="sidebar-bottom-section">
        <router-link to="/report" class="report-error-button">
          Fehler melden
        </router-link>
      </div>
    </aside>
    <main class="content-area">
      <div id="app-container">
        <router-view></router-view>
      </div>
    </main>
    <div class="right-placeholder" ref="sidebarRightRef">
      <!-- Placeholder for future subchapter overview -->
      <div class="placeholder-content">
        <span>Subchapter Overview (coming soon)</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, onBeforeUnmount} from 'vue';
import ContentSection from '../components/ContentSection.vue';
import InfoBox from '../components/InfoBox.vue';
import MathDisplay from '../components/MathDisplay.vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

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
    const sidebarLeftRef = ref<HTMLElement | null>(null);
    const sidebarRightRef = ref<HTMLElement | null>(null);

    // Prevent scroll events on sidebar
    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    onMounted(() => {
      if (sidebarLeftRef.value) {
        sidebarLeftRef.value.addEventListener('wheel', preventScroll, {passive: false});
        sidebarLeftRef.value.addEventListener('touchmove', preventScroll, {passive: false});
      }
      if (sidebarRightRef.value) {
        sidebarRightRef.value.addEventListener('wheel', preventScroll, {passive: false});
        sidebarRightRef.value.addEventListener('touchmove', preventScroll, {passive: false});
      }
    });

    onBeforeUnmount(() => {
      if (sidebarLeftRef.value) {
        sidebarLeftRef.value.removeEventListener('wheel', preventScroll);
        sidebarLeftRef.value.removeEventListener('touchmove', preventScroll);
      }
      if (sidebarRightRef.value) {
        sidebarRightRef.value.removeEventListener('wheel', preventScroll);
        sidebarRightRef.value.removeEventListener('touchmove', preventScroll);
      }
    });

    return {chapters, sidebarLeftRef: sidebarLeftRef, sidebarRightRef: sidebarRightRef};
  }
});
</script>

<style>
#app-layout {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}


.sidebar {
  width: 15vw;
  min-width: 180px;
  max-width: 320px;
  background-color: #1a1a1a;
  color: #e0e0e0;
  padding-top: 0.5rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  flex-shrink: 0;
  position: relative;
  left: 0;
  top: 0;
  height: 100vh;
  overflow: hidden;
  overscroll-behavior: contain;
  touch-action: none;
  z-index: 100;
}

.content-area {
  width: 70vw;
  min-width: 300px;
  max-width: 1024px;
  padding: 2rem;
  background-color: #0f0f0f;
  overflow-y: auto;
  height: 100vh;
}

.right-placeholder {
  width: 15vw;
  min-width: 180px;
  max-width: 320px;
  background: #181818;
  border-left: 1px solid #222;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  overscroll-behavior: contain;
  touch-action: none;
}

.placeholder-content {
  color: #888;
  font-size: 1.1rem;
  text-align: center;
  padding: 1rem;
  opacity: 0.7;
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
  color: #e0e0e0;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.chapter-link:hover {
  background-color: #2a2a2a;
  color: #ffffff;
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
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.report-error-button:hover {
  background-color: #e55335;
}

@media (max-width: 768px) {
  #app-layout {
    flex-direction: column;
  }

  .sidebar {
    position: static;
    width: 100%;
    max-width: none;
    height: auto;
    order: -1;
  }

  .sidebar-top-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sidebar-bottom-section {
    margin-top: 1.5rem;
    align-items: center;
  }

  .chapter-navigation {
    width: 100%;
    text-align: center;
  }

  .chapter-navigation ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }

  .chapter-navigation li {
    margin-bottom: 0;
  }

  .content-area {
    width: 100%;
    margin: 1rem;
    padding: 1rem;
    height: auto;
    overflow-y: visible;
  }

  .right-placeholder {
    display: none;
  }
}

@media (max-width: 900px) {
  .right-placeholder {
    display: none;
  }

  .content-area {
    width: 64vw;
  }
}
</style>