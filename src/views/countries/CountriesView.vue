<script setup>
  const countriesMap = [
    { name: 'France', capital: 'Paris', flag: '🇫🇷' },
    { name: 'Espagne', capital: 'Madrid', flag: '🇪🇸' },
    { name: 'Italie', capital: 'Rome', flag: '🇮🇹' },
    { name: 'Allemagne', capital: 'Berlin', flag: '🇩🇪' },
    { name: 'Belgique', capital: 'Bruxelles', flag: '🇧🇪' },
    { name: 'Luxembourg', capital: 'Luxembourg', flag: '🇱🇺' },
    { name: 'Pays-Bas', capital: 'Amsterdam', flag: '🇳🇱' },
    { name: 'Danemark', capital: 'Copenhague', flag: '🇩🇰' },
    { name: 'Slovénie', capital: 'Ljubljana', flag: '🇸🇮' },
    { name: 'Suisse', capital: 'Berne', flag: '🇨🇭' }
  ];
</script>

<template>
  <h2>Countries page</h2>

  <div v-for="(country, index) in countriesMap" :key="index">
    <p>
      {{ country.flag }} {{ country.name }} 
      
      <router-link :to="{name: 'country', params: {name: country.name}}">
        Voir plus
      </router-link>
    </p>
  </div>
</template>
