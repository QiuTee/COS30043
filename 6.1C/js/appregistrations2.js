const app = Vue.createApp({
  data() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirm: "",
      email: "",
      address: "",
      suburb: "",
      postcode: "",
      phone: "",
      errors: {},
      isCheck: false,
      detailAreVisibles: false,
    };
  },
  methods: {
    submitForm(event) {
      this.errors = {};
      if (this.firstname === "") {
        this.errors.firstname = "First name is required";
      } else if (!/^[a-zA-Z]+$/.test(this.firstname)) {
        this.errors.firstname = "Please enter letters only";
      }

      if (this.lastname === "") {
        this.errors.lastname = "Last name is required";
      } else if (!/^[a-zA-Z]+$/.test(this.firstname)) {
        this.errors.lastname = "Please enter letters only";
      }
      if (this.username === "") {
        this.errors.username = "Please enter is required";
      } else if (this.username.length < 3) {
        this.errors.username = "Username must be at least 3 characters";
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

      if (this.address.length > 40) {
        this.errors.address = "Address just maximum 40 characters ";
      }
      if (this.suburb.length > 20) {
        this.errors.suburb = "Suburb just maximum 20 characters ";
      }

      if (this.postcode === "") {
        this.errors.postcode = "Please enter postcode";
      } else if (!/^\d{4}$/.test(this.postcode)) {
        this.errors.postcode = "Postcode must be exactly 4 numeric digits.";
      }
      if (this.phone === "") {
        this.errors.phone = "Phone cannot be empty";
      } else if (!/^04\d{8}$/.test(this.phone)) {
        this.errors.phone = "Phone must be 10 digits and begin with 04 ";
      }
      if (!this.isCheck) {
        this.errors.isCheck = "Terms and Condition must be checked";
      }
      if (Object.keys(this.errors).length !== 0) {
        event.preventDefault();
      }
    },
    togglesDetail() {
      this.detailAreVisibles = !this.detailAreVisibles;
    },
  },
});
app.mount("#app");
