<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import ContentSection from '../components/ContentSection.vue'

// Hardcoded chapters and their minors
const chapters = [
  {
    name: 'Analysis',
    minors: [
      'Ableitungen',
      'Integrale',
      'Kurvendiskussion',
      'Grenzwerte'
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

const availableMinors = computed(() => {
  const found = chapters.find(c => c.name === majorChapter.value)
  return found ? found.minors : []
})

// Reset minor chapter if major changes
watch(majorChapter, () => {
  minorChapter.value = ''
})

const githubRepo = 'officeryoda/mathe-zusammenfassung-vue' // Change if needed

const issueTitle = computed(() =>
    `Fehler in Kapitel: ${majorChapter.value}${minorChapter.value ? ' - ' + minorChapter.value : ''}`
)

const issueBody = computed(() => {
  let body = `**Major Chapter:** ${majorChapter.value}\n`
  if (minorChapter.value) body += `**Minor Chapter:** ${minorChapter.value}\n`
  body += `**Description:**\n${description.value}\n`
  if (minorChapter.value) {
    body += `\n[Zurück zum gemeldeten Unterkapitel](#${encodeURIComponent(minorChapter.value)})`
  }
  return body
})

const githubIssueUrl = computed(() => {
  const params = new URLSearchParams({
    title: issueTitle.value,
    body: issueBody.value
  })
  return `https://github.com/${githubRepo}/issues/new?${params.toString()}`
})

const submitted = ref(false)

function submit() {
  submitted.value = true
}
</script>

<template>
  <ContentSection title="Fehler melden">
    <form @submit.prevent="submit" v-if="!submitted" class="report-form">
      <label>
        <span>Hauptkapitel:</span>
        <select v-model="majorChapter" required>
          <option value="" disabled>Bitte wählen…</option>
          <option v-for="chapter in chapters" :key="chapter.name" :value="chapter.name">
            {{ chapter.name }}
          </option>
        </select>
      </label>
      <label>
        <span>Unterkapitel:</span>
        <select v-model="minorChapter" :disabled="!majorChapter" required>
          <option value="" disabled>Bitte wählen…</option>
          <option v-for="minor in availableMinors" :key="minor" :value="minor">
            {{ minor }}
          </option>
        </select>
      </label>
      <label>
        <span>Beschreibung:</span>
        <textarea v-model="description" required placeholder="Beschreibe den Fehler..."></textarea>
      </label>
      <button type="submit">GitHub Issue erstellen</button>
    </form>
    <div v-else class="report-success">
      <p>
        <a :href="githubIssueUrl" target="_blank" rel="noopener" class="github-link">
          Klicke hier, um dein Issue auf GitHub zu erstellen
        </a>
      </p>
      <div v-if="minorChapter">
        <p>
          <a :href="'#' + encodeURIComponent(minorChapter)" class="chapter-link">
            Zurück zum gemeldeten Unterkapitel (Anker)
          </a>
        </p>
      </div>
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
  margin-bottom: 1.5rem;
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
</style>