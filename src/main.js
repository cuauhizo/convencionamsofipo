import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/main.css'
import { createGtm } from '@gtm-support/vue-gtm'

export const createApp = ViteSSG(
  App,
  {
    routes: router.options.routes,
  },
  ({ app, router, isClient }) => {
    if (isClient) {
      // Inicializar animaciones AOS
      AOS.init()

      // INICIALIZAR GTM CON RETRASO (TRUCO PARA PAGESPEED)
      const initGTM = () => {
        app.use(
          createGtm({
            id: 'GTM-TSDFJZRJ', // Tu ID de GTM
            vueRouter: router, // Rastrea cambios de ruta sin recargar la página
            defer: true,
            compatibility: false,
          }),
        )

        // Limpiamos los "escuchadores" para liberar memoria
        window.removeEventListener('scroll', initGTM)
        window.removeEventListener('mousemove', initGTM)
        window.removeEventListener('touchstart', initGTM)
      }

      // Disparadores: GTM se carga en el primer movimiento del usuario
      window.addEventListener('scroll', initGTM, { once: true })
      window.addEventListener('mousemove', initGTM, { once: true })
      window.addEventListener('touchstart', initGTM, { once: true })

      // Fallback: Si el usuario no hace nada en 5 segundos, cárgalo de todos modos
      setTimeout(initGTM, 5000)
    }
  },
)
