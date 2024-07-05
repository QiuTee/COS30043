function getRandomValue() {
  return Math.floor(Math.random() * 100) + 1;
}

const app = Vue.createApp({
  data() {
    return {
      number: null,
      message: "",
      randomNumber: getRandomValue(),
    };
  },
  methods: {
    giveUp() {
      this.message = "Number is: " + this.randomNumber;
    },
    checkGuess() {
      if (this.number < 1 || this.number > 100) {
        this.message = "Please enter a number between 1 and 100";
      } else {
        if (this.number == this.randomNumber) {
          this.message = "You got it";
        } else if (this.number > this.randomNumber) {
          this.message = "Guess Lower";
        } else {
          this.message = "Guess Higher";
        }
      }
    },
    startOver() {
      this.message = "Start guessing";
      this.number = "";
      this.randomNumber = getRandomValue();
    },
  },
});

app.mount("#app");
