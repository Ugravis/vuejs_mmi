# Vue js, MMI module

[![Langages used](https://skillicons.dev/icons?i=nodejs,vue,vite)](https://skillicons.dev)

# Attributs

Utilisation du `v-bind` pour rendre un attribut html réactif. Raccourcis en écrivant `:`. Ex avec l'attribut style : `v-bind:style` ; `:style="\`color: ${variable}\`;"`.

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
