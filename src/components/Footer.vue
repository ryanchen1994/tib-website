<template>
  <footer class="bg-gray-950 text-gray-300 pt-16 pb-12">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div class="md:col-span-2">
          <h3 class="text-xl font-extrabold text-white mb-3">台灣新創生醫</h3>
          <p class="text-sm mb-2">Tel: +886-4-23200709</p>
          <p class="text-sm mb-2">Email: info@tib-lab.com</p>
          <p class="text-sm">地址：台中市南屯區文心路一段378號24樓之5</p>
          <div class="mt-4 inline-flex items-center gap-2 text-xs text-white/70 bg-brand-600/20 px-3 py-1 rounded-full">
            <span class="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
            智慧醫療自動化解決方案
          </div>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-white mb-4">網站地圖</h4>
          <ul class="space-y-2">
            <li><RouterLink :to="BASE" class="text-sm hover:text-white transition">首頁</RouterLink></li>
            <li><RouterLink to="/about" class="text-sm hover:text-white transition">關於我們</RouterLink></li>
            <li><RouterLink to="/products" class="text-sm hover:text-white transition">產品說明</RouterLink></li>
            <li><RouterLink to="/cases" class="text-sm hover:text-white transition">操作案例</RouterLink></li>
            <li><RouterLink to="/contact" class="text-sm hover:text-white transition">聯絡我們</RouterLink></li>
          </ul>
        </div>

        <div class="text-center md:text-left">
          <h4 class="text-lg font-semibold text-white mb-4">官方 LINE</h4>
          <div class="w-32 h-32 bg-gray-800 border border-white/10 rounded-lg flex items-center justify-center text-xs mx-auto md:mx-0">
            (QR Code)
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

// 同 Navbar 使用 BASE 以符合 GH Pages 的 repository base
const BASE = import.meta.env.BASE_URL || '/'
</script>