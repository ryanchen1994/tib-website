<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="bg-gray-100 text-gray-600 text-xs hidden md:block">
      <div class="container mx-auto px-6 py-2 flex justify-between items-center">
        <div>
          <span class="mr-4">Tel: +886-4-23200709</span>
          <span>Email: info@tib-lab.com</span>
        </div>
        <span>台中市南屯區文心路一段378號24樓之5</span>
      </div>
    </div>

    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <RouterLink to="/" class="text-2xl font-bold text-blue-600 hover:text-blue-700">
        <span class="">台灣新創生醫</span>
      </RouterLink>

      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden z-20">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-8 6h8"></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <div class="hidden md:flex items-center space-x-6">
        <RouterLink v-for="link in navLinks" :key="link.name" :to="link.path"
                    class="text-gray-700 hover:text-blue-600 transition"
                    active-class="font-semibold text-blue-600 border-b-2 border-blue-600 pb-1">
          {{ link.name }}
        </RouterLink>
      </div>

      <div v-if="isMobileMenuOpen" class="md:hidden absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8">
        <RouterLink v-for="link in navLinks" :key="link.name" :to="link.path"
                    @click="isMobileMenuOpen = false"
                    class="text-2xl text-gray-800 hover:text-blue-600">
          {{ link.name }}
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: '首頁', path: '/' },
  { name: '關於我們', path: '/about' },
  { name: '產品說明', path: '/products' },
  { name: '操作案例', path: '/cases' },
  { name: '聯絡我們', path: '/contact' }
]

// 【注意】 產品說明是下拉選單，我們之後再來處理，先讓它能點
</script>