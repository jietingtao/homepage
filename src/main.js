import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import '@/assets/css/style.scss';
import 'animate.css';
import App from './App.vue'
import router from './router'

createApp(App).use(Antd).use(router).mount('#app')
