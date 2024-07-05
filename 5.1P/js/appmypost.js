const app = Vue.createApp({});
app.component(
  "app-mypost", // indicating the component tag
  {
    data() {
      return {
        statPosts: [],
        strStatus: "",
      };
    },

    template: `<div class="row">
          <div class="col-12">
            <div class="input-group mb-3 ml">
              <div class="input-group-prepend">
                <label class="input-group-text" for="post">Status</label>
              </div>
              <input
                type="text"
                class="form-control"
                name="post"
                id="post"
                v-model="strStatus"
                placeholder="Status"
                aria-label="Status"
              />
              <div class="input-group-append ml-10 ">
                <button class="btn btn-primary" @click="add(strStatus)">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <p v-for="(post,index) in statPosts" :key="index">
            {{post}}
            <button @click="remove(index)" class="btn btn-danger">Del</button>
          </p>
        </div>`,
    methods: {
      add: function (status) {
        this.statPosts.push(status);
        this.strStatus = "";
      },
      remove: function (index) {
        this.statPosts.splice(index, 1);
      },
    },
  }
);
app.mount("#app");
