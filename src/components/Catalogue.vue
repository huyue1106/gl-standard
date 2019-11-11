<template>
  <div class="nav">
      <ul class="nav-home">
        <li>
          <router-link to="data.url">data.msg</router-link>
        </li>
        <!-- <li>
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
        </li> -->
      </ul>
    </div>
</template>

<script>
// 目录
export default {
  name: 'Catalogue',
  props: {
    data: Object
  }
}
</script>
