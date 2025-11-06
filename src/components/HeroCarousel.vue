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

// 輪播內容 (從你的截圖來的)
const slides = ref([
  {
    title: '智能調劑台',
    subtitle: '本系統為世界首創，遵循多國專利技術，以藥品圖形辨識智能管理導引系統，減輕工作負擔。',
    // 【TODO】請替換成你的圖片
    image: 'https://placehold.co/1920x800/334155/FFFFFF?text=Slide+1+(智能調劑台)'
  },
  {
    title: 'ADC',
    subtitle: '佈局醫院－電子藥櫃與動畫數量顯示',
    // 【TODO】請替換成你的圖片
    image: 'https://placehold.co/1920x800/475569/FFFFFF?text=Slide+2+(ADC)'
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