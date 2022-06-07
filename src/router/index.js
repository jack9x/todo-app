import { createRouter, createWebHashHistory } from "vue-router";
import TodoView from "../views/TodoView.vue";
import AboutView from "../views/AboutView";
const routes = [
  {
    path: "/",
    name: "todo",
    component: TodoView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
