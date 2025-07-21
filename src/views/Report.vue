<script setup lang="ts">
import {ref, computed} from 'vue'
import ContentSection from '../components/ContentSection.vue'
import {createGithubIssue} from '../firebase'
import {kebabUriCase} from "../utils/string.ts";
import chaptersJson from '../data/chapters.json'

// Transform chaptersJson to the structure expected by the form
const chapters = Object.entries(chaptersJson).map(([filename, minors]) => ({
  name: filename,
  minors: minors as string[]
}));

const majorChapter = ref('')
const minorChapter = ref('')
const description = ref('')
const name = ref('') // Optional name field
const isLoading = ref(false)
const submitted = ref(false)
const error = ref('')
const issueUrl = ref('')

// Reset minor chapter if major changes
const availableMinors = computed(() => {
  const found = chapters.find(c => c.name === majorChapter.value)
  // Reset minorChapter if the major chapter changes and the current minor is not valid
  if (minorChapter.value && (!found || !found.minors.includes(minorChapter.value))) {
    minorChapter.value = ''
  }
  return found ? found.minors : []
})


function submit() {
  if (!majorChapter.value || !minorChapter.value || !description.value) {
    error.value = 'Bitte fülle alle erforderlichen Felder aus.'
    return
  }
  isLoading.value = true
  error.value = ''

  // Create the issue title and body
  const title = `Fehler in "${majorChapter.value} - ${minorChapter.value}"`
  const body =
      `### Kapitel
       ${majorChapter.value} - ${minorChapter.value}

       ### Beschreibung
       ${description.value}

       [Zum gemeldeten Kapitel](https://officeryoda.dev/${kebabUriCase(majorChapter.value)}#${kebabUriCase(minorChapter.value)})

       ${name.value ? `Gefunden von **${name.value}**` : ''}
       `.replace(/^[ \t]+/gm, ''); // Remove leading indentation

  // Call the Firebase function
  createGithubIssue({title, body})
      .then((result) => {
        console.log('GitHub issue created:', result)
        // @ts-expect-error: result.data is typed as unknown but works at runtime
        issueUrl.value = result.data.issueUrl
        submitted.value = true
        isLoading.value = false
      })
      .catch((err) => {
        console.error('Error creating GitHub issue:', err)
        error.value = `Fehler beim Erstellen des Issues: ${err.message}`
        isLoading.value = false
      })
}

function resetForm() {
  majorChapter.value = ''
  minorChapter.value = ''
  description.value = ''
  name.value = ''
  isLoading.value = false
  error.value = ''
  issueUrl.value = ''
  submitted.value = false
}

</script>

<template>
  <ContentSection title="Fehler melden">
    <form @submit.prevent="submit" v-if="!submitted" class="report-form">
      <label>
        <span>Überkapitel:</span>
        <select v-model="majorChapter">
          <option value="" disabled>Bitte wählen…</option>
          <option v-for="chapter in chapters" :key="chapter.name" :value="chapter.name">
            {{ chapter.name }}
          </option>
        </select>
      </label>
      <label>
        <span>Unterkapitel:</span>
        <select v-model="minorChapter" :disabled="!majorChapter">
          <option value="" disabled>Bitte wählen…</option>
          <option v-for="minor in availableMinors" :key="minor" :value="minor">
            {{ minor }}
          </option>
        </select>
      </label>
      <label>
        <span>Beschreibung:</span>
        <textarea v-model="description" placeholder="Beschreibe den Fehler..."></textarea>
      </label>
      <label>
        <span>Name (optional):</span>
        <input v-model="name" placeholder="Vorname oder Alias reicht (nicht deinen vollen Namen)"
               title="Dieser Name wird öffentlich im Internet stehen!"/>
      </label>
      <button type="submit" :disabled="isLoading">
        <span v-if="isLoading">Wird gesendet...</span>
        <span v-else>Fehler melden</span>
      </button>
      <div v-if="error" class="error-message">{{ error }}</div>
    </form>
    <div v-else class="report-success">
      <p>
        <a :href="issueUrl" target="_blank" rel="noopener" class="github-link">
          Fehlerbericht auf Github öffnen
        </a>
      </p>
      <p>
        <button @click="resetForm" class="report-another-btn" type="button">
          Weiteren Fehler melden
        </button>
      </p>
      <p>
        <a :href="'/' + kebabUriCase(majorChapter) + '#' + kebabUriCase(minorChapter)" class="chapter-link">
          Zum gemeldeten Kapitel
        </a>
      </p>
    </div>
  </ContentSection>
</template>

<style>
.report-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

label {
  display: flex;
  flex-direction: column;
  color: var(--color-text-primary);
  font-size: 1.1rem;
  gap: 0.5rem;
}

input, textarea, select {
  width: 100%;
  margin-top: 0.1rem;
  padding: 0.7rem 1rem;
  border-radius: 6px;
  border: 1px solid var(--color-surface);
  background: var(--color-background-secondary);
  color: var(--color-text-primary);
  font-size: 1rem;
  font-family: inherit;
  transition: border 0.2s;
  box-sizing: border-box; /* Ensure consistent sizing */
}

input:focus, textarea:focus, select:focus {
  border: 2px solid var(--color-accent);
  outline: none;
  background: var(--color-background);
}

textarea {
  min-height: 90px;
  resize: vertical;
}

button {
  padding: 0.7rem 1.5rem;
  border: none;
  background: color-mix(in srgb, var(--color-error) 80%, transparent);
  color: var(--color-text-primary);
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  transition: background-color 0.2s, color 0.2s;
}

button:hover {
  background-color: var(--color-error);
  color: var(--color-text-headings);
}

.report-success {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
}

.github-link {
  display: inline-block;
  background: #24292f;
  color: var(--color-text-primary);
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

.github-link:hover {
  background: #444d56;
  color: var(--color-text-headings);
}

.chapter-link {
  color: color-mix(in srgb, var(--color-accent) 80%, transparent);
  text-decoration: underline;
  font-size: 1.05rem;
}

.chapter-link:hover {
  color: var(--color-accent);
}

.error-message {
  color: color-mix(in srgb, var(--color-error) 80%, #fff 20%); /* A slightly brighter red */
  background-color: color-mix(in srgb, var(--color-error) 40%, transparent);
  padding: 0.7rem;
  border-radius: 4px;
  text-align: center;
  margin-top: 0.5rem;
}

.report-another-btn {
  display: inline-block;
  background-color: color-mix(in srgb, var(--color-error) 80%, transparent);
  color: var(--color-text-primary);
  padding: 0.75rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s, color 0.2s;
}

.report-another-btn:hover {
  background-color: var(--color-error);
  color: var(--color-text-headings);
}
</style>