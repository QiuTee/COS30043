const api = "http://127.0.0.1:5000";
var studMarks = [
  { name: "John", marks: 80 },
  { name: "Ally", marks: 75 },
  { name: "Bob", marks: 60 },
  { name: "Doe", marks: 85 },
  { name: "Jane", marks: 90 },
  { name: "Tom", marks: 70 },
  { name: "Tim", marks: 65 },
  { name: "Sam", marks: 55 },
  { name: "Max", marks: 40 },
  { name: "Kim", marks: 30 },
  { name: "Jim", marks: 20 },
  { name: "Zoe", marks: 10 },
  { name: "Ron", marks: 5 },
  { name: "Ben", marks: 0 },
  { name: "Ken", marks: 100 },
  { name: "Leo", marks: 95 },
  { name: "Roy", marks: 85 },
  { name: "Ray", marks: 75 },
  { name: "Rex", marks: 65 },
  { name: "Raj", marks: 55 },
  { name: "Ria", marks: 45 },
  { name: "Ric", marks: 35 },
  { name: "Rid", marks: 25 },
  { name: "Rim", marks: 15 },
  { name: "Rin", marks: 10 },
  { name: "Rit", marks: 5 },
];
const Login = {
  template: `
    <div class="container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <div class="card mt-5">
            <div class="card-body">
              <h5 class="card-title text-center">Login</h5>
              <form @submit.prevent="login">
                <div class="mb-3">
                  <label class="form-label" for="username" class="form-label">Username</label>
                  <input type="text" class="form-control" id="username" v-model="input.username">
                </div>
                <div class="mb-3">
                  <label class="form-label" for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" v-model="input.password">
                </div>
                <p :class="checkStatus" v-if="!valid.status">{{ valid.message.response }}</p>
                <button type="submit" class="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  `,
  data() {
    return {
      input: { username: "", password: "" },
      valid: {
        status: true,
        message: "",
      },
    };
  },
  mounted() {
    console.log("hi");
  },

  methods: {
    login() {
      const { username, password } = this.input;
      if (username.trim() === "" || password.trim() === "") {
        this.valid.status = false;
        this.valid.message = "You need to fill in both username and password.";
        return;
      } else {
        this.valid.status = true;
        this.valid.message = "";
      }

      const requestLogin = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      };

      // Simulating login with fetch, replace with actual authentication logic
      fetch(api + "/login", requestLogin)
        .then((response) => response.json())
        .then((data) => {
          if (data === null) {
            this.valid.message = "Invalid credentials";
            this.valid.status = false;
          } else if (data.response) {
            this.valid.message = data;
            this.valid.status = false;
          } else {
            // Assuming successful login, emit authenticated event and navigate to dashboard
            this.$emit("authenticated", true);
            this.$router.replace({ name: "DashboardHome" });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          this.valid.message = "Failed to login. Please try again.";
          this.valid.status = false;
        });
    },
  },
  computed: {
    checkStatus() {
      if (this.valid.message.status === 200) {
        return "alert alert-success text-center";
      } else if (this.valid.message.status === 404) {
        return "alert alert-danger text-center";
      }
    },
  },
};

const DashBoard = {
  template: `
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item mr-3">
              <router-link to="/dashboard/create" class="nav-link">Create</router-link>
            </li>
            <li class="nav-item mr-3">
              <router-link to="/dashboard/view" class="nav-link">View</router-link>
            </li>
            <li class="nav-item mr-3">
              <router-link to="/dashboard/update" class="nav-link">Update</router-link>
            </li>
            <li class="nav-item mr-3">
              <router-link to="/dashboard/delete" class="nav-link">Delete</router-link>
            </li>
             
          </ul>
        </div>
      </nav>
      <div class="container mt-4">
        <router-view></router-view>
      </div>
    </div>
  `,
};

const CreateUnit = {
  template: `
  <div class="row row-cols-6 w-auto">
    <div class="col container-fluid w-50">
      <h2 class="text-center">Create Unit</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label class="form-label" for="code">Code:</label>
          <input type="text" v-model="input.code" class="form-control" id="code" >
        </div>
        <div class="form-group">
          <label class="form-label" for="desc">Description:</label>
          <input type="text" v-model="input.desc" class="form-control" id="desc" >
        </div>
        <div class="form-group">
          <label class="form-label" for="cp">Credit Points:</label>
          <input type="number" step="0.1" v-model="input.cp" class="form-control" id="cp" >
        </div>
        <div class="form-group">
          <label class="form-label" for="type">Type:</label>
          <select v-model="input.type" class="form-control" id="type" >
          <option value="" disabled>Select type</option>
          <option value="core">Core</option>
          <option value="system analysis">System Analysis</option>
          <option value="software development">Software Development</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary mt-4">Create Unit</button>
        </form>
      </div>
      <div class="col container-fluid w-50">
        <h3>Output Message</h3>
        <p>Status code: {{output.status}}</p>
        <p :class="checkStatus">Response: {{output.response.response}}</p>
      </div>
    </div>
  `,
  data() {
    return {
      input: { code: "", desc: "", cp: "", type: "" },
      output: { status: "", response: "" },
    };
  },
  methods: {
    submitForm() {
      this.output.status = "";
      this.output.response = "";
      if (
        !this.input.code ||
        !this.input.desc ||
        !this.input.cp ||
        !this.input.type
      ) {
        this.output.response = "All fields are not require .";
        return;
      }
      const payload = {
        code: this.input.code,
        desc: this.input.desc,
        cp: parseFloat(this.input.cp),
        type: this.input.type,
      };
      fetch(api + "/units", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (!response.ok) {
            this.output.response = "Network response was not ok";
          }
          this.output.status = 200;
          return response.json();
        })
        .then((data) => {
          this.output.response = data;
          console.log("Unit created:", data);
          this.input = { code: "", desc: "", cp: "", type: "" };
        })
        .catch((error) => {
          this.output.status = "403";
          this.output.response = "Failed to create unit. Please try again";
        });
    },
  },
  computed: {
    checkStatus() {
      if (this.output.response.status === 201) {
        return "alert alert-success";
      } else if (this.output.response.status === 400) {
        return "alert alert-danger";
      }
    },
  },
  mounted() {
    this.input.type = "core";
    this.input.cp = "12.5";
  },
};

const UpdateUnit = {
  template: `
  <div class="row row-cols-6 w-auto">
    <div class="col container-fluid w-50">
      <h2 class="text-center">Update Unit</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label class="form-label" for="code">Enter Unit Code for updating:</label>
          <input type="text" v-model="input.code" class="form-control" id="code" >
        </div>
        <div class="form-group">
          <label class="form-label" for="desc">Description:</label>
          <input type="text" v-model="input.desc" class="form-control" id="desc" >
        </div>
        <div class="form-group">
          <label class="form-label" for="cp">Credit Points:</label>
          <input type="number" step="0.1" v-model="input.cp" class="form-control" id="cp" >
        </div>
        <div class="form-group">
          <label class="form-label" for="type">Type:</label>
          <select v-model="input.type" class="form-control" id="type" >
          <option value="" disabled>Select type</option>
          <option value="core">Core</option>
          <option value="system analysis">System Analysis</option>
          <option value="software development">Software Development</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary mt-4">Update Unit</button>
        </form>
      </div>
      <div class="col container-fluid w-50">
        <h3>Output Message</h3>
        <p>Status code: {{output.status}}</p>
        <p :class="checkStatus" >Response: {{output.response.response }}</p>
      </div>
    </div>
    `,
  data() {
    return {
      input: { code: "", desc: "", cp: "", type: "" },
      output: { status: "", response: "" },
    };
  },
  methods: {
    submitForm() {
      this.output.status = "";
      this.output.response = "";
      if (!this.input.code) {
        this.output.response = "Code field is  to update.";
        return;
      }
      const payload = {
        code: this.input.code,
        desc: this.input.desc,
        cp: parseFloat(this.input.cp),
        type: this.input.type,
      };
      fetch(api + "/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (!response.ok) {
            this.output.response = "Network response was not ok";
          }
          this.output.status = 200;
          return response.json();
        })
        .then((data) => {
          this.output.response = data;
          console.log("Unit updated:", data);
          this.input = { code: "", desc: "", cp: "", type: "" };
        })
        .catch((error) => {
          this.output.status = "403";
          this.output.response = "Failed to update unit. Please try again";
        });
    },
  },
  computed: {
    checkStatus() {
      if (this.output.response.status === 201) {
        return "alert alert-success";
      } else if (this.output.response.status === 400) {
        return "alert alert-danger";
      }
    },
  },
};

const DeleteUnit = {
  template: `
  <div class="row row-cols-6 w-auto">
    <div class="col container-fluid w-50">
      <h2 class="text-center">Delete Unit</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label class="form-label" for="code">Enter Unit Code for deleting:</label>
          <input type="text" v-model="input.code" class="form-control" id="code" >
        </div>
        <button type="submit" class="btn btn-primary mt-4">Delete Unit</button>
        </form>
      </div>
      <div class="col container-fluid w-50">
        <h3>Output Message</h3>
        <p>Status code: {{output.status}}</p>
        <p :class="checkStatus">Response: {{output.response.response}}</p>
      </div>
    </div>
    `,
  data() {
    return {
      input: { code: "" },
      output: { status: "", response: "" },
    };
  },
  methods: {
    submitForm() {
      this.output.status = "";
      this.output.response = "";
      if (!this.input.code) {
        this.output.response = "Code field is required.";
        return;
      }
      const payload = {
        code: this.input.code,
      };
      fetch(api + "/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (!response.ok) {
            this.output.response = "Network response was not ok";
          }
          this.output.status = 200;
          return response.json();
        })
        .then((data) => {
          this.output.response = data;
          console.log("Unit deleted:", data);
          this.input = { code: "" };
        })
        .catch((error) => {
          this.output.status = "403";
          this.output.response = "Failed to delete unit. Please try again";
        });
    },
  },
  computed: {
    checkStatus() {
      if (this.output.response.status === 201) {
        return "alert alert-success";
      } else if (this.output.response.status === 404) {
        return "alert alert-danger";
      }
    },
  },
};

const ViewUnit = {
  components: {
    paginate: VuejsPaginateNext,
  },
  template: `
    <div class="container">
      <h2>View Units</h2>
      <div>
      <table class="table table-bordered table-striped mt-5" v-if="units.length > 0">
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th>Credit Points</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(unit, index) in getUnits" :key="index">
            <td>{{ unit.code }}</td>
            <td>{{ unit.desc }}</td>
            <td>{{ unit.cp }}</td>
            <td>{{ unit.type }}</td>
          </tr>
        </tbody>
      </table>
     </div>
      <paginate
          :page-count="getPageCount"
          :page-range="3"
          :margin-pages="1"
          :click-handler="clickCallback"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
          :page-link-class="'page-link'"
          :prev-class="'page-item'"
          :next-class="'page-item'"
          :prev-link-class="'page-link'"
          :next-link-class="'page-link'"
          class="pagination justify-content-center"
        >
        </paginate>
      <p class="alert-danger p-4 text-center my-2" v-if="error !== ''">{{error}}</p>
    </div>
  `,
  data() {
    return {
      units: [],
      error: "",
      currentPage: 1,
      perPage: 3,
    };
  },
  mounted() {
    console.log("ViewUnits component mounted");
    this.error = "";
    fetch(api + "/units")
      .then((response) => {
        console.log("Response:", response);
        if (!response.ok) {
          this.error = "Network response was not ok";
          return;
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);
        if (!data) {
          this.error = "No data returned";
        } else {
          this.units = data;
        }
      })
      .catch((error) => {
        console.error("Error fetching units:", error);
        this.error = "Failed to fetch units. Please try again";
      });
  },
  computed: {
    getUnits() {
      let current = this.currentPage * this.perPage;
      let start = current - this.perPage;
      return this.units.slice(start, current);
    },
    getPageCount() {
      return Math.ceil(this.units.length / this.perPage);
    },
  },
  methods: {
    clickCallback(pageNum) {
      this.currentPage = Number(pageNum);
    },
  },
};

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: "/log-in", component: Login },
    {
      path: "/dashboard",
      redirect: "/dashboard/create",
      component: DashBoard,
      children: [
        { path: "create", component: CreateUnit },
        { path: "update", component: UpdateUnit },
        { path: "delete", component: DeleteUnit },
        { path: "view", component: ViewUnit },
      ],
    },
    { path: "/:pathMatch(.*)*", redirect: "/log-in" },
  ],
});

const app = Vue.createApp({});
app.component("nav-bar", {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active mr-3">
            <router-link to="/log-in" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item mr-3">
            <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          </li>
        </ul>
      </div>
    </nav>
  `,
});

app.use(router);
app.mount("#app");
