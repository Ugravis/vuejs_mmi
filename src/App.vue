<script setup>
  import { ref } from 'vue';

  const sousmenu1 = ref(false)
  const sousmenu2 = ref(false)
  const sousmenu3 = ref(false)

  const notes = [
    { field: 'reseaux', value: 8 },
    { field: 'backend', value: 17 },
    { field: 'services', value: 13 },
    { field: 'infra', value: 6 },
    { field: 'frontend', value: 20 }
  ]
</script>

<template>
  <h1>Hello world TD - Exo2 </h1>

  <button @click="sousmenu1 = !sousmenu1">Accueil</button>
  <button @click="sousmenu2 = !sousmenu2">A propos</button>
  <button @click="sousmenu3 = !sousmenu3">Contact</button>

  <p v-if="sousmenu1">Accueil texte texte texte</p>
  <p v-if="sousmenu2">A propos texte texte texte</p>
  <p v-if="sousmenu3">Contact texte texte texte</p>

  <h2>Notes</h2>
  <ul>
    <li v-for="(note, index) in notes" :key="index">
      <p :style="`color: ${note.value > 10 ? `green` : `red`}`">
        {{ index+1 }} - {{ note.field }} : {{ note.value }} <span>({{ note.value > 10 ? 'bonne' : 'mauvaise' }} note)</span>
      </p>
    </li>
  </ul>
</template>

<style scoped>
</style>