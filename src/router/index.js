import { createRouter, createWebHashHistory } from 'vue-router'
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
  // 使用 hash 模式（/#/）來避免 GitHub Pages 上的伺服器 fallback 問題
  // 最終 URL 會是 /tib-website/#/about 之類，這在 GH Pages 上不需額外伺服器設定
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router