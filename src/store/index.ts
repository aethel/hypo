import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mortgageCalculations: {}
  },
  mutations: {
    setCalculations: (state, payload) => state.mortgageCalculations = payload
  },
  actions: {
    async updateCalculations ({commit}, calcs){
      // commit setCalculations, calcs
      // tions: {
        // async updateCompanyInfo({ commit }, companyInfo) {
        //   return axios.post('/my/url/endpoint', companyInfo)
        //     .then((response) => {
          //     });
        commit('setCalculations', calcs)
        }
  },
  modules: {}
});
