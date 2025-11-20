<template>
  <section class="bg-white py-16 md:py-24">
    <div class="container mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          已獲全台多家醫學中心信賴並導入
        </h2>
        <p class="text-lg text-gray-600">
          我們的專業實績與合作夥伴
        </p>
      </div>

      <swiper
        :modules="modules"
        :loop="true"
        :speed="600"
        :space-between="24"
        :autoplay="{ delay: 3200, disableOnInteraction: false }"
        :breakpoints="breakpoints"
        :pagination="{ clickable: true }"
        class="max-w-6xl mx-auto"
      >
        <swiper-slide v-for="client in slides" :key="client.id" class="pb-12">
          <div class="h-full rounded-2xl border border-gray-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden">
            <div class="relative h-48">
              <img
                :src="client.imageUrl"
                :alt="client.name"
                class="h-full w-full object-cover"
              >
              <span class="absolute bottom-4 left-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow">
                {{ client.regionName }}
              </span>
            </div>
            <div class="p-6 text-center">
              <h3 class="text-xl font-bold text-gray-900">{{ client.name }}</h3>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <div class="text-center mt-10">
        <RouterLink
          to="/cases"
          class="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition"
        >
          查看更多案例 <span>&raquo;</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { cases as clients, caseRegions } from '@/data/cases.js'
import { RouterLink } from 'vue-router'

const modules = [Autoplay, Pagination]

const regionLookup = caseRegions.reduce((acc, region) => {
  acc[region.id] = region.name
  return acc
}, {})

const slides = computed(() =>
  clients.map(client => ({
    ...client,
    regionName: regionLookup[client.regionId]
  }))
)

const breakpoints = {
  0: {
    slidesPerView: 1.1
  },
  640: {
    slidesPerView: 2
  },
  1024: {
    slidesPerView: 3
  },
  1280: {
    slidesPerView: 4
  }
}
</script>