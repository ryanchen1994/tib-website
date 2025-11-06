<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-6">
      
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">核心服務</h2>
        <p class="text-lg text-gray-600 mt-2">以智慧科技革新醫療流程</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpsJGvjQRCBsCBG5X3oYqP3sBETLvpQWRG3w&s" 
            alt="智慧調劑台"
            class="w-full h-48 object-cover"
          >
          <div class="p-6 flex-grow">
            <h3 class="text-2xl font-extrabold text-gray-900 mb-2">智慧調劑台</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              本系統為世界首創，通過多國專利肯定，以藥品調劑台搭載智慧導引系統，點亮相對應藥品指示燈，減輕工作負荷，大幅提升調劑準確率。
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
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop" 
            alt="ADC自動藥櫃"
            class="w-full h-48 object-cover"
          >
          <div class="p-6 flex-grow">
            <h3 class="text-2xl font-extrabold text-gray-900 mb-2">ADC</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              市售唯一電子面板均顯示數量。佈局醫院－電子藥櫃與動畫數量顯示，抽屜面板均具有電子標籤及數量提示，提供即時庫存管理與用藥追蹤。
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
</script>