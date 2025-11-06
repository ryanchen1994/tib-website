<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center gap-12">
        
        <div class="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://placehold.co/800x600/E2E8F0/475569?text=About+Us+Image" 
            alt="關於我們" 
            class="w-full h-full object-cover"
          >
        </div>

        <div class="w-full md:w-1/2">
          <h2 class="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">關於我們</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">台灣新創生醫股份有限公司</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            公司成立於2021年4月，致力於研發各項智慧科技解決方案... (【TODO】請在這裡貼上你 `擷取3_0.JPG` 上的完整文字) ...並提昇醫院整體智能化經營效能。
          </p>
          <RouterLink 
            to="/about"
            class="inline-block bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            瞭解更多
          </RouterLink>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// 這個組件很單純，不需要 script
</script>