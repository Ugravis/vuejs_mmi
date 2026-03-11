<script setup>
  import { onMounted, ref } from 'vue'
  import Supplier from '@/components/Supplier.vue'

  const suppliers = ref([])

  onMounted(async () => {
    try {
      const res = await fetch('http://localhost:8000/api/fournisseurs')
      const data = (await res.json())["hydra:member"]
      suppliers.value = data

    } catch (e) {
      console.error('API error:', e)
    }
  })
</script>

<template>
  <h2>Suppliers ({{ suppliers.length }})</h2>

  <div v-for="(supplier, supplierIndex) in suppliers" :key="supplierIndex"><hr>
    <Supplier :supplier="supplier" />
  </div><hr>

  <RouterLink to="suppliers/create">Ajouter un fournisseur</RouterLink>
</template>