<script setup>
import { patrocinadores } from '@/data/patrocinadores.js';

const getImageUrl = (imageName) => {
  return new URL(`../assets/img/patrocinadores/${imageName}`, import.meta.url).href;
};
</script>

<template>
  <section id="section2" class="container grid gap-12 justify-items-center items-center py-10 md:py-20 lg:grid-cols-2">
    <div data-aos="fade-down" data-aos-anchor-placement="top-center">
      <h2 class="titulo-seccion">Patrocinadores</h2>
      <p class="titulo">
        Gracias a las empresas que hacen posible este evento
      </p>
      <p>En nuestra área de exposición se presentan <span class="font-bold">proveedores confiables</span> que conocen ampliamente las necesidades de las SOFIPOS y ofrecen servicios a la medida, alineados con las tendencias de mercado.</p>
    </div>
    <div class="container grid grid-cols-2 gap-4 justify-items-center items-center lg:py-12 md:grid-cols-3" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <div class="max-w-sm rounded-2xl h-full flex flex-col" v-for="(patrocinador, index) in patrocinadores" :key="patrocinador.id">
        <div class="flex-1">
          <a
            :href="patrocinador.url"
            :aria-label="patrocinador.alt"
            target="_blank"
          >
            <img
              class=""
              :src="getImageUrl(patrocinador.imagen)"
              :alt="patrocinador.alt"
              :data-aos-delay="index * 200"
              data-aos="flip-right"
              data-aos-duration="3000"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>