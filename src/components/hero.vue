<template>
  <div class="relative overflow-hidden min-h-lvh md:bg-hero">
    <!-- Video de fondo responsivo -->
    <video autoplay loop muted playsinline class="absolute bottom-0 top-0 md:inset-0 w-full md:h-full object-cover z-0">
      <source src="/public/bg-hero-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
      <source src="/public/bg-hero.mp4" type="video/mp4" />
      Tu navegador no soporta el formato de video.
    </video>

    <!-- Degradado inferior -->
    <div class="absolute bottom-0 left-0 w-full h-40 md:h-48 bg-gradient-to-t from-[#1A1B1A] to-transparent z-10 pointer-events-none"></div>

    <!-- CONTENEDOR PRINCIPAL: Solo flex-col para mantener todo apilado siempre -->
    <section id="section1" class="relative z-20 container mx-auto flex flex-col items-center md:justify-center min-h-lvh gap-8 py-[5rem] px-4">
      <!-- ARRIBA: LA IMAGEN -->
      <!-- Le damos un ancho máximo en pantallas grandes para que no se vea gigantesca -->
      <div class="w-full md:w-3/4 lg:w-1/2 flex justify-center" data-aos="fade-down" data-aos-anchor-placement="top-bottom">
        <h1 class="hero-text font-lemon-bold text-[2.244rem] md:text-[3.196rem] font-bold text-white sr-only">
          11
          <sup>a</sup>
          Convención
        </h1>

        <img class="w-full max-w-md mx-auto object-contain" src="@/assets/img/Recurso1.png" alt="Innovar para trascender" />
      </div>

      <!-- ABAJO: LOS TEXTOS -->
      <div class="w-full flex justify-center" data-aos="fade-up">
        <h2 class="uppercase text-center leading-7 text-white">
          <span class="text-[2.244rem] font-lemon-bold">Del 30 de Septiembre</span>
          <br />
          <span class="text-[#c78ae8] text-[1.773rem] font-lemon-bold">al 1 de Octubre</span>
          <br />
          <span class="text-[1.246rem] font-lemon-normal">Hacienda San Gil</span>
          <br />
          <span class="text-[1.246rem] font-lemon-light">Querétaro</span>
        </h2>
      </div>
    </section>
  </div>
</template>
<script setup></script>
<style scoped></style>
