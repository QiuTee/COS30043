const app = Vue.createApp({
  components: {
    paginate: VuejsPaginateNext,
  },
  data() {
    return {
      msg: [],
      currentPage: 1,
      perPage: 5,
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
  computed: {
    getUnits() {
      let current = this.currentPage * this.perPage;
      let start = current - this.perPage;
      return this.msg.slice(start, current);
    },
    getPageCount() {
      return Math.ceil(this.msg.length / this.perPage);
    },
  },
  methods: {
    clickCallback(pageNum) {
      this.currentPage = Number(pageNum);
    },
  },
});
app.mount("#app");
