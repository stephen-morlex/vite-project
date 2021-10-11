import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AddTaskVue from "../components/AddTask.vue";
import HomeVue from "../components/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeVue
  },
  {
    path: "/task",
    name: "task",
    component: AddTaskVue
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

console.log("history", process.env.BASE_URL)

export default router;