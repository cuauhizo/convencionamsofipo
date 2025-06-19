<template>
  <section id="section1" class="container flex flex-wrap justify-items-end items-end min-h-lvh gap-12 py-[5rem] md:flex-nowrap md:justify-items-center xl:min-h-[695px]">
    <div class="w-full md:w-2/3" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
      <h1 class="sr-only">10<sup>a</sup> Convención</h1>
      <h2 class="hero-text font-lemon-bold text-[2.244rem] md:text-[3.196rem] font-bold">
        Seguridad y confianza:<br>
        <span class="font-lemon-normal font-normal text-[1.773rem] md:text-[2.525rem]">la base de las sofipos</span>
      </h2>
      <button class="flex gap-2 rounded-full transition-all mt-4 duration-500 text-white text-[1.246rem] font-lemon-normal justify-center items-center bg-gradient-to-r from-[#4D008C] to-[#C028B9] hover:bg-gradient-to-br px-8 py-3.5 md:text-[1.402rem]">
        <span>10<sup>a</sup></span> Convención
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4.5 19.5L19.5 4.5M19.5 4.5H8.25M19.5 4.5V15.75" stroke="#1DC270" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </button>

      <div class="mt-6 md:max-w-[497.23px]">
        <div class="grid grid-cols-9 gap-2">
            <a v-for="(sofipo, index) in sofipos"
              :key="sofipo.id"
              :href="sofipo.url"
              :aria-label="sofipo.alt"
              :data-aos-delay="index * 100"
              data-aos="flip-right"
              data-aos-duration="3000"
              data-aos-anchor-placement="top-bottom"
              target="_blank"
            >
              <img
                class="transition-all duration-300 hover:scale-110 object-contain"
                :src="sofipo.src"
                :alt="sofipo.alt"
                loading="lazy"
              />
            </a>
        </div>

      </div>
    </div>
    <div class="space-y-6 md:space-y-8 w-full md:w-1/3" data-aos="fade-left">
      <h3 class="uppercase text-end leading-7">
        <span class="text-[2.244rem] font-lemon-bold">3 al 5 </span><br>
        <span class="text-[#764796] text-[1.773rem] font-lemon-bold">de Septiembre </span><br>
        <span class="text-[1.246rem] font-lemon-normal">Hotel Sumiya </span><br>
        <span class="text-[1.246rem] font-lemon-light">Juitepec Morelos</span>
      </h3>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'
  import amextra from '@/assets/img/sofipos/amextra.webp';
  import asp from '@/assets/img/sofipos/asp.webp';
  import bbcd from '@/assets/img/sofipos/bbcd.webp';
  import bienestar from '@/assets/img/sofipos/bienestar.webp';
  import broxel from '@/assets/img/sofipos/broxel.webp';
  import capital_activo from '@/assets/img/sofipos/capital_activo.webp';
  import credicapital from '@/assets/img/sofipos/credicapital.webp';
  import crediclub from '@/assets/img/sofipos/crediclub.webp';
  import fincomun from '@/assets/img/sofipos/fincomun.webp';
  import fin_amigo from '@/assets/img/sofipos/fin_amigo.webp';
  import fondedora from '@/assets/img/sofipos/fondedora.webp';
  import grensa from '@/assets/img/sofipos/grensa.webp';
  import klar from '@/assets/img/sofipos/klar.webp';
  import kubo from '@/assets/img/sofipos/kubo.webp';
  import monte_de_piedad from '@/assets/img/sofipos/monte_de_piedad.webp';
  import paso_seguro from '@/assets/img/sofipos/paso_seguro.webp';
  import porvenir from '@/assets/img/sofipos/porvenir.webp';
  import premu from '@/assets/img/sofipos/premu.webp';
  import progressa from '@/assets/img/sofipos/progressa.webp';
  import resuelve from '@/assets/img/sofipos/resuelve.webp';
  import sofiexpress from '@/assets/img/sofipos/sofiexpress.webp';
  import stori from '@/assets/img/sofipos/stori.webp';
  import sumate from '@/assets/img/sofipos/sumate.webp';
  import unagra from '@/assets/img/sofipos/unagra.webp';
  import xepelin from '@/assets/img/sofipos/xepelin.webp';

  const sofipos = ref([
    { id: 1, url: 'https://amextrafinanzas.com/', src: amextra, alt: 'Amextra Finanzas' },
    { id: 2, url: 'https://www.aspintegraopciones.com/fr/home/', src: asp, alt: 'ASP Integra Opciones' },
    { id: 3, url: 'https://bbdcdigital.com.mx/', src: bbcd, alt: 'BBDC Digital' },
    { id: 4, url: 'https://www.ahorrosbienestar.com/', src: bienestar, alt: 'Bienestar' },
    { id: 5, url: 'https://broxel.com/', src: broxel, alt: 'Broxel' },
    { id: 6, url: 'https://capitalactivo.com.mx/', src: capital_activo, alt: 'Capital Activo' },
    { id: 7, url: 'https://credicapital.com.mx/', src: credicapital, alt: 'Credi Capital' },
    { id: 8, url: 'https://www.crediclub.com/', src: crediclub, alt: 'CrediClub' },
    { id: 10, url: 'https://www.finamigo.com.mx/', src: fin_amigo, alt: 'Finamigo' },
    { id: 15, url: 'https://financieramontedepiedad.com.mx/', src: monte_de_piedad, alt: 'Financiera Monte de Piedad' },
    { id: 9, url: 'https://www.fincomun.com.mx/', src: fincomun, alt: 'Fincomún' },
    { id: 11, url: 'https://empresarial.fondeadora.com/', src: fondedora, alt: 'Fondeadora' },
    { id: 12, url: 'https://grensa.com/', src: grensa, alt: 'Grensa' },
    { id: 24, url: 'https://unagra.com.mx/', src: unagra, alt: 'Unagra' },
    { id: 13, url: 'https://www.klar.mx/', src: klar, alt: 'Klar' },
    { id: 14, url: 'https://www.kubofinanciero.com/', src: kubo, alt: 'Kubo Financiero' },
    { id: 16, url: 'https://www.pasoseguro.com.mx/', src: paso_seguro, alt: 'Paso Seguro' },
    { id: 17, url: 'https://porvenirsofipo.mx/', src: porvenir, alt: 'Porvenir SFP' },
    { id: 18, url: 'https://premo.mx/', src: premu, alt: 'Premo' },
    { id: 19, url: 'https://progressa.com.mx/', src: progressa, alt: 'Progressa' },
    { id: 20, url: 'https://resuelvetusfinanzas.com/', src: resuelve, alt: 'Resuelve' },
    { id: 21, url: 'https://sofiexpress.com.mx/home/', src: sofiexpress, alt: 'Sofi Express' },
    { id: 22, url: 'https://www.storicard.com/', src: stori, alt: 'Stori' },
    { id: 23, url: 'https://www.financierasumate.com.mx/', src: sumate, alt: 'Sumate' },
    { id: 25, url: 'https://xepelin.com/mx', src: xepelin, alt: 'Xepelin' },
  ])
</script>

<style scoped>
</style>