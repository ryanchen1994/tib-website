// 這是我們所有產品的資料庫
// 所有產品圖片都放在 src/assets/images/products 目錄下

export const products = [
  {
    id: 'smart-dispensing-station',
    name: '第五代智慧調劑台',
    tagline: '指示燈導引調劑，降低人為疏失',
    description: {
      intro: '搭載智能管理系統，透過指示燈導引藥師進行調劑作業，降低人為疏失的風險。系統提供直覺的操作介面，能夠記錄完整的調劑流程，協助藥師提升工作效率並確保用藥正確性。',
      paragraphs: [
        '當藥師掃描處方或選擇藥品時，系統會自動點亮對應藥格的指示燈，清楚指引正確的取藥位置。每一筆調劑作業都會完整記錄，包括藥品名稱、數量、時間及操作人員等資訊，建立完整的用藥追溯機制。',
        '系統適用於門診及住院調劑作業，可依據醫院實際需求進行客製化配置。支援多種藥格規格配置，能夠彈性調整以符合不同科別或作業型態的需求。透過系統化的管理流程，有效減輕藥師工作負擔，同時提升調劑準確度。'
      ],
      features: [
        '智能指示燈導引系統',
        '直覺式操作介面設計',
        '完整的調劑流程記錄與追溯',
        '支援客製化配置與彈性擴充',
        '多種藥格規格可選配'
      ]
    },
    imageUrl: `${import.meta.env.BASE_URL}images/products/第五代智慧調劑台2.png`,
    gallery: [
      `${import.meta.env.BASE_URL}images/products/第五代智慧調劑台.png`,
      `${import.meta.env.BASE_URL}images/products/第五代智慧調劑台2.png`,
      `${import.meta.env.BASE_URL}images/products/第五代智慧調劑台抽屜.png`,
      `${import.meta.env.BASE_URL}images/products/第五代智慧調劑台抽屜2.png`
    ]
  },
  {
    id: 'adc',
    name: '第二代精靈小藥櫃',
    tagline: '電子標籤顯示，即時庫存追蹤',
    description: {
      intro: '智慧化藥品儲存與管理系統，搭載電子標籤與即時數量顯示功能。系統能自動記錄取藥、補藥的完整歷程，提供即時庫存管理與用藥追蹤。特別適合管理高風險藥品與管制藥品，確保藥品使用的可追溯性與安全性。',
      paragraphs: [
        '電子標籤會即時顯示藥品名稱、數量及效期等重要資訊，當庫存不足或效期將屆時，系統會自動提醒管理人員。每一次的取藥、補藥動作都會完整記錄操作人員、時間及數量，建立完整的使用軌跡。',
        '系統支援權限管理功能，可針對不同藥品設定不同的取用權限，確保管制藥品的嚴格管控。支援多種規格的藥品儲存，可靈活配置於門診、急診、住院病房等不同場域。透過智慧化的管理機制，有效提升藥品管理效率，降低藥品損耗與過期風險。'
      ],
      features: [
        '電子標籤即時顯示藥品資訊',
        '自動記錄完整取用歷程',
        '即時庫存與效期管理',
        '彈性配置於各醫療場域'
      ]
    },
    imageUrl: `${import.meta.env.BASE_URL}images/products/第二代精靈小藥櫃.png`,
    gallery: [
      `${import.meta.env.BASE_URL}images/products/第二代精靈小藥櫃.png`,
      `${import.meta.env.BASE_URL}images/products/第二代精靈小藥櫃 特.png`
    ]
  },
  {
    id: 'smart-fridge',
    name: '智慧冰箱管理系統',
    tagline: '電子鎖控管理，亮燈導引取藥',
    description: {
      intro: '專為低溫藥品設計的智慧管理系統，搭載電子鎖控及耐低溫電子標籤，結合亮燈導引功能，實現精準取藥與即時庫存掌握。系統提供完整的權限管理與用藥記錄功能，確保低溫藥品的安全管理。',
      paragraphs: [
        '電子標籤能在低溫環境下正常運作，即時顯示藥品名稱、數量及效期等重要資訊。當護理人員需要取用藥品時，系統會點亮對應位置的指示燈，協助快速找到所需藥品，同時自動記錄每次的取用資訊，包括操作人員、時間及數量。',
        '系統支援多層級權限管理，可針對不同藥品設定不同的取用權限，確保高風險藥品的嚴格控管。當藥品庫存不足或效期將屆時，系統會自動提醒管理人員。透過完整的記錄與追蹤機制，有效提升低溫藥品的管理效率，落實用藥安全與效期管理。'
      ],
      features: [
        '電子鎖控與權限管理',
        '耐低溫電子標籤顯示',
        '亮燈導引快速取藥',
        '完整取用記錄與追蹤',
        '庫存與效期自動提醒',
        '多層級權限控管機制'
      ]
    },
    imageUrl: `${import.meta.env.BASE_URL}images/products/智慧冰箱管理系統.png`,
    gallery: [
      `${import.meta.env.BASE_URL}images/products/智慧冰箱管理系統.png`
    ]
  }
]