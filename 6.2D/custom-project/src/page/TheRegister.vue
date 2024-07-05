<template>
  <section class="vh-100" style="background-color: #eee">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>

                  <form class="mx-1 mx-md-4" @submit.prevent="submitForm">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div
                        data-mdb-input-init
                        class="form-outline flex-fill mb-0"
                      >
                        <label class="form-label" for="name">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          class="form-control"
                          v-model="name"
                        />
                        <p class="text-danger" v-if="errors.name">
                          {{ errors.name }}
                        </p>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div
                        data-mdb-input-init
                        class="form-outline flex-fill mb-0"
                      >
                        <label class="form-label" for="email">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          class="form-control"
                          v-model="email"
                        />
                        <p class="text-danger" v-if="errors.email">
                          {{ errors.email }}
                        </p>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div
                        data-mdb-input-init
                        class="form-outline flex-fill mb-0"
                      >
                        <label class="form-label" for="password"
                          >Password</label
                        >
                        <input
                          type="password"
                          id="password"
                          class="form-control"
                          v-model="password"
                        />
                        <p class="text-danger" v-if="errors.password">
                          {{ errors.password }}
                        </p>
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div
                        data-mdb-input-init
                        class="form-outline flex-fill mb-0"
                      >
                        <label class="form-label" for="re-password"
                          >Repeat your password</label
                        >
                        <input
                          type="password"
                          id="re-password"
                          class="form-control"
                          v-model="confirm"
                        />
                        <p class="text-danger" v-if="errors.confirm">
                          {{ errors.confirm }}
                        </p>
                      </div>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="terms"
                        v-model="isCheck"
                      />
                      <label class="form-check-label" for="terms">
                        I agree all statements in Terms of service
                      </label>
                    </div>
                    <p class="text-danger" v-if="errors.isCheck">
                      {{ errors.isCheck }}
                    </p>
                    <div class="col-12 m-2">
                      <button
                        type="button"
                        @click="togglesDetail"
                        class="btn btn-primary"
                      >
                        {{ detailAreVisibles ? "Hide" : "Show" }} Terms and
                        Conditions
                      </button>
                    </div>
                    <div class="row m-2" v-if="detailAreVisibles">
                      <div class="col-12">
                        <p class="text-right">
                          By using our booking service, you agree to the
                          following terms and conditions:
                        </p>

                        <p>
                          Your booking is confirmed only when you receive a
                          confirmation email from us.
                        </p>
                        <p>
                          You agree to provide accurate and complete information
                          during the booking process.
                        </p>
                        <p>
                          We reserve the right to cancel your booking in case of
                          any discrepancies or violations of our popcies.
                        </p>
                        <p>
                          Any cancellations or modifications to your booking
                          must be made at least 24 hours in advance.
                        </p>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                >
                  <img
                    src="../assets/register.png"
                    class="img-fluid"
                    alt="Register Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirm: "",
      isChecked: false,
      errors: {},
      detailAreVisibles: false,
    };
  },
  methods: {
    submitForm(event) {
      this.errors = {};
      if (this.name === "") {
        this.errors.name = "Please enter is required";
      }
      if (this.password === "") {
        this.errors.password = "Password is required";
      } else if (!/(?=.*[$%^&*])/.test(this.password)) {
        this.errors.password =
          "Password must contain at least 1 special character ($, %, ^, &, and *)";
      } else if (this.password.length < 8) {
        this.errors.password = "Password must be at least 8 characters ";
      }

      if (this.confirm !== this.password) {
        this.errors.confirm = "Password not match";
      }

      if (!this.email) {
        this.errors.email = "Please enter your email";
      } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.email)) {
        this.errors.email = "Please enter true format email";
      }
      if (!this.isCheck) {
        this.errors.isCheck = "Terms and Condition must be checked";
      }
      if (Object.keys(this.errors).length !== 0) {
        event.preventDefault();
      } else {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.some((user) => user.email === this.email)) {
          alert("Email already registered. Please use a different email.");
          return;
        }
        const newUser = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");

        this.$router.push("/the-login");
      }
    },
    togglesDetail() {
      this.detailAreVisibles = !this.detailAreVisibles;
    },
  },
};
</script>
