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
import store from '@/store';
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Form extends Vue {
  @Prop() private msg!: string;
  @Prop() private mortgageCalculations: { [key: string]: any } = {
    commission: false,
    repayment: 0,
    totalSavings: 0,
    purchasePrice: 0
  };
  get calculations() {
    return this.mortgageCalculations;
  }
  recalculate = () => {
    console.log(this.calculations);
    store.dispatch('updateCalculations',this.calculations).then(response => {
        console.log(response);
        
    })
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
