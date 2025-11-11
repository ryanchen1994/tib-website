<template>
  <div class="relative w-full aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden">
    <div class="absolute inset-0 bg-slate-900">
      <div class="absolute inset-0 bg-gradient-to-b from-cyan-900/60 via-slate-800/40 to-slate-900/70"></div>
      <img
        :src="taiwanImg"
        alt="台灣地圖"
        class="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-contain drop-shadow-[0_25px_35px_rgba(14,116,144,0.25)]"
        loading="lazy"
      >
    </div>

    <!-- 頂部提示訊息 -->
    <div class="absolute top-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium border border-white/20 animate-bounce-slow">
      點擊地區圓點以查看案例
    </div>

    <div class="absolute inset-0">
      <button
        v-for="region in regions"
        :key="region.id"
        type="button"
        class="region-marker group absolute -translate-x-1/2 -translate-y-1/2"
        :style="{ top: region.coordinates.pct.top, left: region.coordinates.pct.left }"
        @click="selectRegion(region.id)"
      >
        <!-- 地區圓點 -->
        <span
          class="marker-dot"
          :class="{ 'active': isActive(region.id) }"
          :aria-label="region.name"
        ></span>
        
        <!-- 連接線與資訊卡 -->
        <div
          class="connector-card"
          :class="{
            'show-left': Number(region.coordinates.pct.left.replace('%', '')) > 50 && region.id !== 'north',
            'show-top': Number(region.coordinates.pct.top.replace('%', '')) < 30 && region.id !== 'north',
            'show-bottom': Number(region.coordinates.pct.top.replace('%', '')) > 70,
            'active': isActive(region.id)
          }"
        >
          <!-- 連接線 -->
          <span class="connector-line"></span>
          
          <!-- 資訊卡 -->
          <div class="info-card">
            <span class="region-name">{{ region.name }}</span>
            <span class="case-count">{{ region.cases.length }} 個案例</span>
          </div>
        </div>

        <span class="sr-only">查看{{ region.name }}的案例</span>
      </button>
    </div>

    <div class="pointer-events-none absolute inset-0 border border-white/10 rounded-3xl"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  regions: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const selectRegion = (regionId) => {
  if (regionId && regionId !== props.modelValue) {
    emit('update:modelValue', regionId)
  }
}

const isActive = (regionId) => regionId === props.modelValue

// 圖片路徑：在 script setup 底下宣告 taiwanImg
const taiwanImg = new URL('../assets/images/Taiwan.png', import.meta.url).href
</script>

<style scoped>
.region-marker:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(34, 211, 238, 0.35);
}

/* 地區圓點樣式 */
.marker-dot {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid #06b6d4;
  box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.2);
  transition: all 0.2s ease;
}

.marker-dot.active {
  transform: scale(1.5);
  background: #06b6d4;
  border-color: white;
  box-shadow: 0 0 0 4px rgba(6, 182, 212, 0.3);
}

.region-marker:hover .marker-dot {
  transform: scale(1.2);
  background: #06b6d4;
}

/* 連接線與資訊卡 */
.connector-card {
  position: absolute;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
  left: 100%;
  top: 50%;
  transform: translateY(-50%) translateX(8px);
}

/* 左側顯示的資訊卡 */
.connector-card.show-left {
  left: auto;
  right: 100%;
  transform: translateY(-50%) translateX(-8px);
}

/* 頂部顯示的資訊卡 */
.connector-card.show-top {
  left: 50%;
  top: auto;
  bottom: 100%;
  transform: translateX(-50%) translateY(-8px);
}

/* 底部顯示的資訊卡 */
.connector-card.show-bottom {
  left: 50%;
  top: 100%;
  transform: translateX(-50%) translateY(8px);
}

/* 連接線 */
.connector-line {
  position: absolute;
  background: rgba(6, 182, 212, 0.6);
  transform: scale(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  width: 40px;
  height: 1px;
  top: 50%;
}

.connector-card.show-left .connector-line {
  right: 0;
  transform-origin: right;
}

.connector-card.show-top .connector-line,
.connector-card.show-bottom .connector-line {
  width: 1px;
  height: 40px;
  left: 50%;
  transform-origin: center top;
}

.connector-card.show-top .connector-line {
  top: 100%;
}

.connector-card.show-bottom .connector-line {
  top: 0;
  transform-origin: center bottom;
}

/* 資訊卡樣式 */
.info-card {
  position: absolute;
  background: rgba(2, 6, 23, 0.85);
  backdrop-filter: blur(8px);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(6, 182, 212, 0.3);
  min-width: 140px;
  white-space: nowrap;
}

/* 水平方向的資訊卡位置 */
.connector-card:not(.show-top):not(.show-bottom) .info-card {
  top: 50%;
  transform: translateY(-50%);
}

.connector-card.show-left .info-card {
  right: 32px;
}

.connector-card:not(.show-left) .info-card {
  left: 32px;
}

/* 垂直方向的資訊卡位置 */
.connector-card.show-top .info-card {
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
}

.connector-card.show-bottom .info-card {
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
}

.info-card .region-name {
  display: block;
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
}

.info-card .case-count {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  margin-top: 0.25rem;
}

/* Hover 與 Active 狀態 */
.region-marker:hover .connector-card,
.connector-card.active {
  opacity: 1;
}

.region-marker:hover .connector-line,
.connector-card.active .connector-line {
  transform: scaleX(1);
}

/* 慢速彈跳動畫 */
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0) translateX(-50%); }
  50% { transform: translateY(-10px) translateX(-50%); }
}

.animate-bounce-slow {
  animation: bounce-slow 2s infinite;
}
</style>
