<template>
  <header class="sticky top-0 z-50 bg-white md:backdrop-blur-md md:bg-white/80 border-b border-gray-100 shadow-sm">
    <div class="bg-brand-600/90 text-white text-xs hidden md:block">
      <div class="container mx-auto px-6 py-2 flex justify-between items-center">
        <div class="flex items-center gap-4 opacity-90">
          <a href="tel:+886423200709" class="hover:underline">Tel: +886-4-23200709</a>
          <a href="mailto:info@tib-lab.com" class="hover:underline">info@tib-lab.com</a>
        </div>
        <span class="opacity-90">台中市南屯區文心路一段378號24樓之5</span>
      </div>
    </div>

    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <RouterLink to="/" class="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-gray-900">
        <img :src="logoUrl" alt="台新創LOGO" class="h-10 object-contain" />
      </RouterLink>

      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden z-20 text-gray-900 bg-white/90 p-2 rounded-lg shadow-sm">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-8 6h8"></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <div class="hidden md:flex items-center gap-8">
        <RouterLink v-for="link in navLinks" :key="link.name" :to="link.path"
                    class="text-gray-700 hover:text-brand-700 transition relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-600 hover:after:w-full after:transition-all"
                    active-class="text-brand-700 font-semibold">
          {{ link.name }}
        </RouterLink>
      </div>

      <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div class="container mx-auto px-6 py-4">
          <RouterLink v-for="link in navLinks" :key="link.name" :to="link.path"
                      @click="isMobileMenuOpen = false"
                      class="block py-3 text-gray-700 hover:text-brand-700 hover:bg-gray-50 rounded-lg px-4 transition">
            {{ link.name }}
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'


const isMobileMenuOpen = ref(false)

// 使用 Vite 的 BASE_URL 作為首頁連結，避免在 GitHub Pages 的 repository page 下導回 domain root
const BASE = import.meta.env.BASE_URL || '/'

const navLinks = [
  { name: '首頁', path: '/' },
  { name: '關於我們', path: '/about' },
  { name: '產品說明', path: '/products' },
  { name: '施作案例', path: '/cases' },
  { name: '聯絡我們', path: '/contact' }
]

// 【注意】 產品說明是下拉選單，我們之後再來處理，先讓它能點

// logo 圖片使用 import.meta.url 在 script 中處理，改為使用「台新創LOGO-橫式.png」
const logoUrl = new URL('../assets/images/Logos/台新創LOGO-橫式.png', import.meta.url).href
</script>