<template>
  <form>
      <legend>Mortgage Calculator</legend>
      <ol>
          <li>
              <label for="commission">Real Estate Commission</label>
              <input required type="checkbox" id="commission" checked />          
            </li>
          <li>
              <label for="purchasePrice">Property Purchase Price</label>
              <input type="number" id="purchasePrice" inputmode="number" value="0" />   
          </li>
          <li>
              <label for="totalSavings">Total Savings</label>
              <input required type="number" id="totalSavings" inputmode="number" value="0" />   
          </li>
          <li>
              <label for="repayment">Annual Repayment</label>
              <input required type="number" id="repayment" value="0" />          
            </li>
          <li>
              <button type="submit">Calculate</button>   
          </li>
      </ol>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
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
