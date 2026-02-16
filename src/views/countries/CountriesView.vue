<script setup>
  import CountryCard from '@/components/CountryCard.vue'
  import { computed, onMounted, ref } from 'vue'

  const countries = ref([])
  const countriesSearch = ref('')
  const displayFlags = ref(true)
  const selectedCountriesAmount = ref(0)

  const filteredCountries = computed(() => {
    const search = countriesSearch.value.toLowerCase().trim()
    
    return countries.value.filter(c => 
      c.name.common.toLowerCase().includes(search)
    )
  })

  onMounted(async () => {
    try {
      const res = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2,capital,region,population,flags,currencies,languages');
      const data = await res.json();
      countries.value = data;

    } catch (err) {
      console.error("Erreur API :", err);
    }
  })

  function handleCountrySelected(isSelected) {
    isSelected
      ? selectedCountriesAmount.value++
      : selectedCountriesAmount.value--
  }
</script>

<template>
  <h2>Countries page</h2>

  <div class="filters-box">
    <div>
      <input 
        v-model="countriesSearch" 
        type="text" 
        name="countriesSearch"
        placeholder="Recherchez un pays"
      >
    </div><p>|</p>

    <div>
      <label for="flag">Drapeau</label>
      <input 
        type="checkbox" 
        id="flag"
        :checked="displayFlags"
        @change="displayFlags = !displayFlags"
      >
    </div><p>|</p>

    <p><b>{{ filteredCountries.length }}</b> pays filtrés</p><p>|</p>

    <p><b>{{ selectedCountriesAmount }}</b> pays sélectionnés</p>
  </div>

  <hr>

  <div v-for="(country, index) in filteredCountries" :key="index">
    <country-card 
      @selected-event="handleCountrySelected" 
      :country="country" :displayFlag="displayFlags" 
    />
    <hr>
  </div>
</template>

<style scoped>
  .filters-box {
    display: flex;
    gap: 15px;
  }

  .filters-box p {
    margin: 0;
  }
</style>