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
    </div>
</template>

<style scoped>
.app-layout {
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

/* ---Center Area--- */
.content-area {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-width: 0;
    height: 100vh;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    background: #FFFFFF;
}

.content-area::-webkit-scrollbar {
    display: none;
}

.content-area > * {
    max-width: 1024px;
    width: 100%;
    height: 100%;
}
</style>