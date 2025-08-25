<script lang="ts">
import {computed, defineComponent, provide, ref, watch} from 'vue';
import ContentSection from '../components/ContentSection.vue';
import InfoBox from '../components/InfoBox.vue';
import MathDisplay from '../components/MathDisplay.vue';
import ImageLightbox from '../components/ImageLightbox.vue';
import SkeletonScreen from './SkeletonScreen.vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useRoute} from "vue-router";
import chaptersData from '../data/chapters.json';
import {kebabUriCase} from "../utils/string.ts";
import {useImageLightbox} from "../composables/useImageLightbox.ts";
import {useSearch} from "../composables/useSearch.ts";
import {useTheme} from "../composables/useTheme.ts";
import router from "../router";

export default defineComponent({
    name: 'App',
    components: {
        FontAwesomeIcon,
        ContentSection,
        InfoBox,
        MathDisplay,
        ImageLightbox,
        SkeletonScreen,
    },
    setup() {
        const chapters = ref([
            {name: 'Analysis', path: '/analysis'},
            {name: 'Geometrie', path: '/geometrie'},
            {name: 'Stochastik', path: '/stochastik'},
            {name: 'Notation', path: '/notation'},
            {name: 'Gleichungen', path: '/gleichungen'},
            {name: 'Zusatz', path: '/zusatz'},
        ]);

        const route = useRoute();

        // Manual loading state for route transitions
        const isRouteLoading = ref(false);
        const loadingTimeout = ref<number | null>(null);

        // Store scroll positions for each route
        const scrollPositions = ref<Record<string, number>>({});

        // Track navigation type
        let isHistoryNavigation = false;

        // Listen for popstate events (back/forward navigation)
        if (typeof window !== 'undefined') {
            window.addEventListener('popstate', () => {
                isHistoryNavigation = true;
            });
        }

        // Watch for route changes and show loading
        watch(() => route.path, (newPath, oldPath) => {
            if (newPath !== oldPath) {
                // Save current scroll position before leaving
                if (oldPath) {
                    const contentArea = document.querySelector('.content-area');
                    if (contentArea) {
                        scrollPositions.value[oldPath] = contentArea.scrollTop;
                    }
                }

                isRouteLoading.value = true;

                // Clear any existing timeout
                if (loadingTimeout.value) {
                    clearTimeout(loadingTimeout.value);
                }

                loadingTimeout.value = setTimeout(() => {
                    isRouteLoading.value = false;

                    // Handle scroll position after loading
                    setTimeout(() => {
                        const contentArea = document.querySelector('.content-area');
                        if (contentArea) {
                            if (isHistoryNavigation && scrollPositions.value[newPath] !== undefined) {
                                // Restore scroll position for history navigation
                                contentArea.scrollTop = scrollPositions.value[newPath];
                            } else {
                                // Reset scroll position for new navigation
                                contentArea.scrollTop = 0;
                            }
                        }

                        // Reset history navigation flag
                        isHistoryNavigation = false;
                    }, 50); // Small delay to ensure content is rendered
                }, 250);
            }
        });

        // Theme functionality
        const {isDarkTheme, toggleTheme} = useTheme();

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
            activeResultIndex,
            hoveredResultIndex,
            setHoveredResultIndex,
            clearHoveredResultIndex
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
            activeResultIndex,
            hoveredResultIndex,
            setHoveredResultIndex,
            clearHoveredResultIndex,
            // Theme toggle
            isDarkTheme,
            toggleTheme,
            // Loading state
            isRouteLoading,
        };
    }
});
</script>

<template>
    <div class="app-layout">
        <aside class="sidebar">
            <div class="sidebar-top-section">
                <div class="icon-row">
                    <RouterLink class="icon-btn home-btn" to="/">
                        <FontAwesomeIcon icon="fa-house"/>
                    </RouterLink>
                    <div class="search-bar" @click="activateSearch">
                        <FontAwesomeIcon class="search-bar-icon" icon="fa-solid fa-magnifying-glass"/>
                        <span class="search-bar-text">Suchen</span>
                    </div>
                    <div class="icon-btn theme-toggle" @click="toggleTheme">
                        <FontAwesomeIcon :icon="isDarkTheme ? 'fa-moon' : 'fa-sun'"/>
                    </div>
                    <div class="report-error-button--mobile">
                        <RouterLink class="report-error-button" to="/report" @click="handleReportClick">
                            Fehler melden
                        </RouterLink>
                    </div>
                </div>
                <nav class="chapter-navigation">
                    <ul>
                        <li v-for="chapter in chapters" :key="chapter.path">
                            <RouterLink
                                :to="chapter.path"
                                active-class="chapter-link--active"
                                class="chapter-link"
                                exact-active-class="chapter-link--active"
                            >
                                {{ chapter.name }}
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="sidebar-middle-section">
                <h2 class="chapter-overview-title">Unterkapitel</h2>
                <div class="chapter-overview-scroll">
                    <div class="scroll-content">
                        <div v-if="currentChapter" class="chapter-overview">
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
                            <span><i>Wähl ein Überkapitel aus...</i></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sidebar-bottom-section">
                <RouterLink class="report-error-button" to="/report" @click="handleReportClick">
                    Fehler melden
                </RouterLink>
            </div>
        </aside>
        <main class="content-area">
            <div id="app-container">
                <SkeletonScreen v-if="isRouteLoading"/>
                <RouterView v-else/>
            </div>
        </main>

        <!-- Global Image Lightbox -->
        <ImageLightbox
            :image-alt="currentImageAlt"
            :image-src="currentImageSrc"
            :is-open="isLightboxOpen"
            @close="closeLightbox"
        />

        <!-- Search Results Dropdown -->
        <div v-if="isSearchActive" class="search-popup-overlay" @click="deactivateSearch">
            <div class="search-popup" @click.stop>
                <div class="search-popup-header">
                    <div class="search-popup-input-container">
                        <FontAwesomeIcon class="search-popup-icon" icon="fa-solid fa-magnifying-glass"/>
                        <input
                            ref="searchInput"
                            v-model="searchQuery"
                            class="search-popup-input"
                            placeholder="Suchen..."
                            type="text"
                            @keydown="handleSearchKeydown"
                        />
                    </div>
                    <button class="search-popup-close" @click="deactivateSearch">
                        <FontAwesomeIcon icon="fa-solid fa-xmark"/>
                    </button>
                </div>
                <div class="search-popup-content"
                     @mouseleave="clearHoveredResultIndex()">
                    <div
                        v-for="(result, idx) in searchResults"
                        :key="result.link"
                        :class="{ 'search-result-item--active': hoveredResultIndex === idx ? true : (hoveredResultIndex === -1 && idx === activeResultIndex) }"
                        class="search-result-item"
                        @click="handleSearchResultClick(result.link)"
                        @mouseenter="setHoveredResultIndex(idx)"
                        @mouseleave="clearHoveredResultIndex()"
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

/* ---Sidebar--- */
.sidebar {
    width: 15vw;
    min-width: 180px;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-background);
    color: var(--color-text-primary);
    /* Make sidebar fixed */
    height: 100vh;
    position: sticky;
    top: 0;
    z-index: 2;
    border-right: 1px solid var(--color-surface);
}

.icon-row {
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    gap: 0.5rem;
}

.icon-btn {
    background: none;
    color: var(--color-text-headings);
    cursor: pointer;
    padding: 0.5rem;
    transition: background-color 0.2s ease, color 0.2s ease;
    display: flex;
    align-items: center;
    border-radius: 4px;
    width: 2.5rem;
    height: 2.5rem;
    justify-content: center;
    font-size: 1.6rem;
}

.icon-btn:focus {
    outline: none;
}

.icon-btn:hover {
    background-color: var(--color-surface);
    color: var(--color-text-headings);
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
    transition: box-shadow 0.2s, border-color 0.2s;
}

.search-bar:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.18);
    border-color: var(--color-text-secondary);
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
    transition: background-color 0.2s ease, color 0.2s ease;
    font-weight: 640;
}

.chapter-link:hover {
    background-color: var(--color-surface);
    color: var(--color-text-headings);
}

/* Used dynamically as active-class by Vue Router */
.chapter-link--active {
    background-color: var(--color-surface);
    color: var(--color-text-headings);
    transition: background-color 0.2s ease;
}

.chapter-link--active:hover {
    background-color: color-mix(in srgb, var(--color-surface) 90%, #fff 10%); /* A slightly brighter color */
}

.sidebar-middle-section {
    border-top: 1px solid var(--color-surface);
    text-align: left;
    color: var(--color-text-primary);
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
}

.chapter-overview-title {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.chapter-overview-scroll {
    padding-right: 1rem;
    padding-left: 0.5rem;
    overflow-y: auto;
    direction: rtl; /* Moves the scrollbar to the left */
}

.scroll-content {
    direction: ltr; /* Resets text direction for the content */;
}

.chapter-overview-link {
    color: var(--color-text-secondary);
    line-height: 1rem;
    text-decoration: none;
    transition: color 0.2s, padding-right 0.2s, padding-left 0.2s;
    padding: 0.25rem 1.25rem 0.5rem 0.5rem;
    border-radius: 4px;
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 550;
}

.chapter-overview-link:hover {
    color: var(--color-text-primary);
    padding-left: 1.5rem;
    padding-right: 0.25rem;
    background-color: var(--color-surface);
}

.placeholder-content {
    color: var(--color-text-secondary);
    font-size: 1.1rem;
    text-align: center;
    padding: 1rem;
    opacity: 0.7;
}

.sidebar-bottom-section {
    display: inline-block;
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

.report-error-button--mobile {
    display: none;
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
    margin-bottom: 1em;
    flex-shrink: 0;
    padding: 1.5em 1.5em 0.5em;
    gap: 1em;
}

.search-popup-input-container {
    flex: 1;
    display: flex;
    align-items: center;
    background-color: var(--color-background);
    border: 2px solid var(--color-surface);
    border-radius: 8px;
    padding: 0.5em 1em;
}

.search-popup-icon {
    font-size: 1.2em;
    color: var(--color-text-headings);
    margin-right: 0.5em;
    margin-left: 0.5em;
}

.search-popup-input {
    background: transparent;
    border: none;
    color: var(--color-text-primary);
    font-size: 1.2em;
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
    font-size: 1.5em;
}

.search-popup-content {
    flex: 1;
    overflow-y: auto;
    min-height: 0;
    padding-bottom: 1.5em;
}

.search-result-item {
    margin-left: 1.5em;
    margin-right: 1.5em;
    padding: 0.5em 1em;
    cursor: pointer;
    transition: background-color 0.2s;
    border-radius: 4px;
}

.search-result-item--active {
    background-color: var(--color-surface);
}

.search-result-topic {
    font-weight: 500;
}

.search-result-chapter {
    font-size: 0.9em;
    color: var(--color-text-secondary);
}

.search-result-empty {
    padding: 0.5em 1em;
    text-align: center;
    color: var(--color-text-secondary);
}

.search-result-placeholder {
    padding: 0.5em 1em;
    text-align: center;
    color: var(--color-text-secondary);
    opacity: 0.7;
}

/* --- Responsive Design --- */
/* Stack left sidebar on top and content below at 850px and below */
@media (max-width: 850px) {
    .app-layout {
        flex-direction: column;
        height: auto;
        min-height: 100vh;
    }

    .sidebar {
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

    .sidebar-middle-section {
        display: none;
    }

    .icon-row {
        width: 100%;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }

    .icon-btn {
        width: 3rem;
        height: 3rem;
        justify-content: center;
        font-size: 2rem;
    }

    .search-bar {
        flex: 1;
        min-width: 0;
        padding: 0.5rem 0.75rem;
        height: 3.2rem;
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
        display: none;
    }

    .report-error-button--mobile {
        display: inline-block;
    }

    .content-area {
        padding: 0.8rem;
        height: auto;
        min-height: 0;
    }

    .search-popup-overlay {
        font-size: 1.5rem;
    }
}
</style>