<template>
  <div id="app">
    <div class="nav pull-left">
      <ul class="nav-menu">
        <li>
          <router-link to="/">页面规范</router-link>
        </li>
        <li>
          <ul>
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
        </li>
      </ul>

    </div>
    <div
      class="page-inner pull-left"
    >
      <router-view />
    </div>
  </div>
</template>

<style>

</style>
