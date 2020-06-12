import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLight: false
  },
  mutations: {
    themeC(state){
      state.isLight = !state.isLight
      console.log(state.isLight);
    }
  },
  actions: {
  },
  modules: {
  }
})
