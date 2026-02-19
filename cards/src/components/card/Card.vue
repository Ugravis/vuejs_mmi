<script setup lang="ts">
  import type { Card } from '../../utils/types/magicApi.types'

  const props = defineProps<{
    cardData: Card
    displayImage: boolean
  }>()

  const cardPlaceholder: string = `https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=0&type=card`
</script>

<template>
  <div class="card-box">
    <img v-if="displayImage" :src="cardData.imageUrl ?? cardPlaceholder" :alt="cardData.name">

    <div class="right-part">
      <h3>{{ cardData.name }}</h3>

      <div>
        <p><b>Couleurs :</b> {{ cardData.colors ? cardData.colors.join(', ') : 'Aucune' }}.</p>
        <p><b>Type :</b> {{ cardData.type }}.</p>
        <p><b>Coût en mana :</b> {{ cardData.manaCost }}.</p>
        <RouterLink :to="{ name: 'card', params: { id: cardData.id } }">Voir plus</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
  img {
    width: 200px;
  }

  .card-box {
    display: flex;
    border: 2px solid #000;
    border-radius: 12px;
  }

  .right-part {
    margin-left: 16px;
  }
</style>