import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue') 
  },
  {
    path: '/products', // 產品列表頁
    name: 'products',
    component: () => import('../views/ProductsView.vue') // <-- 我們即將修改這個檔案
  },
  {
    path: '/products/:id', // 產品詳細頁 (動態路由)
    name: 'product-detail',
    component: () => import('../views/ProductDetailView.vue') // <-- 這是我們的新檔案
  },
  {
    path: '/cases',
    name: 'cases',
    component: () => import('../views/CasesView.vue') 
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue') 
  }
]

const router = createRouter({
  // 使用 Vite 注入的 BASE_URL 作為 history 的 base，這樣在 GitHub Pages 的 repository page 下路由才會正確
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router