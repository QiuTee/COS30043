<template>
  <div>
    <div class="input-group">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        v-model.trim="search"
      />
      <button
        type="button"
        class="btn btn-outline-primary"
        data-mdb-ripple-init
      >
        search
      </button>
    </div>
    <ul>
      <learning-resource
        v-for="resource in filteredUser"
        :key="resource.id"
        :id="resource.id"
        :name="resource.name"
        :email="resource.email"
        :phone="resource.phone"
        :date="resource.date"
        :time="resource.time"
        :number="resource.number"
      ></learning-resource>
    </ul>
  </div>
</template>

<script>
import LearningResource from "./LearningResource.vue";

export default {
  inject: ["resources"],
  components: {
    LearningResource,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    filteredUser: function () {
      const user = this.search.toLowerCase();
      return this.resources.filter((search) => {
        return (
          search.name.toLowerCase().includes(user) ||
          search.email.toLowerCase().includes(user) ||
          search.phone.includes(user) ||
          search.date.includes(user) ||
          search.time.includes(user) ||
          search.number.includes(user)
        );
      });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
