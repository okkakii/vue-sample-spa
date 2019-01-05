import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  mode: ''
};

const mutations = {
  commitModeToDev(state, payload) {
    state.mode = 'development';
  },
  commitModeToPro(state, payload) {
    state.mode = 'production';
  }
};

const actions = {
  getSomething({ commit }, payload) {
    commit('commitModeToDev', payload);
  },
  updateModePro({ commit }, payload) {
    commit('commitModeToPro', payload);
  }
};
export default new Vuex.Store({ state, mutations, actions });
