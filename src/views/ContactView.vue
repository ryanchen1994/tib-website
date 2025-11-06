<template>
  <div>
    <PageBanner title="聯絡我們" subtitle="我們期待您的來信" />

    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-6 max-w-7xl">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div class="flex flex-col items-center justify-center space-y-8 bg-gray-50 rounded-lg p-8 shadow-lg">
            <div class="text-center">
              <h2 class="text-3xl font-extrabold text-gray-900 mb-4">加入我們的 LINE 官方帳號</h2>
              <p class="text-lg text-gray-600 mb-6">掃描 QR Code 或點擊下方連結，立即與我們聯繫</p>
            </div>
            
            <div class="w-64 h-64 bg-white p-4 rounded-lg shadow-md">
              <img 
                src="/line-qrcode.png" 
                alt="官方LINE QR Code" 
                class="w-full h-full object-contain"
                onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iIzFmMWYxZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5RUiBDb2RlPC90ZXh0Pjwvc3ZnPg=='"
              >
            </div>
            
            <a 
              href="https://line.me/ti/p/@388nbpiu" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#06C755] text-white font-semibold rounded-lg shadow-md hover:bg-[#05B34A] transition duration-300 transform hover:scale-105"
            >
              <span class="text-xl font-bold">LINE</span>
              加入 LINE 官方帳號
            </a>
            
            <p class="text-sm text-gray-500">或搜尋 LINE ID: <span class="font-semibold text-gray-700">@388nbpiu</span></p>
            
            <hr class="border-gray-200 w-full my-4">
            
            <div class="w-full space-y-4 text-lg text-gray-700">
              <p class="flex items-center">
                <span class="w-6 h-6 text-brand-600 mr-3">📞</span>
                <a href="tel:+886423200709" class="text-brand-600 hover:text-brand-700 hover:underline transition">+886-4-23200709</a>
              </p>
              <p class="flex items-center">
                <span class="w-6 h-6 text-brand-600 mr-3">✉️</span>
                <a href="mailto:info@tib-lab.com" class="text-brand-600 hover:text-brand-700 hover:underline transition">info@tib-lab.com</a>
              </p>
              <p class="flex items-start">
                <span class="w-6 h-6 text-brand-600 mr-3 mt-1">📍</span>
                <span>台中市南屯區文心路一段378號24樓之5</span>
              </p>
            </div>
          </div>

          <div class="w-full min-h-[400px] lg:min-h-0 rounded-lg overflow-hidden shadow-lg">
            <ContactMap />
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import PageBanner from '@/components/PageBanner.vue'
import ContactMap from '@/components/ContactMap.vue'
</script>