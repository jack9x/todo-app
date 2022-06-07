<template>
  <nav>
    <router-link to="/">Todo</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
  </nav>
  <router-view />
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #682e2e;
  color: #fff;
}
body #app {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #abafb3;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
