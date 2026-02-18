<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import NavBarComponent from './components/layout/Navbar.vue'
  import FooterComponent from './components/layout/Footer.vue'
</script>

<template>
  <div>
    <div class="nav-and-main">
      <NavBarComponent />
      <RouterView />
    </div>

    <FooterComponent />
  </div>
</template>

<style scoped>
  .nav-and-main {
    min-height: 100vh;
  }
</style>