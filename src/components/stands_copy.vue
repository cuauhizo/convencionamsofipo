<script setup>
  import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
  import Stand1 from '@/assets/img/Stands/stand-01-fimpe.png';
  import Stand2 from '@/assets/img/stands/stand-02-preven.png';
  import Stand3 from '@/assets/img/stands/stand-03-gmc360.png';
  import Stand5 from '@/assets/img/stands/stand-05-unico.png';
  import Stand7 from '@/assets/img/stands/stand-07-buro-de-credito.png';
  import Stand9 from '@/assets/img/stands/stand-09-circulo-de-credito.png';
  import Stand10 from '@/assets/img/stands/stand-10-efisys.png';
  import Stand11 from '@/assets/img/stands/stand-11-y-&-g.png';
  import Stand14 from '@/assets/img/stands/stand-14-hr-ratings.png';
  // import StandBonsaif from '@/assets/img/stands/stand-bonsaif.png';
  

  // carrusel

// Normalmente, estos datos se obtendrían de una API o se pasarían como un `prop`,
// pero para este ejemplo, los codificaremos aquí.
const stands = ref([
  {
    id: 1,
    imagen: Stand1,
    nombre: "Fimpe",
    titulo: "Fimpe",
  },
  {
    id: 2,
    imagen: Stand2,
    nombre: "Preven",
    titulo: "Preven"
  },
  {
    id: 3,
    imagen: Stand3,
    nombre: "GMC360",
    titulo: "GMC360"
  },
  // {
  //   id: 4,
  //   imagen: Stand1,
  //   nombre: "Mc Kroupenky",
  //   titulo: "Estratega de Mercadotecnia y líder empresarial"
  // },
  {
    id: 5,
    imagen: Stand5,
    nombre: "Unico",
    titulo: "Unico"
  },
  // {
  //   id: 6,
  //   imagen: Stand1,
  //   nombre: "Mc Kroupenky",
  //   titulo: "Estratega de Mercadotecnia y líder empresarial"
  // },
  {
    id: 7,
    imagen: Stand7,
    nombre: "Buro de Crédito",
    titulo: "Buro de Crédito"
  },
  // {
  //   id: 8,
  //   imagen: Stand1,
  //   nombre: "Mc Kroupenky",
  //   titulo: "Estratega de Mercadotecnia y líder empresarial"
  // },
  {
    id: 9,
    imagen: Stand9,
    nombre: "Círculo de crédito",
    titulo: "Círculo de crédito"
  },
  {
    id: 10,
    imagen: Stand10,
    nombre: "Efisys",
    titulo: "Efisys"
  },
  // {
  //   id: 11,
  //   imagen: Stand11,
  //   nombre: "Y&g",
  //   titulo: "Y&g"
  // },
  // {
  //   id: 12,
  //   imagen: Stand11,
  //   nombre: "Y&g",
  //   titulo: "Y&g"
  // },
  // {
  //   id: 13,
  //   imagen: Stand11,
  //   nombre: "Y&g",
  //   titulo: "Y&g"
  // },
  {
    id: 14,
    imagen: Stand14,
    nombre: "Y&g",
    titulo: "Y&g"
  },
  // {
  //   id: 15,
  //   imagen: StandBonsaif,
  //   nombre: "Bonsaif",
  //   titulo: "Bonsaif"
  // },
]);

// --- Estado y Lógica del Carrusel ---
const currentIndex = ref(0); // Índice del testimonio actual visible
const carouselTrack = ref(null); // Referencia al elemento DOM del carrusel (la pista)
const cardWidth = ref(0); // Ancho de una tarjeta de testimonio
const autoSlideInterval = ref(null); // ID del intervalo para el auto-deslizamiento

// Propiedad computada para determinar cuántas tarjetas son visibles según el ancho de la pantalla
const visibleCards = computed(() => {
  const width = window.innerWidth
  if (width >= 1024) return 3; // Escritorio (lg)
  if (width >= 768) return 2;  // Tableta (md)
  return 1; // Móvil (predeterminado)
});

// Propiedad computada para calcular el índice máximo al que podemos deslizar
const maxIndex = computed(() => stands.value.length - visibleCards.value);

// Propiedad computada para la transformación CSS que desliza el carrusel
const transformStyle = computed(() => {
  const offset = -currentIndex.value * cardWidth.value;
  return `translateX(${offset}px)`;
});


// Función para actualizar la posición del carrusel y el punto indicador activo
const updateCarousel = () => {
  // Esperamos a que el DOM se actualice para obtener el `cardWidth` correcto
  nextTick(() => {
    if (carouselTrack.value && carouselTrack.value.firstElementChild) {
      cardWidth.value = carouselTrack.value.firstElementChild.offsetWidth;
    }
  });
  // La transformación CSS y la clase del punto activo son manejadas por propiedades computadas y clases condicionales.
};


// --- Funciones de Navegación ---
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % (maxIndex.value + 1);
  resetAutoSlide();
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + (maxIndex.value + 1)) % (maxIndex.value + 1);
  resetAutoSlide();
};


const goToSlide = (index) => {
  currentIndex.value = index;
  resetAutoSlide();
};

// --- Lógica de Auto-Deslizamiento ---
const startAutoSlide = () => {
  clearInterval(autoSlideInterval.value); // Limpia cualquier intervalo existente
  autoSlideInterval.value = setInterval(nextSlide, 2000); // Cambia cada 5 segundos
};

const resetAutoSlide = () => {
  clearInterval(autoSlideInterval.value);
  startAutoSlide();
};

const pauseAutoSlide = () => {
  clearInterval(autoSlideInterval.value);
};


// --- Hooks del Ciclo de Vida ---
onMounted(() => {
  // Usar setTimeout para asegurar que el DOM esté completamente renderizado
  setTimeout(() => {
    updateCarousel();
    startAutoSlide();
  }, 300);

  window.addEventListener('resize', () => {
    updateCarousel();
    // Ajustar índices si es necesario
    if (currentIndex.value + visibleCards.value > stands.value.length) {
      currentIndex.value = Math.max(0, stands.value.length - visibleCards.value);
    }
  });
});


onUnmounted(() => {
  // Limpiar el intervalo cuando el componente se desmonta para evitar fugas de memoria
  clearInterval(autoSlideInterval.value);
});


</script>

 <!-- <section class="grid grid-cols-12 gap-5">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
    </section>

    <section class="grid lg:grid-cols-2 gap-5">
      <div class="bg-red-900">
        <div class="grid grid-cols-1">
          <div class="
          bg-red-200 
          sm:bg-green-200 
          md:bg-blue-200 
          lg:bg-yellow-200 
          xl:bg-gray-500 
          xl:min-w-[630px] 
          xl:col-start-2 
          2xl:bg-purple-500">2</div>
        </div>
      </div>
      <div class="">6</div>
    </section> -->

<template>
    <section id="section5" class="grid gap-5 items-center py-20 lg:grid-cols-2">
      <div class="px-4" data-aos="zoom-in-right" data-aos-anchor-placement="center-bottom">
        <div class="grid grid-cols-1">
          <div class="
          xl:max-w-[636px]
          xl:col-start-2"
          >
          <div class="">
            <h2 class="titulo-seccion">Stands</h2>
            <p class="titulo">
                ¡Ubica los stands donde se encontrarán nuestros patrocinadores!</p>
            <p class="mb-6">Conecta con proveedores que te ayudarán a llevar a tu empresa al siguiente nivel.</p>
            <!-- href="https://convencionamsofipo.com/mapa/index.html" -->
            <a
              href="/mapa/index.html"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex gap-2 rounded-full transition-all mt-2 duration-500 font-lemon-normal text-xs justify-center items-center bg-gradient-to-r from-[#4D008C] to-[#C028B9] hover:bg-gradient-to-br px-8 py-2"
            >
              Consulta aquí el mapa
            </a>
          </div>
        </div>
        </div>
      </div>
      <div class=""  data-aos="zoom-in-left" data-aos-anchor-placement="center-bottom">
        <div class="relative">
          <div
            id="carousel"
            class="overflow-hidden relative"
            @mouseenter="pauseAutoSlide"
            @mouseleave="startAutoSlide"
          >
            <div
              ref="carouselTrack"
              id="stand-track"
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: transformStyle }"
            >
              <div
                v-for="stand in stands"
                :key="stand.id"
                class="stand-card flex-shrink-0 h-auto w-full md:w-auto xl:max-w-[388px] px-4"
                :class="{ 'animate-fade': currentIndex === stands.indexOf(stand) || currentIndex + 1 === stands.indexOf(stand) || currentIndex + 2 === stands.indexOf(stand) }"
              >
                <div class="">
                    <img
                        :src="stand.imagen"
                        :alt="stand.nombre"
                        class=""
                      />
                </div>
                <!-- <pre> {{ stand }}</pre> -->
              </div>
            </div>
          </div>

          <div class="flex  mt-4 space-x-3">
            <button
              id="prev"
              aria-label="Anterior"
              class="nav-button z-10 w-12 h-12 flex items-center justify-center"
              @click="prevSlide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M15 12L11 16M11 16L15 20M11 16H21M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button
              id="next"
              aria-label="Siguiente"
              class="nav-button z-10 w-12 h-12 flex items-center justify-center"
              @click="nextSlide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M17 20L21 16M21 16L17 12M21 16H11M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped></style>
