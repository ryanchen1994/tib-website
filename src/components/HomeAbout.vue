<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center gap-12">
        
        <div class="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <img 
            :src="aboutImg" 
            alt="智能藥櫃系統" 
            class="w-full h-full object-cover"
          >
        </div>

        <div class="w-full md:w-1/2">
          <h2 class="text-sm font-bold text-brand-600 uppercase tracking-wide mb-2">關於我們</h2>
          <h3 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">台灣新創生醫股份有限公司</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            公司成立於2021年4月，致力於研發各項智慧科技解決方案，專注於提供醫療院所更高效、更安全的藥物管理和調劑系統。
          </p>
          <p class="text-gray-600 leading-relaxed mb-6">
            我們的核心產品如智能調劑台及ADC自動藥櫃，均為世界首創，結合多國專利技術，旨在透過圖形辨識智能管理導引系統，大幅減少人為錯誤，減輕醫療人員工作負擔，並提昇醫院整體智能化經營效能。
          </p>
          <RouterLink 
            to="/about"
            class="btn-outline"
          >
            瞭解更多
          </RouterLink>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
// 使用 script 計算 BASE_URL 路徑，避免在 template 裡直接使用 import.meta
const aboutImg = `${import.meta.env.BASE_URL}images/products/第五代智慧調劑台.png`
</script>