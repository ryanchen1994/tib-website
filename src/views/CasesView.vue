<template>
  <div>
    <PageBanner title="施作案例" subtitle="我們的技術已在各大醫療院所導入" />

    <section class="py-16 md:py-24">
      <div class="container mx-auto px-6">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          <CasesMap :regions="caseRegions" v-model="activeRegionId" />

          <div class="lg:pl-8">
            <div class="flex items-center gap-3 mb-6">
              <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white font-semibold text-lg">
                {{ currentRegionCases.length }}
              </span>
              <div>
                <h2 class="text-2xl font-bold text-gray-900">{{ activeRegion?.name ?? '施作案例' }}</h2>
                <p class="text-sm text-gray-600 mt-1">{{ activeRegion?.description }}</p>
              </div>
            </div>

            <div class="space-y-4 max-h-[520px] overflow-y-auto pr-2">
              <article
                v-for="item in currentRegionCases"
                :key="item.id"
                class="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:border-brand-200 hover:shadow-md"
              >
                <img
                  :src="item.imageUrl"
                  :alt="item.name"
                  class="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
                >
                <h3 class="text-lg font-semibold text-gray-800">{{ item.name }}</h3>
              </article>

              <p v-if="!currentRegionCases.length" class="text-sm text-gray-500">
                該地區目前尚無施作案例，敬請期待。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="mb-10 text-center">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">全部案例一覽</h2>
          <p class="mt-3 text-gray-600">精選智慧醫療導入案例，僅保留核心資訊便於快速瀏覽</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div
            v-for="caseItem in cases"
            :key="caseItem.id"
            class="group rounded-2xl bg-white shadow-md overflow-hidden border border-gray-100 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                :src="caseItem.imageUrl"
                :alt="caseItem.name"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              >
            </div>
            <div class="p-5">
              <h3 class="text-lg font-bold text-gray-800">{{ caseItem.name }}</h3>
              <p class="mt-1 text-xs text-gray-500">{{ regionNameMap[caseItem.regionId] }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import PageBanner from '@/components/PageBanner.vue'
import CasesMap from '@/components/CasesMap.vue'
import { cases, caseRegions } from '@/data/cases.js'

const activeRegionId = ref(caseRegions[0]?.id ?? '')

const activeRegion = computed(() =>
  caseRegions.find(region => region.id === activeRegionId.value) ?? caseRegions[0] ?? null
)

const currentRegionCases = computed(() => activeRegion.value?.cases ?? [])

const regionNameMap = computed(() =>
  caseRegions.reduce((acc, region) => {
    acc[region.id] = region.name
    return acc
  }, {})
)
</script>