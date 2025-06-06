import './assets/main.css';
import { createApp } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.vue';


const app = createApp(App);

AOS.init();
app.mount('#app');
