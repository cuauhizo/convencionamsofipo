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
    { id: 1, url: '#', src: amextra, alt: 'amextra' },
    { id: 2, url: '#', src: asp, alt: 'asp' },
    { id: 3, url: '#', src: bbcd, alt: 'bbcd' },
    { id: 4, url: '#', src: bienestar, alt: 'bienestar' },
    { id: 5, url: '#', src: broxel, alt: 'broxel' },
    { id: 6, url: '#', src: capital_activo, alt: 'capital_activo' },
    { id: 7, url: '#', src: credicapital, alt: 'credicapital' },
    { id: 8, url: '#', src: crediclub, alt: 'crediclub' },
    { id: 9, url: '#', src: fincomun, alt: 'fincomun' },
    { id: 10, url: '#', src: fin_amigo, alt: 'fin amigo' },
    { id: 11, url: '#', src: fondedora, alt: 'fondedora' },
    { id: 12, url: '#', src: grensa, alt: 'grensa' },
    { id: 13, url: '#', src: klar, alt: 'klar' },
    { id: 14, url: '#', src: kubo, alt: 'kubo' },
    { id: 15, url: '#', src: monte_de_piedad, alt: 'monte de piedad' },
    { id: 16, url: '#', src: paso_seguro, alt: 'paso seguro' },
    { id: 17, url: '#', src: porvenir, alt: 'porvenir' },
    { id: 18, url: '#', src: premu, alt: 'premu' },
    { id: 19, url: '#', src: progressa, alt: 'progressa' },
    { id: 20, url: '#', src: resuelve, alt: 'resuelve' },
    { id: 21, url: '#', src: sofiexpress, alt: 'sofiexpress' },
    { id: 22, url: '#', src: stori, alt: 'stori' },
    { id: 23, url: '#', src: sumate, alt: 'sumate' },
    { id: 24, url: '#', src: unagra, alt: 'unagra' },
    { id: 25, url: '#', src: xepelin, alt: 'xepelin' },
  ])
</script>

<style scoped>
</style>