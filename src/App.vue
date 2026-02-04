<script setup>
  import { ref } from 'vue';

  const sousmenu1 = ref(false)
  const sousmenu2 = ref(false)
  const sousmenu3 = ref(false)

  const note1 = 8
  const note2 = 17
  const note3 = 13
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
    <li>{{ note1 }} <span>({{ note1 > 10 ? 'bonne' : 'mauvaise' }} note)</span></li>
    <li>{{ note2 }} <span>({{ note2 > 10 ? 'bonne' : 'mauvaise' }} note)</span></li>
    <li>{{ note3 }} <span>({{ note3 > 10 ? 'bonne' : 'mauvaise' }} note)</span></li>
  </ul>
</template>

<style scoped>
</style>