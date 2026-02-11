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
    <p><b>Capitale</b> : {{ country.capital[0] }}</p>
    <p><b>Population</b> : {{ country.population }}</p>

    <p><b>Monnaie</b> : {{ Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(', ') }}</p>

    <p><b>Langues</b> : {{ Object.values(country.languages).join(', ') }}</p>

    <router-link :to="{name: 'country', params: {countryCommonName: country.name.common}}">Voir plus</router-link>
  </div>
</template>

<style scoped>
  img {
    width: 30px;
  }
</style>