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
            <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow">{{ slide.title }}</h1>
            <ul class="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-left inline-block space-y-2">
              <li v-for="(point, index) in slide.points" :key="index" class="flex items-start">
                <span class="mr-2">•</span>
                <span>{{ point }}</span>
              </li>
            </ul>
            <div>
            </div>
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
const BASE = import.meta.env.BASE_URL || '/'
const slides = ref([
  {
    title: '第五代智慧調劑台',
    points: [
      '智能指示燈導引系統',
      '完整的調劑流程記錄與追蹤',
      '支援客製化配置與彈性擴充'
    ],
    image: `${BASE}images/products/第五代智慧調劑台抽屜2.png`
  },
  {
    title: '第二代精靈小藥櫃',
    points: [
      '電子標籤即時顯示藥品資訊',
      '自動記錄完整取用歷程',
      '多層級權限管理與控管'
    ],
    image: `${BASE}images/products/第二代精靈小藥櫃-特.png`
  },
  {
    title: '智慧冰箱管理系統',
    points: [
      '電子鎖控與權限管理',
      '耐低溫電子標籤顯示',
      '亮燈導引快速取藥'
    ],
    image: `${BASE}images/products/智慧冰箱管理系統.png`
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