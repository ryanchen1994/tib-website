<template>
  <div class="w-full">
    <form @submit.prevent="handleSubmit">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="md:col-span-1">
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">您的姓名 *</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name" 
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
        </div>
        
        <div class="md:col-span-1">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">電子郵件 *</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
        </div>
      </div>

      <div class="mt-6">
        <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">主旨</label>
        <input 
          type="text" 
          id="subject" 
          v-model="form.subject"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
      </div>

      <div class="mt-6">
        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">您的訊息 *</label>
        <textarea 
          id="message" 
          rows="6" 
          v-model="form.message" 
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></textarea>
      </div>

      <div class="mt-8 text-right">
        <button 
          type="submit"
          class="inline-flex justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
        >
          送出訊息
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

function handleSubmit() {
  // 【注意】
  // 網頁前端無法 "真的" 寄送信件。
  // 你需要一個後端服務 (例如 Formspree, Netlify Forms, 或
  // 
  // 
  // 你自己的 API) 來接收這些資料。

  // 1. 我們先在 console 印出資料
  console.log('表單已送出：', form.value)
  
  // 2. 顯示一個提示訊息
  alert('感謝您的來信！我們已收到您的訊息，將盡快與您聯繫。')

  // 3. 清空表單
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>