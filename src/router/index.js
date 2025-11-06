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
  // 使用 hash 模式（/#/）來避免 GitHub Pages 上的 404 問題
  // Hash 模式不需要伺服器配置，所有路由都會透過 # 來處理
  // URL 範例：https://username.github.io/repo/#/about
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router