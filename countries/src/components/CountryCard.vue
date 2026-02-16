<script setup>
import { ref } from 'vue';

  const props = defineProps(
    [
      'displayFlag', 
      'country'
    ]
  )

  const emit = defineEmits(
    [
      'selected-event'
    ]
  )

  const selected = ref(false)

  function toggleSelection() {
    selected.value = !selected.value
    emit('selected-event', selected.value)
  }
</script>

<template>
  <img v-if="props.displayFlag" :src="props.country.flags.svg" :alt="`flag_${props.country.name.common}`">

  <h3>{{ props.country.name.common }}</h3>

  <div>
    <p><b>Nom générique</b> : {{ props.country.name.common }}</p>
    <p><b>Nom officiel</b> : {{ props.country.name.official }}</p>
    <p><b>Capitale</b> : {{ props.country.capital[0] }}</p>
    <p><b>Population</b> : {{ props.country.population }}</p>

    <p><b>Monnaie</b> : {{ Object.values(props.country.currencies).map(c => `${c.name} (${c.symbol})`).join(', ') }}</p>

    <p><b>Langues</b> : {{ Object.values(props.country.languages).join(', ') }}</p>

    <div class="actions-box">
      <div>
        <label for="select">Sélectionner</label>
        <input 
          type="checkbox" 
          id="select"
          @change="toggleSelection"
        >
      </div>

      <p>|</p>
      
      <router-link :to="{name: 'country', params: {countryCommonName: props.country.name.common}}">Voir plus</router-link>
    </div>
  </div>
</template>

<style scoped>
  img {
    width: 30px;
  }

  .actions-box {
    display: flex;
    gap: 15px;
  }

  .actions-box p {
    margin: 0;
  }
</style>