import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import VueApexCharts from 'vue3-apexcharts';
import router from './router';

const app = createApp(App).use(router);
app.use(VueApexCharts);
app.mount('#app');
