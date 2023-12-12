import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// modules
import weatherDataStore from './modules/weatherDataStore';

const store = new Vuex.Store({
  state: {},
  modules: {
    weatherDataStore,
  },
  mutations: {},
  getters: {},
});

export default store;
