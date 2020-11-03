import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mortgageCalculations: {},
    brokerTax: 0.0714,
    cityTax: 0.06,
    impliedLoan: 0,
    loanToValue: 0,
  },
  mutations: {
    setCalculations: (state, payload) => (state.mortgageCalculations = payload),
    setImpliedLoan: (state, payload) => (state.impliedLoan = payload),
    setLoanValue: (state, payload) => (state.loanToValue = payload),
  },
  actions: {
    async updateCalculations({ commit }, calcs) {
      // that's where GraphQL query would go
      commit("setCalculations", calcs);
    },
    async updateImpliedLoan({ commit }, amount) {
      commit("setImpliedLoan", amount);
    },
    async updateLoanToValue({ commit }, value) {
      commit("setLoanValue", value);
    },
  },
  modules: {},
});
