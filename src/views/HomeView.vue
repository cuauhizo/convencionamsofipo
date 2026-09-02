<script setup>
  import { useHead } from '@vueuse/head'
  import Hero from '@/components/hero.vue'
  import Patrocinadores from '@/components/patrocinadores.vue'
  import Ponentes from '@/components/ponentes.vue'
  import Programa from '@/components/programa.vue'
  import Stands from '@/components/stands.vue'
  import Sede from '@/components/sede.vue'

  useHead({
    title: 'Innovar para Trascender: solidez y confianza | 11 Convención AMS',
    meta: [
      { name: 'description', content: 'Las SOFIPOS ofrecen solidez para avanzar, confianza para crecer y fomentan la inclusión para transformar. Descubre los avances del sector en la 11ª Convención AMS' },
      { name: 'keywords', content: 'SOFIPOS, SOFIPO, finanzas populares, seguridad, confianza, convención AMS, líderes del sector financiero, Solidez, inclusión, crecimiento' },
      { property: 'og:title', content: '11ª Convención AMS | Innovar para trascender' },
      { property: 'og:description', content: 'Las SOFIPOS ofrecen solidez para avanzar, confianza para crecer y fomentan la inclusión para transformar. Descubre los avances del sector en la 11ª Convención AMS' },
      { property: 'og:image', content: 'https://convencionamsofipo.com/logo_ams.png' },
      { property: 'og:url', content: 'https://convencionamsofipo.com/' },
      { property: 'og:type', content: 'website' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: '11ª Convención AMS | Innovar para trascender' },
      { name: 'twitter:description', content: 'Las SOFIPOS ofrecen solidez para avanzar, confianza para crecer y fomentan la inclusión para transformar. Descubre los avances del sector en la 11ª Convención AMS' },
      { name: 'twitter:image', content: 'https://convencionamsofipo.com/logo_ams.png' },
      { name: 'twitter:url', content: 'https://convencionamsofipo.com/' },
    ],
  })
</script>

<template>
  <Hero />
  <Patrocinadores />
  <Ponentes />
  <Programa />
  <Stands />
  <Sede />
</template>
