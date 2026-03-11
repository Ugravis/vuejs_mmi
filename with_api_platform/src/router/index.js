import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import SuppliersView from '@/views/SuppliersView.vue'
import SupplierCreateView from '@/views/SupplierCreateView.vue'

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
      path: '/suppliers',
      name: 'suppliers',
      component: SuppliersView
    },
    {
      path: '/suppliers/create',
      name: 'suppliers-create',
      component: SupplierCreateView
    }
  ],
})

export default router