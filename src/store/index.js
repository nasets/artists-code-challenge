import Vue from 'vue';
import Vuex from 'vuex';
import charactersStore from './modules/characters';

Vue.use(Vuex);

const state = {
  //
};

const mutations = {
  //
};

const actions = {
  //
};

const getters = {
  //
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    charactersStore,
  },
});
