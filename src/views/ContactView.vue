<template>
  <div>
    <PageBanner title="聯絡我們" subtitle="我們期待您的來信" />

    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-6 max-w-7xl">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div class="flex flex-col space-y-12">
            
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">與我們聯繫</h2>
              <div class="space-y-4 text-lg text-gray-700">
                <p class="flex items-center">
                  <span class="w-6 h-6 text-brand-600 mr-3">📞</span>
                  <a href="tel:+886423200709" class="text-brand-600 hover:text-brand-700 hover:underline transition">+886-4-23200709</a>
                </p>
                <p class="flex items-center">
                  <span class="w-6 h-6 text-brand-600 mr-3">✉️</span>
                  <a href="mailto:info@tib-lab.com" class="text-brand-600 hover:text-brand-700 hover:underline transition">info@tib-lab.com</a>
                </p>
                <p class="flex items-start">
                  <span class="w-6 h-6 text-brand-600 mr-3 mt-1">📍</span>
                  <span>台中市南屯區文心路一段378號24樓之5</span>
                </p>
              </div>
            </div>

            <hr class="border-gray-200">

            <div>
              <h3 class="text-2xl font-semibold text-gray-800 mb-6">傳送訊息給我們</h3>
              <ContactForm />
            </div>
          </div>

          <div class="w-full min-h-[400px] lg:min-h-0 rounded-lg overflow-hidden shadow-lg">
            <ContactMap />
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import PageBanner from '@/components/PageBanner.vue'
import ContactForm from '@/components/ContactForm.vue'
import ContactMap from '@/components/ContactMap.vue'
</script>