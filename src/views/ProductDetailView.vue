<template>
  <div>
    <div v-if="product">
      
      <div class="relative w-full h-80 md:h-96">
        <div 
          class="absolute inset-0 bg-cover bg-center"
          :style="{ backgroundImage: `url(${product.imageUrl})` }"
        >
          <div class="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div class="absolute inset-0 flex items-center justify-center text-center z-10 p-4">
          <div class="text-white">
            <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">{{ product.name }}</h1>
            <p class="text-lg md:text-xl font-light text-blue-300">{{ product.tagline }}</p>
          </div>
        </div>
      </div>

      <section class="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div class="container mx-auto px-6 max-w-5xl">
          
          <!-- 支援字串或物件格式的 description -->
          <div v-if="typeof product.description === 'string'" class="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
            <p>{{ product.description }}</p>
          </div>
          
          <div v-else class="space-y-12">
            <!-- 簡介區塊 -->
            <div class="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-blue-600">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h2 class="text-2xl font-bold text-gray-900 mb-4">產品概述</h2>
                  <p class="text-lg text-gray-700 leading-relaxed">{{ product.description.intro }}</p>
                </div>
              </div>
            </div>
            
            <!-- 詳細說明段落 -->
            <div class="space-y-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span class="w-1 h-8 bg-blue-600 rounded-full"></span>
                功能說明
              </h3>
              <div v-for="(para, index) in product.description.paragraphs" :key="index" 
                   class="bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                    {{ index + 1 }}
                  </div>
                  <p class="flex-1 text-lg text-gray-700 leading-relaxed">{{ para }}</p>
                </div>
              </div>
            </div>
            
            <!-- 主要特點 -->
            <div v-if="product.description.features" class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-10">
              <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                主要特點
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="(feature, index) in product.description.features" :key="index"
                     class="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div class="flex items-center gap-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span class="text-gray-800 font-medium">{{ feature }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-16 text-center">
            <RouterLink 
              to="/products"
              class="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              返回產品列表
            </RouterLink>
          </div>
        </div>
      </section>

    </div>

    <div v-else>
      <PageBanner title="錯誤" subtitle="找不到您要的產品" />
      <div class="text-center py-24">
        <p class="text-xl text-gray-600 mb-8">
          您訪問的產品頁面不存在，或已被移除。
        </p>
        <RouterLink 
          to="/products"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
        >
          返回產品列表
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { products } from '@/data/products.js'
import PageBanner from '@/components/PageBanner.vue'

// 1. 獲取當前的路由資訊
const route = useRoute()

// 2. 從路由參數中獲取 'id' (例如 "adc")
const productId = computed(() => route.params.id)

// 3. 根據 'id' 從我們的 'products' 陣列中查找對應的產品
const product = computed(() => {
  return products.find(p => p.id === productId.value)
})

// 安裝 Tailwind 的排版外掛 (可選，但推薦)
// 如果你希望上面的 'prose' 樣式生效，請執行：
// npm install -D @tailwindcss/typography
// 然後在 tailwind.config.js 的 plugins 中加入：
// plugins: [require('@tailwindcss/typography')],
</script>