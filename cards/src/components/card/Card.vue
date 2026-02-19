<script setup lang="ts">
  import type { Card } from '../../utils/types/magicApi.types'

  const props = defineProps<{
    cardData: Card
  }>()

  const cardPlaceholder: string = `https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=0&type=card`
</script>

<template>
  <div class="card-box">
    <img :src="cardData.imageUrl ?? cardPlaceholder" :alt="cardData.name">

    <div>
      <h3>{{ cardData.name }}</h3>

      <div>
        <p><b>Couleurs :</b> {{ cardData.colors ? cardData.colors.join(', ') : 'Aucune' }}.</p>
        <p><b>Type :</b> {{ cardData.type }}.</p>
        <p><b>Coût en mana :</b> {{ cardData.manaCost }}.</p>
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
    gap: 16px;

    border: 2px solid #000;
    border-radius: 12px;
  }
</style>