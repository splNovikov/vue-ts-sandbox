import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import OptionsApiView from "../views/OptionsApiView.vue";
import CompositionApiView from "../views/CompositionApiView.refs.vue";
import JobsView from "../views/JobsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "variant1",
    component: OptionsApiView,
  },
  {
    path: "/variant2",
    name: "variant2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/CompositionApiView.reactive.vue"
      ),
  },
  {
    path: "/variant3",
    name: "variant3",
    component: CompositionApiView,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
