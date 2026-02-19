<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()
  const router = useRouter()

  const props = defineProps<{
    currentPage: number
    totalPages: number
  }>()

  function changePage(newPage: number) {
    router.push({ query: { ...route.query, page: newPage } })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>

<template>
  <div class="pagination">
    <button
      :disabled="currentPage <= 1"
      @click="changePage(currentPage - 1)"
    >
      ←
    </button>

    <span>Page {{ currentPage }} / {{ totalPages }}</span>

    <button
      :disabled="currentPage >= totalPages"
      @click="changePage(currentPage + 1)"
    >
      →
    </button>
  </div>
</template>