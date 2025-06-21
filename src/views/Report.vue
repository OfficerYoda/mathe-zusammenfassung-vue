<script setup lang="ts">
import {ref, computed} from 'vue'
import ContentSection from '../components/ContentSection.vue'
import {createGithubIssue} from '../firebase'
import {kebabUriCase} from "../utils/string.ts";

// Hardcoded chapters and their minors
const chapters = [
  {
    name: 'Analysis',
    minors: [
      'Ableitungen',
      'Integrale',
      'Kurvendiskussion',
      'Grenzwerte',
      'Ganzrationale Funktionen'
    ]
  },
  {
    name: 'Geometrie',
    minors: [
      'Vektoren',
      'Geraden',
      'Ebenen',
      'Abstände'
    ]
  },
  {
    name: 'Stochastik',
    minors: [
      'Wahrscheinlichkeiten',
      'Kombinatorik',
      'Zufallsvariablen',
      'Verteilungen'
    ]
  }
]

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
  return found ? found.minors : []
})


function submit() {
  if (!majorChapter.value || !description.value) {
    error.value = 'Bitte fülle alle erforderlichen Felder aus.'
    return
  }
  isLoading.value = true
  error.value = ''

  // Create the issue title and body
  const title = `Fehler in "${majorChapter.value} - ${minorChapter.value}`
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
        <span>Großkapitel:</span>
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
        <input v-model="name" placeholder="Vorname oder Synonym reicht (nicht deinen vollen Namen)"
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
          Zurück zum gemeldeten Kapitel
        </a>
      </p>
    </div>
  </ContentSection>
</template>

<style scoped>
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
  color: #e0e0e0;
  font-size: 1.1rem;
  gap: 0.5rem;
}

input, textarea, select {
  width: 100%;
  margin-top: 0.1rem;
  padding: 0.7rem 1rem;
  border-radius: 6px;
  border: 1px solid #333;
  background: #181818;
  color: #e0e0e0;
  font-size: 1rem;
  transition: border 0.2s;
  box-sizing: border-box; /* Ensure consistent sizing */
}

input:focus, textarea:focus, select:focus {
  border: 2px solid #6ab04c;
  outline: none;
  background: #222;
}

textarea {
  min-height: 90px;
  resize: vertical;
}

button {
  padding: 0.7rem 1.5rem;
  border: none;
  background: #6ab04c;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  transition: background 0.2s;
}

button:hover {
  background: #4e8c36;
}

.report-success {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  color: #e0e0e0;
}

.github-link {
  display: inline-block;
  background: #24292f;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.2s;
}

.github-link:hover {
  background: #444d56;
}

.chapter-link {
  color: #6ab04c;
  text-decoration: underline;
  font-size: 1.05rem;
}

.chapter-link:hover {
  color: #8fdc6a;
}

.error-message {
  color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.1);
  padding: 0.7rem;
  border-radius: 4px;
  text-align: center;
  margin-top: 0.5rem;
}

.report-another-btn {
  padding: 0.7rem 1.5rem;
  border: none;
  background: #ff6347;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background 0.2s;
}

.report-another-btn:hover {
  background: #ce3f22;
}
</style>