<script setup>
  import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
  import Stand1 from '@/assets/img/Stand1.png';
  import Stand2 from '@/assets/img/bg-programa.png';

  // carrusel

// --- Datos de Testimonios ---
// Normalmente, estos datos se obtendrían de una API o se pasarían como un `prop`,
// pero para este ejemplo, los codificaremos aquí.
const programaDia1 = ref([
  {
    id: 1,
    imagen: Stand1,
    nombre: "Circulo de credito",
    titulo: "Circulo de credito",
  },
  {
    id: 2,
    imagen: Stand1,
    nombre: "Bajaware",
    titulo: "Bajaware"
  },
  {
    id: 3,
    imagen: Stand1,
    nombre: "Mc Kroupenky",
    titulo: "Estratega de Mercadotecnia y líder empresarial"
  },
  {
    id: 4,
    imagen: Stand1,
    nombre: "Mc Kroupenky",
    titulo: "Estratega de Mercadotecnia y líder empresarial"
  },
  {
    id: 5,
    imagen: Stand1,
    nombre: "Mc Kroupenky",
    titulo: "Estratega de Mercadotecnia y líder empresarial"
  },
  {
    id: 6,
    imagen: Stand1,
    nombre: "Mc Kroupenky",
    titulo: "Estratega de Mercadotecnia y líder empresarial"
  },
  {
    id: 7,
    imagen: Stand2,
    nombre: "Mc Kroupenky",
    titulo: "Estratega de Mercadotecnia y líder empresarial"
  }
]);



// --- Estado y Lógica del Carrusel ---
const currentIndexDia1 = ref(0); // Índice del testimonio actual visible
const carouselTrackDia1 = ref(null); // Referencia al elemento DOM del carrusel (la pista)
const cardWidthDia1 = ref(0); // Ancho de una tarjeta de testimonio
const autoSlideIntervalDia1 = ref(null); // ID del intervalo para el auto-deslizamiento
const isDragging = ref(false);
const startPos = ref(0);
const currentTranslate = ref(0);
const prevTranslate = ref(0);
const animationId = ref(null);


// Propiedad computada para determinar cuántas tarjetas son visibles según el ancho de la pantalla
const visibleCards = computed(() => {
  if (window.innerWidth >= 1024) return 3; // Escritorio (lg)
  if (window.innerWidth >= 768) return 2;  // Tableta (md)
  return 1; // Móvil (predeterminado)
});

// Propiedad computada para calcular el índice máximo al que podemos deslizar
const maxIndexDia1 = computed(() => programaDia1.value.length - visibleCards.value);

// Propiedad computada para la transformación CSS que desliza el carrusel
const transformStyleDia1 = computed(() => {
  const offset = -currentIndexDia1.value * cardWidthDia1.value;
  return `translateX(${offset}px)`;
});


// Función para actualizar la posición del carrusel y el punto indicador activo
// const updateCarouselDia1 = () => {
//   // Esperamos a que el DOM se actualice para obtener el `cardWidthDia1` correcto
//   nextTick(() => {
//     if (carouselTrackDia1.value && carouselTrackDia1.value.firstElementChild) {
//       cardWidthDia1.value = carouselTrackDia1.value.firstElementChild.offsetWidth;
//     }
//   });
//   // La transformación CSS y la clase del punto activo son manejadas por propiedades computadas y clases condicionales.
// };
const updateCarouselDia1 = () => {
  nextTick(() => {
    if (carouselTrackDia1.value && carouselTrackDia1.value.firstElementChild) {
      cardWidthDia1.value = carouselTrackDia1.value.firstElementChild.offsetWidth;
      currentTranslate.value = -currentIndexDia1.value * cardWidthDia1.value;
      prevTranslate.value = currentTranslate.value;
      carouselTrackDia1.value.style.transform = `translateX(${currentTranslate.value}px)`;
    }
  });
};

// --- Funciones de Navegación ---
const nextSlideDia1 = () => {
  if (currentIndexDia1.value < maxIndexDia1.value) {
    currentIndexDia1.value += 1;
    updateTranslate();
    resetAutoSlideDia1();
  }
};

const prevSlideDia1 = () => {
  if (currentIndexDia1.value > 0) {
    currentIndexDia1.value -= 1;
    updateTranslate();
    resetAutoSlideDia1();
  }
};

const updateTranslate = () => {
  currentTranslate.value = -currentIndexDia1.value * cardWidthDia1.value;
  prevTranslate.value = currentTranslate.value;
};


const goToSlide = (index) => {
  currentIndexDia1.value = index;
  resetAutoSlideDia1();
};

// --- Lógica de Auto-Deslizamiento ---
const startAutoSlideDia1 = () => {
  clearInterval(autoSlideIntervalDia1.value); // Limpia cualquier intervalo existente
  autoSlideIntervalDia1.value = setInterval(nextSlideDia1, 2000); // Cambia cada 5 segundos
};

const resetAutoSlideDia1 = () => {
  clearInterval(autoSlideIntervalDia1.value);
  startAutoSlideDia1();
};

const pauseAutoSlideDia1 = () => {
  clearInterval(autoSlideIntervalDia1.value);
};


// --- Funciones para el drag ---
const touchStart = (e) => {
   if (e.type === 'touchstart') {
    e.preventDefault(); // Prevenir zoom/scroll en móviles
  }
  pauseAutoSlideDia1();
  isDragging.value = true;
  startPos.value = getPositionX(e);
  animationId.value = requestAnimationFrame(animation);
  carouselTrackDia1.value.style.cursor = 'grabbing';
};

const touchMove = (e) => {
  if (!isDragging.value) return;
  e.preventDefault();
  const currentPosition = getPositionX(e);
  currentTranslate.value = prevTranslate.value + currentPosition - startPos.value;
};

const touchEnd = () => {
  isDragging.value = false;
  cancelAnimationFrame(animationId.value);
  carouselTrackDia1.value.style.cursor = 'grab';
  
  const movedBy = currentTranslate.value - prevTranslate.value;
  
  // Si el movimiento fue significativo, cambia de slide
  if (movedBy < -50 && currentIndexDia1.value < maxIndexDia1.value) {
    nextSlideDia1();
  } else if (movedBy > 50 && currentIndexDia1.value > 0) {
    prevSlideDia1();
  }
  
  // Restablece la posición
  currentTranslate.value = -currentIndexDia1.value * cardWidthDia1.value;
  prevTranslate.value = currentTranslate.value;
  carouselTrackDia1.value.style.transform = `translateX(${currentTranslate.value}px)`;
  
  resetAutoSlideDia1();
};

const getPositionX = (e) => {
  return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
};

const animation = () => {
  if (isDragging.value) {
    carouselTrackDia1.value.style.transform = `translateX(${currentTranslate.value}px)`;
    requestAnimationFrame(animation);
  }
};


// --- Hooks del Ciclo de Vida ---
onMounted(() => {
  // Usar setTimeout para asegurar que el DOM esté completamente renderizado
  setTimeout(() => {
    updateCarouselDia1();
    startAutoSlideDia1();
  }, 300);

  window.addEventListener('resize', () => {
    updateCarouselDia1();
    // Ajustar índices si es necesario
    if (currentIndexDia1.value + visibleCards.value > programaDia1.value.length) {
      currentIndexDia1.value = Math.max(0, programaDia1.value.length - visibleCards.value);
    }
  });

  // Agregar evento de rueda del mouse
  carouselTrackDia1.value.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      nextSlideDia1();
    } else {
      prevSlideDia1();
    }
  });
});


onUnmounted(() => {
  // Limpiar el intervalo cuando el componente se desmonta para evitar fugas de memoria
  clearInterval(autoSlideIntervalDia1.value);
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
      <div class="px-4"  data-aos="zoom-in-right" data-aos-anchor-placement="center-center">
        <div class="grid grid-cols-1">
          <div class="
          xl:max-w-[630px]
          xl:col-start-2"
          >
          <div class="">
            <h2 class="titulo-seccion">Stands</h2>
            <p class="titulo" data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elitipsum.
            </p>
            <p class="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button class="flex gap-2 rounded-full transition-all duration-500 font-lemon-normal text-xs justify-center items-center bg-gradient-to-r from-[#4D008C] to-[#C028B9] hover:bg-gradient-to-br px-8 py-2">
              Consulta aqui el mapa
            </button>
          </div>
        </div>
        </div>
      </div>
      <div class=""  data-aos="zoom-in-left" data-aos-anchor-placement="center-center">
        <div class="relative">
          <div
            id="carousel"
            class="overflow-hidden relative"
            @mouseenter="pauseAutoSlideDia1"
            @mouseleave="startAutoSlideDia1"
          >
            <div
              ref="carouselTrackDia1"
              id="programa-track"
              class="flex transition-transform duration-500 ease-in-out cursor-grab"
              :style="{ transform: isDragging ? `translateX(${currentTranslate}px)` : transformStyleDia1 }"
              @mousedown="touchStart"
              @touchstart="touchStart"
              @mousemove="touchMove"
              @touchmove="touchMove"
              @mouseup="touchEnd"
              @touchend="touchEnd"
              @mouseleave="touchEnd"
            >
            <!-- class="programa-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4" -->
              <div
                v-for="programa in programaDia1"
                :key="programa.id"
                class="programa-card flex-shrink-0 h-auto w-full md:w-auto xl:max-w-[388px] px-4"
                :class="{ 'animate-fade': currentIndexDia1 === programaDia1.indexOf(programa) || currentIndexDia1 + 1 === programaDia1.indexOf(programa) || currentIndexDia1 + 2 === programaDia1.indexOf(programa) }"
              >
                <div class="">
                    <img
                        :src="programa.imagen"
                        :alt="programa.nombre"
                        draggable="false"
                        class=""
                      />
                </div>
                <!-- <pre> {{ programa }}</pre> -->
              </div>
            </div>
          </div>

          <div class="flex  mt-4 space-x-3">
            <button
              id="prev"
              class="nav-button z-10 w-12 h-12 flex items-center justify-center"
              @click="prevSlideDia1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M15 12L11 16M11 16L15 20M11 16H21M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button
              id="next"
              class="nav-button z-10 w-12 h-12 flex items-center justify-center"
              @click="nextSlideDia1"
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

<style scoped>
.programa-card {
  user-select: none;
}

#carousel {
  overflow: hidden;
}

.programa-card img {
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
  pointer-events: none; /* Opcional: solo si no necesitas eventos en la imagen */
}

</style>
