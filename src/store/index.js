import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    user: {}
  },
  mutations: {
    SET_USER(state, value) {
      state.user = value;
    }
  },
  actions: {
    login({ dispatch }, data) {
      axios.get("sanctum/csrf-cookie").then(() => {
        axios.post("login", data).then(() => {
          return dispatch('getUser');
        });
      });
    },
    getUser({ commit }) {
      axios.get('api/user')
      .then((res) => {
        commit('SET_USER', res.data);
      })
      .catch(() => {
        commit('SET_USER', {});
      });
    }
  },
  modules: {},
});
