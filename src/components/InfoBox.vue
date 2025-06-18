<template>
  <div class="info-box">
    <div class="info-icon">💡</div>
    <div class="info-content">
      <slot></slot> </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InfoBox',
});
</script>

<style scoped>
.info-box {
  background-color: #2e3b33; /* Dunkelgrünlicher Hintergrund */
  border-left: 5px solid #6ab04c; /* Hellergrüner Rand links */
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  display: flex;
  align-items: flex-start; /* Icon oben ausrichten */
  gap: 1rem; /* Abstand zwischen Icon und Text */
}

.info-icon {
  font-size: 1.5rem;
  line-height: 1; /* Vertikale Ausrichtung des Icons */
  flex-shrink: 0; /* Verhindert, dass das Icon schrumpft */
}

.info-content {
  flex-grow: 1; /* Lässt den Inhalt den restlichen Platz einnehmen */
  color: #e0e0e0; /* Heller Text für Kontrast */
}

/* Optional: Stil für Listen innerhalb der Infobox */
.info-content ul {
  list-style: none; /* Keine Standardpunkte */
  padding: 0;
  margin: 0;
}

.info-content ul li {
  margin-bottom: 0.5rem;
}

.info-content ul li::before {
  content: 'a) '; /* Beispiel für a) b) */
  color: #6ab04c; /* Farbe des Aufzählungspunkts */
  font-weight: bold;
  display: inline-block;
  width: 1.5em; /* Platz für den Buchstaben */
  margin-left: -1.5em; /* Einrücken */
}

/* Anpassung für b) */
.info-content ul li:nth-child(2)::before {
  content: 'b) ';
}

/* Füge weitere nth-child für c), d) etc. hinzu, falls nötig */
</style>