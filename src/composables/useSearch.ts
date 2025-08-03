import {computed, ref, watch} from 'vue';
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

// Singleton to be access same instance from App.vue and Home.vue
let searchState: ReturnType<typeof createSearchState> | null = null;

function createSearchState() {
    // Search state
    const isSearchActive = ref(false);
    const searchQuery = ref('');
    const searchResults = ref<SearchResult[]>([]);
    const activeResultIndex = ref(-1);
    const hoveredResultIndex = ref(-1);

    // Chapter definitions
    const chapters: Chapter[] = [
        {name: 'Analysis', path: '/analysis'},
        {name: 'Geometrie', path: '/geometrie'},
        {name: 'Stochastik', path: '/stochastik'},
        {name: 'Notation', path: '/notation'},
        {name: 'Gleichungen', path: '/gleichungen'},
        {name: 'Zusatz', path: '/zusatz'},
    ];

    // All available topics from all chapters for search
    const allTopics = computed(() => {
        const topics: SearchResult[] = [];
        const includedChapters = new Set<string>();

        // First, iterate through the configured chapters to maintain order and include main topics
        chapters.forEach(chapter => {
            const chapterName = chapter.name;
            includedChapters.add(chapterName); // Mark this chapter as processed
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
        });

        // Then, handle any chapters from JSON not in the hardcoded list (like subchapters or new additions)
        Object.keys(chaptersData).forEach(key => {
            // Find the base chapter for this key
            const baseChapter = chapters.find(c => key.startsWith(c.name));
            if (baseChapter && !includedChapters.has(key)) {
                chaptersData[key as keyof typeof chaptersData].forEach(topic => {
                    if (topic) {
                        topics.push({
                            topic,
                            chapter: baseChapter.name,
                            link: `${baseChapter.path}#${kebabUriCase(topic)}`
                        });
                    }
                });
            }
        });

        return topics;
    });

    const invertedIndex = ref<{ [key: string]: number[] }>({});
    let isIndexBuilt = false;

    // Preprocess to allow for greek letter typing and hyphens
    const preprocess = (text: string) => text.toLowerCase()
        .replace(/m([yüu])/g, 'μ')
        .replace(/sigma/g, 'σ')
        .replace(/-/g, ' ');

    function buildInvertedIndex() {
        const newIndex: { [key: string]: number[] } = {};
        allTopics.value.forEach((topicData, index) => {
            // Preprocess the topic before indexing
            const words = preprocess(topicData.topic).split(/\s+/);
            words.forEach(word => {
                if (word) {
                    if (!newIndex[word]) {
                        newIndex[word] = [];
                    }
                    if (!newIndex[word].includes(index)) {
                        newIndex[word].push(index);
                    }
                }
            });
        });
        invertedIndex.value = newIndex;
        isIndexBuilt = true;
    }

    function performSearch(query: string) {
        if (!isIndexBuilt) {
            buildInvertedIndex();
        }

        // Preprocess the user's query to match the index format
        const searchTerm = preprocess(query);
        const searchWords = searchTerm.split(/\s+/).filter(word => word.length > 0);

        if (searchWords.length === 0) {
            searchResults.value = [];
            return;
        }

        let matchingIndices: Set<number> = new Set();

        // 1. Inverted Index Search
        const firstWordIndices = invertedIndex.value[searchWords[0]];
        if (firstWordIndices) {
            matchingIndices = new Set(firstWordIndices);
            for (let i = 1; i < searchWords.length; i++) {
                const word = searchWords[i];
                const indicesForWord = new Set(invertedIndex.value[word] || []);
                matchingIndices = new Set([...matchingIndices].filter(index => indicesForWord.has(index)));
                if (matchingIndices.size === 0) break;
            }
        }

        // 2. Linear Search (Fallback)
        if (!matchingIndices || matchingIndices.size === 0) {
            matchingIndices = new Set();
            allTopics.value.forEach((topicData, index) => {
                // Preprocess the title here as well for a consistent match
                const title = preprocess(topicData.topic);
                if (searchWords.every(word => title.includes(word))) {
                    matchingIndices!.add(index);
                }
            });
        }

        // 3. Format and Display Results
        if (matchingIndices.size > 0) {
            const maxResults = 8;
            searchResults.value = Array.from(matchingIndices)
                .map(index => allTopics.value[index])
                .sort((a, b) => a.topic.localeCompare(b.topic))
                .slice(0, maxResults);
        } else {
            searchResults.value = [];
        }
    }

    watch(searchQuery, (newQuery) => {
        performSearch(newQuery);
        activeResultIndex.value = -1;
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
        chapters,
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

export function useSearch() {
    if (!searchState) {
        searchState = createSearchState();
    }
    return searchState;
}