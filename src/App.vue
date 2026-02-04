<script setup>
  import { ref } from 'vue';

  const isVisible = ref(false)
</script>

<template>
  <h1>Hello world TD - Exo2 </h1>

  <button @click="isVisible = !isVisible">Texte caché</button>

  <p v-if="isVisible">Je suis le texte caché</p>
  <p v-else>Je suis le texte de base</p>
</template>

<style scoped>
</style>