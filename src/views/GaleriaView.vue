<script setup>
  import { ref, computed } from 'vue'
  import { useHead } from '@vueuse/head'

  useHead({
    title: 'Galería del Evento - Convención AMSOFIPO',
    meta: [{ name: 'robots', content: 'noindex' }],
  })

  // 1. Array manual (Vite ignorará la carpeta public y no creará archivos .js)
  const originalImages = [
    'AMS-2026-D1-1100.jpeg',
    'AMS-2026-D1-1101.jpeg',
    'AMS-2026-D1-1102.jpeg',
    'AMS-2026-D1-1103.jpeg',
    'AMS-2026-D1-1104.jpeg',
    'AMS-2026-D1-1105.jpeg',
    'AMS-2026-D1-1106.jpeg',
    'AMS-2026-D1-1107.jpeg',
    'AMS-2026-D1-1108.jpeg',
    'AMS-2026-D1-1109.jpeg',
    'AMS-2026-D1-1110.jpeg',
    'AMS-2026-D1-1111.jpeg',
    'AMS-2026-D1-1112.jpeg',
    'AMS-2026-D1-1113.jpeg',
    'AMS-2026-D1-1114.jpeg',
    'AMS-2026-D1-1115.jpeg',
    'AMS-2026-D1-1116.jpeg',
    'AMS-2026-D1-1117.jpeg',
    'AMS-2026-D1-1118.jpeg',
    'AMS-2026-D1-1119.jpeg',
    'AMS-2026-D1-1120.jpeg',
    'AMS-2026-D1-1122.jpeg',
    'AMS-2026-D1-1124.jpeg',
    'AMS-2026-D1-1125.jpeg',
    'AMS-2026-D1-1126.jpeg',
    'AMS-2026-D1-1127.jpeg',
    'AMS-2026-D1-1128.jpeg',
    'AMS-2026-D1-1129.jpeg',
    'AMS-2026-D1-1130.jpeg',
    'AMS-2026-D1-1131.jpeg',
    'AMS-2026-D1-1132.jpeg',
    'AMS-2026-D1-1133.jpeg',
    'AMS-2026-D1-1134.jpeg',
    'AMS-2026-D1-1135.jpeg',
    'AMS-2026-D1-1136.jpeg',
    'AMS-2026-D1-1137.jpeg',
    'AMS-2026-D1-1138.jpeg',
    'AMS-2026-D1-1139.jpeg',
    'AMS-2026-D1-1140.jpeg',
    'AMS-2026-D1-1141.jpeg',
    'AMS-2026-D1-1142.jpeg',
    'AMS-2026-D1-1143.jpeg',
    'AMS-2026-D1-1144.jpeg',
    'AMS-2026-D1-1145.jpeg',
    'AMS-2026-D1-1146.jpeg',
    'AMS-2026-D1-1147.jpeg',
    'AMS-2026-D1-1148.jpeg',
    'AMS-2026-D1-1149.jpeg',
    'AMS-2026-D1-1150.jpeg',
    'AMS-2026-D1-1151.jpeg',
    'AMS-2026-D1-1152.jpeg',
    'AMS-2026-D1-1153.jpeg',
    'AMS-2026-D1-1155.jpeg',
    'AMS-2026-D1-1156.jpeg',
    'AMS-2026-D1-1157.jpeg',
    'AMS-2026-D1-1159.jpeg',
    'AMS-2026-D1-1160.jpeg',
    'AMS-2026-D1-1161.jpeg',
    'AMS-2026-D1-1162.jpeg',
    'AMS-2026-D1-1163.jpeg',
    'AMS-2026-D1-1164.jpeg',
    'AMS-2026-D1-1165.jpeg',
    'AMS-2026-D1-1167.jpeg',
    'AMS-2026-D1-1168.jpeg',
    'AMS-2026-D1-1169.jpeg',
    'AMS-2026-D1-1170.jpeg',
    'AMS-2026-D1-1171.jpeg',
    'AMS-2026-D1-1172.jpeg',
    'AMS-2026-D1-1173.jpeg',
    'AMS-2026-D1-1174.jpeg',
    'AMS-2026-D1-1175.jpeg',
    'AMS-2026-D1-1176.jpeg',
    'AMS-2026-D1-1177.jpeg',
    'AMS-2026-D1-1178.jpeg',
    'AMS-2026-D1-1179.jpeg',
    'AMS-2026-D1-1181.jpeg',
    'AMS-2026-D1-1182.jpeg',
    'AMS-2026-D1-1184.jpeg',
    'AMS-2026-D1-1185.jpeg',
    'AMS-2026-D1-1186.jpeg',
    'AMS-2026-D1-1187.jpeg',
    'AMS-2026-D1-1188.jpeg',
    'AMS-2026-D1-1189.jpeg',
    'AMS-2026-D1-1191.jpeg',
    'AMS-2026-D1-1192.jpeg',
    'AMS-2026-D1-1193.jpeg',
    'AMS-2026-D1-1194.jpeg',
    'AMS-2026-D1-1195.jpeg',
    'AMS-2026-D1-1196.jpeg',
    'AMS-2026-D1-1197.jpeg',
    'AMS-2026-D1-1198.jpeg',
    'AMS-2026-D1-1199.jpeg',
    'AMS-2026-D1-1200.jpeg',
    'AMS-2026-D1-1201.jpeg',
    'AMS-2026-D1-1202.jpeg',
    'AMS-2026-D1-1203.jpeg',
    'AMS-2026-D1-1204.jpeg',
    'AMS-2026-D1-1206.jpeg',
    'AMS-2026-D1-1207.jpeg',
    'AMS-2026-D1-1208.jpeg',
    'AMS-2026-D1-1209.jpeg',
    'AMS-2026-D1-1210.jpeg',
    'AMS-2026-D1-1211.jpeg',
    'AMS-2026-D1-1212.jpeg',
    'AMS-2026-D1-1213.jpeg',
    'AMS-2026-D1-1214.jpeg',
    'AMS-2026-D1-150.jpeg',
    'AMS-2026-D1-151.jpeg',
    'AMS-2026-D1-152.jpeg',
    'AMS-2026-D1-153.jpeg',
    'AMS-2026-D1-154.jpeg',
    'AMS-2026-D1-155.jpeg',
    'AMS-2026-D1-156.jpeg',
    'AMS-2026-D1-157.jpeg',
    'AMS-2026-D1-158.jpeg',
    'AMS-2026-D1-159.jpeg',
    'AMS-2026-D1-160.jpeg',
    'AMS-2026-D1-161.jpeg',
    'AMS-2026-D1-162.jpeg',
    'AMS-2026-D1-172.jpeg',
    'AMS-2026-D1-186.jpeg',
    'AMS-2026-D1-187.jpeg',
    'AMS-2026-D1-188.jpeg',
    'AMS-2026-D1-189.jpeg',
    'AMS-2026-D1-190.jpeg',
    'AMS-2026-D1-191.jpeg',
    'AMS-2026-D1-192.jpeg',
    'AMS-2026-D1-193.jpeg',
    'AMS-2026-D1-194.jpeg',
    'AMS-2026-D1-195.jpeg',
    'AMS-2026-D1-196.jpeg',
    'AMS-2026-D1-197.jpeg',
    'AMS-2026-D1-198.jpeg',
    'AMS-2026-D1-199.jpeg',
    'AMS-2026-D2-102.jpeg',
    'AMS-2026-D2-104.jpeg',
    'AMS-2026-D2-108.jpeg',
    'AMS-2026-D2-111.jpeg',
    'AMS-2026-D2-113.jpeg',
    'AMS-2026-D2-121.jpeg',
    'AMS-2026-D2-123.jpeg',
    'AMS-2026-D2-126.jpeg',
    'AMS-2026-D2-128.jpeg',
    'AMS-2026-D2-138.jpeg',
    'AMS-2026-D2-14.jpeg',
    'AMS-2026-D2-141.jpeg',
    'AMS-2026-D2-142.jpeg',
    'AMS-2026-D2-145.jpeg',
    'AMS-2026-D2-146.jpeg',
    'AMS-2026-D2-147.jpeg',
    'AMS-2026-D2-150.jpeg',
    'AMS-2026-D2-152.jpeg',
    'AMS-2026-D2-156.jpeg',
    'AMS-2026-D2-157.jpeg',
    'AMS-2026-D2-158.jpeg',
    'AMS-2026-D2-159.jpeg',
    'AMS-2026-D2-16.jpeg',
    'AMS-2026-D2-163.jpeg',
    'AMS-2026-D2-166.jpeg',
    'AMS-2026-D2-167.jpeg',
    'AMS-2026-D2-171.jpeg',
    'AMS-2026-D2-176.jpeg',
    'AMS-2026-D2-177.jpeg',
    'AMS-2026-D2-178.jpeg',
    'AMS-2026-D2-181.jpeg',
    'AMS-2026-D2-186.jpeg',
    'AMS-2026-D2-188.jpeg',
    'AMS-2026-D2-189.jpeg',
    'AMS-2026-D2-193.jpeg',
    'AMS-2026-D2-197.jpeg',
    'AMS-2026-D2-199.jpeg',
    'AMS-2026-D2-2.jpeg',
    'AMS-2026-D2-203.jpeg',
    'AMS-2026-D2-206.jpeg',
    'AMS-2026-D2-208.jpeg',
    'AMS-2026-D2-220.jpeg',
    'AMS-2026-D2-221.jpeg',
    'AMS-2026-D2-234.jpeg',
    'AMS-2026-D2-235.jpeg',
    'AMS-2026-D2-237.jpeg',
    'AMS-2026-D2-238.jpeg',
    'AMS-2026-D2-239.jpeg',
    'AMS-2026-D2-24.jpeg',
    'AMS-2026-D2-240.jpeg',
    'AMS-2026-D2-241.jpeg',
    'AMS-2026-D2-243.jpeg',
    'AMS-2026-D2-245.jpeg',
    'AMS-2026-D2-246.jpeg',
    'AMS-2026-D2-254.jpeg',
    'AMS-2026-D2-255.jpeg',
    'AMS-2026-D2-3.jpeg',
    'AMS-2026-D2-30.jpeg',
    'AMS-2026-D2-32.jpeg',
    'AMS-2026-D2-34.jpeg',
    'AMS-2026-D2-37.jpeg',
    'AMS-2026-D2-43.jpeg',
    'AMS-2026-D2-47.jpeg',
    'AMS-2026-D2-50.jpeg',
    'AMS-2026-D2-51.jpeg',
    'AMS-2026-D2-53.jpeg',
    'AMS-2026-D2-54.jpeg',
    'AMS-2026-D2-55.jpeg',
    'AMS-2026-D2-56.jpeg',
    'AMS-2026-D2-57.jpeg',
    'AMS-2026-D2-58.jpeg',
    'AMS-2026-D2-59.jpeg',
    'AMS-2026-D2-60.jpeg',
    'AMS-2026-D2-61.jpeg',
    'AMS-2026-D2-62.jpeg',
    'AMS-2026-D2-63.jpeg',
    'AMS-2026-D2-64.jpeg',
    'AMS-2026-D2-67.jpeg',
    'AMS-2026-D2-68.jpeg',
    'AMS-2026-D2-69.jpeg',
    'AMS-2026-D2-7.jpeg',
    'AMS-2026-D2-70.jpeg',
    'AMS-2026-D2-72.jpeg',
    'AMS-2026-D2-73.jpeg',
    'AMS-2026-D2-74.jpeg',
    'AMS-2026-D2-79.jpeg',
    'AMS-2026-D2-83.jpeg',
    'AMS-2026-D2-89.jpeg',
    'AMS-2026-D2-90.jpeg',
    'AMS-2026-D2-91.jpeg',
    'AMS-2026-D2-93.jpeg',
    'AMS-2026-D2-94.jpeg',
    'AMS-2026-D2-96.jpeg',
    'AMS-2026-D2-97.jpeg',
    'AMS-2026-D2-98.jpeg',
    'AMS-2026-D2-99.jpeg',
  ]

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const activeTab = ref('D1')
  const allShuffledImages = shuffleArray([...originalImages])

  const displayedImages = computed(() => {
    if (activeTab.value === 'ALL') {
      return allShuffledImages
    }
    return allShuffledImages.filter(img => img.includes(activeTab.value))
  })

  const isLightboxOpen = ref(false)
  const currentImageSrc = ref('')

  const getImageUrl = imageName => {
    return encodeURI(`/fotos-evento/${imageName}`)
  }

  const openLightbox = imageName => {
    currentImageSrc.value = getImageUrl(imageName)
    isLightboxOpen.value = true
  }

  const closeLightbox = () => {
    isLightboxOpen.value = false
  }
</script>

<template>
  <div class="min-h-screen text-white py-10 md:py-20 p-4 sm:p-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-10">
        <h1 class="text-4xl md:text-5xl font-bold font-lemon-bold mb-2">Galería de la Convención</h1>
        <p class="text-lg text-gray-300 font-lemon-normal">Los mejores momentos de nuestro evento.</p>
        <router-link to="/" class="text-[#C028B9] hover:underline mt-4 inline-block font-bold">← Volver al inicio</router-link>
      </div>

      <!-- TABS (Pestañas) -->
      <div class="flex flex-wrap justify-center gap-4 mb-10">
        <button
          @click="activeTab = 'D1'"
          :class="activeTab === 'D1' ? 'bg-gradient-to-r from-[#4D008C] to-[#C028B9] text-white border-transparent' : 'bg-transparent text-gray-300 border-gray-600 hover:border-[#C028B9] hover:text-white'"
          class="px-8 py-2 rounded-full border-2 transition-all duration-300 font-lemon-normal text-sm">
          Día 1
        </button>
        <button
          @click="activeTab = 'D2'"
          :class="activeTab === 'D2' ? 'bg-gradient-to-r from-[#4D008C] to-[#C028B9] text-white border-transparent' : 'bg-transparent text-gray-300 border-gray-600 hover:border-[#C028B9] hover:text-white'"
          class="px-8 py-2 rounded-full border-2 transition-all duration-300 font-lemon-normal text-sm">
          Día 2
        </button>
        <!-- <button
          @click="activeTab = 'ALL'"
          :class="activeTab === 'ALL' ? 'bg-gradient-to-r from-[#4D008C] to-[#C028B9] text-white border-transparent' : 'bg-transparent text-gray-300 border-gray-600 hover:border-[#C028B9] hover:text-white'"
          class="px-8 py-2 rounded-full border-2 transition-all duration-300 font-lemon-normal text-sm">
          Todos
        </button> -->
      </div>

      <!-- GRID DE IMÁGENES MASONRY -->
      <!-- mode="out-in" hace que primero desaparezca la galería actual y luego aparezca la nueva -->
      <transition name="fade-masonry" mode="out-in">
        <!-- El :key es vital para que Vue sepa que debe ejecutar la animación al cambiar de pestaña -->
        <div :key="activeTab" class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <div v-for="image in displayedImages" :key="image" class="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg shadow-lg mb-4" @click="openLightbox(image)">
            <!-- Capa oscura con lupa -->
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>

            <!-- Recuperamos el h-auto para que respete el estilo Masonry original -->
            <img :src="getImageUrl(image)" alt="Foto del evento" class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
          </div>
        </div>
      </transition>
    </div>

    <!-- LIGHTBOX (Se queda exactamente igual) -->
    <transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div v-if="isLightboxOpen" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" @click="closeLightbox">
        <img :src="currentImageSrc" alt="Vista ampliada" class="max-w-full max-h-full rounded-lg shadow-2xl object-contain" @click.stop />
        <button class="absolute top-6 right-6 text-white hover:text-[#C028B9] transition-colors text-4xl font-light">&times;</button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
  .break-inside-avoid {
    break-inside: avoid;
  }

  /* Animación para el bloque completo de la galería */
  .fade-masonry-enter-active,
  .fade-masonry-leave-active {
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  /* Cuando aparece, entra desde un poco más abajo */
  .fade-masonry-enter-from {
    opacity: 0;
    transform: translateY(15px);
  }

  /* Cuando desaparece, se desvanece en su lugar */
  .fade-masonry-leave-to {
    opacity: 0;
    transform: translateY(0);
  }
</style>
