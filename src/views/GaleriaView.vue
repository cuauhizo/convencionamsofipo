<script setup>
  import { ref, computed } from 'vue'
  import { useHead } from '@vueuse/head'

  useHead({
    title: 'Galería del Evento - Convención AMSOFIPO',
    meta: [{ name: 'robots', content: 'noindex' }],
  })

  // 1. LA MAGIA DE VITE: Leer la carpeta automáticamente
  // Esto busca todos los archivos JPG, PNG o WEBP dentro de public/galeria/
  const globFiles = import.meta.glob('/public/galeria/*.{jpg,jpeg,png,webp}')

  // 2. Extraemos solo los nombres de los archivos
  // Convierte '/public/galeria/AMS-2026-D1-123.jpg' a 'AMS-2026-D1-123.jpg'
  const originalImages = Object.keys(globFiles).map(path => path.replace('/public/galeria/', ''))

  // 3. Mezclador aleatorio
  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  // 4. Estado de la pestaña activa (Por defecto muestra "Día 1")
  const activeTab = ref('D1')

  // Mezclamos todas las imágenes una sola vez al cargar la página
  const allShuffledImages = shuffleArray([...originalImages])

  // 5. Filtro Automático: Busca 'D1' o 'D2' en el nombre del archivo
  const displayedImages = computed(() => {
    if (activeTab.value === 'ALL') {
      return allShuffledImages
    }
    // Si la pestaña es D1, busca las fotos que contengan "D1" en su nombre, sin importar el año
    return allShuffledImages.filter(img => img.includes(activeTab.value))
  })

  // --- Lógica del Lightbox (Se queda igual) ---
  const isLightboxOpen = ref(false)
  const currentImageSrc = ref('')

  const getImageUrl = imageName => {
    return encodeURI(`/galeria/${imageName}`)
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
