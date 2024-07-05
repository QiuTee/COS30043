<template>
  <li>
    <base-card>
      <header>
        <h3>{{ name }}</h3>
        <base-button model="flat" @click="removeResource(id)"
          >Delete</base-button
        >
      </header>
      <div class="details">
        <p><strong>Email:</strong> {{ email }}</p>
        <p><strong>Phone:</strong> {{ phone }}</p>
        <p><strong>Date:</strong> {{ date }}</p>
        <p><strong>Time:</strong> {{ time }}</p>
        <p><strong>Number of Guests:</strong> {{ number }}</p>
      </div>
    </base-card>
  </li>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";

export default {
  components: { BaseButton },
  inject: ["removeResource"],
  props: ["id", "name", "email", "phone", "date", "time", "number"],
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  border-radius: 12px 12px 0 0;
}

h3 {
  font-size: 1.5rem;
  margin: 0;
}

p {
  margin: 0.5rem 0;
}

.details {
  padding: 1rem;
  background-color: #fff;
  border-radius: 0 0 12px 12px;
}

base-button {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

base-button:hover {
  background-color: #ff4c4c;
}
</style>
