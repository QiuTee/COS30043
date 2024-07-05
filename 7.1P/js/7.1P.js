const app = Vue.createApp({
  data() {
    return {
      msg: [],
    };
  },
  mounted() {
    var self = this;
    $.getJSON("https://jsonplaceholder.typicode.com/posts", function (data) {
      self.msg = data;
    }).fail(function () {
      alert("getJSON request failed!");
    });
  },
});

app.mount("#app");
