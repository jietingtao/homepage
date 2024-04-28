<template>
    <a-layout-sider >
      <!--侧栏收起后的显示有问题 v-model:collapsed="collapsed" collapsible="false"-->
      <div class="logo" display=table-cell style="text-align: center; margin-top:30px ;margin-bottom:60px">
        <img draggable="false" src="../assets/avatar2.jpg" style="height:80px; border-radius:90px"/>
        <h1 :style="{ color:'#ffffff'}">Teacher TAO</h1>
      </div>
      <a-menu :defaultSelectedKeys="1"  theme="dark" mode="inline">
        <a-menu-item key="1">
          <template #icon><file-outlined /></template>
          <router-link to='/course'>homepage</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <template #icon><pie-chart-outlined /></template>
          <router-link to='/timeline'>timeline</router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <template #icon><desktop-outlined /></template>
          <router-link to="/assignment">assignment</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
</template>

<script>
import { ref } from 'vue';
const collapsed = ref(false);
const selectedKeys = ref(['1']);


export default {
  name: 'sidebar',
  methods: {
    handelClick(item) {
    }
  },
  data(){
    return{
      
    }
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