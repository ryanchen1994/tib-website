<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-6 max-w-5xl">
      
      <div class="text-center mb-12">
        <h2 class="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">公司簡介</h2>
        <p class="text-4xl font-bold text-gray-900">以智慧科技，創新生醫價值</p>
      </div>

      <div class="text-gray-700 leading-loose text-lg space-y-6">
        <p>
          台灣新創生醫股份有限公司成立於2021年，專注於醫療院所智慧化解決方案的研發與推廣。我們與醫學中心合作，取得多項專利技術授權，致力於開發以使用者為導向的客製化產品，協助醫療院所優化藥品管理流程，提升作業效率。
        </p>
        
        <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">核心產品與服務</h3>
        
        <div class="pl-4 space-y-4">
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">● 智慧調劑台</h4>
            <p class="text-gray-600 pl-4">
              搭載藥品智能管理系統，透過指示燈導引藥師進行調劑作業，降低人為疏失的風險。系統提供直覺的操作介面，能夠記錄完整的調劑流程，協助藥師提升工作效率並確保用藥正確性。適用於門診及住院調劑作業，可依據醫院需求進行客製化配置。
            </p>
          </div>
          
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">● 精靈小藥櫃（ADC自動藥櫃）</h4>
            <p class="text-gray-600 pl-4">
              智慧化藥品儲存與管理系統，搭載電子標籤與即時數量顯示功能。系統能自動記錄取藥、補藥的完整歷程，提供即時庫存管理與用藥追蹤。特別適合管理高風險藥品與管制藥品，確保藥品使用的可追溯性與安全性。支援多種規格的藥品儲存，可靈活配置於門診、急診或住院等場域。
            </p>
          </div>
          
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">● 智慧冰箱管理系統</h4>
            <p class="text-gray-600 pl-4">
              專為低溫藥品設計的智慧監控系統，搭載電子鎖控及耐低溫電子標籤，結合亮燈導引，實現精準取藥與即時庫存掌握。有效提升調劑正確性，落實取用權限管理，並提供效期將屆提示，全面優化智慧管理流程。
          </p>
          </div>
          
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">服務範圍</h3>
        <p>
          我們的產品與服務主要應用於大型醫療院所，包括醫學中心、區域醫院等。提供從需求評估、系統規劃、安裝建置到教育訓練的完整服務。我們與醫療團隊密切合作，依據各院所的實際需求進行客製化調整，確保系統能有效整合至現有的醫療作業流程中。
        </p>
        
        <p>
          目前已服務的醫療院所遍布全台各地，涵蓋北、中、南部等區域。透過持續的技術支援與系統優化，協助醫療院所提升藥品管理效率，減輕醫療人員的工作負擔，為病患用藥安全提供更完善的保障。
        </p>
      </div>

      <hr class="my-12 border-gray-200">

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div v-for="(item, index) in values" :key="index" class="p-6 border rounded-lg shadow-sm hover:shadow-md transition duration-300">
          <h4 class="text-xl font-bold text-blue-600 mb-3">{{ item.title }}</h4>
          <p class="text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  { title: '專業技術', description: '結合醫療專業與資訊技術，開發符合實務需求的智慧化系統。' },
  { title: '用藥安全', description: '透過系統化管理與記錄，降低人為疏失，提升用藥正確性。' },
  { title: '客製服務', description: '依據各醫療院所的實際需求，提供彈性的系統配置與整合服務。' }
]
</script>