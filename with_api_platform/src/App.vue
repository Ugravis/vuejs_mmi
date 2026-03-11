<script setup>
  const username = 'Ulysse'
</script>

<template>
  <h1>MMI - Vuejs with API Platform</h1>

  <router-link :to="{name: 'home'}">Home</router-link>
  <router-link :to="{name: 'about'}">About</router-link>
  <router-link :to="{name: 'suppliers'}">Suppliers</router-link>

  <hr>

  <router-view></router-view>
</template>

<style scoped>
  a {
    margin-right: 10px;
  }
</style>