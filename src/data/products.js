// 這是我們所有產品的資料庫
// 所有產品圖片都放在 src/assets/images/products 目錄下

export const products = [
  {
    id: 'smart-dispensing-station',
    name: '第五代智慧調劑台',
    tagline: '世界首創，遵循多國專利技術',
    description: `本系統為世界首創，遵循多國專利技術，以藥品圖形辨識智能管理導引系統，減輕工作負擔。獨創智能導引系統，解決傳統人工擺藥疏失問題。
    \n主要特點：\n
    - 藥品圖形辨識智能管理\n
    - 人性化操作介面設計\n
    - 高效能自動化調劑流程\n
    - 完整的用藥安全把關`,
    imageUrl: '/images/products/第五代智慧調劑台2.png',
    gallery: [
      '/images/products/第五代智慧調劑台.png',
      '/images/products/第五代智慧調劑台2.png',
      '/images/products/第五代智慧調劑台抽屜.png',
      '/images/products/第五代智慧調劑台抽屜2.png'
    ]
  },
  {
    id: 'adc',
    name: '第二代精靈小藥櫃',
    tagline: '智慧化藥品管理系統',
    description: `精靈小藥櫃系統能有效管理高風險藥品，確保取藥的準確性與安全性，並自動記錄所有操作，便於追蹤管理。
    \n主要功能：\n
    - 智慧化藥品管理\n
    - 自動記錄取藥歷程\n
    - 高風險藥品控管\n
    - 即時庫存管理`,
    imageUrl: '/images/products/第二代精靈小藥櫃.png',
    gallery: [
      '/images/products/第二代精靈小藥櫃.png',
      '/images/products/第二代精靈小藥櫃 特.png'
    ]
  },
  {
    id: 'smart-fridge',
    name: '智慧冰箱管理系統',
    tagline: '專業醫療冷藏保存，智慧化溫度監控',
    description: `智慧冰箱管理系統專為醫療場所設計，提供精準的溫度控制和即時監控，確保藥品的安全存放。
    \n系統特色：\n
    - 24小時溫度監控\n
    - 異常警報系統\n
    - 遠端監控功能\n
    - 自動記錄溫度日誌\n
    - 低溫藥品安全管理`,
    imageUrl: '/images/products/智慧冰箱管理系統.png',
    gallery: [
      '/images/products/智慧冰箱管理系統.png'
    ]
  }
]