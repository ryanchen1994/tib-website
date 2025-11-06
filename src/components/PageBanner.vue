<template>
  <div class="relative w-full h-64 bg-gray-800 flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-cover bg-center opacity-30" 
         style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgwNHY0MEgweiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjNDc1NTY5IiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==');">
    </div>

    <div class="relative text-center text-white z-10 p-4">
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">{{ title }}</h1>
      <p class="text-lg md:text-xl font-light text-blue-300">{{ subtitle }}</p>
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