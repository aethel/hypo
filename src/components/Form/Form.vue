<template>
  <form>
    <legend>Mortgage Calculator</legend>
    <ol>
      <li>
        <label for="commission">Real Estate Commission</label>
        <input
          type="checkbox"
          v-model.lazy="mortgageCalculations.commission"
          id="commission"
          checked="mortgageCalculations.comission"
        />
      </li>
      <li>
        <label for="purchasePrice">Property Purchase Price</label>
        <input
          type="number"
          id="purchasePrice"
          v-model.number.lazy="mortgageCalculations.purchasePrice"
          inputmode="number"
          value="mortgageCalculations.purchasePrice"
        />
      </li>
      <li>
        <label for="totalSavings">Total Savings</label>
        <input
          required
          type="number"
          id="totalSavings"
          v-model.number.lazy="mortgageCalculations.totalSavings"
          inputmode="number"
          value="mortgageCalculations.totalSavings"
        />
      </li>
      <li>
        <label for="repayment">Annual Repayment</label>
        <input
          required
          type="number"
          v-model.number.lazy="mortgageCalculations.repayment"
          id="repayment"
          value="mortgageCalculations.repayment"
        />
      </li>
      <li>
        <button type="button" @click="recalculate">Calculate</button>
      </li>
    </ol>
  </form>
</template>

<script lang="ts">
import store from "@/store";
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  rawLoanAmount,
  totalCost,
  notaryCosts,
  brokerCosts,
  stampDutyCosts
} from "@/utils/utils";

interface Query {
   property_price: number;
      repayment: number;
      loan_amount: number;
      fixation: number[];
}

@Component
export default class Form extends Vue {
  @Prop() private mortgageCalculations: { [key: string]: any } = {
    commission: false,
    repayment: 0,
    totalSavings: 0,
    purchasePrice: 0
  };

  // Implied loan is represented by the rawLoanAmount formula, format the value
  // as currency
  // Loan to value is represented by the loanToValue formula , to format the
  // value as percentage

  recalculate = () => {
    console.log(this.mortgageCalculations.repayment);
    const {
      purchasePrice,
      totalSavings,
      repayment
    } = this.mortgageCalculations;
    const notary = notaryCosts(purchasePrice as number);
    const broker = brokerCosts(store.state.brokerTax, purchasePrice as number);
    const stampDuty = stampDutyCosts(store.state.brokerTax, purchasePrice as number);
    const total = totalCost(notary, broker, stampDuty);
    const query: Query = {
      property_price: purchasePrice,
      repayment,
      loan_amount: rawLoanAmount(total, totalSavings, purchasePrice),
      fixation: [5, 10, 15, 20, 25, 30]
    };

    store
      .dispatch("updateCalculations", this.mortgageCalculations)
      .then(response => {
        console.log(response);
      });
    console.log(store.state.mortgageCalculations);
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
