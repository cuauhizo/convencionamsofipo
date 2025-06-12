<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Stand1 from '@/assets/img/Stand1.png';
import Stand2 from '@/assets/img/bg-programa.png';

// Datos de los stands (duplicamos los elementos para el efecto infinito)
const stands = ref([
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

// Duplicamos los stands para el efecto infinito
const duplicatedStands = ref([...stands.value, ...stands.value]);

// Estado del carrusel
const currentPosition = ref(0);
const animationSpeed = ref(50); // Pixeles por segundo
const isPaused = ref(false);
const carouselRef = ref(null);
const trackRef = ref(null);
const animationFrame = ref(null);
const lastTimestamp = ref(0);

// Ancho de cada tarjeta (asumimos que todas tienen el mismo ancho)
const cardWidth = ref(300); // Valor inicial, se actualiza en onMounted

// Iniciar la animación
const startAnimation = (timestamp) => {
  if (!lastTimestamp.value) lastTimestamp.value = timestamp;
  const deltaTime = timestamp - lastTimestamp.value;
  lastTimestamp.value = timestamp;

  if (!isPaused.value) {
    currentPosition.value -= (animationSpeed.value * deltaTime) / 1000;
    
    // Reiniciamos la posición cuando llegamos al final
    if (Math.abs(currentPosition.value) >= trackRef.value.scrollWidth / 2) {
      currentPosition.value = 0;
    }
    
    trackRef.value.style.transform = `translateX(${currentPosition.value}px)`;
  }
  
  animationFrame.value = requestAnimationFrame(startAnimation);
};

// Pausar/reanudar al interactuar
const pauseAnimation = () => {
  isPaused.value = true;
};

const resumeAnimation = () => {
  isPaused.value = false;
  lastTimestamp.value = 0; // Resetear el timestamp para evitar saltos
};

// Actualizar el ancho de las tarjetas al montar
onMounted(() => {
  if (trackRef.value && trackRef.value.firstElementChild) {
    cardWidth.value = trackRef.value.firstElementChild.offsetWidth + 32; // +32 para el padding
  }
  animationFrame.value = requestAnimationFrame(startAnimation);
  
  // Actualizar en resize
  window.addEventListener('resize', () => {
    if (trackRef.value && trackRef.value.firstElementChild) {
      cardWidth.value = trackRef.value.firstElementChild.offsetWidth + 32;
    }
  });
});

// Limpiar al desmontar
onUnmounted(() => {
  cancelAnimationFrame(animationFrame.value);
  window.removeEventListener('resize', () => {});
});
</script>

<template>
  <section id="section5" class="grid gap-5 items-center py-20 lg:grid-cols-2">
    <div class="px-4" data-aos="zoom-in-right" data-aos-anchor-placement="center-bottom">
      <div class="grid grid-cols-1">
        <div class="xl:max-w-[630px] xl:col-start-2">
          <div class="">
            <h2 class="titulo-seccion">Stands</h2>
            <p class="titulo">
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
    
    <div class="" data-aos="zoom-in-left" data-aos-anchor-placement="center-bottom">
      <div class="relative overflow-hidden">
        <div
          ref="carouselRef"
          class="w-full"
          @mouseenter="pauseAnimation"
          @mouseleave="resumeAnimation"
        >
          <div
            ref="trackRef"
            class="flex w-max"
          >
            <div
              v-for="(stand, index) in duplicatedStands"
              :key="`${stand.id}-${index}`"
              class="stand-card flex-shrink-0 px-4"
              :style="{ width: `${cardWidth}px` }"
            >
              <div class="h-full">
                <img
                  :src="stand.imagen"
                  :alt="stand.nombre"
                  class=" h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.titulo-seccion {
  @apply text-[#4D008C] text-3xl md:text-4xl font-bold mb-4 font-lemon-bold;
}

.titulo {
  @apply text-2xl md:text-3xl font-bold mb-4 font-lemon-bold;
}

.stand-card {
  transition: transform 0.3s ease;
}

/* Animación suave para el track */
.track {
  transition: transform 0.1s linear;
}
</style>