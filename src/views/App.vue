<template>
  <div id="app-layout">
    <aside class="sidebar">
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
        <router-link to="/feedback" class="report-error-button">
          Fehler melden
        </router-link>
      </div>
    </aside>
    <main class="content-area">
      <div id="app-container">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
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
    return {chapters};
  }
});
</script>

<style>
/* --- Global Styles (from your existing App.vue style block) --- */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #0f0f0f; /* Very dark background */
  color: #e0e0e0;
  line-height: 1.6;
}

/* --- NEW LAYOUT STYLES --- */
#app-layout {
  /* Remove flex, use block layout for fixed sidebar */
  display: block;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #1a1a1a;
  color: #e0e0e0;
  padding-top: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  flex-shrink: 0;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  overflow: hidden; /* Prevent sidebar from scrolling */
  z-index: 100;
}

.content-area {
  margin-left: 250px; /* Offset by sidebar width */
  padding: 2rem;
  background-color: #0f0f0f;
  overflow-y: auto;
  height: 100vh;
}

#app-container {
  max-width: 100%; /* Adjust if your content still needs a max-width within this area */
  margin: 0 auto;
  padding: 0; /* Remove padding here if content-area already has it */
}

/* --- SIDEBAR COMPONENT STYLES --- */
.search-icon-wrapper {
  text-align: center;
  margin-bottom: 2rem;
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
  display: block; /* Make the whole area clickable */
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

.chapter-link.router-link-active {
  background-color: #6ab04c;
  color: #fff;
  font-weight: bold;
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

.subsection-title {
  color: #ffffff;
  font-size: 1.6rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #333;
}

.image-background {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2a2a2a;
  border-radius: 0.75rem;
  padding: 0.75rem;
}

.image-caption {
  font-size: 0.9rem;
  color: #b0b0b0;
  margin-top: 0.5rem;
  text-align: center;
}

p {
  margin-bottom: 1rem;
}

ul {
  padding-left: 1.5rem;
  list-style: none;
  margin: 0;
}

ul li {
  margin-bottom: 0.5rem;
  padding-left: 1em;
  position: relative;
}

ul.math-list li::before {
  content: "•";
  color: #6ab04c;
  font-size: 1em;
  position: absolute;
  left: 0;
  top: 0;
}

.two-column-layout, .two-column-layout-image {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;
  margin-top: 0;
}

.two-column-layout-image .column-item:first-child {
  flex: 0 1 55%;
}

.two-column-layout-image .column-item:last-child {
  flex: 0 1 40%;
}

.column-item {
  flex: 1 1 45%;
  min-width: 280px;
}

.column-item ul {
  padding-left: 1.5rem;
  list-style-type: none;
}

.column-item ul li {
  margin-bottom: 0.7rem;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  #app-layout {
    flex-direction: column; /* Stack sidebar and content vertically */
  }

  .sidebar {
    position: static;
    width: 100%; /* Full width sidebar */
    height: auto; /* Height adapts to content */
    padding: 1rem;
    order: -1; /* Place sidebar on top when stacked */
    z-index: auto;
  }

  .sidebar-top-section {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center items horizontally when sidebar is full width */
  }

  .chapter-navigation {
    width: 100%; /* Ensure nav takes full width */
    text-align: center; /* Center links in nav */
  }

  .chapter-navigation ul {
    display: flex; /* Make chapter links inline/flex for horizontal scroll or wrap */
    flex-wrap: wrap;
    justify-content: center; /* Center the chapter links */
    gap: 0.5rem; /* Spacing between wrapped links */
  }

  .chapter-navigation li {
    margin-bottom: 0; /* Remove vertical margin */
  }

  .chapter-link {
    padding: 0.5rem 0.75rem; /* Smaller padding for smaller links */
    font-size: 0.9rem;
  }

  .sidebar-bottom-section {
    margin-top: 1.5rem; /* Add some space if it's not pushed by auto-margin */
    text-align: center;
  }

  .content-area {
    margin-left: 0;
    padding: 1rem;
    height: auto;
    overflow-y: visible;
  }
}
</style>