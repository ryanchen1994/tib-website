<template>
  <div>
    <PageBanner title="操作案例" subtitle="我們的技術已在各大醫療院所導入" />

    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          <div 
            v-for="caseItem in cases" 
            :key="caseItem.id" 
            class="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out hover:shadow-xl"
          >
            <img :src="caseItem.imageUrl" :alt="caseItem.name" class="w-full h-56 object-cover">
            
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">{{ caseItem.name }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed">{{ caseItem.description }}</p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageBanner from '@/components/PageBanner.vue'
// 引入我們的案例資料庫
import { cases } from '@/data/cases.js'
</script>