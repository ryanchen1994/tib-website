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
            class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          >
        </div>
        
        <div class="md:col-span-1">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">電子郵件 *</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
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
          class="btn-primary"
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

async function handleSubmit() {
  // ============================================
  // GitHub Pages 表單接收資料的解決方案
  // ============================================
  // 
  // 由於 GitHub Pages 是靜態網站，無法直接處理表單提交。
  // 以下是幾種可行的解決方案：
  //
  // 【方案 1】使用 Formspree (推薦，免費方案可用)
  // 1. 前往 https://formspree.io/ 註冊帳號
  // 2. 創建一個新的表單，獲得 endpoint URL (例如: https://formspree.io/f/YOUR_FORM_ID)
  // 3. 將下面的 fetch 改為：
  //    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  //      method: 'POST',
  //      headers: { 'Content-Type': 'application/json' },
  //      body: JSON.stringify(form.value)
  //    })
  //
  // 【方案 2】使用 EmailJS (免費方案：每月 200 封)
  // 1. 前往 https://www.emailjs.com/ 註冊
  // 2. 設定 Email 服務和模板
  // 3. 使用他們的 SDK 發送郵件
  //
  // 【方案 3】使用 Netlify Forms (如果部署在 Netlify)
  // 在 form 標籤添加 data-netlify="true" 屬性即可
  //
  // 【方案 4】使用自己的後端 API
  // 建立一個後端服務（如 Node.js + Express, Python Flask 等）
  // 處理表單提交並發送郵件

  try {
    // 目前為示範模式：只在 console 顯示資料
    console.log('表單已送出：', form.value)
    
    // 如果您已設定 Formspree，取消下面的註釋並填入您的 endpoint：
    /*
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message
      })
    })
    
    if (response.ok) {
      alert('感謝您的來信！我們已收到您的訊息，將盡快與您聯繫。')
    } else {
      alert('發送失敗，請稍後再試或直接聯繫我們。')
    }
    */
    
    // 暫時顯示成功訊息
    alert('感謝您的來信！我們已收到您的訊息，將盡快與您聯繫。')
    
    // 清空表單
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    console.error('表單提交錯誤：', error)
    alert('發送失敗，請稍後再試或直接聯繫我們。')
  }
}
</script>