<script setup>
  import { ref } from 'vue'
  import { useHead } from '@vueuse/head'

  useHead({
    title: 'Documentos y Descargas - Convención AMSOFIPO',
    meta: [{ name: 'description', content: 'Descarga las presentaciones, programas y documentos oficiales de la 11ª Convención AMSOFIPO.' }],
  })

  // Array manual con los datos de tus PDFs
  const documentos = ref([
    {
      titulo: 'Conferencia CNBV',
      // descripcion: 'Agenda completa con horarios y salones.',
      archivo: 'Conferencia_CNBV.pdf',
      peso: '1 MB',
    },
    {
      titulo: 'Conferencia CONDUSEF',
      // descripcion: 'Material visual de la conferencia principal.',
      archivo: 'Conferencia_Condusef.pdf',
      peso: '1.8 MB',
    },
    {
      titulo: 'El buen líder en la era digital',
      // descripcion: 'Material visual de la conferencia principal.',
      archivo: 'El_buen_lider_en_la_era_digital.pdf',
      peso: '1.9 MB',
    },
    {
      titulo: 'IA con confianza Deloitte',
      // descripcion: 'Material visual de la conferencia principal.',
      archivo: 'IA_con_confianza_Deloitte.pdf',
      peso: '1 MB',
    },
    {
      titulo: 'La UIF en el sistema financiero',
      // descripcion: 'Material visual de la conferencia principal.',
      archivo: 'La_UIF_en_el_sistema_financiero.pdf',
      peso: '1 MB',
    },
    {
      titulo: 'México digital Fitch Ratings',
      // descripcion: 'Material visual de la conferencia principal.',
      archivo: 'Mexico_digital_Fitch_Ratings.pdf',
      peso: '2.3 MB',
    },
  ])

  // Generador de la ruta segura
  const getPdfUrl = nombreArchivo => {
    // Apunta a la carpeta física que creamos en el Paso 1
    return encodeURI(`/archivos-pdf/${nombreArchivo}`)
  }
</script>

<template>
  <div class="min-h-screen text-white py-10 md:py-20 p-4 sm:p-8">
    <div class="max-w-5xl mx-auto">
      <div class="text-center my-12">
        <h1 class="text-4xl md:text-5xl font-bold font-lemon-bold mb-2">Documentos</h1>
        <p class="text-lg text-gray-300 font-lemon-normal">Descarga el material exclusivo de la convención.</p>
      </div>

      <!-- Grid de Tarjetas de Descarga -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="doc in documentos" :key="doc.archivo" class="bg-white/10 border border-white/20 p-6 rounded-xl hover:bg-white/15 transition-colors duration-300 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-3">
              <!-- Ícono de PDF -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#C028B9" class="w-8 h-8 shrink-0">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <h2 class="text-xl font-bold text-white">{{ doc.titulo }}</h2>
            </div>
            <!-- <p class="text-gray-400 text-sm mb-4">{{ doc.descripcion }}</p> -->
          </div>

          <div class="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
            <span class="text-xs text-gray-500 font-mono">{{ doc.peso }}</span>

            <!-- Botón de Descarga (El atributo "download" es la clave) -->
            <a
              :href="getPdfUrl(doc.archivo)"
              download
              target="_blank"
              class="inline-flex gap-2 rounded-full transition-all duration-300 font-lemon-normal text-xs justify-center items-center bg-gradient-to-r from-[#4D008C] to-[#C028B9] hover:opacity-80 px-6 py-2 text-white">
              Descargar
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
