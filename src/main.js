import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import VueApexCharts from 'vue3-apexcharts';
import router from './router';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);

app.use(VueApexCharts).use(pinia).use(router);
app.mount('#app');
