<script setup>
  const { country } = defineProps({
    country: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <h3>Country details page - {{ country.name.common }}</h3>

  <p><b>Nom générique</b> : {{ country.name.common }}</p>
  <p><b>Nom officiel</b> : {{ country.name.official }}</p>
</template>