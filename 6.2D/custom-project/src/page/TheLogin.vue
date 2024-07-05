<template>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img src="../assets/login.png" class="img-fluid" alt="Sample image" />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <h2>Login</h2>
          <form @submit.prevent="submitForm">
            <div data-mdb-input-init class="form-outline mb-4">
              <label class="form-label" for="email">Email address</label>
              <input
                type="email"
                id="email"
                class="form-control form-control-lg"
                placeholder="Enter email"
                v-model="email"
              />
              <p class="text-danger" v-if="errors.email">{{ errors.email }}</p>
            </div>
            <div data-mdb-input-init class="form-outline mb-3">
              <label class="form-label" for="pwd">Password</label>
              <input
                type="password"
                id="pwd"
                class="form-control form-control-lg"
                placeholder="Enter password"
                v-model="password"
              />
              <p class="text-danger" v-if="errors.password">
                {{ errors.password }}
              </p>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                type="submit"
                data-mdb-button-init
                data-mdb-ripple-init
                class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem"
              >
                Login
              </button>
              <p class="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?
                <router-link to="/the-register">Register</router-link>
              </p>
            </div>
          </form>
          <p class="text-danger" v-if="errors.checkUser">
            {{ errors.checkUser }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      errors: {},
      userValid: false,
    };
  },
  methods: {
    ...mapActions(["login"]),
    submitForm(event) {
      this.errors = {};
      if (!this.email) {
        this.errors.email = "Please enter your email";
      } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.email)) {
        this.errors.email = "Please enter true format email";
      }
      if (this.password === "") {
        this.errors.password = "Password is required";
      }
      if (Object.keys(this.errors).length !== 0) {
        event.preventDefault();
      } else {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(
          (user) => user.email === this.email && user.password === this.password
        );
        if (!user) {
          this.errors.checkUser = "Email or Password is incorrect";
        } else {
          this.login();
          this.$router.push("/booking-form");
        }
      }
    },
  },
};
</script>

<style scoped>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>
