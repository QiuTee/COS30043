<template>
  <div class="container">
    <h2>Welcome {{ data.firstname }} {{ data.lastname }}</h2>
    <p>What's your name ?</p>
    <div class="row mb-3 justify-content-center">
      <div class="col-md-6 col-lg-4">
        <label for="first-name" class="form-label">First Name:</label>
        <input
          type="text"
          v-model="data.firstname"
          id="first-name"
          class="form-control"
        />
      </div>
    </div>
    <div class="row mb-3 justify-content-center">
      <div class="col-md-6 col-lg-4">
        <label for="last-name" class="form-label">Last Name:</label>
        <input
          type="text"
          v-model="data.lastname"
          id="last-name"
          class="form-control"
        />
      </div>
    </div>
    <div>
      <div class="form-check form-check-inline">
        <input
          id="ocean"
          name="image"
          type="radio"
          value="ocean"
          v-model="data.image"
          class="form-check-input"
        />
        <label class="form-check-label" for="ocean">Ocean</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          id="mountain"
          name="image"
          type="radio"
          value="mountain"
          v-model="data.image"
          class="form-check-input"
        />
        <label class="form-check-label" for="mountain">Mountain</label>
      </div>
    </div>
    <div v-if="data.image !== ''">
      <img :src="getImageSrc" width="300" height="200" />
    </div>
  </div>
</template>
<script>
import mountainImage from "../assets/mountain.jpg";
import oceanImage from "../assets/ocean.jpg";
export default {
  data() {
    return {
      data: {
        firstname: "",
        lastname: "",
        image: "",
      },
      mountainImage,
      oceanImage,
    };
  },
  computed: {
    getImageSrc() {
      if (this.data.image === "mountain") {
        return mountainImage;
      } else if (this.data.image === "ocean") {
        return oceanImage;
      }
      return this.data.image;
    },
  },
};
</script>
