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
      <div class="hidden max-w-sm rounded-2xl h-full flex flex-col" v-for="(patrocinador, index) in patrocinadores">
        <div class="flex-1">
          <a
              :key="patrocinador.id"
              :href="patrocinador.url"
              :aria-label="patrocinador.alt"
              target="_blank"
            >
              <img
                class=""
                :src="patrocinador.src"
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

<script setup>
  import { ref } from 'vue'
  import bajaware from '@/assets/img/patrocinadores/bajaware.webp';
  import circulo_de_credito from '@/assets/img/patrocinadores/circulo_de_credito.webp';
  import gmc360 from '@/assets/img/patrocinadores/gmc360.webp';
  import efisys from '@/assets/img/patrocinadores/efisys.webp';
  import finvero from '@/assets/img/patrocinadores/finvero.webp';
  import fitch_ratings from '@/assets/img/patrocinadores/fitch_ratings.webp';
  import preven from '@/assets/img/patrocinadores/preven.webp';
  import mc_collect from '@/assets/img/patrocinadores/mc_collect.webp';
  import buro_de_credito from '@/assets/img/patrocinadores/buro_de_credito.webp';
  import sekura from '@/assets/img/patrocinadores/sekura.webp';
  import tecreo from '@/assets/img/patrocinadores/tecreo.webp';

  const patrocinadores = ref([
    { id: 1, url: '#', src: bajaware, alt: 'bajaware' },
    { id: 2, url: '#', src: circulo_de_credito, alt: 'circulo_de_credito' },
    { id: 3, url: '#', src: gmc360, alt: 'gmc360' },
    { id: 4, url: '#', src: efisys, alt: 'efisys' },
    { id: 5, url: '#', src: finvero, alt: 'finvero' },
    { id: 6, url: '#', src: fitch_ratings, alt: 'fitch_ratings' },
    { id: 7, url: '#', src: preven, alt: 'preven' },
    { id: 8, url: '#', src: mc_collect, alt: 'mc_collect' },
    { id: 9, url: '#', src: buro_de_credito, alt: 'buro_de_credito' },
    { id: 10, url: '#', src: sekura, alt: 'fin amigo' },
    { id: 11, url: '#', src: tecreo, alt: 'tecreo' },
  ])
</script>


<style>

</style>