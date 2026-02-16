<script setup>
import { useRoute } from 'vue-router';

  const route = useRoute()
</script>

<template>
  <h2>User page</h2>
  <p>Hello {{ route.params.username }}</p>
</template>