import { createApp } from 'vue';
import App from './App.vue';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import { createRouter, createWebHistory } from 'vue-router'
import routes from './router/index'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App);
app.use(router)
app.use(ArcoVue);
app.mount('#app');
