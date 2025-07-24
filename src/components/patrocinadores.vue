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
      <div class="max-w-sm rounded-2xl h-full flex flex-col" v-for="(patrocinador, index) in patrocinadores">
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
  // import bajaware from '@/assets/img/patrocinadores/bajaware.png';
  import circulo_de_credito from '@/assets/img/patrocinadores/circulo_de_credito.png';
  import gmc360 from '@/assets/img/patrocinadores/gmc360.png';
  import efisys from '@/assets/img/patrocinadores/efisys.png';
  import unico from '@/assets/img/patrocinadores/unico.png';
  // import finvero from '@/assets/img/patrocinadores/finvero.png';
  // import fitch_ratings from '@/assets/img/patrocinadores/fitch_ratings.png';
  import preven from '@/assets/img/patrocinadores/preven.png';
  // import mc_collect from '@/assets/img/patrocinadores/mc_collect.png';
  import buro_de_credito from '@/assets/img/patrocinadores/buro_de_credito.png';
  // import sekura from '@/assets/img/patrocinadores/sekura.png';
  // import tecreo from '@/assets/img/patrocinadores/tecreo.png';
  import y_g from '@/assets/img/patrocinadores/y&g.png';
  import hr_ratings from '@/assets/img/patrocinadores/hr_ratings.png';

  const patrocinadores = ref([
    // { id: 1, url: '#', src: bajaware, alt: 'bajaware' },
    { id: 2, url: 'https://www.circulodecredito.com.mx/home', src: circulo_de_credito, alt: 'Circulo de Crédito' },
    { id: 3, url: 'https://www.gmc360.com.mx/', src: gmc360, alt: 'GMC360' },
    // { id: 4, url: '#', src: sekura, alt: 'fin amigo' },
    { id: 5, url: 'https://empresas-mx.unico.io/hc/es-mx', src: unico, alt: 'Unico' },
    // { id: 6, url: '#', src: fitch_ratings, alt: 'fitch_ratings' },
    { id: 7, url: 'https://preven.mx/', src: preven, alt: 'Preven' },
    // { id: 8, url: '#', src: mc_collect, alt: 'mc_collect' },
    { id: 9, url: 'https://www.burodecredito.com.mx/', src: buro_de_credito, alt: 'Buro de Crédito' },
    { id: 10, url: 'https://efisys.com.mx/', src: efisys, alt: 'Efisys' },
    // { id: 11, url: '#', src: tecreo, alt: 'tecreo' },
    { id: 12, url: 'https://ygconsultores.com.mx/', src: y_g, alt: 'Y&G' },
    // { id: 13, url: '#', src: y_g, alt: 'y_g' },
    { id: 14, url: 'https://www.hrratings.com/', src: hr_ratings, alt: 'HR Ratings' },
  ])
</script>


<style>

</style>