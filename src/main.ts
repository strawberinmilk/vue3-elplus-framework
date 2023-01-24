import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
`yarn add element-plus`;
import ElementPlus from 'element-plus';
import '@/../node_modules/element-plus/dist/index.css';

createApp(App).use(router).use(ElementPlus).mount('#app');
