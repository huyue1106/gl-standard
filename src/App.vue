<template>
  <div id="app">
    <div class="nav">
      <ul>
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
    <div class="" style="display: inline-block;width: 900px;">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav {
  display: inline-block;
  padding: 15px;
  width: 300px;
  vertical-align: top;
}
.nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  transition: top 0.5s ease;
}
.nav a {
  text-decoration: none;
  color: #2c3e50;
}
.nav ul li {
  padding: 10px 15px;
  list-style: none;
}
.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
