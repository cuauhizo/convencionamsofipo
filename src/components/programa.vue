<template>
  <section id="section4" class="container grid md:grid-cols-12 gap-12 justify-items-center items-center py-10 md:py-20">
    <div class="col-span-full sm:col-span-8" data-aos="zoom-in-right" data-aos-anchor-placement="center-bottom">
      <h2 class="titulo-seccion">Programa</h2>
      <p class="titulo">
          Conoce la agenda y los horarios
      </p>
    </div>
    <div class="col-span-full sm:col-span-4" data-aos="zoom-in-left" data-aos-anchor-placement="center-bottom">
      <p>Descubre las pláticas que preparamos para ti con los temas principales en <span class="font-bold">tecnología e inclusión financiera</span>.</p>
    </div>
  </section>
  <div class="w-full" data-aos="zoom-in" data-aos-anchor-placement="center-bottom">
    <div class="md:flex max-w-4xl mx-auto gap-10 font-lemon-normal">
      <button
        class="w-full md:w-1/3 py-4 text-center text-lg font-extralight focus:outline-none"
        :class="{ 'active-tab-button': activeTab === 'tab1' }"
        @click="openTab('tab1')"
      >
        <h3>Miércoles 3 de Septiembre</h3>
      </button>

      <button
        class="w-full md:w-1/3 py-4 text-center text-lg font-extralight focus:outline-none"
        :class="{ 'active-tab-button': activeTab === 'tab2' }"
        @click="openTab('tab2')"
      >
        <h3>Jueves 4 de Septiembre</h3>
      </button>

      <button
        class="w-full md:w-1/3 py-4 text-center text-lg font-extralight focus:outline-none"
        :class="{ 'active-tab-button': activeTab === 'tab3' }"
        @click="openTab('tab3')"
      >
        <h3>Viernes 5 de Septiembre</h3>
      </button>
    </div>

    <div id="tab1" class="tabcontent py-4" :class="{ 'hidden': activeTab !== 'tab1' }">
      <div class="relative overflow-hidden">
        <div
          id="carousel"
          class="overflow-hidden relative"
          @mouseenter="pauseAutoSlideDia1"
          @mouseleave="startAutoSlideDia1"
        >
          <div
            ref="carouselTrackDia1"
            id="programa-track"
            class="flex transition-transform duration-500 ease-in-out justify-center"
            :style="{ transform: transformStyleDia1 }"
          >
          <!-- class="programa-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4" -->
            <div
              v-for="programa in programaDia1"
              :key="programa.id"
              class="programa-card flex-shrink-0 h-auto w-full md:w-auto xl:max-w-[388px] px-4"
              :class="{ 'animate-fade': currentIndexDia1 === programaDia1.indexOf(programa) || currentIndexDia1 + 1 === programaDia1.indexOf(programa) || currentIndexDia1 + 2 === programaDia1.indexOf(programa) }"
            >
              <div class="font-lemon-normal text-sm bg-programa p-6 rounded-xl">
                <div class="flex items-center">
                  <div class="flex space-x-1">
                    <p class="">{{ programa.horario }}</p>
                  </div>
                </div>
                <p class="mb-6 font-normal leading-[1.237rem]">{{ programa.actividad }}</p>
                <div v-if="programa.name" class="flex items-center font-raleway">
                  <div>
                    <p class="">{{ programa.name }}</p>
                    <p class="text-sm">{{ programa.title }}</p>
                  </div>
                </div>
                <!-- Mostrar reparto si existe -->
                <div v-if="programa.reparto" class="mt-4">
                    <div class="grid grid-cols-6 font-raleway" v-for="(ponente, key) in programa.reparto" :key="key">
                      <p class="col-span-5">{{ ponente.nombre }}</p>
                      <p class="col-span-1 text-xs">{{ ponente.sofipo }}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-4 space-x-3">
          <button
            id="prev"
            aria-label="Anterior"
            class="nav-button z-10 w-12 h-12 flex items-center justify-center"
            @click="prevSlideDia1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M15 12L11 16M11 16L15 20M11 16H21M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button
            id="next"
            aria-label="Siguiente"
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

    <div id="tab2" class="tabcontent p-4" :class="{ 'hidden': activeTab !== 'tab2' }">
      <div class="relative">
        <div
          id="carousel2"
          class="overflow-hidden relative"
          @mouseenter="pauseAutoSlideDia2"
          @mouseleave="startAutoSlideDia2"
        >
          <div
            ref="carouselTrackDia2"
            id="programa2-track"
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: transformStyleDia2 }"
          >
          <!-- class="programa-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4" -->
            <div
              v-for="programa2 in programaDia2"
              :key="programa2.id"
              class="programa-card flex-shrink-0 h-auto w-full md:w-auto xl:max-w-[388px] px-4"
              :class="{ 'animate-fade': currentIndexDia2 === programaDia2.indexOf(programa2) || currentIndexDia2 + 1 === programaDia2.indexOf(programa2) || currentIndexDia2 + 2 === programaDia2.indexOf(programa2) }"
            >
              <div class="font-lemon-normal text-sm bg-programa p-6 rounded-xl">
                <div class="flex items-center">
                  <div class="flex space-x-1">
                    <p class="">{{ programa2.horario }}</p>
                  </div>
                </div>
                <p class="mb-6 font-normal leading-[1.237rem]">{{ programa2.actividad }}</p>
                <div v-if="programa2.name" class="flex items-center font-raleway">
                  <div>
                    <p class="">{{ programa2.name }}</p>
                    <p class="text-sm">{{ programa2.title }}</p>
                  </div>
                </div>
                <!-- Mostrar reparto si existe -->
                <div v-if="programa2.reparto" class="mt-4">
                    <div class="grid grid-cols-6 font-raleway" v-for="(ponente, key) in programa2.reparto" :key="key">
                      <p class="col-span-5">{{ ponente.nombre }}</p>
                      <p class="col-span-1 text-xs">{{ ponente.sofipo }}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-4 space-x-3">
          <button
            id="prev2"
            aria-label="Anterior"
            class="nav-button z-10 w-12 h-12 flex items-center justify-center"
            @click="prevSlideDia2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M15 12L11 16M11 16L15 20M11 16H21M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button
            id="next2"
            aria-label="Siguiente"
            class="nav-button z-10 w-12 h-12 flex items-center justify-center"
            @click="nextSlideDia2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M17 20L21 16M21 16L17 12M21 16H11M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div id="tab3" class="tabcontent p-4" :class="{ 'hidden': activeTab !== 'tab3' }">
      <div class="relative">
        <div
          id="carousel3"
          class="overflow-hidden relative"
          @mouseenter="pauseAutoSlideDia3"
          @mouseleave="startAutoSlideDia3"
        >
          <div
            ref="carouselTrackDia3"
            id="programa3-track"
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: transformStyleDia3 }"
          >
          <!-- class="programa-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4" -->
            <div
              v-for="programa3 in programaDia3"
              :key="programa3.id"
              class="programa-card flex-shrink-0 h-auto w-full md:w-auto xl:max-w-[388px] px-4"
              :class="{ 'animate-fade': currentIndexDia3 === programaDia3.indexOf(programa3) || currentIndexDia3 + 1 === programaDia3.indexOf(programa3) || currentIndexDia3 + 2 === programaDia3.indexOf(programa3) }"
            >
              <div class="font-lemon-normal text-sm bg-programa p-6 rounded-xl">
                <div class="flex items-center">
                  <div class="flex space-x-1">
                    <p class="">{{ programa3.horario }}</p>
                  </div>
                </div>
                <p class="mb-6 font-normal leading-[1.237rem]">{{ programa3.actividad }}</p>
                <div v-if="programa3.name" class="flex items-center font-raleway">
                  <div>
                    <p class="">{{ programa3.name }}</p>
                    <p class="text-sm">{{ programa3.title }}</p>
                  </div>
                </div>
                <!-- Mostrar reparto si existe -->
                <div v-if="programa3.reparto" class="mt-4">
                    <div class="grid grid-cols-6 font-raleway" v-for="(ponente, key) in programa3.reparto" :key="key">
                      <p class="col-span-5">{{ ponente.nombre }}</p>
                      <p class="col-span-1 text-xs">{{ ponente.sofipo }}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-4 space-x-3">
          <button
            id="prev3"
            aria-label="Anterior"
            class="nav-button z-10 w-12 h-12 flex items-center justify-center"
            @click="prevSlideDia3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M15 12L11 16M11 16L15 20M11 16H21M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button
            id="next3"
            aria-label="Siguiente"
            class="nav-button z-10 w-12 h-12 flex items-center justify-center"
            @click="nextSlideDia3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M17 20L21 16M21 16L17 12M21 16H11M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch, nextTick } from 'vue';

  // `activeTab` es una ref reactiva que almacena el nombre de la pestaña actualmente activa.
// La inicializamos con 'tab1' para que esa pestaña esté visible por defecto al cargar el componente.
const activeTab = ref('tab1');

/**
 * Función para cambiar la pestaña activa.
 * Vue se encarga automáticamente de actualizar el DOM cuando `activeTab.value` cambia.
 * @param {string} tabName - El identificador de la pestaña a activar (por ejemplo, 'tab1', 'tab2').
 */
const openTab = (tabName) => {
  activeTab.value = tabName;
};



// carrusel

// Normalmente, estos datos se obtendrían de una API o se pasarían como un `prop`,
// pero para este ejemplo, los codificaremos aquí.
const programaDia1 = ref([
  {
    id: 1,
    horario: "18:00 - 19:00",
    actividad: "Llegada de participantes",
    name: "",
    title: ""
  },
]);

const programaDia2 = ref([
  {
    id: 1,
    horario: "9:00 - 14:00",
    actividad: "Reuniones a puerta cerrada",
    name: "",
    title: ""
  },
  {
    id: 2,
    horario: "12:00 - 14:00",
    actividad: "Llegada de participantes",
    name: "",
    title: ""
  },
  {
    id: 3,
    horario: "13:30 - 15:00",
    actividad: "Comida",
    name: "",
    title: ""
  },
  {
    id: 4,
    horario: "15:00 - 15:45",
    actividad: "Ceremonia Inaugural",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "Dr. Edgar Amador Zamora",
        sofipo: "SHCP"
      },
      ponete2: {
        nombre: "Dr. Jesús De la Fuente Rodríguez",
        sofipo: "CNBV"
      },
      ponete3: {
        nombre: "Dra. Galia Borja Gómez",
        sofipo: "BANXICO"
      },
      ponete4: {
        nombre: "Lic. Oscar Rosado Jiménez",
        sofipo: "CONDUSEF"
      },
      ponete5: {
        nombre: "Act. Alán Elizondo Flores",
        sofipo: "FIRA"
      },
      ponete6: {
        nombre: "Mtro. Luis Antonio Ramírez Pineda",
        sofipo: "NAFIN"
      },
      ponete7: {
        nombre: "Marlene Garayzar Gómez",
        sofipo: "AMSOFIPO"
      }
    }
  },
  {
    id: 5,
    horario: "15:00 - 16:00",
    actividad: "Receso",
    name: "",
    title: "",
  },
  {
    id: 6,
    horario: "16:00 - 17:00",
    actividad: "El Valor de la Confianza en la era digital",
    name: "Conferencista",
    title: ""
  },
  {
    id: 7,
    horario: "17:00 - 17:50",
    actividad: "Panel: Mujeres en Confianza",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "Marlene Garayzar Gómez",
        sofipo: "AMSOFIPO"
      },
      ponete2: {
        nombre: "Regina García Cuellar",
        sofipo: "ABM"
      },
      ponete3: {
        nombre: " ",
        sofipo: "Moderador"
      }
    }
  },
  {
    id: 8,
    horario: "17:50 - 18:30",
    actividad: "Panel: Factores de desarrollo en beneficio de la Inclusión Financiera",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "Altagracia Gómez",
        sofipo: "Consejo Asesor Empresarial"
      },
      ponete2: {
        nombre: "Dr. Alfredo Navarrete",
        sofipo: "UBVA"
      },
      ponete3: {
        nombre: "Vidal Llerenas",
        sofipo: "S. Economía"
      },
      ponete4: {
        nombre: "Alicia Salgado",
        sofipo: "Moderador"
      }
    }
  },
  {
    id: 9,
    horario: "19:00 - 24:00",
    actividad: "Cóctel de bienvenida",
    name: "",
    title: "",
  }
]);

const programaDia3 = ref([
  {
    id: 1,
    horario: "7:30 - 8:30",
    actividad: "Actividad de Integración",
    name: "",
    title: "",
    reparto: {
    }
  },
  {
    id: 2,
    horario: "9:30 - 10:10",
    actividad: "Conferencia: El Uso de la Tecnología y su impacto en la Inclusión Financiera",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "Graciela Marquez",
        sofipo: "INEGI"
      },
    }
  },
  {
    id: 3,
    horario: "10:10 - 10:50",
    actividad: "",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "Act. Alán Elizondo",
        sofipo: "FIRA"
      },
      ponete2: {
        nombre: "Mtro. Javier Vázquez",
        sofipo: "NAFIN"
      },
    }
  },
  {
    id: 4,
    horario: "10:50 - 11:10",
    actividad: "Receso",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "",
        sofipo: ""
      },
      ponete2: {
        nombre: "",
        sofipo: ""
      }
    }
  },
  {
    id: 5,
    horario: "11:10 - 12:00",
    actividad: "Panel: Las SOFIPOS fortaleciendo el ecosistema para las PYMME",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "Carlos Marmolejo Finsus",
        sofipo: "Finsus"
      },
      ponete2: {
        nombre: "Rafael Nieves",
        sofipo: "Capital Activo"
      },
      ponete3: {
        nombre: "Alejandro Toubeth",
        sofipo: "Xepelin"
      },
      ponete4: {
        nombre: "Sebastián Estrada",
        sofipo: "Moderador"
      }
    }
  },
  {
    id: 6,
    horario: "12:00 - 12:50",
    actividad: "Panel: Retos para el futuro de los Servicios Digitales",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "Dr. Othón Moreno",
        sofipo: "Banxico"
      },
      ponete2: {
        nombre: "José Merino",
        sofipo: "Agencia Digital"
      },
      ponete3: {
        nombre: "Mary Pilly Loo",
        sofipo: "CNBV"
      },
      ponete4: {
        nombre: "",
        sofipo: "Moderador"
      }
    }
  },
  {
    id: 7,
    horario: "12:50 - 13:20",
    actividad: "Receso",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "",
        sofipo: ""
      },
      ponete2: {
        nombre: "",
        sofipo: ""
      }
    }
  },
  {
    id: 8,
    horario: "13:20 - 14:00",
    actividad: "Uso de IA para el fortalecimiento de la Infraestructura tecnológica",
    name: "Oracle",
    title: "",
    reparto: {
      ponete1: {
        nombre: "",
        sofipo: ""
      },
      ponete2: {
        nombre: "",
        sofipo: ""
      }
    }
  },
  {
    id: 9,
    horario: "14:00 - 15:30",
    actividad: "Comida",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "",
        sofipo: ""
      },
      ponete2: {
        nombre: "",
        sofipo: ""
      }
    }
  },
  {
    id: 10,
    horario: "15:30 - 16:10",
    actividad: "Avances y retos en la Digitalización de servicios financieros",
    name: "Dra. Lucia Buenrostro",
    title: "",
    reparto: {
      ponete1: {
        nombre: "",
        sofipo: ""
      },
      ponete2: {
        nombre: "",
        sofipo: ""
      }
    }
  },
  {
    id: 11,
    horario: "16:10 - 17:00",
    actividad: "Panel: Transformando como te conectas con tu dinero",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "Stefhan Muller",
        sofipo: "Klar"
      },
      ponete2: {
        nombre: "Juan Francisco Fernández",
        sofipo: "Crediclub"
      },
      ponete3: {
        nombre: "Marlene Garaizar",
        sofipo: "Stori"
      },
      ponete4: {
        nombre: "Diego Paires",
        sofipo: "SAE"
      },
      ponete5: {
        nombre: "",
        sofipo: "Moderador"
      }
    }
  },
  {
    id: 12,
    horario: "17:00 - 17:20",
    actividad: "Receso",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "",
        sofipo: ""
      },
      ponete2: {
        nombre: "",
        sofipo: ""
      }
    }
  },
  {
    id: 13,
    horario: "17:20 - 18:00",
    actividad: "Panel: La Supervisión, diferenciador de las SOFIPOS",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "Aurora",
        sofipo: "CNBV"
      },
      ponete2: {
        nombre: "Elizabeth Noriega",
        sofipo: "Condusef"
      },
      ponete2: {
        nombre: "Viviana Garza",
        sofipo: "Banxico"
      },
      ponete2: {
        nombre: "Jeanette Leyva “El Financiero”",
        sofipo: "Moderador"
      }
    }
  },
  {
    id: 14,
    horario: "18:00 - 18:30",
    actividad: "Clausura",
    name: "Margarita Gonzalez Saravia",
    title: "Gobernadora del Estado de Morelos",
    reparto: {
      ponete1: {
        nombre: "",
        sofipo: ""
      },
      ponete2: {
        nombre: "",
        sofipo: ""
      }
    }
  },
  {
    id: 15,
    horario: "19:00 - 21:00",
    actividad: "Coctel de Clausura",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "",
        sofipo: ""
      },
      ponete2: {
        nombre: "",
        sofipo: ""
      }
    }
  }
]);


// --- Estado y Lógica del Carrusel ---
const currentIndexDia1 = ref(0); // Índice del testimonio actual visible
const currentIndexDia2 = ref(0); // Índice del testimonio actual visible
const currentIndexDia3 = ref(0); // Índice del testimonio actual visible
const carouselTrackDia1 = ref(null); // Referencia al elemento DOM del carrusel (la pista)
const carouselTrackDia2 = ref(null); // Referencia al elemento DOM del carrusel (la pista)
const carouselTrackDia3 = ref(null); // Referencia al elemento DOM del carrusel (la pista)
const cardWidthDia1 = ref(0); // Ancho de una tarjeta de testimonio
const cardWidthDia2 = ref(0); // Ancho de una tarjeta de testimonio
const cardWidthDia3 = ref(0); // Ancho de una tarjeta de testimonio
const autoSlideIntervalDia1 = ref(null); // ID del intervalo para el auto-deslizamiento
const autoSlideIntervalDia2 = ref(null); // ID del intervalo para el auto-deslizamiento
const autoSlideIntervalDia3 = ref(null); // ID del intervalo para el auto-deslizamiento

// Propiedad computada para determinar cuántas tarjetas son visibles según el ancho de la pantalla
const visibleCards = computed(() => {
  const width = window.innerWidth
  if (width >= 1024) return 3; // Escritorio (lg)
  if (width >= 768) return 2;  // Tableta (md)
  return 1; // Móvil (predeterminado)
});

// Propiedad computada para calcular el índice máximo al que podemos deslizar
const maxIndexDia1 = computed(() => programaDia1.value.length - visibleCards.value);
const maxIndexDia2 = computed(() => programaDia2.value.length - visibleCards.value);
const maxIndexDia3 = computed(() => programaDia3.value.length - visibleCards.value);

// Propiedad computada para la transformación CSS que desliza el carrusel
const transformStyleDia1 = computed(() => {
  const offset = -currentIndexDia1.value * cardWidthDia1.value;
  return `translateX(${offset}px)`;
});

const transformStyleDia2 = computed(() => {
  const offset = -currentIndexDia2.value * cardWidthDia2.value;
  return `translateX(${offset}px)`;
});

const transformStyleDia3 = computed(() => {
  const offset = -currentIndexDia3.value * cardWidthDia3.value;
  return `translateX(${offset}px)`;
});

// Función para actualizar la posición del carrusel y el punto indicador activo
const updateCarouselDia1 = () => {
  // Esperamos a que el DOM se actualice para obtener el `cardWidthDia1` correcto
  nextTick(() => {
    if (carouselTrackDia1.value && carouselTrackDia1.value.firstElementChild) {
      cardWidthDia1.value = carouselTrackDia1.value.firstElementChild.offsetWidth;
    }
  });
  // La transformación CSS y la clase del punto activo son manejadas por propiedades computadas y clases condicionales.
};

const updateCarouselDia2 = () => {
  // Esperamos a que el DOM se actualice para obtener el `cardWidthDia2` correcto
  nextTick(() => {
    if (carouselTrackDia2.value && carouselTrackDia2.value.firstElementChild) {
      cardWidthDia2.value = carouselTrackDia2.value.firstElementChild.offsetWidth;
    }
  });
  // La transformación CSS y la clase del punto activo son manejadas por propiedades computadas y clases condicionales.
};

const updateCarouselDia3 = () => {
  // Esperamos a que el DOM se actualice para obtener el `cardWidthDia2` correcto
  nextTick(() => {
    if (carouselTrackDia3.value && carouselTrackDia3.value.firstElementChild) {
      cardWidthDia3.value = carouselTrackDia3.value.firstElementChild.offsetWidth;
    }
  });
  // La transformación CSS y la clase del punto activo son manejadas por propiedades computadas y clases condicionales.
};

// --- Funciones de Navegación ---
const nextSlideDia1 = () => {
  currentIndexDia1.value = (currentIndexDia1.value + 1) % (maxIndexDia1.value + 1);
  resetAutoSlideDia1();
};

const prevSlideDia1 = () => {
  currentIndexDia1.value = (currentIndexDia1.value - 1 + (maxIndexDia1.value + 1)) % (maxIndexDia1.value + 1);
  resetAutoSlideDia1();
};

const nextSlideDia2 = () => {
  currentIndexDia2.value = (currentIndexDia2.value + 1) % (maxIndexDia2.value + 1);
  resetAutoSlideDia2();
};

const prevSlideDia2 = () => {
  currentIndexDia2.value = (currentIndexDia2.value - 1 + (maxIndexDia2.value + 1)) % (maxIndexDia2.value + 1);
  resetAutoSlideDia2();
};

const nextSlideDia3 = () => {
  currentIndexDia3.value = (currentIndexDia3.value + 1) % (maxIndexDia3.value + 1);
  resetAutoSlideDia3();
};

const prevSlideDia3 = () => {
  currentIndexDia3.value = (currentIndexDia3.value - 1 + (maxIndexDia3.value + 1)) % (maxIndexDia3.value + 1);
  resetAutoSlideDia3();
};

// const goToSlide = (index) => {
//   currentIndexDia1.value = index;
//   resetAutoSlideDia1();
//   currentIndexDia2.value = index;
//   resetAutoSlideDia2();
// };

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

const startAutoSlideDia2 = () => {
  clearInterval(autoSlideIntervalDia2.value); // Limpia cualquier intervalo existente
  autoSlideIntervalDia2.value = setInterval(nextSlideDia2, 2000); // Cambia cada 5 segundos
};

const resetAutoSlideDia2 = () => {
  clearInterval(autoSlideIntervalDia2.value);
  startAutoSlideDia2();
};

const pauseAutoSlideDia2 = () => {
  clearInterval(autoSlideIntervalDia2.value);
};

const startAutoSlideDia3 = () => {
  clearInterval(autoSlideIntervalDia3.value); // Limpia cualquier intervalo existente
  autoSlideIntervalDia3.value = setInterval(nextSlideDia3, 2000); // Cambia cada 5 segundos
};

const resetAutoSlideDia3 = () => {
  clearInterval(autoSlideIntervalDia3.value);
  startAutoSlideDia3();
};

const pauseAutoSlideDia3 = () => {
  clearInterval(autoSlideIntervalDia3.value);
};

// --- Hooks del Ciclo de Vida ---
onMounted(() => {
  // Usar setTimeout para asegurar que el DOM esté completamente renderizado
  setTimeout(() => {
    updateCarouselDia1();
    updateCarouselDia2();
    updateCarouselDia3();
    startAutoSlideDia1();
    startAutoSlideDia2();
    startAutoSlideDia3();
  }, 300);

  window.addEventListener('resize', () => {
    updateCarouselDia1();
    updateCarouselDia2();
    updateCarouselDia3();
    
    // Ajustar índices si es necesario
    if (currentIndexDia1.value + visibleCards.value > programaDia1.value.length) {
      currentIndexDia1.value = Math.max(0, programaDia1.value.length - visibleCards.value);
    }
    if (currentIndexDia2.value + visibleCards.value > programaDia2.value.length) {
      currentIndexDia2.value = Math.max(0, programaDia2.value.length - visibleCards.value);
    }
    if (currentIndexDia3.value + visibleCards.value > programaDia3.value.length) {
      currentIndexDia3.value = Math.max(0, programaDia3.value.length - visibleCards.value);
    }
  });
});

watch(activeTab, (newTab) => {
  nextTick(() => {
    if (newTab === 'tab1') {
      updateCarouselDia1();
    } else if (newTab === 'tab2') {
      updateCarouselDia2();
    } else {
      updateCarouselDia3();
    }
  });
});

onUnmounted(() => {
  // Limpiar el intervalo cuando el componente se desmonta para evitar fugas de memoria
  clearInterval(autoSlideIntervalDia1.value);
  clearInterval(autoSlideIntervalDia2.value);
  clearInterval(autoSlideIntervalDia3.value);
});


</script>


<style scoped>
.active-tab-button {
  /* background-color: #e5e7eb; */
  border-bottom: 1px solid #fff;
  font-weight: 400;
}
</style>