<template>
  <section class="bg-gray-800 text-white py-16 md:py-24">
    <div class="container mx-auto px-6">
      
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">以數據引領，以科技革新</h2>
        <p class="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          我們致力於將繁瑣的醫療流程數據化、智能化，以下是我們的階段性成果。
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        
        <div v-for="stat in stats" :key="stat.name" class="text-center">
          <span class="block text-4xl md:text-5xl font-bold text-blue-400">
            {{ stat.displayValue }}
            <span v-if="stat.suffix" class="text-3xl md:text-4xl">{{ stat.suffix }}</span>
          </span>
          <span class="block text-sm md:text-lg text-gray-300 mt-2">{{ stat.name }}</span>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 1. 定義我們的目標數據
const stats = ref([
  { name: '多國專利', value: 20, displayValue: 0, suffix: '+' },
  { name: '合作醫學中心', value: 15, displayValue: 0, suffix: '+' },
  { name: '調劑準確率', value: 99.9, displayValue: 0, suffix: '%' },
  { name: '年處理處方量', value: 5, displayValue: 0, suffix: 'M+' } // M+ 代表 百萬
])

// 2. 數字滾動的動畫函數
function animateCount(stat) {
  const duration = 2000; // 動畫持續 2 秒
  const totalFrames = 120; // 60fps * 2s
  const increment = stat.value / totalFrames;
  let currentFrame = 0;

  const timer = setInterval(() => {
    currentFrame++;
    let newValue = increment * currentFrame;

    if (newValue > stat.value) {
      newValue = stat.value;
      clearInterval(timer);
    }

    // 處理小數點 (for 99.9%)
    if (stat.value.toString().includes('.')) {
      stat.displayValue = newValue.toFixed(1); // 保留一位小數
    } else {
      stat.displayValue = Math.ceil(newValue); // 取整數
    }
  }, duration / totalFrames);
}

// 3. 當組件掛載時 (顯示在畫面上時)，觸發所有動畫
onMounted(() => {
  // 
  // 
  // 
  // (一個更進階的做法是搭配 IntersectionObserver，
  // 
  // 
  // 
  //  等滑到可視範圍「才」觸發，但 `onMounted` 已足夠專業)
  stats.value.forEach(animateCount);
})
</script>