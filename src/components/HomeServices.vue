<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-6">
      
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">核心服務</h2>
        <p class="text-lg text-gray-600 mt-2">以智慧科技革新醫療流程</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
          <img 
            :src="imgDispense" 
            alt="第五代智慧調劑台"
            class="w-full h-48 object-cover"
          >
          <div class="p-6 flex-grow">
            <h3 class="text-2xl font-extrabold text-gray-900 mb-2">第五代智慧調劑台</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              世界首創專利技術，搭載藥品圖形辨識智能管理系統，點亮相對應藥品指示燈，大幅提升調劑準確率。
            </p>
          </div>
          <div class="p-6 pt-0">
            <RouterLink 
              to="/products" 
              class="text-brand-600 hover:text-brand-700 font-semibold inline-flex items-center gap-1"
            >
              瞭解詳情 <span>&raquo;</span>
            </RouterLink>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
          <img 
            :src="imgCabinet" 
            alt="第二代精靈小藥櫃"
            class="w-full h-48 object-cover"
          >
          <div class="p-6 flex-grow">
            <h3 class="text-2xl font-extrabold text-gray-900 mb-2">第二代精靈小藥櫃</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              智慧化藥品管理系統，搭載電子標籤與數量即時顯示，提供完整的庫存管理與用藥追蹤，確保藥品安全無虞。
            </p>
          </div>
          <div class="p-6 pt-0">
            <RouterLink 
              to="/products" 
              class="text-brand-600 hover:text-brand-700 font-semibold inline-flex items-center gap-1"
            >
              瞭解詳情 <span>&raquo;</span>
            </RouterLink>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
          <img 
            :src="imgFridge" 
            alt="智慧冰箱管理系統"
            class="w-full h-48 object-cover"
          >
          <div class="p-6 flex-grow">
            <h3 class="text-2xl font-extrabold text-gray-900 mb-2">智慧冰箱管理系統</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              專業醫療冷藏保存系統，提供24小時溫度監控與異常警報，確保低溫藥品的安全存放與管理。
            </p>
          </div>
          <div class="p-6 pt-0">
            <RouterLink 
              to="/products" 
              class="text-brand-600 hover:text-brand-700 font-semibold inline-flex items-center gap-1"
            >
              瞭解詳情 <span>&raquo;</span>
            </RouterLink>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

// 圖片路徑使用 public 目錄
const imgDispense = '/tib-website/images/products/第五代智慧調劑台2.png'
const imgCabinet = '/tib-website/images/products/第二代精靈小藥櫃.png'
const imgFridge = '/tib-website/images/products/智慧冰箱管理系統.png'
</script>