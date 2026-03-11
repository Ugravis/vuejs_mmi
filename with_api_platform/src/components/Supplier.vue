<script setup >
  defineProps({
    supplier: Object
  })
</script>

<template>
  <p><b>Name :</b> {{ supplier.libelle }}</p>
  <p><b>Address :</b> {{ supplier.adresse ? `${supplier.adresse.rue}, ${supplier.adresse.ville} (${supplier.adresse.codepostal})` : 'Non renseigné' }}</p>
</template>