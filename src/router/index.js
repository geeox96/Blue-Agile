import Vue from "vue";
import VueRouter from "vue-router";
import store from "./../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      permissao: "deslogado"
    }
  },
  {
    path: "/categorias",
    name: "Categorias",
    component: () => import("../views/Categorias.vue"),
    meta: {
      permissao: "deslogado"
    }
  },
  {
    path: "/produtos",
    name: "Produtos",
    component: () => import("../views/Produtos.vue"),
    meta: {
      permissao: "deslogado"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.log("ae", store.getters.getLogado);
  const usuarioLogado = store.getters.getLogado;

  if (usuarioLogado) {
    if (to.meta.permissao === "logado") next();
    else if (to.meta.permissao === "deslogado") next("/");
  } else {
    if (to.meta.permissao === "deslogado") next();
    else if (to.meta.permissao === "logado") next("/");
  }
});

export default router;
