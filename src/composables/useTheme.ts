import { ref } from 'vue';

export function useTheme() {
    const isDarkTheme = ref(true);

    // Initialize theme from localStorage or default to dark
    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            isDarkTheme.value = false;
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            isDarkTheme.value = true;
            document.documentElement.removeAttribute('data-theme');
        }
    }

    // Toggle theme and save to localStorage
    function toggleTheme() {
        isDarkTheme.value = !isDarkTheme.value;
        if (isDarkTheme.value) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    // Initialize theme on composable creation
    initializeTheme();

    return {
        isDarkTheme,
        toggleTheme,
    };
}
