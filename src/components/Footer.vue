<template>
  <footer class="bg-gray-950 text-gray-300 pt-16 pb-12">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div class="md:col-span-2">
          <div class="mb-3">
            <img :src="footerLogo" alt="台新創LOGO" class="h-12 object-contain">
          </div>
          <p class="text-sm mb-2">
            Tel: <a href="tel:+886423200709" class="text-brand-400 hover:text-brand-300 hover:underline transition">+886-4-23200709</a>
          </p>
          <p class="text-sm mb-2">
            Email: <a href="mailto:info@tib-lab.com" class="text-brand-400 hover:text-brand-300 hover:underline transition">info@tib-lab.com</a>
          </p>
          <p class="text-sm mb-2">
            LINE: <a href="https://line.me/ti/p/@388nbpiu" class="text-brand-400 hover:text-brand-300 hover:underline transition" target="_blank" rel="noopener noreferrer">官方帳號</a>
          </p>
          <p class="text-sm">地址：台中市南屯區文心路一段378號24樓之5</p>
          <div class="mt-4 inline-flex items-center gap-2 text-xs text-white/70 bg-brand-600/20 px-3 py-1 rounded-full">
            <span class="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
            智慧醫療自動化解決方案
          </div>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-white mb-4">網站地圖</h4>
          <ul class="space-y-2">
            <li><RouterLink to="/" class="text-sm hover:text-white transition">首頁</RouterLink></li>
            <li><RouterLink to="/about" class="text-sm hover:text-white transition">關於我們</RouterLink></li>
            <li><RouterLink to="/products" class="text-sm hover:text-white transition">產品說明</RouterLink></li>
            <li><RouterLink to="/cases" class="text-sm hover:text-white transition">施作案例</RouterLink></li>
            <li><RouterLink to="/contact" class="text-sm hover:text-white transition">聯絡我們</RouterLink></li>
          </ul>
        </div>

        <div class="text-center md:text-left">
          <h4 class="text-lg font-semibold text-white mb-4">官方 LINE</h4>
          <div class="w-32 h-32 mx-auto md:mx-0">
            <img 
              src="/line-qrcode.png" 
              alt="官方LINE QR Code" 
              class="w-full h-full object-contain bg-white p-2 rounded-lg"
              onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgZmlsbD0iIzFmMWYxZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5RUiBDb2RlPC90ZXh0Pjwvc3ZnPg=='"
            >
          </div>
        </div>

      </div>

      <hr class="border-white/10 my-8">

      <div class="text-center text-sm text-gray-500">
        &copy; {{ new Date().getFullYear() }} 台灣新創生醫股份有限公司．All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
// footer logo
const footerLogo = new URL('../assets/images/Logos/LOGO-橫式加底.jpg', import.meta.url).href
</script>