//Defining the list of units in an array
var units = [
  {
    code: "ICT10001",
    name: "Problem Solving with ICT",
    creditPoints: 12.5,
    type: "Core",
  },
  {
    code: "COS10005",
    name: "Web Development",
    creditPoints: 12.5,
    type: "Core",
  },
  {
    code: "INF10003",
    name: "Introduction to Business Information Systems",
    creditPoints: 12.5,
    type: "Core",
  },
  {
    code: "INF10002",
    name: "Database Analysis and Design",
    creditPoints: 12.5,
    type: "Core",
  },
  {
    code: "COS10009",
    name: "Introduction to Programming",
    creditPoints: 12.5,
    type: "Core",
  },
  {
    code: "INF30029",
    name: "Information Technology Project Management",
    creditPoints: 12.5,
    type: "Core",
  },
  {
    code: "ICT30005",
    name: "Professional Issues in Information Technology",
    creditPoints: 12.5,
    type: "Core",
  },
  {
    code: "ICT30001",
    name: "Information Technology Project",
    creditPoints: 12.5,
    type: "Core",
  },
];

const Unit = {
  data() {
    return { units };
  },

  template: `<div>
            <h2>Unit Code: {{this.$route.params.id}} </h2>
            <ul v-for="unit in filteredUnits" :key="unit.code">
                <li>{{unit.code}}</li>
                <li>{{unit.name}}</li>
                <li>{{unit.creditPoints}}</li>
                <li>{{unit.type}}</li>
            </ul>
        </div>`,
  computed: {
    filteredUnits: function () {
      const code = this.$route.params.id;
      return this.units.filter((unit) => {
        return unit.code.includes(code);
      });
    },
  },
};

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/unit/:id",
      component: Unit,
    },
  ],
});

const app = Vue.createApp({});

app.component("app-lookup2", {
  data: function () {
    return {
      units,
    };
  },

  template: `<div class="row">
          <h2>Unit Information System</h2>
          <div class="table-responsive">
            <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Code</th>
                <th scope="col">Description</th>
                <th scope="col">More Info </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="unit in units" :key="unit.code">
                <td>{{unit.code}}</td>
                <td>{{unit.name}}</td>
                <td><router-link :to="'/unit/'+ unit.code">Show details</router-link></td>
              </tr>
            </tbody>
            </table>
          </div>
          <router-view></router-view>
        </div>`,
});

app.use(router);
app.mount("#app");
