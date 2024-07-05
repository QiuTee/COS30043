<template>
  <header>
    <nav>
      <h2>
        <router-link to="/">Booking Form</router-link>
      </h2>
      <ul>
        <li v-if="!isLoggedIn">
          <router-link to="/the-login">Login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <a href="#" @click.prevent="logoutStatus">Logout</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logout"]),
    logoutStatus() {
      this.logout();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}
header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  border: 1px solid transparent;
}
h1 {
  margin: 0;
}
h1 a {
  color: white;
  margin: 0;
}
h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}
header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  margin: 0 0.5rem;
}
</style>
