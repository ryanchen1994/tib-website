<template>
  <div>
    <PageBanner title="產品說明" subtitle="我們的核心解決方案" />

    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          <div 
            v-for="product in products" 
            :key="product.id" 
            class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <RouterLink 
              :to="{ name: 'product-detail', params: { id: product.id } }" 
              class="block"
            >
              <img :src="product.imageUrl" :alt="product.name" class="w-full h-64 object-cover">
              
              <div classs="p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ product.name }}</h3>
                <p class="text-gray-600 mb-4">{{ product.tagline }}</p>
                <span class="text-blue-600 font-semibold hover:text-blue-700">
                  查看詳細資訊 &raquo;
                </span>
              </div>
            </RouterLink>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageBanner from '@/components/PageBanner.vue'
// 引入我們的 "資料庫"
import { products } from '@/data/products.js'
import { RouterLink } from 'vue-router'
</script>