<template>
  <section id="section4" class="container grid sm:grid-cols-12 gap-12 justify-items-center items-center py-10 md:py-20">
    <div class="col-span-full sm:col-span-8" data-aos="zoom-in-right" data-aos-anchor-placement="center-bottom">
      <h2 class="titulo-seccion">Programa</h2>
      <p class="titulo">Conoce la agenda y los horarios</p>
    </div>
    <div class="col-span-full sm:col-span-4" data-aos="zoom-in-left" data-aos-anchor-placement="center-bottom">
      <p>
        Descubre las pláticas que preparamos para ti con los temas principales en
        <span class="font-bold">tecnología e inclusión financiera</span>
        .
      </p>
    </div>
    <div class="col-span-full" data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
      <div class="md:flex md:max-w-4xl mx-auto gap-10 font-lemon-normal">
        <button class="w-full md:w-1/2 py-4 text-center text-lg font-extralight focus:outline-none" :class="{ 'active-tab-button': activeTab === 'tab1' }" @click="openTab('tab1')">
          <h3>Miércoles 30 de Septiembre</h3>
        </button>
        <button class="w-full md:w-1/2 py-4 text-center text-lg font-extralight focus:outline-none" :class="{ 'active-tab-button': activeTab === 'tab2' }" @click="openTab('tab2')">
          <h3>Jueves 1 de Octubre</h3>
        </button>
      </div>
      <div id="tab2" class="tabcontent pt-4 lg:pt-20" :class="{ hidden: activeTab !== 'tab1' }">
        <div class="bg-programa rounded-3xl p-4 h-auto w-full md:w-auto lg:max-w-[636px]">
          <div v-for="programa1 in programaDia1" :key="programa1.id" class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div class="col font-lemon-normal text-sm flex">
              <p class="">{{ programa1.horario }}</p>
            </div>
            <div class="col md:col-span-2 font-lemon-normal text-sm mb-4">
              <p class="font-normal leading-[1.237rem]">{{ programa1.actividad }}</p>
              <div v-if="programa1.name" class="flex items-center font-raleway">
                <div>
                  <p class="">{{ programa1.name }}</p>
                  <p class="text-sm">{{ programa1.title }}</p>
                </div>
              </div>
              <!-- Mostrar reparto si existe -->
              <div v-if="programa1.reparto" class="mt-4">
                <div class="grid grid-cols-6 gap-3 mb-3 font-raleway items-center" v-for="(ponente, key) in programa1.reparto" :key="key">
                  <p class="col-span-4">
                    {{ ponente.nombre }}
                    <br />
                    <a v-if="ponente.enlace" :href="ponente.enlace" target="_blank" rel="noopener noreferrer" class="text-xs underline">Ver Semblanza</a>
                  </p>
                  <p class="col-span-2">{{ ponente.sofipo }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="tab3" class="tabcontent pt-4 lg:pt-20" :class="{ hidden: activeTab !== 'tab2' }">
        <div class="bg-programa rounded-3xl p-4 h-auto w-full md:w-auto lg:max-w-[636px]">
          <div v-for="programa2 in programaDia2" :key="programa2.id" class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div class="col font-lemon-normal text-sm flex">
              <p class="">{{ programa2.horario }}</p>
            </div>
            <div class="col md:col-span-2 font-lemon-normal text-sm mb-4">
              <p class="font-normal leading-[1.237rem]">{{ programa2.actividad }}</p>
              <div v-if="programa2.name" class="flex items-center font-raleway">
                <div>
                  <p class="">{{ programa2.name }}</p>
                  <p class="text-sm">{{ programa2.title }}</p>
                </div>
              </div>
              <!-- Mostrar reparto si existe -->
              <div v-if="programa2.reparto" class="mt-4">
                <div class="grid grid-cols-6 gap-3 mb-3 font-raleway items-center" v-for="(ponente, key) in programa2.reparto" :key="key">
                  <p class="col-span-4">
                    {{ ponente.nombre }}
                    <br />
                    <a v-if="ponente.enlace" :href="ponente.enlace" target="_blank" rel="noopener noreferrer" class="text-xs underline">Ver Semblanza</a>
                  </p>
                  <p class="col-span-2">{{ ponente.sofipo }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'

  // `activeTab` es una ref reactiva que almacena el nombre de la pestaña actualmente activa.
  // La inicializamos con 'tab1' para que esa pestaña esté visible por defecto al cargar el componente.
  const activeTab = ref('tab1')

  /**
   * Función para cambiar la pestaña activa.
   * Vue se encarga automáticamente de actualizar el DOM cuando `activeTab.value` cambia.
   * @param {string} tabName - El identificador de la pestaña a activar (por ejemplo, 'tab1', 'tab2').
   */
  const openTab = tabName => {
    activeTab.value = tabName
  }

  // Miércoles 30 de Septiembre
  const programaDia1 = ref([
    {
      id: 2,
      horario: '12:00 - 14:00',
      actividad: 'Llegada de participantes',
      name: '',
      title: '',
    },
    {
      id: 3,
      horario: '13:30 - 15:00',
      actividad: 'Comida',
      name: '',
      title: '',
    },
    {
      id: 4,
      horario: '15:00 - 15:45',
      actividad: 'Ceremonia Inaugural',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Lic. Ángel Cabrera',
          // enlace: '/semblanzas/AMS_semblanza_Alfredo_Navarrete.pdf',
          sofipo: 'CNBV',
        },
        ponete2: {
          nombre: 'Dr. Othón Moreno',
          // enlace: '/semblanzas/AMS_semblanza_Galia_Borja.pdf',
          sofipo: 'BANXICO',
        },
        ponete3: {
          nombre: 'Mtro. Miguel Ángel Galindo',
          // enlace: "/semblanzas/AMS_semblanza_Oscar_Rosado.pdf",
          sofipo: 'SHCP',
        },
        ponete4: {
          nombre: 'Lic. Ana Clara Fragoso',
          // enlace: "/semblanzas/AMS_semblanza_Oscar_Rosado.pdf",
          sofipo: 'CONDUSEF',
        },
        ponete5: {
          nombre: 'Mtra. Marlene Garayzar',
          // enlace: '/semblanzas/AMS_semblanza_Marlene_Garayzar.pdf',
          sofipo: 'AMSOFIPO',
        },
      },
    },
    {
      id: 5,
      horario: '15:45 - 16:00',
      actividad: 'Receso',
      name: '',
      title: '',
    },
    {
      id: 6,
      horario: '16:00 - 17:00',
      actividad: 'Conferencia: El buen líder de la era digital',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Mtro. Héctor Ocádiz',
          // enlace: "",
          sofipo: 'Suri Services',
        },
      },
    },
    {
      id: 7,
      horario: '17:00 - 17:40',
      actividad: 'Panel: Participación de las SOFIPOS en el ecosistema de Pagos en México',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Lic. Ángel Cabrera',
          // enlace: '/semblanzas/AMS_semblanza_Alfredo_Navarrete.pdf',
          sofipo: 'CNBV',
        },
        ponete2: {
          nombre: 'Dr. Othón Moreno',
          // enlace: "/semblanzas/AMS_semblanza_Carlos_Marmolejo.pdf",
          sofipo: 'Banxico',
        },
        ponete3: {
          nombre: 'Mtra. Marlene Garayzar',
          // enlace: '/semblanzas/AMS_semblanza_Marlene_Garayzar.pdf',
          sofipo: 'Moderadora',
        },
      },
    },
    {
      id: 8,
      horario: '17:40 - 18:10',
      actividad: 'Red de Mujeres del Sector Financiero Mexicano',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Ana Karen Espinosa',
          // enlace: '/semblanzas/AMS_semblanza_Marlene_Garayzar.pdf',
          sofipo: 'SHCP',
        },
        ponete2: {
          nombre: 'Marlene Garayzar',
          // enlace: '/semblanzas/AMS_semblanza_Marlene_Garayzar.pdf',
          sofipo: 'AMSOFIPO',
        },
        ponete3: {
          nombre: 'Yolanda Luna Martínez',
          // enlace: '/semblanzas/AMS_semblanza_Marlene_Garayzar.pdf',
          sofipo: 'AMAFORE',
        },
        ponete4: {
          nombre: 'Martín Zubieta',
          // enlace: '/semblanzas/AMS_semblanza_Marlene_Garayzar.pdf',
          sofipo: 'Círculo de Crédito',
        },
      },
    },
    {
      id: 10,
      horario: '19:00 - 24:00',
      actividad: 'Noche Mexicana',
      name: '',
      title: '',
    },
  ])

  // Jueves 1 de Octubre
  const programaDia2 = ref([
    {
      id: 2,
      horario: '9:30 - 10:10',
      actividad: 'Conferencia: Liderando la Inclusión Financiera Rentable: El valor estratégico de la Data Alternativa',
      name: '',
      title: '',
      reparto: {
        ponete2: {
          nombre: 'Martin Ayarzagoitia',
          // enlace: "/semblanzas/AMS_semblanza_Mauricio_Rodriguez.pdf",
          sofipo: 'Círculo de Crédito',
        },
      },
    },
    {
      id: 3,
      horario: '10:10 - 10:50',
      actividad: 'Conferencia: Aplicaciones prácticas de usos de IA en servicios financieros',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Alejandra Mendoza',
          // enlace: '/semblanzas/AMS_semblanza_Aurora_Cervantes_Martinez.pdf',
          sofipo: 'Deloitte Spanish Latam',
        },
      },
    },
    {
      id: 4,
      horario: '10:50 - 11:10',
      actividad: 'Receso',
      name: '',
      title: '',
    },
    {
      id: 5,
      horario: '11:10 - 12:00',
      actividad: 'Mesa Redonda: Retos regulatorios.',
      name: 'Pilares fundamentales para su implementación',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'David Romero',
          // enlace: '/semblanzas/AMS_semblanza_David_Romero.pdf',
          sofipo: 'Fincomún',
        },
        ponete2: {
          nombre: 'Marcelino Herrera',
          // enlace: '/semblanzas/AMS_semblanza_David_Romero.pdf',
          sofipo: 'Crediclub',
        },
        ponete3: {
          nombre: 'Jeanette Leyva',
          // enlace: '/semblanzas/AMS_semblanza_David_Romero.pdf',
          sofipo: 'Moderadora: Periodista de El Financiero',
        },
      },
    },
    {
      id: 6,
      horario: '12:00 - 12:30',
      actividad: 'Panel: SOFIPOS y Fintechs en alianza para la gestión del fraude',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Miriam Chávez',
          // enlace: '/semblanzas/AMS_semblanza_Marlene_Garayzar.pdf',
          sofipo: 'AMSOFIPO',
        },
        ponete2: {
          nombre: 'Claudia Núñez',
          // enlace: "",
          sofipo: 'Fintech México',
        },
      },
    },
    {
      id: 7,
      horario: '12:30 - 13:00',
      actividad: 'Conferencia: Innovación y Cercanía: El Potencial del Comisionista Digital en las SOFIPOS',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Dr. Lucía Buenrostro',
          // enlace: "",
          sofipo: 'CNBV',
        },
      },
    },
    {
      id: 8,
      horario: '13:00 - 13:20',
      actividad: 'Receso',
      name: '',
      title: '',
      // reparto: {},
    },
    {
      id: 9,
      horario: '13:20 - 14:00',
      actividad: 'Conferencia: Mecanismos para la protección del cliente en la era digital',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Mtra. Elizabeth Noriega',
          // enlace: "",
          sofipo: 'Condusef',
        },
      },
    },
    {
      id: 10,
      horario: '14:00 - 15:30',
      actividad: 'Comida',
      name: '',
      title: '',
    },
    {
      id: 11,
      horario: '15:30 - 16:15',
      actividad: 'Panel: Las SOFIPOS de ayer, hoy y mañana',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Armando Sánchez',
          // enlace: '',
          sofipo: 'ASP',
        },
        ponete2: {
          nombre: 'Sebastián de Lara',
          // enlace: "",
          sofipo: 'FINSUS',
        },
        ponete3: {
          nombre: 'Alejandro Escobedo',
          // enlace: '/semblanzas/AMS_semblanza_Alicia_Salgado.pdf',
          sofipo: 'DiDi',
        },
        ponete4: {
          nombre: 'Sebastián Estrada',
          // enlace: '/semblanzas/AMS_semblanza_Alicia_Salgado.pdf',
          sofipo: 'Moderador: Periodista de El Economista',
        },
      },
    },
    {
      id: 12,
      horario: '16:15 - 17:00',
      actividad: 'Conferencia: Inteligencia Financiera en la Prevención el Lavado de Dinero',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Mtra. Regina Martha González',
          // enlace: '/semblanzas/AMS_semblanza_Juan_Pablo_Zorrilla.pdf',
          sofipo: 'UIF',
        },
      },
    },
    {
      id: 13,
      horario: '17:00 - 17:15',
      actividad: 'Receso',
      name: '',
      title: '',
    },
    {
      id: 14,
      horario: '17:15 - 17:40',
      actividad: 'Panel: Innovación con sentido de inclusión para las SOFIPOS',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Mtro. Jorge de la Madrid',
          // enlace: "",
          sofipo: 'NAFIN',
        },
        ponete2: {
          nombre: 'Lic. Maria de la Paz Luna',
          // enlace: '/semblanzas/AMS_semblanza_Alicia_Salgado.pdf',
          sofipo: 'FIRA',
        },
        ponete3: {
          nombre: 'Patricia Ortega',
          // enlace: '/semblanzas/AMS_semblanza_David_Romero.pdf',
          sofipo: 'Moderadora: Periodista de El Economista',
        },
      },
    },
    {
      id: 15,
      horario: '17:40 - 18:10',
      actividad: 'Conferencia: México digital: Observaciones de Fitch Ratings sobre un mercado en evolución',
      // name: "Margarita Gonzalez Saravia",
      // title: "Gobernadora del Estado de Morelos",
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Marcela Galicia',
          // enlace: "",
          sofipo: 'Fitch Ratings',
        },
      },
    },
    {
      id: 16,
      horario: '18:10 - 18:30',
      actividad: 'Ceremonia de Clausura',
      name: '',
      title: '',
      reparto: {
        ponete1: {
          nombre: 'Mtra. Paulina de la Paz Samperio',
          // enlace: "",
          sofipo: 'Subsecretaria de Política Fiscal e Ingresos de Querétaro',
        },
        ponete2: {
          nombre: 'Mtro. David Romero',
          // enlace: '/semblanzas/AMS_semblanza_Marlene_Garayzar.pdf',
          sofipo: 'AMSOFIPO',
        },
      },
    },
    {
      id: 17,
      horario: '19:00 - 21:00',
      actividad: 'Coctel de Clausura',
      name: '',
      title: '',
    },
  ])
</script>

<style scoped>
  .active-tab-button {
    /* background-color: #e5e7eb; */
    border-bottom: 1px solid #fff;
    font-weight: 400;
  }
</style>
