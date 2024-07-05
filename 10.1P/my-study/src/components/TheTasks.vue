<template>
  <div>
    <h2 class="text-center">Status Post App</h2>
    <div class="row mb-3 justify-content-center">
      <div class="col-md-6 col-lg-4">
        <label for="post">Status</label>
        <input
          type="text"
          class="form-control col-6 mt-2"
          name="post"
          id="post"
          v-model="strStatus"
        />
        <button class="btn btn-success m-2" @click="add(strStatus)">
          Post
        </button>
      </div>
    </div>

    <div v-if="errors.length">
      <p>{{ errors[0] }}</p>
    </div>
    <p v-for="(post, index) in statPosts" :key="index">
      {{ post }}
      <button class="btn btn-warning" @click="remove(index)">Del</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TheTasks",
  data() {
    return {
      statPosts: [],
      strStatus: "",
      errors: [],
    };
  },
  methods: {
    add: function (status) {
      if (this.strStatus.trim() !== "") {
        this.statPosts.push(status);
        this.strStatus = "";
        this.errors = [];
      } else if (this.errors.length === 0) {
        this.errors.push("Please enter status");
      }
    },
    remove: function (index) {
      this.statPosts.splice(index, 1);
    },
  },
};
</script>
