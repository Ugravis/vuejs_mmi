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
  <h1>Suppliers</h1>

  <div v-for="(supplier, supplierIndex) in suppliers" :key="supplierIndex">
    <Supplier :supplier="supplier" />
  </div>
</template>