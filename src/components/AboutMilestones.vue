<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-6 max-w-4xl">
      
      <div class="text-center mb-16">
        <h2 class="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">里程碑</h2>
        <p class="text-4xl font-bold text-gray-900">公司重要發展時程</p>
      </div>

      <div class="relative">
        <div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-300 h-full hidden md:block"></div>

        <div v-for="(item, index) in milestones" :key="index" class="mb-8 md:mb-16 flex md:justify-between items-center w-full">
          
          <div :class="{'md:order-1': index % 2 === 0, 'md:order-3 md:text-right': index % 2 !== 0}" 
               class="w-full md:w-5/12 text-gray-700 font-semibold text-lg mb-2 md:mb-0">
            {{ item.yearMonth }}
          </div>

          <div class="hidden md:block md:order-2 w-2 h-2 rounded-full bg-blue-600 absolute left-1/2 transform -translate-x-1/2 z-10 ring-4 ring-blue-100"></div>
          
          <div :class="{'md:order-3 md:text-left': index % 2 === 0, 'md:order-1 md:text-right': index % 2 !== 0}" 
               class="w-full md:w-5/12 p-4 bg-white rounded-lg shadow-md border-t-4 border-blue-500">
            <h4 class="text-xl font-semibold text-gray-800 mb-1">{{ item.title }}</h4>
            <p class="text-gray-600 text-sm">{{ item.description }}</p>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
// 根據你的截圖 4_0.JPG 內容來設計里程碑數據
const milestones = [
  { yearMonth: '2021年4月', title: '公司成立', description: '台灣新創生醫股份有限公司正式設立。' },
  { yearMonth: '2021年8月', title: '智能調劑台原型開發', description: '第一代智能調劑台完成原型設計與測試。' },
  { yearMonth: '2022年3月', title: '獲得A輪融資', description: '成功獲得外部投資，加速產品商業化進程。' },
  { yearMonth: '2022年9月', title: 'ADC產品上線', description: '自動調配藥櫃(ADC)產品正式發布並導入合作醫院。' },
  { yearMonth: '2023年6月', title: '多國專利申請', description: '藥品圖形辨識技術提交多個國家專利申請。' },
  { yearMonth: '2024年1月', title: '通過ISO認證', description: '獲得醫療器械相關的國際品質管理系統認證。' },
  { yearMonth: '2024年12月', title: '拓展海外市場', description: '與日本、東南亞等地夥伴建立戰略合作關係。' },
]
</script>