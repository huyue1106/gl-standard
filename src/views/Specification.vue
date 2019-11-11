<template>
  <div class="specification">
    <h1>前端页面规范</h1>
    <div class="nav">
      <ul class="nav-home">
        <li>
          <router-link to="/general">通用约定</router-link>
        </li>
        <li>
          <router-link to="/pageHeader">页面头部</router-link>
        </li>
        <li>
          <router-link to="/html">HTML</router-link>
        </li>
        <li>
          <router-link to="/css">CSS</router-link>
        </li>
        <li>
          <router-link to="/comment">注释与命名</router-link>
        </li>
        <li>
          <router-link to="/home">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
    <!-- <Catalogue data="{myData}" /> -->
  </div>
</template>

<script>
// 目录
import Catalogue from '@/components/Catalogue.vue';
export default {
  name: 'Specification',
  components: {
    Catalogue
  },
  // data() {
  //   return {
  //     myData: [
  //       {
  //         url: '/general',
  //         msg: '通用约定'
  //       }
  //     ]
  //   }
  // }
}
</script>
<style>
.nav .nav-home a {
  color: #2975c3;
}
.nav .nav-home a:hover {
  text-decoration: underline;
  color: #2975c3;
}
</style>