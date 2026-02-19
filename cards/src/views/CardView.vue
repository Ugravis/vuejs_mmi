<script setup lang="ts">
  import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import type { Card } from '../utils/types/magicApi.types';
import config from '../utils/config/config';

  const route = useRoute()

  const cardId = route.params.id
  const cardData = ref<Card>()

  async function fetchCard() {
    try {
      const res = await fetch(`${config.magicApiUrl}/cards/${cardId}`)
      const data = await res.json()
      cardData.value = data.card
      console.log(cardData.value)
    
    } catch(e) { console.error('API error: ', e) }
  }

  onMounted(() => {
    fetchCard()
    window.scrollTo({ top: 0 })
  })
</script>

<template>
  <div v-if="cardData">

    <h1>{{ cardData.name }}</h1>

    <img 
      v-if="cardData.imageUrl" 
      :src="cardData.imageUrl" 
      :alt="cardData.name"
    />

    <hr />

    <section>
      <h2>Informations générales</h2>
      <p><strong>Mana Cost :</strong> {{ cardData.manaCost }}</p>
      <p><strong>CMC :</strong> {{ cardData.cmc }}</p>
      <p><strong>Type :</strong> {{ cardData.type }}</p>
      <p><strong>Rareté :</strong> {{ cardData.rarity }}</p>
      <p><strong>Extension :</strong> {{ cardData.set }} ({{ cardData.setName }})</p>
      <p><strong>Artiste :</strong> {{ cardData.artist }}</p>
      <p><strong>Layout :</strong> {{ cardData.layout }}</p>
      <p><strong>Description :</strong> {{ cardData.originalText }}</p>
    </section>

    <hr />

    <section>
      <h2>Caractéristiques</h2>

      <p><strong>Couleurs :</strong> {{ cardData.colors?.join(', ') }}</p>
      <p><strong>Identité couleur :</strong> {{ cardData.colorIdentity?.join(', ') }}</p>
      <p><strong>Types :</strong> {{ cardData.types?.join(', ') }}</p>
      <p><strong>Sous-types :</strong> {{ cardData.subtypes?.join(', ') }}</p>
    </section>

    <hr />

    <section>
      <h2>Éditions</h2>
      <ul>
        <li v-for="printing in cardData.printings" :key="printing">
          {{ printing }}
        </li>
      </ul>
    </section>

    <hr />

    <section>
      <h2>Légalités</h2>
      <ul>
        <li 
          v-for="legality in cardData.legalities" 
          :key="legality.format"
        >
          <strong>{{ legality.format }} :</strong> {{ legality.legality }}
        </li>
      </ul>
    </section>

    <hr />

    <section>
      <h2>Identifiants</h2>
      <p><strong>ID :</strong> {{ cardData.id }}</p>
      <p><strong>Multiverse ID :</strong> {{ cardData.multiverseid }}</p>
      <p v-if="cardData.variations?.length">
        <strong>Variations :</strong> {{ cardData.variations.join(', ') }}
      </p>
    </section>

  </div>

  <div v-else>
    Chargement...
  </div>
</template>

<style scoped>
  img {
    width: 200px;
  }
</style>