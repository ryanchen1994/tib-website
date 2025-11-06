<template>
  <section class="bg-gray-50 py-16 md:py-24">
    <div class="container mx-auto px-6">
      
      <div class="bg-white p-10 md:p-16 rounded-2xl shadow-xl text-center max-w-4xl mx-auto border border-gray-100">
        
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          準備好為您的醫療院所導入智慧化了嗎？
        </h2>
        
        <p class="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          立即聯繫我們的專家，了解智能調劑台與 ADC 如何優化您的工作流程，並提升用藥安全。
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          
          <RouterLink 
            to="/contact"
            class="inline-block w-full sm:w-auto px-10 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:-translate-y-0.5"
          >
            立即諮詢
          </RouterLink>

          <RouterLink 
            to="/products"
            class="inline-block w-full sm:w-auto px-10 py-4 bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-sm hover:bg-gray-200 transition duration-300"
          >
            查看產品
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>