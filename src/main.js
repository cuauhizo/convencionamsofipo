import { ViteSSG } from 'vite-ssg/single-page'
import '@/assets/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.vue';

export const createApp = ViteSSG(
  App,
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
    // AOS.init()
    if (isClient) {
      AOS.init()
    }
  },
)