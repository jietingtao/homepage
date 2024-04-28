<template>
  <a-layout has-sider style="min-height: 100vh">
    <sidebar :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }"></sidebar>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header style="background: colorPrimaryBg; text-align: center;font-size:25px">
            <h1 :style="{ color:'#ffffff'}">LMS Integration</h1>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '0px',background: '#fff', minHeight: '280px' }">
          <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
         ©2024 Created by tjt
      </a-layout-footer>      
    </a-layout>
  </a-layout>
</template>


<script>
import { ref } from 'vue';
const collapsed = ref(false);
const selectedKeys = ref(['1']);
import sidebar from '@/components/sidebar.vue'

export default {
  name: 'home',
  methods: {
    handelClick(item) {
    }
  },
  data(){
    return{
    }
  },
  components: {
    sidebar
  }
}
</script>


<style scoped>
#components-layout-demo-side .site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>