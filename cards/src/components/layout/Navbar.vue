<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <ul>
    <li>
      <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
    </li>

    <li>
      <RouterLink :to="{ name: 'search' }">Rechercher</RouterLink>
    </li>

    <li>
      <RouterLink :to="{ name: 'cards' }">Cartes</RouterLink>
    </li>

    <li>
      <RouterLink :to="{ name: 'sets' }">Sets</RouterLink></li>
  </ul>
</template>

<style scoped>
  ul {
    display: flex;
    gap: 10px;
    padding: 0;
  }

  li {
    list-style: none;
  }
</style>