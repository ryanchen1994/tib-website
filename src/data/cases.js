// src/data/cases.js
// 這是我們的 "操作案例" 資料庫

export const caseRegions = [
  {
    id: 'north',
    name: '台北地區',
    description: '台北都會區與北部醫療體系',
  // 使用緯經度來放置地點，讓地圖插件能準確定位
  // 使用緯經度 (保留) 以及圖片百分比位置供簡易底圖使用
  coordinates: { lat: 25.0330, lng: 121.5654, pct: { top: '10%', left: '67%' } },
    cases: [
      {
        id: 'ntuh',
        name: '國立臺灣大學醫學院附設醫院',
        imageUrl: `${import.meta.env.BASE_URL}images/cases/國立臺灣大學醫學院附設醫院.jpg`
      },
      {
        id: 'vgh_taipei',
        name: '臺北榮民總醫院',
        imageUrl: `${import.meta.env.BASE_URL}images/cases/臺北榮民總醫院.jpg`
      },
      {
        id: 'cgh',
        name: '國泰綜合醫院',
        imageUrl: `${import.meta.env.BASE_URL}images/cases/國泰綜合醫院.jpg`
      }
    ]
  },
  {
    id: 'taichung',
    name: '台中地區',
    description: '中部醫學中心與教學醫院',
  coordinates: { lat: 24.1477, lng: 120.6736, pct: { top: '35.0%', left: '40.0%' } },
    cases: [
      {
        id: 'vgh_taichung',
        name: '台中榮民總醫院',
        imageUrl: `${import.meta.env.BASE_URL}images/cases/臺中榮民總醫院.jpg`
      },
      {
        id: 'cmuh',
        name: '中國醫藥大學附設醫院',
        imageUrl: `${import.meta.env.BASE_URL}images/cases/中國醫藥大學附設醫院.jfif`
      },
      {
        id: 'kwangtien_main',
        name: '光田綜合醫院',
        imageUrl: `${import.meta.env.BASE_URL}images/cases/光田醫院.jpg`
      },
      {
        id: 'kwangtien_dajia',
        name: '光田醫院大甲分院',
        imageUrl: `${import.meta.env.BASE_URL}images/cases/光田醫院大甲分院.webp`
      },
      {
        id: 'changan',
        name: '長安醫院',
        imageUrl: `${import.meta.env.BASE_URL}images/cases/長安醫院.png`
      }
    ]
  },
  {
    id: 'changhua',
    name: '彰化地區',
    description: '彰化地區基督教聯盟醫院',
  coordinates: { lat: 24.0529, lng: 120.5443, pct: { top: '39.5%', left: '32.0%' } },
    cases: [
      {
        id: 'cch',
        name: '彰化基督教醫院',
        imageUrl: `${import.meta.env.BASE_URL}images/cases/彰化基督教醫院.jfif`
      },
      {
        id: 'ych',
        name: '員林基督教醫院',
        imageUrl: `${import.meta.env.BASE_URL}images/cases/員林基督教醫院.png`
      },
      {
        id: 'lch',
        name: '鹿港基督教醫院',
        imageUrl: `${import.meta.env.BASE_URL}images/cases/鹿港基督教醫院.jpg`
      },
      {
        id: 'hmch',
        name: '漢銘基督教醫院',
        imageUrl: `${import.meta.env.BASE_URL}images/cases/漢銘基督教醫院.jpg`
      }
    ]
  },
  {
    id: 'chiayi',
    name: '嘉義地區',
    description: '雲嘉地區指標醫院',
  coordinates: { lat: 23.4806, lng: 120.4496, pct: { top: '51%', left: '30%' } },
    cases: [
      {
        id: 'tzuchi_dalin',
        name: '大林慈濟醫院',
        imageUrl: `${import.meta.env.BASE_URL}images/cases/大林慈濟醫院.jpg`
      }
    ]
  },
  {
    id: 'tainan',
    name: '台南地區',
    description: '南部智慧醫療示範院所',
  coordinates: { lat: 22.9997, lng: 120.2270, pct: { top: '63.5%', left: '28%' } },
    cases: [
      {
        id: 'ncku_hospital',
        name: '成功大學附設醫院',
        imageUrl: `${import.meta.env.BASE_URL}images/cases/成功大學附設醫院.jpg`
      }
    ]
  }
]

export const cases = caseRegions.flatMap(region =>
  region.cases.map(caseItem => ({
    ...caseItem,
    regionId: region.id
  }))
)

// 【TODO】未來有新案例，就加在對應地區的 cases 中