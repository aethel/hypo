<template>
  <form class="a-form">
    <legend>Mortgage Calculator</legend>
    <ol class="list">
      <li class="m-list__listItem">
        <label class="a-label" for="commission">Real Estate Commission</label>
        <input
          type="checkbox"
          class="a-input"
          v-model.lazy="mortgageCalculations.commission"
          id="commission"
          checked="mortgageCalculations.comission"
        />
      </li>
      <li class="m-list__listItem">
        <label class="a-label" for="purchasePrice"
          >Property Purchase Price</label
        >
        <input
          type="number"
          class="a-input"
          id="purchasePrice"
          v-model.number.lazy="mortgageCalculations.purchasePrice"
          inputmode="number"
          @change="recalculateValues($event)"
          value="mortgageCalculations.purchasePrice"
        />
      </li>
      <li class="m-list__listItem">
        <label class="a-label" for="totalSavings">Total Savings</label>
        <input
          required
          class="a-input"
          type="number"
          id="totalSavings"
          v-model.number.lazy="mortgageCalculations.totalSavings"
          inputmode="number"
          @change="recalculateValues($event)"
          value="mortgageCalculations.totalSavings"
        />
      </li>
      <li class="m-list__listItem">
        <label class="a-label" for="repayment">Annual Repayment</label>
        <input
          required
          type="number"
          class="a-input"
          v-model.number.lazy="mortgageCalculations.repayment"
          id="repayment"
          @change="recalculateValues($event)"
          value="mortgageCalculations.repayment"
        />
      </li>
      <li class="m-list__listItem">
        <button class="a-button" type="button" @click="submit">Calculate</button>
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
  stampDutyCosts,
  loanToValue
} from "@/utils/utils";
import { storeUpdateBus, StoreUpdateEvents } from "@/utils/updateBus";
interface Query {
  property_price: number;
  repayment: number;
  loan_amount: number;
  fixation: number[];
}

@Component
export default class Form extends Vue {
  @Prop() mortgageCalculations: { [key: string]: any } = {
    commission: false,
    repayment: 0,
    totalSavings: 0,
    purchasePrice: 0
  };

  recalculateValues = (event: FormDataEntryValue) => {
    const {
      purchasePrice,
      totalSavings,
      repayment
    } = this.mortgageCalculations;
    const notary = notaryCosts(purchasePrice as number);
    const broker = brokerCosts(store.state.brokerTax, purchasePrice as number);
    const stampDuty = stampDutyCosts(
      store.state.brokerTax,
      purchasePrice as number
    );
    const total = totalCost(notary, broker, stampDuty);
    const loanAmount = rawLoanAmount(total, totalSavings, purchasePrice);
    const loanValue = loanToValue(loanAmount, purchasePrice);
    if (loanAmount && loanValue) {
      store.dispatch("updateImpliedLoan", loanAmount);
      store.dispatch("updateLoanToValue", loanValue);
    }
  };

  submit = () => {
    const {
      purchasePrice,
      totalSavings,
      repayment
    } = this.mortgageCalculations;
    // const query: Query = {
    //   property_price: purchasePrice,
    //   repayment,
    //   loan_amount: loanAmount,
    //   fixation: [5, 10, 15, 20, 25, 30]
    // };
  };
}
</script>

<style scoped lang="scss">
.a-ol {
  list-style-type: none;
  padding: 0;
}
.a-label {
  margin: 10px;
  width: 100%;
  display: block;
}

.m-list__listItem {
  display: flex;
  align-items: center;

  .a-input[type="number"],
  .a-label {
    flex: 0 1 50%;
  }
  &:last-child > .a-button {
    margin: 0 auto;
  }
}

.a-form {
  background: lightgoldenrodyellow;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  padding: 1vw;
}
</style>
