import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import * as Icons from '@ant-design/icons-vue';
import '@/assets/css/style.scss';
import 'animate.css';
import App from './App.vue'
import router from './router'

import Highcharts from 'highcharts';
import Gantt from 'highcharts/modules/gantt';
import HighchartsVue from 'highcharts-vue';
Gantt(Highcharts);

const app=createApp(App)
app.use(Antd).use(router).use(HighchartsVue).mount('#app')

Object.keys(Icons).forEach(key =>{
    app.component(key, Icons[key])
})
app.config.globalProperties.$Icons = Icons

const originalReplace = router.prototype.replace;
router.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
const originalPush = router.prototype.push
router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}