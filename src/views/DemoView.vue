<script setup>
import { useHead } from '@vueuse/head'
import Hero from '@/components/hero.vue'
import Patrocinadores from '@/components/patrocinadores.vue'
import Ponentes from '@/components/ponentes.vue'
import Programa from '@/components/programa.vue'
import StandsCopy from '@/components/stands_copy.vue'
import Sede from '@/components/sede.vue'


useHead({
  title: 'Seguridad y confianza: base de las sofipos | 10ª Convención AMS',
  meta: [
    { name: 'description', content: 'Las SOFIPOs construyen el futuro con seguridad y confianza. Descubre los avances del sector en la 10ª Convención AMS, el evento clave para las finanzas populares.' },
    { name: 'robots', content: 'noindex' },
    { property: 'og:title', content: '10ª Convención AMS | Seguridad y confianza' },
    { property: 'og:description', content: 'Las SOFIPOs construyen el futuro con seguridad y confianza. Descubre los avances del sector en la 10ª Convención AMS.' },
    { property: 'og:image', content: 'https://convencionamsofipo.com/logo_ams.png' },
    { property: 'og:url', content: 'https://convencionamsofipo.com/' },
    { property: 'og:type', content: 'website' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '10ª Convención AMS | Seguridad y confianza' },
    { name: 'twitter:description', content: 'Las SOFIPOs construyen el futuro con seguridad y confianza.' },
    { name: 'twitter:image', content: 'https://convencionamsofipo.com/logo_ams.png' },
    { name: 'twitter:url', content: 'https://convencionamsofipo.com/' }
  ],
})
</script>

<template>
  <Hero/>
  <Patrocinadores/>
  <Ponentes/>
  <Programa/>
  <StandsCopy/>
  <Sede/>
</template>