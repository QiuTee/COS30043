import { createRouter, createWebHistory } from "vue-router";
import TheHome from "@/components/TheHome.vue";
import TheTasks from "@/components/TheTasks.vue";
import TheUnits from "@/components/TheUnits.vue";

const routes = [
  {
    path: "/the-home",
    component: TheHome,
  },
  {
    path: "/the-tasks",
    component: TheTasks,
  },
  {
    path: "/the-units",
    component: TheUnits,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
