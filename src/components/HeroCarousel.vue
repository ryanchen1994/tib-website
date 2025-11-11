<template>
  <div class="relative w-full h-[600px] md:h-[700px] bg-gray-900">
    <swiper
      :modules="[Navigation, Pagination, Autoplay, EffectFade]"
      :slides-per-view="1"
      :loop="true"
      :effect="'fade'"
      :fade-effect="{ crossFade: true }"
      :speed="700"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      :navigation="true"
      class="w-full h-full"
    >
      <swiper-slide v-for="slide in slides" :key="slide.title" class="relative">
        <div 
          class="w-full h-full bg-cover bg-center"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
        </div>
        
        <div class="absolute inset-0 flex items-center justify-center text-center">
          <div class="container mx-auto px-6 text-white">
            <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow">{{ slide.title }}</h1>
            <p class="text-lg md:text-2xl mb-10 max-w-3xl mx-auto opacity-95">{{ slide.subtitle }}</p>
            <RouterLink 
              to="/products" 
              class="btn-primary text-lg"
            >
              瞭解更多
            </RouterLink>
          </div>
        </div>
      </swiper-slide>

    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 引入 Swiper 核心
import { Swiper, SwiperSlide } from 'swiper/vue';
// 引入 Swiper 需要的模組
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// 引入 Swiper 樣式
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// 輪播內容
const slides = ref([
  {
    title: '第五代智慧調劑台',
    subtitle: '世界首創專利技術，搭載藥品圖形辨識智能管理系統，點亮相對應藥品指示燈，減輕工作負荷，大幅提升調劑準確率。',
  image: new URL('../../public/images/products/第五代智慧調劑台抽屜2.png', import.meta.url).href
  },
  {
    title: '第二代精靈小藥櫃',
    subtitle: '智慧化藥品管理系統，搭載電子標籤與數量即時顯示，提供完整的庫存管理與用藥追蹤，確保藥品安全無虞。',
  image: new URL('../../public/images/products/第二代精靈小藥櫃 特.png', import.meta.url).href
  },
  {
    title: '智慧冰箱管理系統',
    subtitle: '專業醫療冷藏保存系統，24小時溫度監控，異常即時警報，確保低溫藥品安全無虞。',
  image: new URL('../../public/images/products/智慧冰箱管理系統.png', import.meta.url).href
  }
])
</script>

<style>
/* 這是客製化 Swiper 導航按鈕和分頁點的顏色 */
.swiper-button-next,
.swiper-button-prev {
  color: white;
}
.swiper-pagination-bullet-active {
  background-color: white;
}
</style>