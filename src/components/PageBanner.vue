<template>
  <div class="relative w-full h-64 bg-gradient-to-br from-brand-700 to-brand-500 flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 opacity-20"
         style="background-image: radial-gradient(circle at 20% 20%, rgba(255,255,255,.35), transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,.35), transparent 40%);"></div>

    <div class="relative text-center text-white z-10 p-4">
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 drop-shadow">{{ title }}</h1>
      <p class="text-lg md:text-xl font-light text-white/90">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// 定義組件需要的屬性
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>