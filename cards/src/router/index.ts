import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import DisplayCardsView from '../views/DisplayCardsView.vue'
import DisplaySetsView from '../views/DisplaySetsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, {
      path: '/accueil',
      name: 'home2',
      component: HomeView
    }, {
      path: '/rechercher',
      name: 'search',
      component: SearchView
    }, {
      path: '/cartes',
      name: 'cards',
      component: DisplayCardsView
    }, {
      path: '/sets',
      name: 'sets',
      component: DisplaySetsView
    }
  ]
})

export default router