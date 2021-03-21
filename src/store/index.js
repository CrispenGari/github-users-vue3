import { createStore } from "vuex";

const store = createStore({
  state: {
    repositories: [],
  },
  mutations: {
    setRepositories(state, payload) {
      state.repositories = payload;
    },
  },
});

export default store;
