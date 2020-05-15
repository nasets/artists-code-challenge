const initialState = {
  characters: [],
  status: {
    isSearchingCharacters: false,
  },
};

const mutations = {
  SET_CHARACTERS(state, characters) {
    state.characters = characters;
  },
  SET_STATUS(state, status) {
    state.status = {
      ...status,
      isSearchingCharacters: true,
    };
  },
};

const actions = {
  async searchCharacters(context, params) {
    context.commit('SET_STATUS', { isSearchingCharacters: true });
    try {
      const { data } = await $http.get('/characters', { params });
      context.commit('SET_CHARACTERS', data);
    } catch {
      context.commit('SET_CHARACTERS', []);
    }
    context.commit('SET_STATUS', { isSearchingCharacters: false });
  },
};

const getters = {
  //
};

export default {
  namespaced: true,
  state: initialState,
  mutations,
  actions,
  getters,
};
