<script setup>
  import { ref } from 'vue';

  const isVisible = ref(false)
</script>

<template>
  <h1>Hello world TD</h1>

  <button @click="isVisible = !isVisible">Rendre visible</button>

  <p v-if="isVisible">Je suis le texte caché</p>
</template>

<style scoped>
</style>