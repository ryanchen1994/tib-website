<template>
  <section class="bg-white py-16 md:py-24">
    <div class="container mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          已獲全台多家醫學中心信賴並導入
        </h2>
        <p class="text-lg text-gray-600">
          我們的智慧醫療解決方案已在各大醫療院所成功部署
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div 
          v-for="client in clients" 
          :key="client.id" 
          class="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 border border-gray-100"
        >
          <div class="relative h-40 overflow-hidden">
            <img 
              :src="client.imageUrl" 
              :alt="client.name" 
              class="w-full h-full object-cover"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          <div class="p-5 text-center">
            <h3 class="text-lg font-extrabold text-gray-900 mb-1">{{ client.name }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ client.description }}</p>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-10">
        <RouterLink 
          to="/cases" 
          class="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition"
        >
          查看更多案例 <span>&raquo;</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { cases as clients } from '@/data/cases.js'
import { RouterLink } from 'vue-router'
</script>