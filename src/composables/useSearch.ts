import {ref, computed, watch} from 'vue';
import chaptersData from '../data/chapters.json';
import {kebabUriCase} from '../utils/string.ts';

interface SearchResult {
    topic: string;
    chapter: string;
    link: string;
}

interface Chapter {
    name: string;
    path: string;
}

export function useSearch() {
    // Search state
    const isSearchActive = ref(false);
    const searchQuery = ref('');
    const searchResults = ref<SearchResult[]>([]);
    const activeResultIndex = ref(-1);
    const hoveredResultIndex = ref(-1);

    // Chapter definitions
    const chapters: Chapter[] = [
        {name: 'Notation', path: '/notation'},
        {name: 'Gleichungen', path: '/gleichungen'},
        {name: 'Analysis', path: '/analysis'},
        {name: 'Geometrie', path: '/geometrie'},
        {name: 'Stochastik', path: '/stochastik'},
    ];

    // All available topics from all chapters for search
    const allTopics = computed(() => {
        const topics: SearchResult[] = [];
        chapters.forEach(chapter => {
            const chapterName = chapter.name;
            // Get topics from main chapter
            if (chaptersData[chapterName as keyof typeof chaptersData]) {
                chaptersData[chapterName as keyof typeof chaptersData].forEach(topic => {
                    if (topic) {
                        topics.push({
                            topic,
                            chapter: chapterName,
                            link: `${chapter.path}#${kebabUriCase(topic)}`
                        });
                    }
                });
            }
            // Get topics from subchapters
            Object.keys(chaptersData).forEach(key => {
                if (key.startsWith(chapterName) && key !== chapterName) {
                    chaptersData[key as keyof typeof chaptersData].forEach(topic => {
                        if (topic) {
                            topics.push({
                                topic,
                                chapter: chapterName,
                                link: `${chapter.path}#${kebabUriCase(topic)}`
                            });
                        }
                    });
                }
            });
        });
        return topics;
    });

    // Search logic
    function performSearch(query: string) {
        if (!query.trim()) {
            searchResults.value = [];
            return;
        }

        const lowercaseQuery = query.toLowerCase();
        searchResults.value = allTopics.value.filter(item =>
            item.topic.toLowerCase().includes(lowercaseQuery)
        )
    }

    // Watch search query and perform search
    watch(searchQuery, (newQuery) => {
        performSearch(newQuery);
        activeResultIndex.value = newQuery && searchResults.value.length > 0 ? 0 : -1;
    });

    // Search bar handlers
    function activateSearch() {
        isSearchActive.value = true;
        // Focus the input after DOM update
        setTimeout(() => {
            const input = document.querySelector('.search-popup-input') as HTMLInputElement;
            if (input) input.focus();
        }, 0);
    }

    function deactivateSearch() {
        isSearchActive.value = false;
        searchQuery.value = '';
        searchResults.value = [];
        activeResultIndex.value = -1;
        hoveredResultIndex.value = -1;
    }

    const scrollFnRef = ref<(hash: string) => void>();
    const routerRef = ref<any>();

    function setSearchHelpers(smoothScrollToHash: (hash: string) => void, router: any) {
        scrollFnRef.value = smoothScrollToHash;
        routerRef.value = router;
    }

    function handleSearchResultClick(link: string) {
        isSearchActive.value = false;
        searchQuery.value = '';
        searchResults.value = [];

        const [path, hash] = link.split('#');
        if (path && hash && routerRef.value && scrollFnRef.value) {
            routerRef.value.push({path, hash: '#' + hash}).then(() => {
                setTimeout(() => scrollFnRef.value!('#' + hash), 100);
            });
        } else if (hash && scrollFnRef.value) {
            setTimeout(() => scrollFnRef.value!('#' + hash), 100);
        }
    }

    function setHoveredResultIndex(idx: number) {
        hoveredResultIndex.value = idx;
        activeResultIndex.value = idx;
    }
    function clearHoveredResultIndex() {
        hoveredResultIndex.value = -1;
        // Do not reset activeResultIndex, keep last hovered
    }

    function handleSearchKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            deactivateSearch()
        } else if (event.key === 'ArrowDown') {
            if (searchResults.value.length > 0) {
                const nextIdx = (activeResultIndex.value + 1) % searchResults.value.length;
                activeResultIndex.value = nextIdx;
                hoveredResultIndex.value = nextIdx;
            }
            event.preventDefault();
        } else if (event.key === 'ArrowUp') {
            if (searchResults.value.length > 0) {
                const nextIdx = (activeResultIndex.value - 1 + searchResults.value.length) % searchResults.value.length;
                activeResultIndex.value = nextIdx;
                hoveredResultIndex.value = nextIdx;
            }
            event.preventDefault();
        } else if (event.key === 'Enter') {
            if (activeResultIndex.value >= 0 && activeResultIndex.value < searchResults.value.length) {
                const selectedResult = searchResults.value[activeResultIndex.value];
                handleSearchResultClick(selectedResult.link);
            }
        }
    }

    return {
        isSearchActive,
        searchQuery,
        searchResults,
        activeResultIndex,
        hoveredResultIndex,
        activateSearch,
        deactivateSearch,
        setSearchHelpers,
        handleSearchResultClick,
        handleSearchKeydown,
        performSearch,
        setHoveredResultIndex,
        clearHoveredResultIndex,
    };
}
