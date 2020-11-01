import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mortgageCalculations: {},
    brokerTax: 0.0714,
    cityTax: 0.06
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
