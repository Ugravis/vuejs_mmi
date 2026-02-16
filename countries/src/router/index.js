import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import UserView from '@/views/UserView.vue'
import CountriesView from '@/views/countries/CountriesView.vue'
import CountryView from '@/views/countries/CountryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home',
      name: 'home2',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/user/:username',
      name: 'user',
      component: UserView,
    },
    {
      path: '/countries',
      name: 'countries',
      component: CountriesView,
    },
    {
      path: '/country/:countryCommonName',
      name: 'country',
      component: CountryView,
      props: true,
    },
  ],
})

export default router
