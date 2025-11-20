<template>
  <div>
    <HeroCarousel />

    <ClientLogos />

    <HomeAbout />

    <HomeServices />

    <CallToAction />
  </div>
</template>

<script setup>
import HeroCarousel from '@/components/HeroCarousel.vue'
import ClientLogos from '@/components/ClientLogos.vue'
import HomeAbout from '@/components/HomeAbout.vue'
import HomeServices from '@/components/HomeServices.vue'
import CallToAction from '@/components/CallToAction.vue' // <-- 【新增】
</script>