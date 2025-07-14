<template>
  <section id="section4" class="container grid sm:grid-cols-12 gap-12 justify-items-center items-center py-10 md:py-20">
    <div class="col-span-full sm:col-span-8" data-aos="zoom-in-right" data-aos-anchor-placement="center-bottom">
      <h2 class="titulo-seccion">Programa</h2>
      <p class="titulo">
          Conoce la agenda y los horarios
      </p>
    </div>
    <div class="col-span-full sm:col-span-4" data-aos="zoom-in-left" data-aos-anchor-placement="center-bottom">
      <p>Descubre las pláticas que preparamos para ti con los temas principales en <span class="font-bold">tecnología e inclusión financiera</span>.</p>
    </div>
    <div class="col-span-full" data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
      <div class="md:flex md:max-w-4xl mx-auto gap-10 font-lemon-normal">
        <button
          class="w-full md:w-1/2 py-4 text-center text-lg font-extralight focus:outline-none"
          :class="{ 'active-tab-button': activeTab === 'tab1' }"
          @click="openTab('tab1')"
        >
          <h3>Miércoles 3 de Septiembre</h3>
        </button>
        <button
          class="w-full md:w-1/2 py-4 text-center text-lg font-extralight focus:outline-none"
          :class="{ 'active-tab-button': activeTab === 'tab2' }"
          @click="openTab('tab2')"
        >
          <h3>Jueves 4 de Septiembre</h3>
        </button>
      </div>
      <div id="tab2" class="tabcontent pt-4 lg:pt-20" :class="{ 'hidden': activeTab !== 'tab1' }">
        <div class="bg-programa rounded-3xl p-4 h-auto w-full md:w-auto lg:max-w-[636px]">
          <div
            v-for="programa1 in programaDia1"
            :key="programa1.id"
            class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4"
          >
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
                  <div class="grid grid-cols-6 gap-3 font-raleway items-center" v-for="(ponente, key) in programa1.reparto" :key="key">
                    <p class="col-span-4">{{ ponente.nombre }}</p>
                    <p class="col-span-2 text-xs">{{ ponente.sofipo }}</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="tab3" class="tabcontent pt-4 lg:pt-20" :class="{ 'hidden': activeTab !== 'tab2' }">
        <div class="bg-programa rounded-3xl p-4 h-auto w-full md:w-auto lg:max-w-[636px]">
          <div
            v-for="programa2 in programaDia2"
            :key="programa2.id"
            class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4"
          >
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
                  <div class="grid grid-cols-6 gap-3 font-raleway items-center" v-for="(ponente, key) in programa2.reparto" :key="key">
                    <p class="col-span-4">{{ ponente.nombre }}</p>
                    <p class="col-span-2 text-xs">{{ ponente.sofipo }}</p>
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
import { ref } from 'vue';

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

// Miércoles 3 de Septiembre
const programaDia1 = ref([
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
        // nombre: "Dr. Edgar Amador Zamora",
        nombre: "",
        sofipo: "SHCP"
      },
      ponete2: {
        // nombre: "Dr. Jesús De la Fuente Rodríguez",
        nombre: "",
        sofipo: "CNBV"
      },
      ponete3: {
        // nombre: "Dra. Galia Borja Gómez",
        nombre: "",
        sofipo: "BANXICO"
      },
      ponete4: {
        // nombre: "Lic. Oscar Rosado Jiménez",
        nombre: "",
        sofipo: "CONDUSEF"
      },
      ponete5: {
        // nombre: "Marlene Garayzar Gómez",
        nombre: "",
        sofipo: "AMS"
      },
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
    horario: "17:00 - 17:40",
    actividad: "Panel: Factores de desarrollo en beneficio de la Inclusión Financiera",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        // nombre: "Altagracia Gómez",
        nombre: "",
        sofipo: "Consejo Asesor Empresarial "
      },
      ponete2: {
        // nombre: "Dr. Alfredo Navarrete",
        nombre: "",
        sofipo: "UBVA"
      },
      ponete3: {
        // nombre: "Vidal Llerenas",
        nombre: "",
        sofipo: "Sría. Economía"
      },
      ponete4: {
        // nombre: "Alicia Salgado",
        nombre: "",
        sofipo: "Moderador"
      }
    }
  },
  {
    id: 8,
    horario: "17:40 - 18:10",
    // actividad: "Panel: Mujeres en Confianza",
    actividad: "",
    name: "Presentación de Convenio de apoyo a PYMEs con Secretaría de Economía y anuncio del programa de garantías con NAFIN",
    title: "",
    reparto: {
      ponete1: {
        nombre: "",
        sofipo: ""
      },
    }
  },
  {
    id: 9,
    horario: "19:00 - 24:00",
    actividad: "Cóctel de bienvenida",
    name: "Drink & Talk Mujeres en el sector financiero",
    title: "",
    reparto: {
      ponete1: {
        // nombre: "Marlene Garayzar",
        nombre: "",
        sofipo: "AMSOFIPO"
      },
      ponete2: {
        // nombre: "Regina García Cuellar",
        nombre: "",
        sofipo: "ABM"
      },
    }
  }
]);

// Jueves 4 de Septiembre
const programaDia2 = ref([
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
        // nombre: "Graciela Márquez",
        nombre: "",
        sofipo: "INEGI"
      },
    }
  },
  {
    id: 3,
    horario: "10:10 - 10:50",
    actividad: "La Banca de Desarrollo trabajo cercano con las SOFIPOS",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        // nombre: "Act. Alán Elizondo",
        nombre: "",
        sofipo: "FIRA"
      },
      ponete2: {
        // nombre: "Mtro. Javier Vázquez",
        nombre: "",
        sofipo: "Nafin"
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
        // nombre: "Carlos Marmolejo",
        nombre: "",
        // sofipo: "Finsus"
        sofipo: ""
      },
      ponete2: {
        // nombre: "Rafael Nieves",
        nombre: "",
        sofipo: "Capital Activo"
      },
      ponete3: {
        // nombre: "Alejandro Toubeth",
        nombre: "",
        sofipo: "Xepelin"
      },
      ponete4: {
        // nombre: "Sebastián Estrada",
        nombre: "",
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
        // nombre: "Dr. Othón Moreno",
        nombre: "",
        sofipo: "Banxico"
      },
      ponete2: {
        // nombre: "José Merino",
        nombre: "",
        sofipo: "Agencia Digital"
      },
      ponete3: {
        // nombre: "Mary Pilly Loo",
        nombre: "",
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
    actividad: "Panel: Transformando cómo te conectas con tu dinero",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        // nombre: "Stefhan Muller",
        nombre: "",
        sofipo: "Klar"
      },
      ponete2: {
        // nombre: "Juan Francisco Fernández",
        nombre: "",
        sofipo: "Crediclub"
      },
      ponete3: {
        // nombre: "Marlene Garayzar",
        nombre: "",
        sofipo: "Stori"
      },
      ponete4: {
        // nombre: "Diego Paires",
        nombre: "",
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
        // nombre: "Aurora Cervantes",
        nombre: "",
        sofipo: "CNBV"
      },
      ponete2: {
        // nombre: "Elizabeth Noriega",
        nombre: "",
        sofipo: "Condusef"
      },
      ponete2: {
        // nombre: "Viviana Garza",
        nombre: "",
        sofipo: "Banxico"
      },
      ponete2: {
        // nombre: "Jeanette Leyva “El Financiero”",
        nombre: "",
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
        // nombre: "David Romero Morfin",
        nombre: "",
        sofipo: "AMSOFIPO"
      },
      ponete2: {
        // nombre: "Act. Alán Elizondo",
        nombre: "",
        sofipo: "FIRA"
      },
      ponete3: {
        // nombre: "Mto. Javier Vázquez",
        nombre: "",
        sofipo: "Nafin"
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

</script>

<style scoped>
.active-tab-button {
  /* background-color: #e5e7eb; */
  border-bottom: 1px solid #fff;
  font-weight: 400;
}
</style>