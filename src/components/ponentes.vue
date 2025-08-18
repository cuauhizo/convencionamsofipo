<template>
  <section id="section3" class="py-10 md:py-20 px-4">
    <div class="mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row">
      <div class="w-full md:sticky md:top-20 md:w-1/2 md:order-2" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <h2 class="titulo-seccion">Ponentes</h2>
        <p class="titulo">Personas expertas en el sector de las finanzas populares</p>
        <p>Explora las visiones y trayectorias de los líderes del sector financiero que nos compartirán su experiencia.</p>
      </div>
      <div class="flex flex-wrap justify-center gap-4 mt-5 w-full min-w-0 flex-1 md:mt-0 md:order-1" data-aos="fade-down" data-aos-anchor-placement="top-bottom">
        <div
          v-for="(ponente, index) in ponentes"
          :key="ponente.id"
          :id="`ponente-${ponente.id}`"
          class="max-w-[230px] rounded-2xl bg-perfil p-6 text-center shadow-lg flex flex-col justify-between"
          :class="{
            'transform lg:-translate-y-5': index % 2 === 0,
            'transform lg:translate-y-5': index % 2 !== 0
          }"
        >
          <h3 class="text-sm">{{ ponente.nombre }}</h3>
          <img
            class="mx-auto mt-4 mb-4 h-32 w-32 rounded-full shadow-lg"
            :src="ponente.imagen"
            :alt="`Foto de ${ponente.nombre}`"
          />
          <p class="mt-8 text-xs font-normal">
            {{ ponente.descripcion }}
          </p>
          <a
            :href="ponente.enlace"
            target="_blank"
            rel="noopener noreferrer"
            class="flex gap-2 rounded-full transition-all mt-2 duration-500 font-lemon-normal text-xs justify-center items-center w-full bg-gradient-to-r from-[#4D008C] to-[#C028B9] hover:bg-gradient-to-br px-8 py-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" >
              <path d="M9 4H3.5C3.10218 4 2.72064 4.15804 2.43934 4.43934C2.15804 4.72064 2 5.10218 2 5.5V12.5C2 12.8978 2.15804 13.2794 2.43934 13.5607C2.72064 13.842 3.10218 14 3.5 14H10.5C10.8978 14 11.2794 13.842 11.5607 13.5607C11.842 13.2794 12 12.8978 12 12.5V7M5 11L14 2M14 2H10.5M14 2V5.5" stroke="#1DC270" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Ver Semblanza
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'
  import Marlene_Garayza from '@/assets/img/ponentes/Marlene_Garayzar.png';
  // import David_Romero from '@/assets/img/ponentes/David_Romero.png';
  import Juan_Francisco_Fernandez from '@/assets/img/ponentes/Juan_Francisco_Fernandez.png';
  import Alejandro_Toiber from '@/assets/img/ponentes/Alejandro_Toiber.png';
  import Oscar_Rosado from '@/assets/img/ponentes/Oscar_Rosado.png';
  import Manuel_Contreras from '@/assets/img/ponentes/Manuel_Contreras.png';
  import Alan_Elizondo from '@/assets/img/ponentes/Alan_Elizondo.png';
  import Carlos_Marmolejo from '@/assets/img/ponentes/Carlos_Marmolejo.png';
  import Marcela_Galicia from '@/assets/img/ponentes/Marcela_Galicia.png';
  import Mauricio_Rodriguez from '@/assets/img/ponentes/Mauricio_Rodriguez.png';
  import Jesus_de_la_Fuente from '@/assets/img/ponentes/Jesus_de_la_Fuente.png';
  import Marco_Antonio_Mares from '@/assets/img/ponentes/Marco_Antonio_Mares.png';
  import Alfredo_Navarrete from '@/assets/img/ponentes/Alfredo_Navarrete.png';
  import Galia_Borja_Gomez from '@/assets/img/ponentes/Galia_Borja_gomez.png';
  import Juan_Pablo_Zorrilla from '@/assets/img/ponentes/Juan_Pablo_Zorrilla.png';
  import Oscar_Salcedo from '@/assets/img/ponentes/Oscar_Salcedo.png';
  import Jose_Antonio_Lozano from '@/assets/img/ponentes/Jose_Antonio_Lozano.png';

  // enlace: '../semblanzas/AMS_semblanza_Marlene_Garayzar.pdf'

  const ponentes = ref([
    {
      id: 1,
      nombre: 'Marlene Garayzar',
      imagen: Marlene_Garayza,
      descripcion: 'Presidenta de AMS',
      enlace: '../semblanzas/AMS_semblanza_Marlene_Garayzar.pdf'
    },
    // {
    //   id: 2,
    //   nombre: 'David Romero',
    //   imagen: David_Romero,
    //   descripcion: 'Vicepresidente de AMS',
    //   enlace: '../semblanzas/AMS_semblanza_David_Romero.pdf'
    // },
    {
      id: 3,
      nombre: 'Juan Francisco Fernández',
      imagen: Juan_Francisco_Fernandez,
      descripcion: 'CEO de Crediclub',
      enlace: '../semblanzas/AMS_semblanza_Juan_Francisco_Fernandez.pdf'
    },
    {
      id: 4,
      nombre: 'Alejandro Toiber',
      imagen: Alejandro_Toiber,
      descripcion: 'Country Manager MX',
      enlace: '../semblanzas/AMS_semblanza_Alejandro_Toiber.pdf'
    },
    {
      id: 5,
      nombre: 'Oscar Rosado',
      imagen: Oscar_Rosado,
      descripcion: 'Presidente de CONDUSEF',
      enlace: '../semblanzas/AMS_semblanza_Oscar_Rosado.pdf'
    },
    {
      id: 6,
      nombre: 'Manuel Contreras',
      imagen: Manuel_Contreras,
      descripcion: 'Product Manager de Oracle',
      enlace: '../semblanzas/AMS_semblanza_Manuel_Contreras_Rico.pdf'
    },
    {
      id: 7,
      nombre: 'Alan Elizondo',
      imagen: Alan_Elizondo,
      descripcion: 'Director General de FIRA',
      enlace: '../semblanzas/AMS_semblanza_Alan_Elizondo.pdf'
    },
    {
      id: 8,
      nombre: 'Carlos Marmolejo',
      imagen: Carlos_Marmolejo,
      descripcion: 'CEO de FINSUS',
      enlace: '../semblanzas/AMS_semblanza_Carlos_Marmolejo.pdf'
    },
    {
      id: 9,
      nombre: 'Marcela Galicia',
      imagen: Marcela_Galicia,
      descripcion: 'Directora Senior De Instituciones Financieras No Bancarias En Fitch Ratings',
      enlace: '../semblanzas/AMS_semblanza_Marcela_Galicia.pdf'
    },
    {
      id: 10,
      nombre: 'Mauricio Rodríguez',
      imagen: Mauricio_Rodriguez,
      descripcion: 'Titular De La Unidad De Estadísticas Sociodemográficas',
      enlace: '../semblanzas/AMS_semblanza_Mauricio_Rodriguez.pdf'
    },
    {
      id: 11,
      nombre: 'Jesús de la Fuente',
      imagen: Jesus_de_la_Fuente,
      descripcion: 'Presidente de la CNBV',
      enlace: '../semblanzas/AMS_semblanza_Jesus_de_la_Fuente.pdf'
    },
    {
      id: 12,
      nombre: 'Marco Antonio Mares',
      imagen: Marco_Antonio_Mares,
      descripcion: 'Periodista',
      enlace: '../semblanzas/AMS_semblanza_Marco_Antonio_Mares.pdf'
    },
    {
      id: 13,
      nombre: 'Alfredo Navarrete',
      imagen: Alfredo_Navarrete,
      descripcion: 'Titular de la unidad de banca, valores y ahorro de la SHCP',
      enlace: '../semblanzas/AMS_semblanza_Alfredo_Navarrete.pdf'
    },
    {
      id: 14,
      nombre: 'Galia Borja Gómez',
      imagen: Galia_Borja_Gomez,
      descripcion: 'Subgobernadora Del Banco De México',
      enlace: '../semblanzas/AMS_semblanza_Galia_Borja.pdf'
    },
    {
      id: 15,
      nombre: 'Oscar Salcedo',
      imagen: Oscar_Salcedo,
      descripcion: 'Director General Adjunto de ASP Integra Opciones',
      enlace: '../semblanzas/AMS_semblanza_Oscar_Salcedo_Yudico.pdf'
    },
    {
      id: 16,
      nombre: 'Juan Pablo Zorrilla',
      imagen: Juan_Pablo_Zorrilla,
      descripcion: 'Co-Fundador y Co-CEO de Bravo',
      enlace: '../semblanzas/AMS_semblanza_Juan_Pablo_Zorrilla.pdf'
    },
    {
      id: 17,
      nombre: 'Jose Antonio Lozano',
      imagen: Jose_Antonio_Lozano,
      descripcion: 'Conferencista',
      enlace: '../semblanzas/AMS_semblanza_Jose_Antonio_Lozano.pdf'
    }


    // {
    //   id: 5,
    //   nombre: 'Otro Ponente',
    //   imagen: 'https://i.pravatar.cc/204',
    //   descripcion: 'Especialista en Tecnología y Finanzas',
    //   enlace: 'https://ejemplo.com/semblanza-otro'
    // }
  ])

</script>


<style>

</style>