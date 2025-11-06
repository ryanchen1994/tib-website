<template>
  <section class="bg-gray-50 py-16">
    <div class="container mx-auto px-6">
      <h3 class="text-center text-lg font-semibold text-gray-600 mb-8">
        已獲全台多家醫學中心信賴並導入
      </h3>
      
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        <div v-for="client in clients" :key="client.id" class="flex justify-center">
          <div class="h-16 w-32 bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-bold opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300">
            {{ client.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 我們直接沿用 '操作案例' 的資料，這很聰明
import { cases as clients } from '@/data/cases.js'
</script>