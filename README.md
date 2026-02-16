# Vue js (3), compo API, MMI module

[![Langages used](https://skillicons.dev/icons?i=nodejs,vue,vite)](https://skillicons.dev)

# Attributs

### Le v-bind

Utilisation du `v-bind` pour rendre un attribut html réactif. Raccourcis en écrivant `:`. Ex avec l'attribut style : `v-bind:style`, `:style` ; `:style="'color: ${variable}';"`.

### If, else, show

`v-if`, `v-else`, `v-show` (gère uniquement la propr CSS display de l'élément).

### Boucles

```html
<li v-for="(value, key) in notes" :key="index">{{ value }}</li>
```

# Variables réactives

De base, les variables ne sont pas réactives (afin d'éviter que le framework ne regarde tout en continu - perte de performances). ⭢ Il faut donc préciser les variables réactives. Notamment avec `ref()`.

Pour faire un calcul entre diff var qui doit être réactif (maj en continu), utilisation de `computed`.

```js
const var1 = 18
const var2 = 16

const test = computed(() => {
  return var1 + var2
})
```

# Manipulation DOM

De manière conventionelle, utiliser `onMounted()` pour réaliser toutes les actions exécutées au chargement de la page (appels de fonctions, etc).

```js
onMounted(() => {
  console.log('Component loaded')
})
```

# Transit de données

### Parent → enfant

Envoi avec `<Child :data1="var1" />`, puis récupération avec `defineProps()` (2 écritures possibles).

```html
<!-- Parent: views/HomeView.vue -->

<template>
  <Child var1="hello world" />
</template>

<!-- Child: components/Article.vue -->

<script setup>
  // Ecriture 1
  defineProps({
    var1: String,
  })
  // Ecriture 2
  const proprs = defineProps(['var1'])
</script>

<template>
  <h1>Message received: {{ var1 }}</h1>
</template>
```

### Enfant → parent

Envoi avec `emit()`, puis récupération avec `<Child @eventName="handle">`.

```html
<!-- Child: components/Article.vue -->

<template>
  <input
    type="text"
    :v-model="data1"
    @change="emit("input-event", data1)"
  >
</template>

<script>
  const emit = defineEmits(['input-event'])
</script>

<!-- Parent: views/HomeView.vue -->

<template>
  <Child @input-event="handle" />
</template>
```

# Router

Dans un component :

```html
<!-- Lien vers une page -->
<router-link to="/">Accueil</router-link>

<!-- Zone de rendu des composants du router -->
<router-view></router-view>
```

Le fichier `/src/router/index.js` :

```js
const router = createRouter({
  routes: [
    {
      path: '/',
      component: HomeView,
    },
  ],
})
```

# Structure

`index.html` ⭢ `main.js` ⭢ `App.vue` ⭢ `HomeView.vue`.

### Vue file

```html
<templatee>
	<p>{{ test }}</p>
</template>

<script setup>
	const test = "hello world"
</script>

<style>
	p { color: red; }
</style>
```

### Basic tree

```
vuejs_mmi
├─ index.html
├─ public
└─ src
   ├─ App.vue
   ├─ assets
   │  └─ logo.svg
   ├─ components
   │  └─ HelloWorld.vue
   ├─ main.js
   ├─ router
   │  └─ index.js
   └─ views
      └─ HomeView.vue

```

# Exemples

Utilisation de `onMounted` et `ref` :

```html
<script setup>
  import { onMounted, ref } from 'vue'

  let data = ref('')

  onMounted(async () => {
    data.value = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        return data
      })
  })
</script>

<template>
  <div v-if="data">
    <p>{{ data.title }}</p>
  </div>

  <div v-else>
    <p>Loading...</p>
  </div>
</template>
```

ajouts : watch (pour faire en sorte qu'une var soit tjr dynamique après un traitement JS) - (à voir la diff avec computed)
