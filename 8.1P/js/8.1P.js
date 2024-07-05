const app = Vue.createApp({
  components: {
    paginate: VuejsPaginateNext,
  },

  data() {
    return {
      mark: [
        { name: "Amy", mark: 90 },
        { name: "Bill", mark: 80 },
        { name: "Casey", mark: 78 },
        { name: "David", mark: 84 },
        { name: "Emma", mark: 88 },
        { name: "Frank", mark: 76 },
        { name: "Grace", mark: 92 },
        { name: "Hannah", mark: 81 },
        { name: "Ivy", mark: 85 },
        { name: "Jack", mark: 79 },
        { name: "Katie", mark: 91 },
        { name: "Liam", mark: 77 },
        { name: "Mia", mark: 89 },
        { name: "Nina", mark: 82 },
        { name: "Oscar", mark: 86 },
        { name: "Paul", mark: 74 },
        { name: "Quinn", mark: 83 },
        { name: "Rachel", mark: 87 },
        { name: "Sam", mark: 75 },
        { name: "Tina", mark: 93 },
        { name: "Uma", mark: 80 },
        { name: "Victor", mark: 78 },
        { name: "Wendy", mark: 84 },
        { name: "Xander", mark: 76 },
        { name: "Yara", mark: 90 },
        { name: "Zach", mark: 88 },
      ],
      currentPage: 1,
      perPage: 3,
    };
  },
  computed: {
    getItems() {
      let current = this.currentPage * this.perPage;
      let start = current - this.perPage;
      return this.mark.slice(start, current);
    },
    getPageCount() {
      return Math.ceil(this.mark.length / this.perPage);
    },
  },
  methods: {
    clickCallback(pageNum) {
      this.currentPage = Number(pageNum);
    },
  },
});
app.mount("#app");
