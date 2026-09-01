<script setup>
  import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
  import { stands } from '@/data/stands.js'

  // Triplicamos el array para el efecto infinito [Clones Anteriores, Originales, Clones Posteriores]
  const extendedStands = computed(() => {
    return [...stands, ...stands, ...stands]
  })

  // Empezamos en el bloque central (índice equivalente al tamaño original del arreglo)
  const currentIndex = ref(stands.length)
  const carouselTrack = ref(null)
  const cardWidth = ref(0)
  const autoSlideInterval = ref(null)

  // Controladores para la ilusión del loop infinito
  const isTransitioning = ref(true)
  let isAnimating = false // Evita clics rápidos seguidos

  const visibleCards = computed(() => {
    if (typeof window === 'undefined') return 3
    const width = window.innerWidth
    if (width >= 1024) return 3
    if (width >= 768) return 3
    return 3
  })

  const transformStyle = computed(() => {
    const offset = -currentIndex.value * cardWidth.value
    return `translateX(${offset}px)`
  })

  const updateCarousel = () => {
    nextTick(() => {
      if (carouselTrack.value && carouselTrack.value.firstElementChild) {
        cardWidth.value = carouselTrack.value.firstElementChild.offsetWidth
      }
    })
  }

  const nextSlide = () => {
    if (isAnimating) return
    isAnimating = true
    isTransitioning.value = true
    currentIndex.value++

    // Esperamos a que termine la transición de CSS (500ms)
    setTimeout(() => {
      // Si entramos al tercer bloque (clones), saltamos silenciosamente al bloque central
      if (currentIndex.value >= stands.length * 2) {
        isTransitioning.value = false
        currentIndex.value = stands.length
      }
      isAnimating = false
    }, 500)

    resetAutoSlide()
  }

  const prevSlide = () => {
    if (isAnimating) return
    isAnimating = true
    isTransitioning.value = true
    currentIndex.value--

    setTimeout(() => {
      // Si retrocedemos al primer bloque, saltamos al bloque central
      if (currentIndex.value <= 0) {
        isTransitioning.value = false
        currentIndex.value = stands.length
      }
      isAnimating = false
    }, 500)

    resetAutoSlide()
  }

  const startAutoSlide = () => {
    clearInterval(autoSlideInterval.value)
    autoSlideInterval.value = setInterval(nextSlide, 3000) // 3 segundos
  }

  const resetAutoSlide = () => {
    startAutoSlide()
  }

  const pauseAutoSlide = () => {
    clearInterval(autoSlideInterval.value)
  }

  onMounted(() => {
    setTimeout(() => {
      updateCarousel()
      startAutoSlide()
    }, 300)
    window.addEventListener('resize', updateCarousel)
  })

  onUnmounted(() => {
    clearInterval(autoSlideInterval.value)
    window.removeEventListener('resize', updateCarousel)
  })
</script>

<template>
  <section id="section5" class="grid gap-5 items-center py-20 lg:grid-cols-2">
    <div class="px-4" data-aos="zoom-in-right" data-aos-anchor-placement="center-bottom">
      <div class="grid grid-cols-1">
        <div class="xl:max-w-[636px] xl:col-start-2">
          <div>
            <h2 class="titulo-seccion">Stands</h2>
            <p class="titulo">¡Ubica los stands donde se encontrarán nuestros patrocinadores!</p>
            <p class="mb-6">Conecta con proveedores que te ayudarán a llevar a tu empresa al siguiente nivel.</p>
            <a
              href="/mapa/index.html"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex gap-2 rounded-full transition-all mt-2 duration-500 font-lemon-normal text-xs justify-center items-center bg-gradient-to-r from-[#4D008C] to-[#C028B9] hover:bg-gradient-to-br px-8 py-2">
              Consulta aquí el mapa
            </a>
          </div>
        </div>
      </div>
    </div>
    <div data-aos="zoom-in-left" data-aos-anchor-placement="center-bottom">
      <div class="relative">
        <div id="carousel" class="overflow-hidden relative" @mouseenter="pauseAutoSlide" @mouseleave="startAutoSlide">
          <!-- AQUÍ: Se quita la clase fija de transición y se usa dinámicamente -->
          <div ref="carouselTrack" id="stand-track" class="flex" :class="{ 'transition-transform duration-500 ease-in-out': isTransitioning }" :style="{ transform: transformStyle }">
            <!-- AQUÍ: Iteramos sobre extendedStands y combinamos stand.id con index para un key único -->
            <div v-for="(stand, index) in extendedStands" :key="`${stand.id}-${index}`" class="stand-card flex-shrink-0 h-auto max-w-[278px] px-4">
              <div>
                <img :src="stand.imagen" :alt="stand.nombre" class="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex mt-4 space-x-3">
          <!-- Botones prev y next (se quedan exactamente igual) -->
          <button id="prev" aria-label="Anterior" class="nav-button z-10 w-12 h-12 flex items-center justify-center" @click="prevSlide">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M15 12L11 16M11 16L15 20M11 16H21M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
          <button id="next" aria-label="Siguiente" class="nav-button z-10 w-12 h-12 flex items-center justify-center" @click="nextSlide">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M17 20L21 16M21 16L17 12M21 16H11M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
