<template>
  <div>
    <base-dialog
      v-if="inputIsValid"
      title="Invalid Input"
      @close="confirmError"
    >
      <template #default>
        <p>Unfortunately, at least one input value is invalid</p>
        <p>Please check all inputs and make sure you enter as required</p>
      </template>
      <template #action>
        <base-button @click="confirmError">Okay</base-button>
      </template>
    </base-dialog>
    <base-dialog
      v-if="confirmIsValid"
      title="Booking Successful"
      @close="confirmError"
    >
      <template #default>
        <p>Booking successful</p>
        <p>
          Please check your booking at Booking History and We will notify you if
          there are any changes
        </p>
      </template>
      <template #action>
        <base-button @click="confirmError">Okay</base-button>
      </template>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            required
            ref="nameInput"
          />
          <p class="text-danger" v-if="errors.name">{{ errors.name }}</p>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            required
            ref="emailInput"
          />
          <p class="text-danger" v-if="errors.email">{{ errors.email }}</p>
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Phone</label>
          <input
            type="tel"
            class="form-control"
            id="phone"
            required
            ref="phoneInput"
          />
          <p class="text-danger" v-if="errors.phone">{{ errors.phone }}</p>
        </div>
        <div class="mb-3">
          <label for="date" class="form-label">Date</label>
          <input
            type="date"
            class="form-control"
            id="date"
            required
            ref="dateInput"
          />
        </div>
        <div class="mb-3">
          <label for="time" class="form-label">Time</label>
          <input
            type="time"
            class="form-control"
            id="time"
            required
            ref="timeInput"
          />
        </div>
        <div class="mb-3">
          <label for="guests" class="form-label">Number of Guests</label>
          <input
            type="number"
            class="form-control"
            id="guests"
            required
            min="1"
            ref="numberInput"
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">
          Submit Booking
        </button>
      </form>
    </base-card>
  </div>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";
import BaseDialog from "../UI/BaseDialog.vue";
export default {
  components: { BaseDialog, BaseCard },
  inject: ["addResource"],
  data() {
    return {
      inputIsValid: false,
      confirmIsValid: false,
      errors: {},
    };
  },
  methods: {
    submitForm() {
      this.errors = {};
      const name = this.$refs.nameInput.value;
      const email = this.$refs.emailInput.value;
      const phone = this.$refs.phoneInput.value;
      const date = this.$refs.dateInput.value;
      const time = this.$refs.timeInput.value;
      const number = this.$refs.numberInput.value;

      if (!/^[a-zA-Z\s]+$/.test(name)) {
        this.errors.name = "Please enter letters only";
      }
      if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email)) {
        this.errors.email = "Please enter a valid email format";
      }
      if (!/^0\d{9}$/.test(phone)) {
        this.errors.phone = "Phone must be 10 digits and begin with 04 ";
      }
      if (
        name.trim() === "" ||
        email.trim() === "" ||
        phone.trim() === "" ||
        date.trim() === "" ||
        time.trim() === "" ||
        number.trim() === ""
      ) {
        this.inputIsValid = true;
        return;
      }

      if (Object.keys(this.errors).length === 0) {
        const id = Date.now().toString();
        this.addResource(id, name, email, phone, date, time, number);
        this.confirmIsValid = true;
      } else {
        this.inputIsValid = true;
      }
    },
    confirmError() {
      this.inputIsValid = false;
      if (this.confirmIsValid) {
        this.confirmIsValid = false;
      }
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
