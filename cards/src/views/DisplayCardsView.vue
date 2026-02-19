<script setup lang="ts">
  import { computed, onMounted, ref, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { type Card } from '../utils/types/magicApi.types'
  import config from '../utils/config/config'
  import CardComponent from '../components/card/Card.vue'
  import PaginationComponent from '../components/layout/Pagination.vue'

  const route = useRoute()

  const cardsData = ref<Card[]>([])
  const totalPages = ref(0)
  const itemsPerPage = 100

  const currentPage = computed(() => Number(route.query.page) || 1)
  
  async function fetchCards() {
    cardsData.value = []
    try {
      const res = await fetch(`${config.magicApiUrl}/cards?language=French&page=${currentPage.value}&pageSize=${itemsPerPage}`)

      const totalCount = Number(res.headers.get('total-count'))
      totalPages.value = Math.ceil(totalCount / itemsPerPage)

      const data = await res.json()
      cardsData.value = data.cards

    } catch(e) {
      console.error(`API error: `, e)
    }
  }

  onMounted(fetchCards)
  watch(() => route.query.page, fetchCards)
</script>

<template>
  <div>
    <h1>Liste des cartes</h1>
      <p v-if="!cardsData.length">Chargement...</p>

      <div v-else>
        <PaginationComponent
          :totalPages="totalPages"
          :currentPage="currentPage"
        />
        
        <div class="cards-box">
          <CardComponent 
            v-for="(card, index) in cardsData" 
            :key="index" 
            :cardData="card"
          />
        </div>

        <PaginationComponent
          :totalPages="totalPages"
          :currentPage="currentPage"
        />
      </div>
  </div>
</template>

<style scoped>
  .cards-box {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 10px;
    margin: 3vw;
  }

  .pagination {
    display: flex;
    justify-content: center;
    gap: 12px;
  }
</style>