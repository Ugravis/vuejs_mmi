<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter()
  const libelle = ref('')

  async function handleValidate() {
    await fetch(`http://localhost:8000/api/fournisseurs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/ld+json'
      },
      body: JSON.stringify({
        libelle: libelle.value
      })
    })
    router.push('/suppliers')
  }
</script>

<template>
  <h1>Ajouter un fournisseur</h1>

  <form>
    <div>
      <label for="libelle">Libelle :</label>
      <input type="text" id="libelle" v-model="libelle">
    </div>

    <div>
      <button 
        @click="handleValidate"
        :disabled="!libelle.length"
      >
        Valider
      </button>
    </div>
  </form>
</template>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  form > div {
    display: flex;
    gap: 10px;
  }
</style>