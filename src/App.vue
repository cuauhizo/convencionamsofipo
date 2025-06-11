<script setup>
  import { ref, onMounted, onUnmounted, reactive, computed, watch, nextTick } from 'vue';
  import { useHead } from '@vueuse/head'
  import Responsive from '@/components/responsive.vue'
  import Stands from '@/components/stands.vue'
  import StandsCopy from '@/components/stands-copy.vue'

  const anio = ref(new Date().getFullYear());
  const showScrollTopButton = ref(false);

  const isMobile = ref(window.innerWidth <= 426);

  const updateIsMobile = () => {
    isMobile.value = window.innerWidth <= 426;
  };

  // Add event listener on mounted and remove it on unmounted
  onMounted(() => {
    window.addEventListener('resize', updateIsMobile);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateIsMobile);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    showScrollTopButton.value = scrollTop > 0;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const scrollToSection = (index) => {
    const element = document.getElementById(`section${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ================== Modal ================
  const modal = reactive({
    mostrar: false,
    animar: false,
  });

  const mostrarModal = (servicio) => {
    modal.mostrar = true;
    modal.servicio = servicio;
    setTimeout(() => {
      modal.animar = true;
    }, 300);
  };
  const ocultarModal = () => {
    modal.animar = false;
    setTimeout(() => {
      modal.mostrar = false;
    }, 300);
  };


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

// --- Datos de Testimonios ---
// Normalmente, estos datos se obtendrían de una API o se pasarían como un `prop`,
// pero para este ejemplo, los codificaremos aquí.
const programaDia1 = ref([
  {
    id: 1,
    horario: "15:00 - 15:40",
    actividad: "Ceremonia inaugural",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "Dr. Gabriel Yorio González",
        sofipo: "SCHP"
      },
      ponete2: {
        nombre: "Dr. Jesús de la Fuente Rodríguez",
        sofipo: "CNBV"
      },
      ponete3: {
        nombre: "Mtra. Viviana Garza Salazar",
        sofipo: "BANXICO"
      },
      ponete4: {
        nombre: "Lic. Oscar Rosado Jiménez",
        sofipo: "CONDUSEF"
      },
      ponete5: {
        nombre: "Act. Alan Elizondo Flores",
        sofipo: "FIRA"
      },
      ponete6: {
        nombre: "Mtro. Luis Antonio Ramírez Pineda",
        sofipo: "NAFIN"
      },
      ponete7: {
        nombre: "Vicente Fenoll Algorta",
        sofipo: "AMSOFIPO"
      }
    }
  },
  {
    id: 2,
    horario: "15:45 - 16:00",
    actividad: "Receso",
    name: "",
    title: ""
  },
  {
    id: 3,
    horario: "16:00 - 17:00",
    actividad: "La creatividad en la era digital",
    name: "Mc Kroupenky",
    title: "Estratega de Mercadotecnia y líder empresarial"
  },
  {
    id: 4,
    horario: "17:00 - 17:50",
    actividad: "Panel: Ecosistemas que promoueven la inclusión financiera",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "Pablo Medinavietia",
        sofipo: "DiDi"
      },
      ponete2: {
        nombre: "Juan Francisco Fernández",
        sofipo: "Moderador"
      }
    }
  },
  {
    id: 5,
    horario: "17:50 - 18:30",
    actividad: "Panel: Reconfigurando el mundo financiero: un camino inclusivo, diverso y equitativo",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "Lucía Barrera",
        sofipo: "Fitch"
      },
      ponete2: {
        nombre: "Mirna Eugenia Acevedo Salas",
        sofipo: "SHCP"
      },
      ponete3: {
        nombre: "Alicia Salgado",
        sofipo: "Moderadora"
      }
    }
  },
  {
    id: 6,
    horario: "4",
    actividad: "Excelente producto con un soporte excepcional. Realmente se preocupan por el éxito de sus clientes.",
    name: "James White",
    title: "Desarrollador Principal, CodeGen"
  }
]);

const programaDia2 = ref([
  {
    id: 1,
    horario: "15:45 - 16:00",
    actividad: "Receso",
    name: "",
    title: ""
  },
  {
    id: 2,
    horario: "17:50 - 18:30",
    actividad: "Panel: Reconfigurando el mundo financiero: un camino inclusivo, diverso y equitativo",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "Lucía Barrera",
        sofipo: "Fitch"
      },
      ponete2: {
        nombre: "Mirna Eugenia Acevedo Salas",
        sofipo: "SHCP"
      },
      ponete3: {
        nombre: "Alicia Salgado",
        sofipo: "Moderadora"
      }
    }
  },
  {
    id: 3,
    horario: "16:00 - 17:00",
    actividad: "La creatividad en la era digital",
    name: "Mc Kroupenky",
    title: "Estratega de Mercadotecnia y líder empresarial"
  },
  {
    id: 4,
    horario: "17:00 - 17:50",
    actividad: "Panel: Ecosistemas que promoueven la inclusión financiera",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "Pablo Medinavietia",
        sofipo: "DiDi"
      },
      ponete2: {
        nombre: "Juan Francisco Fernández",
        sofipo: "Moderador"
      }
    }
  },
  {
    id: 5,
    horario: "15:00 - 15:40",
    actividad: "Ceremonia inaugural",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "Dr. Gabriel Yorio González",
        sofipo: "SCHP"
      },
      ponete2: {
        nombre: "Dr. Jesús de la Fuente Rodríguez",
        sofipo: "CNBV"
      },
      ponete3: {
        nombre: "Mtra. Viviana Garza Salazar",
        sofipo: "BANXICO"
      },
      ponete4: {
        nombre: "Lic. Oscar Rosado Jiménez",
        sofipo: "CONDUSEF"
      },
      ponete5: {
        nombre: "Act. Alan Elizondo Flores",
        sofipo: "FIRA"
      },
      ponete6: {
        nombre: "Mtro. Luis Antonio Ramírez Pineda",
        sofipo: "NAFIN"
      },
      ponete7: {
        nombre: "Vicente Fenoll Algorta",
        sofipo: "AMSOFIPO"
      }
    }
  },
  {
    id: 6,
    horario: "4",
    actividad: "Excelente producto con un soporte excepcional. Realmente se preocupan por el éxito de sus clientes.",
    name: "James White",
    title: "Desarrollador Principal, CodeGen"
  },
  {
    id: 7,
    horario: "17:50 - 18:30",
    actividad: "Panel: Reconfigurando el mundo financiero: un camino inclusivo, diverso y equitativo",
    name: "",
    title: "",
    reparto: {
      ponete1: {
        nombre: "Lucía Barrera",
        sofipo: "Fitch"
      },
      ponete2: {
        nombre: "Mirna Eugenia Acevedo Salas",
        sofipo: "SHCP"
      },
      ponete3: {
        nombre: "Alicia Salgado",
        sofipo: "Moderadora"
      }
    }
  }
]);


// --- Estado y Lógica del Carrusel ---
const currentIndexDia1 = ref(0); // Índice del testimonio actual visible
const currentIndexDia2 = ref(0); // Índice del testimonio actual visible
const carouselTrackDia1 = ref(null); // Referencia al elemento DOM del carrusel (la pista)
const carouselTrackDia2 = ref(null); // Referencia al elemento DOM del carrusel (la pista)
const cardWidthDia1 = ref(0); // Ancho de una tarjeta de testimonio
const cardWidthDia2 = ref(0); // Ancho de una tarjeta de testimonio
const autoSlideIntervalDia1 = ref(null); // ID del intervalo para el auto-deslizamiento
const autoSlideIntervalDia2 = ref(null); // ID del intervalo para el auto-deslizamiento

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

// Propiedad computada para la transformación CSS que desliza el carrusel
const transformStyleDia1 = computed(() => {
  const offset = -currentIndexDia1.value * cardWidthDia1.value;
  return `translateX(${offset}px)`;
});

const transformStyleDia2 = computed(() => {
  const offset = -currentIndexDia2.value * cardWidthDia2.value;
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

const goToSlide = (index) => {
  currentIndexDia1.value = index;
  resetAutoSlideDia1();
  currentIndexDia2.value = index;
  resetAutoSlideDia2();
};

// --- Lógica de Auto-Deslizamiento ---
const startAutoSlideDia1 = () => {
  clearInterval(autoSlideIntervalDia1.value); // Limpia cualquier intervalo existente
  autoSlideIntervalDia1.value = setInterval(nextSlideDia1, 3000); // Cambia cada 5 segundos
};
const startAutoSlideDia2 = () => {
  clearInterval(autoSlideIntervalDia2.value); // Limpia cualquier intervalo existente
  autoSlideIntervalDia2.value = setInterval(nextSlideDia2, 3000); // Cambia cada 5 segundos
};

const resetAutoSlideDia1 = () => {
  clearInterval(autoSlideIntervalDia1.value);
  startAutoSlideDia1();
};

const resetAutoSlideDia2 = () => {
  clearInterval(autoSlideIntervalDia2.value);
  startAutoSlideDia2();
};

const pauseAutoSlideDia1 = () => {
  clearInterval(autoSlideIntervalDia1.value);
};

const pauseAutoSlideDia2 = () => {
  clearInterval(autoSlideIntervalDia2.value);
};


// --- Hooks del Ciclo de Vida ---
onMounted(() => {
  // Usar setTimeout para asegurar que el DOM esté completamente renderizado
  setTimeout(() => {
    updateCarouselDia1();
    updateCarouselDia2();
    startAutoSlideDia1();
    startAutoSlideDia2();
  }, 300);

  window.addEventListener('resize', () => {
    updateCarouselDia1();
    updateCarouselDia2();
    
    // Ajustar índices si es necesario
    if (currentIndexDia1.value + visibleCards.value > programaDia1.value.length) {
      currentIndexDia1.value = Math.max(0, programaDia1.value.length - visibleCards.value);
    }
    if (currentIndexDia2.value + visibleCards.value > programaDia2.value.length) {
      currentIndexDia2.value = Math.max(0, programaDia2.value.length - visibleCards.value);
    }
  });
});

watch(activeTab, (newTab) => {
  nextTick(() => {
    if (newTab === 'tab1') {
      updateCarouselDia1();
    } else {
      updateCarouselDia2();
    }
  });
});

onUnmounted(() => {
  // Limpiar el intervalo cuando el componente se desmonta para evitar fugas de memoria
  clearInterval(autoSlideIntervalDia1.value);
  clearInterval(autoSlideIntervalDia2.value);
});



useHead({
  title: 'Inicio | 10a Convención | Lorem ipsum dolor sit amet,',
  meta: [
    { name: 'description', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
  ]
})

</script>

<template>
  <!-- Header -->
  <header class="mt-2">
    <div class="fixed z-30 w-full nav-menu bg-white bg-opacity-15">
      <nav class="container h-30 flex items-center justify-between px-5 py-3 relative text-white">
        <a href="./" class="w-1/3 max-w-[126px]">
          <img src="@/assets/img/logo-convension.svg" alt="Logo tolko" class="w-full"/>
        </a>
        <div class="flex items-center justify-end gap-2 text-[14px]">
          <input type="checkbox" id="menu" class="peer hidden" />
          <label for="menu" class="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-10 md:hidden"></label>
          <div class="fixed inset-0 bg-gradient-to-b from-white/20 to-[#3a3a82]/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none">
            <ul class="absolute inset-x-0 top-24 p-10 items-center bg-white text-black w-[90%] mx-auto rounded-md h-max text-center grid gap-6 shadow-2xl md:static md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:text-white md:shadow-none">
              <li>
                <a
                  href="#inicio"
                  class="py-2 px-2 rounded-full hover:bg-white hover:text-black hover:py-1 hover:px-2"
                  @click="scrollToSection(1)"
                  >AMS</a
                >
              </li>
              <li>
                <a
                  href="#patrocinadores"
                  class="py-2 px-2 rounded-full hover:bg-white hover:text-black hover:py-1 hover:px-2"
                  @click="scrollToSection(2)"
                  >Patrocinadores</a
                >
              </li>
              <li>
                <a
                  href="#ponentes"
                  class="py-2 px-2 rounded-full hover:bg-white hover:text-black hover:py-1 hover:px-2"
                  @click="scrollToSection(3)"
                  >Ponentes</a
                >
              </li>
              <li>
                <a
                  href="#programa"
                  class="py-2 px-2 rounded-full hover:bg-white hover:text-black hover:py-1 hover:px-2"
                  @click="scrollToSection(4)"
                  >Programa</a
                >
              </li>
              <li>
                <a
                  href="#stands"
                  @click="scrollToSection(5)"
                  class="py-2 px-2 rounded-full hover:bg-white hover:text-black hover:py-1 hover:px-2"
                  >Stands</a
                >
              </li>
              <li>
                <a
                  href="#sede"
                  class="py-2 px-2 rounded-full hover:bg-white hover:text-black hover:py-1 hover:px-2"
                  @click="scrollToSection(6)"
                  >Sede</a
                >
              </li>
              <li>
                <a href="#"
                class="flex items-center gap-2 bg-black text-white w-fit mx-auto rounded-full shadow-sm py-1 px-1.5 pr-2 transition-all duration-500">
                  <i><img src="@/assets/img/icon-contacto.svg" alt="icono contacto"></i>
                  <span style="vertical-align: inherit"><span style="vertical-align: inherit">Contacto</span></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <!-- Main -->
  <main>
    <!-- Hero -->
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
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/amextra.webp" alt="amextra"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/asp.webp" alt="asp"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/bbcd.webp" alt="bbcd"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/bienestar.webp" alt="bienestar"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/broxel.webp" alt="broxel"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/capital_activo.webp" alt="capital_activo"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/credicapital.webp" alt="credicapital"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/crediclub.webp" alt="crediclub"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/fincomun.webp" alt="fincomun"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/fin_amigo.webp" alt="fin amigo"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/fondedora.webp" alt="fondedora"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/grensa.webp" alt="grensa"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/klar.webp" alt="klar"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/kubo.webp" alt="kubo"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/monte_de_piedad.webp" alt="monte de piedad"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/paso_seguro.webp" alt="paso seguro"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/porvenir.webp" alt="porvenir"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/premu.webp" alt="premu"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/progressa.webp" alt="progressa"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/resuelve.webp" alt="resuelve"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/sofiexpress.webp" alt="sofiexpress"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/stori.webp" alt="stori"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/sumate.webp" alt="sumate"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/unagra.webp" alt="unagra"></a>
            <a href="#" data-aos="flip-right" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"><img class="transition-all duration-300 hover:scale-110" src="@/assets/img/sofipos/xepelin.webp" alt="xepelin"></a>
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

    <!-- Patrocinadores -->
    <section id="section2" class="container grid gap-12 justify-items-center items-center py-10 md:py-20 lg:grid-cols-2">
      <div data-aos="fade-down" data-aos-anchor-placement="top-center">
        <h2 class="titulo-seccion">Patrocinadores</h2>
        <p class="titulo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elitipsum.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="container grid grid-cols-2 gap-4 justify-items-center items-center lg:py-12 md:grid-cols-3" data-aos="fade-up" data-aos-anchor-placement="top-center">
        <div class="max-w-sm rounded-2xl h-full flex flex-col">
          <div class="flex-1">
            <a href="#">
              <img class="" data-aos="flip-right" data-aos-duration="1000" src="@/assets/img/patrocinadores/bajaware.webp" alt="logo bajaware">
            </a>
          </div>
        </div>
        <div class="max-w-sm rounded-2xl h-full flex flex-col">
          <div class="flex-1">
            <a href="#">
              <img class="" data-aos="flip-right" data-aos-duration="1200" src="@/assets/img/patrocinadores/circulo_de_credito.webp" alt="logo circulo de crédito">
            </a>
          </div>
        </div>
        <div class="max-w-sm rounded-2xl h-full flex flex-col">
          <div class="flex-1">
            <a href="#">
              <img class="" data-aos="flip-right" data-aos-duration="1400" src="@/assets/img/patrocinadores/gmc360.webp" alt="logo gmc 360">
            </a>
          </div>
        </div>
        <div class="max-w-sm rounded-2xl h-full flex flex-col">
          <div class="flex-1">
            <a href="#">
              <img class="" data-aos="flip-right" data-aos-duration="1600" src="@/assets/img/patrocinadores/efisys.webp" alt="logo efisys">
            </a>
          </div>
        </div>
        <div class="max-w-sm rounded-2xl h-full flex flex-col">
          <div class="flex-1">
            <a href="#">
              <img class="" data-aos="flip-right" data-aos-duration="1800" src="@/assets/img/patrocinadores/finvero.webp" alt="logo finvero">
            </a>
          </div>
        </div>
        <div class="max-w-sm rounded-2xl h-full flex flex-col">
          <div class="flex-1">
            <a href="#">
              <img class="" data-aos="flip-right" data-aos-duration="2000" src="@/assets/img/patrocinadores/fitch_ratings.webp" alt="logo fitch ratings">
            </a>
          </div>
        </div>
        <div class="max-w-sm rounded-2xl h-full flex flex-col">
          <div class="flex-1">
            <a href="#">
              <img class="" data-aos="flip-right" data-aos-duration="2200" src="@/assets/img/patrocinadores/preven.webp" alt="logo preven">
            </a>
          </div>
        </div>
        <div class="max-w-sm rounded-2xl h-full flex flex-col">
          <div class="flex-1">
            <a href="#">
              <img class="" data-aos="flip-right" data-aos-duration="2400" src="@/assets/img/patrocinadores/mc_collect.webp" alt="logo mc collect">
            </a>
          </div>
        </div>
        <div class="max-w-sm rounded-2xl h-full flex flex-col">
          <div class="flex-1">
            <a href="#">
              <img class="" data-aos="flip-right" data-aos-duration="2600" src="@/assets/img/patrocinadores/buro_de_credito.webp" alt="logo buro de crédito">
            </a>
          </div>
        </div>
        <div class="max-w-sm rounded-2xl h-full flex flex-col">
          <div class="flex-1">
            <a href="#">
              <img class="" data-aos="flip-right" data-aos-duration="2800" src="@/assets/img/patrocinadores/sekura.webp" alt="logo sekura">
            </a>
          </div>
        </div>
        <div class="max-w-sm rounded-2xl h-full flex flex-col">
          <div class="flex-1">
            <a href="#">
              <img class="" data-aos="flip-right" data-aos-duration="3000" src="@/assets/img/patrocinadores/tecreo.webp" alt="logo tecreo">
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Ponentes -->
    <section id="section3" class="py-10 md:py-20 px-4">
      <div class="mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row">
        <div class="w-full md:sticky md:top-20 md:w-1/2 md:order-2" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <h2 class="titulo-seccion">Ponentes</h2>
          <p class="titulo">Lorem ipsum dolor sit amet, consectetur adipiscing elitipsum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="flex flex-wrap justify-center gap-4 mt-5 w-full min-w-0 flex-1 md:mt-0 md:order-1" data-aos="fade-down" data-aos-anchor-placement="top-bottom">
          <div class="max-w-[276px] rounded-2xl bg-perfil p-6 text-center shadow-lg">
            <h3 class="text-sm">Marlene Garayzar</h3>
            <img class="mx-auto mt-4 mb-4 h-32 w-32 rounded-full shadow-lg" src="https://i.pravatar.cc/200" alt="profile picture" />
            <p class="mt-8 text-xs font-normal">
              Estratega de Mercadotecnia y Líder Empresarial
            </p>
            <button class="flex gap-2 rounded-full transition-all mt-2 duration-500 font-lemon-normal text-xs justify-center items-center w-full bg-gradient-to-r from-[#4D008C] to-[#C028B9] hover:bg-gradient-to-br px-8 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M9 4H3.5C3.10218 4 2.72064 4.15804 2.43934 4.43934C2.15804 4.72064 2 5.10218 2 5.5V12.5C2 12.8978 2.15804 13.2794 2.43934 13.5607C2.72064 13.842 3.10218 14 3.5 14H10.5C10.8978 14 11.2794 13.842 11.5607 13.5607C11.842 13.2794 12 12.8978 12 12.5V7M5 11L14 2M14 2H10.5M14 2V5.5" stroke="#1DC270" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Semblanza
            </button>

          </div>
          <div class="max-w-[276px] rounded-2xl bg-perfil p-6 text-center shadow-lg">
            <h3 class="text-sm">Marlene Garayzar</h3>
            <img class="mx-auto mt-4 mb-4 h-32 w-32 rounded-full shadow-lg" src="https://i.pravatar.cc/200" alt="profile picture" />
            <p class="mt-8 text-xs font-normal">
              Estratega de Mercadotecnia y Líder Empresarial
            </p>
            <button class="flex gap-2 rounded-full transition-all mt-2 duration-500 font-lemon-normal text-xs justify-center items-center w-full bg-gradient-to-r from-[#4D008C] to-[#C028B9] hover:bg-gradient-to-br px-8 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M9 4H3.5C3.10218 4 2.72064 4.15804 2.43934 4.43934C2.15804 4.72064 2 5.10218 2 5.5V12.5C2 12.8978 2.15804 13.2794 2.43934 13.5607C2.72064 13.842 3.10218 14 3.5 14H10.5C10.8978 14 11.2794 13.842 11.5607 13.5607C11.842 13.2794 12 12.8978 12 12.5V7M5 11L14 2M14 2H10.5M14 2V5.5" stroke="#1DC270" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Semblanza
            </button>
          </div>
          <div class="max-w-[276px] rounded-2xl bg-perfil p-6 text-center shadow-lg">
            <h3 class="text-sm">Marlene Garayzar</h3>
            <img class="mx-auto mt-4 mb-4 h-32 w-32 rounded-full shadow-lg" src="https://i.pravatar.cc/200" alt="profile picture" />
            <p class="mt-8 text-xs font-normal">
              Estratega de Mercadotecnia y Líder Empresarial mas largo
            </p>
            <button class="flex gap-2 rounded-full transition-all mt-2 duration-500 font-lemon-normal text-xs justify-center items-center w-full bg-gradient-to-r from-[#4D008C] to-[#C028B9] hover:bg-gradient-to-br px-8 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M9 4H3.5C3.10218 4 2.72064 4.15804 2.43934 4.43934C2.15804 4.72064 2 5.10218 2 5.5V12.5C2 12.8978 2.15804 13.2794 2.43934 13.5607C2.72064 13.842 3.10218 14 3.5 14H10.5C10.8978 14 11.2794 13.842 11.5607 13.5607C11.842 13.2794 12 12.8978 12 12.5V7M5 11L14 2M14 2H10.5M14 2V5.5" stroke="#1DC270" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Semblanza
            </button>
          </div>
          <div class="max-w-[276px] rounded-2xl bg-perfil p-6 text-center shadow-lg">
            <h3 class="text-sm">Marlene Garayzar</h3>
            <img class="mx-auto mt-4 mb-4 h-32 w-32 rounded-full shadow-lg" src="https://i.pravatar.cc/200" alt="profile picture" />
            <p class="mt-8 text-xs font-normal">
              Estratega de Mercadotecnia y Líder Empresarial muchisimo mas largo pa otra linea
            </p>
            <button class="flex gap-2 rounded-full transition-all mt-2 duration-500 font-lemon-normal text-xs justify-center items-center w-full bg-gradient-to-r from-[#4D008C] to-[#C028B9] hover:bg-gradient-to-br px-8 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M9 4H3.5C3.10218 4 2.72064 4.15804 2.43934 4.43934C2.15804 4.72064 2 5.10218 2 5.5V12.5C2 12.8978 2.15804 13.2794 2.43934 13.5607C2.72064 13.842 3.10218 14 3.5 14H10.5C10.8978 14 11.2794 13.842 11.5607 13.5607C11.842 13.2794 12 12.8978 12 12.5V7M5 11L14 2M14 2H10.5M14 2V5.5" stroke="#1DC270" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Semblanza
            </button>
          </div>
          <div class="max-w-[276px] rounded-2xl bg-perfil p-6 text-center shadow-lg">
            <h3 class="text-sm">Marlene Garayzar</h3>
            <img class="mx-auto mt-4 mb-4 h-32 w-32 rounded-full shadow-lg" src="https://i.pravatar.cc/200" alt="profile picture" />
            <p class="mt-8 text-xs font-normal">
              Estratega de Mercadotecnia y Líder Empresarial
            </p>
            <button class="flex gap-2 rounded-full transition-all mt-2 duration-500 font-lemon-normal text-xs justify-center items-center w-full bg-gradient-to-r from-[#4D008C] to-[#C028B9] hover:bg-gradient-to-br px-8 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M9 4H3.5C3.10218 4 2.72064 4.15804 2.43934 4.43934C2.15804 4.72064 2 5.10218 2 5.5V12.5C2 12.8978 2.15804 13.2794 2.43934 13.5607C2.72064 13.842 3.10218 14 3.5 14H10.5C10.8978 14 11.2794 13.842 11.5607 13.5607C11.842 13.2794 12 12.8978 12 12.5V7M5 11L14 2M14 2H10.5M14 2V5.5" stroke="#1DC270" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Semblanza
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Programa -->
    <section id="section4" class="container grid grid-cols-12 gap-12 justify-items-center items-center py-10 md:py-20">
      <div class="col-span-full sm:col-span-8" data-aos="zoom-in-right" data-aos-anchor-placement="center-bottom">
        <h2 class="titulo-seccion">Programa</h2>
        <p class="titulo">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
      </div>
      <div class="col-span-full sm:col-span-4" data-aos="zoom-in-left" data-aos-anchor-placement="center-bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </section>
    <div class="w-full" data-aos="zoom-in" data-aos-anchor-placement="center-bottom">
      <div class="flex max-w-lg mx-auto gap-10 font-lemon-normal">
        <button
          class="w-1/2 py-4 text-center text-lg font-extralight focus:outline-none"
          :class="{ 'active-tab-button': activeTab === 'tab1' }"
          @click="openTab('tab1')"
        >
          <h3>Miércoles 28 de agosto</h3>
        </button>

        <button
          class="w-1/2 py-4 text-center text-lg font-extralight focus:outline-none"
          :class="{ 'active-tab-button': activeTab === 'tab2' }"
          @click="openTab('tab2')"
        >
          <h3>Jueves 29 de agosto</h3>
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
              class="flex transition-transform duration-500 ease-in-out"
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
    </div>

    <!-- Stands -->
    <!-- <Stands/> -->
    <StandsCopy/>

    <!-- Sede -->
    <section id="section6" class="container grid gap-12 justify-items-center items-center py-10 md:py-20 lg:grid-cols-2" data-aos-anchor-placement="center-bottom">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="overflow-hidden rounded-lg" data-aos="flip-right" data-aos-duration="500">
          <img class="h-auto max-w-full rounded-lg transition-transform hover:rotate-2 hover:scale-110" src="@/assets/img/galeria/imagen1.png" alt="Gallery image" />
        </div>
        <div class="overflow-hidden rounded-lg" data-aos="flip-right" data-aos-duration="1000">
          <img class="h-auto max-w-full rounded-lg transition-transform hover:rotate-2 hover:scale-110" src="@/assets/img/galeria/imagen2.png" alt="Gallery image" />
        </div>
        <div class="overflow-hidden rounded-lg" data-aos="flip-right" data-aos-duration="1500">
          <img class="h-auto max-w-full rounded-lg transition-transform hover:rotate-2 hover:scale-110" src="@/assets/img/galeria/imagen3.png" alt="Gallery image" />
        </div>
        <div class="overflow-hidden rounded-lg" data-aos="flip-right" data-aos-duration="2000">
          <img class="h-auto max-w-full rounded-lg transition-transform hover:rotate-2 hover:scale-110" src="@/assets/img/galeria/imagen4.png" alt="Gallery image" />
        </div>
        <div class="overflow-hidden rounded-lg" data-aos="flip-right" data-aos-duration="2500">
          <img class="h-auto max-w-full rounded-lg transition-transform hover:rotate-2 hover:scale-110" src="@/assets/img/galeria/imagen5.png" alt="Gallery image" />
        </div>
        <div class="overflow-hidden rounded-lg" data-aos="flip-right" data-aos-duration="3000">
          <img class="h-auto max-w-full rounded-lg transition-transform hover:rotate-2 hover:scale-110" src="@/assets/img/galeria/imagen6.png" alt="Gallery image" />
        </div>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <h2 class="titulo-seccion">Sede</h2>
        <p class="titulo">
            Hotel Sumiya
        </p>
        <p class="mb-6">Interior Fraccionamiento, Cam. Real a Sumiya S/N, Jose G. Parres, C. P. 62564 Jiutepec, Morelos.</p>
        <button class="flex gap-2 rounded-full transition-all duration-500 font-lemon-normal text-xs justify-center items-center bg-gradient-to-r from-[#4D008C] to-[#C028B9] hover:bg-gradient-to-br px-8 py-2">
          Conoce los costos
        </button>
      </div>
    </section>

    <button class="btn-irArriba"
      @click="scrollToTop"
      v-show="showScrollTopButton">
      <span class="sr-only">Ir Arriba</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 18.75 7.5-7.5 7.5 7.5" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 12.75 7.5-7.5 7.5 7.5" />
      </svg>
    </button>

  </main>

  <!-- Footer -->
  <footer>
    <div class="container py-10 md:py-20">
        <div class="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-12 md:gap-x-8">
            <div class="text-[15px] md:col-span-4 xl:col-span-6 max-w-md">
              <a class="flex items-center justify-start">
                <img src="@/assets/img/logo-convension.svg" alt="Logo convension" />
              </a>
              <!-- Social Icons -->
              <div class="mt-4">
                <span class="inline-flex gap-2.5 mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                  <a
                    class="text-sm rounded cursor-pointer py-2 px-4 text-white bg-[#3a3a82]"
                    href="https://www.linkedin.com/company/#/"
                    alt="Linkedin"
                    target="_blank">
                    Linkedin
                  </a>
                  <a
                    class="text-sm rounded cursor-pointer py-2 px-4 text-white bg-[#3a3a82]"
                    href="https://www.facebook.com/#/"
                    alt="Facebook"
                    target="_blank">
                    Facebook
                  </a>
                  <a
                    class="text-sm rounded cursor-pointer py-2 px-4 text-white bg-[#3a3a82]"
                    href="https://www.x.com/#"
                    alt="X"
                    target="_blank">
                    X
                  </a>
                </span>
              </div>
            </div>
            <div class="hidden md:block md:col-span-1 lg:hidden"></div>
            <div class="grid grid-cols-1 text-sm sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-6 col-span-1 md:col-span-7 xl:col-span-6 gap-y-8 sm:gap-x-8 md:gap-x-8 xl:gap-x-3">
              <div class="sm:col-span-2 xl:col-span-3">
                <h3 class="mb-3 font-bold">
                  Dirección
                </h3>
                <p>
                  Ave. Insurgentes Sur #2047 Esq. Cracovia Edificio "B", Colonia San Ángel, Del. Álvaro Obregón  C.P. 01000, CDMX
                </p>
              </div>
              <div class="sm:col-span-1 xl:col-span-2">
                <h3 class="mb-3 font-bold">
                  Contacto
                </h3>
                <nav class="mb-10 list-none">
                  <ul>
                    <li class="mt-3">
                      <a class="cursor-pointer hover:text-gray-500" href="mailto:contacto@amsofipo.mx">
                        contacto@amsofipo.mx
                      </a>
                    </li>
                    <li class="">
                      <a href="tel:+5550014851" class="cursor-pointer hover:text-gray-500">
                        +55 5001 4851
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="sm:col-span-1 md:col-span-1 xl:-ml-3">
                <h3 class="mb-3 font-bold">
                  Ligas de interés
                </h3>
                <nav class="mb-10 list-none">
                  <ul>
                    <li class="">
                      <a href="#" class="cursor-pointer hover:text-gray-500">
                        SHCP
                      </a>
                    </li>
                    <li class="">
                      <a href="#" class="cursor-pointer hover:text-gray-500">
                        CNBV
                      </a>
                    </li>
                    <li class="">
                      <a href="#" class="cursor-pointer hover:text-gray-500">
                        CONDUSEF
                      </a>
                    </li>
                    <li class="">
                      <a href="#" class="cursor-pointer hover:text-gray-500">
                        FIRA
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
        </div>
        <div class="mt-16 pt-6 border-t border-[#3A3482]">
            <div class="flex flex-col text-sm justify-center items-center text-center md:flex-row md:justify-between">
                <div class="flex space-x-6 mb-4 md:mb-0">
                    <a href="#" class="cursor-pointer hover:text-gray-500">
                      Aviso de privacidad
                    </a>
                </div>
                <div class="">
                    <p class="">Todos los derechos reservados. AMS® {{ anio }}</p>
                </div>
            </div>
        </div>
    </div>
  </footer>
  <!-- <Responsive/> -->
</template>

<style scoped>

  nav {
    margin: 0 auto;
    width: 100%;
  }

  .nav-menu::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);
    background: rgba(255 255 255  0.16);
}

  /* Estilos opcionales para el botón de ir arriba */
  .btn-irArriba{
    padding: 15px;
    background-color: #3a3a82;
    color:#fff;
    position: fixed;
    right: 20px;
    bottom: 20px;
    border-radius: 50%;
    z-index: 50;
    border: 1px solid #000;
  }

  /*
  Esta clase CSS se usa para el estilo persistente del botón de la pestaña activa.
  Reemplaza la pseudo-clase 'active:bg-gray-200' de Tailwind que solo se activa al hacer clic.
  `scoped` asegura que estos estilos solo afecten a este componente.
*/
.active-tab-button {
  /* background-color: #e5e7eb; */
  border-bottom: 1px solid #fff;
  font-weight: 400;
}


</style>
