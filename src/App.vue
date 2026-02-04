<script setup>
</script>

<template>
  <h1>Hello world TD - Seance 3 : routes</h1>

  <router-link to="/">Accueil</router-link>
  <router-link to="/about">About</router-link>
  <router-link to="/contact">Contact</router-link>

  <router-view></router-view>
</template>

<style scoped>
  a {
    margin-right: 10px;
  }
</style>