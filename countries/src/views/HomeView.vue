<script setup>
  import Article from "@/components/Article.vue"
import { onMounted } from "vue";

  onMounted(() => {
    console.log('La page Home est chargée')
  })
</script>

<template>
  <h2>Home page</h2>
  <p>Bienvenue au QG de campagne</p>

  <hr>

  <Article title="Mairie de Levallois" />
  <Article title="Evasion fiscale" />
</template>
