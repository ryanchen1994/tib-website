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

      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-6 max-w-4xl">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">產品介紹</h2>
          
          <!-- 支援字串或物件格式的 description -->
          <div v-if="typeof product.description === 'string'" class="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
            <p>{{ product.description }}</p>
          </div>
          
          <div v-else class="text-gray-700 leading-relaxed space-y-6">
            <p class="text-lg">{{ product.description.intro }}</p>
            
            <p v-for="(para, index) in product.description.paragraphs" :key="index" class="text-lg">
              {{ para }}
            </p>
            
            <div v-if="product.description.features" class="mt-8">
              <h3 class="text-xl font-bold text-gray-900 mb-4">主要特點</h3>
              <ul class="list-disc list-inside space-y-2 text-lg">
                <li v-for="(feature, index) in product.description.features" :key="index">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-16 text-center">
            <RouterLink 
              to="/products"
              class="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              &laquo; 返回產品列表
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