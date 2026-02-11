<script setup>
  const { country } = defineProps({
    country: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <img :src="country.flags.svg" :alt="`flag_${country.name.common}`">

  <h3>Country details page - {{ country.name.common }}</h3>

  <div>
    <p><b>Nom générique</b> : {{ country.name.common }}</p>
    <p><b>Nom officiel</b> : {{ country.name.official }}</p>
    <p><b>Population</b> : {{ country.population }}</p>

    <p v-for="(currency, currencyIndex) in country.currencies" :key="currencyIndex">
      <b>Monnaie</b> : {{ currency.name }} ({{ currency.symbol }})
    </p>

    <p v-for="(language, languageIndex) in country.languages" :key="languageIndex">
      <b>Langues</b> : {{ language }}
    </p>
  </div>
</template>

<style scoped>
  img {
    width: 25px;
  }
</style>