<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-6 max-w-5xl">
      
      <div class="text-center mb-12">
        <h2 class="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">公司簡介</h2>
        <p class="text-4xl font-bold text-gray-900">以智慧科技，創新生醫價值</p>
      </div>

      <div class="text-gray-700 leading-loose text-lg space-y-6">
        <p>
          台灣新創生醫股份有限公司成立於2021年4月，致力於研發各項**智慧科技解決方案**，專注於提供醫療院所更高效、更安全的藥物管理和調劑系統。
        </p>
        <p>
          我們的核心產品如**智能調劑台**及**ADC自動藥櫃**，均為世界首創，結合多國專利技術，旨在透過圖形辨識智能管理導引系統，大幅減少人為錯誤，並減輕醫療人員的工作負擔。
        </p>
        <p>
          <span class="font-semibold text-blue-600">願景與目標：</span> 成為全球領先的智慧醫療科技提供者，持續創新，推動醫院朝向全方位的智慧化經營，實現醫病雙贏。
        </p>
      </div>

      <hr class="my-12 border-gray-200">

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div v-for="(item, index) in values" :key="index" class="p-6 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
          <h4 class="text-xl font-bold text-blue-600 mb-3">{{ item.title }}</h4>
          <p class="text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  { title: '創新 (Innovation)', description: '專注於生醫科技領域的技術突破與產品設計。' },
  { title: '安全 (Safety)', description: '提供零錯誤率的調劑系統，確保用藥安全。' },
  { title: '效率 (Efficiency)', description: '以智能系統優化流程，提升醫院運營效率。' }
]
</script>