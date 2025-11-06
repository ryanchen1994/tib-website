<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-6">
      
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
        <p class="text-lg text-gray-600 mt-2">我們提供的核心服務</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <img 
            src="https://placehold.co/600x400/D1D5DB/4B5563?text=Service+1+(智慧調劑台)" 
            alt="智慧調劑台"
            class="w-full h-48 object-cover"
          >
          <div class="p-6 flex-grow">
            <h3 class="text-2xl font-semibold text-gray-800 mb-2">智慧調劑台</h3>
            <p class="text-gray-600 mb-4">
              獨創智能導引系統，解決傳統人工擺藥疏失問題。
            </p>
          </div>
          <div class="p-6 pt-0">
            <RouterLink 
              to="/products" 
              class="text-blue-600 hover:text-blue-700 font-semibold"
            >
              詳細資訊 &raquo;
            </RouterLink>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <img 
            src="https://placehold.co/600x400/D1D5DB/4B5563?text=Service+2+(ADC)" 
            alt="ADC"
            class="w-full h-48 object-cover"
          >
          <div class="p-6 flex-grow">
            <h3 class="text-2xl font-semibold text-gray-800 mb-2">ADC</h3>
            <p class="text-gray-600 mb-4">
              佈局醫院－電子藥櫃與動畫數量顯示
            </p>
          </div>
          <div class="p-6 pt-0">
            <RouterLink 
              to="/products" 
              class="text-blue-600 hover:text-blue-700 font-semibold"
            >
              詳細資訊 &raquo;
            </RouterLink>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// 這個組件也很單純
</script>