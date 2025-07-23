import { ref, computed, watch } from 'vue';
import chaptersData from '../data/chapters.json';
import { kebabUriCase } from '../utils/string.ts';

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

  // Chapter definitions
  const chapters: Chapter[] = [
    { name: 'Notation', path: '/notation' },
    { name: 'Gleichungen', path: '/gleichungen' },
    { name: 'Analysis', path: '/analysis' },
    { name: 'Geometrie', path: '/geometrie' },
    { name: 'Stochastik', path: '/stochastik' },
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
    ).slice(0, 10); // Limit to 10 results
  }

  // Watch search query and perform search
  watch(searchQuery, (newQuery) => {
    performSearch(newQuery);
  });

  // Search bar handlers
  function activateSearch() {
    isSearchActive.value = true;
    // Focus the input after DOM update
    setTimeout(() => {
      const input = document.querySelector('.search-input') as HTMLInputElement;
      if (input) input.focus();
    }, 0);
  }

  function deactivateSearch() {
    if (!searchQuery.value.trim()) {
      isSearchActive.value = false;
      searchResults.value = [];
    }
  }

  function handleSearchResultClick(link: string, smoothScrollToHash: (hash: string) => void) {
    isSearchActive.value = false;
    searchQuery.value = '';
    searchResults.value = [];
    // Navigate to the result
    const hash = link.split('#')[1];
    if (hash) {
      setTimeout(() => smoothScrollToHash('#' + hash), 100);
    }
  }

  function handleSearchKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      isSearchActive.value = false;
      searchQuery.value = '';
      searchResults.value = [];
    }
  }

  return {
    // State
    isSearchActive,
    searchQuery,
    searchResults,

    // Methods
    activateSearch,
    deactivateSearch,
    handleSearchResultClick,
    handleSearchKeydown,
    performSearch
  };
}
