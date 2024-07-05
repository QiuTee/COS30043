const app = Vue.createApp({
  data() {
    return {
      msg: [],
    };
  },
  mounted() {
    var self = this;
    var url = "js/units.json";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        self.msg = data;
      })
      .catch((error) => {
        self.err = error;
      });
  },
});
app.mount("#app");
