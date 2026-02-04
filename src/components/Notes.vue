<script setup>
import { computed } from 'vue';

  const symfony = 18
  const integration = 16
  const reseau = 13

  const moyenne = computed(() => {
    return (symfony + integration + reseau) / 3
  })
</script>

<template>
  <ul>
    <li>Note sur Symfony : {{ symfony }}</li>
    <li>Note en intégration : {{ integration }}</li>
    <li>Note en réseau : {{ reseau }}</li>
  </ul>

  <p>Moyenne du S3 : <b>{{ moyenne.toFixed(2) }}</b></p>
</template>