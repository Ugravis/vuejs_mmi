<script setup>
import { useRoute } from 'vue-router';

  const route = useRoute()
</script>

<template>
  <h2>Country details page - {{ route.params.name }}</h2>

  <p><b>Nom</b> : {{ route.params.name }}</p>
  <p><b>Capital</b> : {{ route.params.capital }}</p>
</template>
