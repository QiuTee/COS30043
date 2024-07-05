<template>
  <div>
    <img src="./assets/logo.png" width="150" height="150" />
    <nav>
      <router-link class="nav-bar" to="/the-home">Home</router-link> |
      <router-link class="nav-bar" to="/the-units">Units</router-link> |
      <router-link class="nav-bar" to="/the-tasks">Tasks</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav-bar {
  color: #2c3e50;
  text-decoration: none;
}

.nav-bar:hover {
  color: #42b983;
}
</style>
