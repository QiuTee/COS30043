import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/page/HomePage.vue";
import TheLogin from "@/page/TheLogin.vue";
import TheRegister from "@/page/TheRegister.vue";
import BookingForm from "@/page/BookingForm.vue";
// import TheResource from "@/components/learning-resource/TheResource.vue";
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/the-login",
    component: TheLogin,
  },
  {
    path: "/the-register",
    component: TheRegister,
  },
  {
    path: "/booking-form",
    component: BookingForm,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
