import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { api } from "../plugins/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snackbar: {
      ativo: false,
      texto: "",
      cor: "",
      tempo: 3000
    },
    logado: false,
    categorias: "",
    produtos: ""
  },

  getters: {
    getLogado: state => state.logado,
    getCategorias: state => state.categorias,
    getProdutos: state => state.produtos
  },

  mutations: {
    abrirSnackbar(state, dados) {
      const { texto, cor, tempo } = dados;

      state.snackbar.ativo = true;
      state.snackbar.texto = texto;
      state.snackbar.cor = cor;
      state.snackbar.tempo = tempo;
    },

    fecharSnackbar(state) {
      state.snackbar.ativo = false;
    },

    acessarConta(state, token) {
      state.logado = true;
      localStorage.setItem("token", token);
    },

    carregarCategorias(state, categorias) {
      state.categorias = categorias;
    },

    carregarProdutos(state, produtos) {
      state.produtos = produtos;
    }
  },
  actions: {
    actionChamarAlerta({ commit }, dados) {
      commit("abrirSnackbar", dados);
    },

    actionFecharAlerta({ commit }) {
      commit("fecharSnackbar");
    },

    async actionLogar({ commit }, credenciais) {
      const { email, senha } = credenciais;
      await axios
        .post(api + "auth/master-users", {
          email: email,
          password: senha
        })
        .then(resp => {
          commit("acessarConta", resp.data.data.token);
        })
        .catch(error => {
          const snack = {
            texto: error.response.data.message,
            cor: "red",
            tempo: 3000
          };
          commit("abrirSnackbar", snack);
        });
    },

    async consultarCategorias({ commit }) {
      await axios
        .get(api + "categories")
        .then(resp => commit("carregarCategorias", resp.data.data))
        .catch(error => {
          const snack = {
            texto: error.response.data.message,
            cor: "red",
            tempo: 3000
          };
          commit("abrirSnackbar", snack);
        });
    },

    async consultarProdutos({ commit }) {
      await axios
        .get(api + "products")
        .then(resp => commit("carregarProdutos", resp.data.data))
        .catch(error => {
          const snack = {
            texto: error.response.data.message,
            cor: "red",
            tempo: 3000
          };
          commit("abrirSnackbar", snack);
        });
    }
  }
});
