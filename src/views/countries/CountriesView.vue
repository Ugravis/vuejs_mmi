<script setup>
  import CountryCard from '@/components/CountryCard.vue';
  import { onMounted, ref } from 'vue';

  const countries = ref([])

  onMounted(async () => {
    countries.value = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2,capital,region,population,flags,currencies,languages')
      .then((res) => res.json())
      .then((data) => {
        return data
      })
  })
</script>

<template>
  <h2>Countries page</h2>
  <hr>

  <div v-for="(country, index) in countries" :key="index">
    <country-card :country="country" />
    <hr>
  </div>
</template>