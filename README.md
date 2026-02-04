# Vue js (3), compo API, MMI module

[![Langages used](https://skillicons.dev/icons?i=nodejs,vue,vite)](https://skillicons.dev)

# Attributs

### Le v-bind

Utilisation du `v-bind` pour rendre un attribut html réactif. Raccourcis en écrivant `:`. Ex avec l'attribut style : `v-bind:style`, `:style` ; `:style="'color: ${variable}';"`.

### Autres

`v-if`, `v-else`.

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

# Structure

`index.html` ⭢ `main.js` ⭢ `App.vue` ⭢ `HomeView.vue`.

## Vue file

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

## Basic tree

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
