<template>
  <section id="section6" class="container grid gap-12 justify-items-center items-center py-10 md:py-20 lg:grid-cols-2" data-aos-anchor-placement="center-bottom">
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 order-2 lg:order-1">
      <div class="overflow-hidden rounded-lg" data-aos="flip-right" data-aos-duration="500">
        <img class="h-auto max-w-full rounded-lg transition-transform hover:rotate-2 hover:scale-110" width="201" height="156" loading="lazy" src="@/assets/img/galeria/imagen1.png" alt="Gallery image" />
      </div>
      <div class="overflow-hidden rounded-lg" data-aos="flip-right" data-aos-duration="1000">
        <img class="h-auto max-w-full rounded-lg transition-transform hover:rotate-2 hover:scale-110" width="201" height="156" loading="lazy" src="@/assets/img/galeria/imagen2.png" alt="Gallery image" />
      </div>
      <div class="overflow-hidden rounded-lg" data-aos="flip-right" data-aos-duration="1500">
        <img class="h-auto max-w-full rounded-lg transition-transform hover:rotate-2 hover:scale-110" width="201" height="156" loading="lazy" src="@/assets/img/galeria/imagen3.png" alt="Gallery image" />
      </div>
      <div class="overflow-hidden rounded-lg" data-aos="flip-right" data-aos-duration="2000">
        <img class="h-auto max-w-full rounded-lg transition-transform hover:rotate-2 hover:scale-110" width="201" height="156" loading="lazy" src="@/assets/img/galeria/imagen4.png" alt="Gallery image" />
      </div>
      <div class="overflow-hidden rounded-lg" data-aos="flip-right" data-aos-duration="2500">
        <img class="h-auto max-w-full rounded-lg transition-transform hover:rotate-2 hover:scale-110" width="201" height="156" loading="lazy" src="@/assets/img/galeria/imagen5.png" alt="Gallery image" />
      </div>
      <div class="overflow-hidden rounded-lg" data-aos="flip-right" data-aos-duration="3000">
        <img class="h-auto max-w-full rounded-lg transition-transform hover:rotate-2 hover:scale-110" width="201" height="156" loading="lazy" src="@/assets/img/galeria/imagen6.png" alt="Gallery image" />
      </div>
    </div>

    <div class="order-1 w-full lg:order-2" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <h2 class="titulo-seccion">Sede</h2>
      <p class="titulo">Hotel Misión San Gil</p>
      <p class="mb-6">Carretera México-Querétaro km 172 La estancia, 76821 San Juan del Río, Qro.</p>
      <div class="hidden">
        <button class="flex gap-2 rounded-full transition-all duration-500 font-lemon-normal text-xs justify-center items-center bg-gradient-to-r from-[#4D008C] to-[#C028B9] hover:bg-gradient-to-br px-8 py-2">Conoce los costos</button>
      </div>

      <!-- Contenedor responsivo con overflow-x-auto -->
      <div class="w-full overflow-x-auto">
        <!-- Tabla optimizada para SEO y Móviles manteniendo tu diseño original -->
        <table class="w-full min-w-[584px] border-collapse border border-gray-600 text-[15px]">
          <thead class="bg-transparent">
            <tr>
              <th scope="col" class="border border-gray-600 p-2">Consulta los costos de inscripción</th>
              <th scope="col" colspan="2" class="border border-gray-600 p-2 text-center font-bold">Asociado</th>
              <th scope="col" colspan="2" class="border border-gray-600 p-2 text-center font-bold">No Asociado</th>
            </tr>
            <tr>
              <th scope="col" class="border border-gray-600 p-2 text-left font-bold">Tipo de habitación</th>
              <th scope="col" class="border border-gray-600 p-2 text-center font-bold">Sencilla</th>
              <th scope="col" class="border border-gray-600 p-2 text-center font-bold">Doble</th>
              <th scope="col" class="border border-gray-600 p-2 text-center font-bold">Sencilla</th>
              <th scope="col" class="border border-gray-600 p-2 text-center font-bold">Doble</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="border border-gray-600 p-2 text-left font-bold">Dos noches</th>
              <td class="border border-gray-600 p-2 text-center">$14,000</td>
              <td class="border border-gray-600 p-2 text-center">$23,000</td>
              <td class="border border-gray-600 p-2 text-center">$18,500</td>
              <td class="border border-gray-600 p-2 text-center">$30,000</td>
            </tr>
            <tr>
              <th scope="row" class="border border-gray-600 p-2 text-left font-bold">Una noche</th>
              <td class="border border-gray-600 p-2 text-center">$10,000</td>
              <td class="border border-gray-600 p-2 text-center">$16,000</td>
              <td class="border border-gray-600 p-2 text-center">$13,000</td>
              <td class="border border-gray-600 p-2 text-center">$20,800</td>
            </tr>
            <tr>
              <th scope="row" class="border border-gray-600 p-2 text-left font-bold">Sin hospedaje</th>
              <td class="border border-gray-600 p-2 text-center">$9,000</td>
              <td class="border border-gray-600 p-2 text-center"></td>
              <td class="border border-gray-600 p-2 text-center">$12,000</td>
              <td class="border border-gray-600 p-2 text-center"></td>
            </tr>
            <tr>
              <th scope="row" class="border border-gray-600 p-2 text-left font-bold">Noche extra + Desayuno</th>
              <td class="border border-gray-600 p-2 text-center">$2,000</td>
              <td class="border border-gray-600 p-2 text-center"></td>
              <td class="border border-gray-600 p-2 text-center"></td>
              <td class="border border-gray-600 p-2 text-center"></td>
            </tr>
            <tr>
              <th scope="row" class="border border-gray-600 p-2 text-left font-bold">Solo desayuno / actividades 30 de septiembre</th>
              <td class="border border-gray-600 p-2 text-center">$1,500</td>
              <td class="border border-gray-600 p-2 text-center"></td>
              <td class="border border-gray-600 p-2 text-center"></td>
              <td class="border border-gray-600 p-2 text-center"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="my-6 text-sm">*Precios expresados en pesos mexicanos. Los costos no incluyen IVA</p>
    </div>
  </section>
</template>

<script setup></script>

<style></style>
