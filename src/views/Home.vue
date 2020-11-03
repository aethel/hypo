<template>
  <div class="home">
    <Form />
    <div>
    <AsideBox :data="loanNumber" :heading="loanHeading" formatting="currency" />
    <AsideBox
      :data="valueNumber"
      :heading="valueHeading"
      formatting="percentage"
    />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Form from "@/components/Form/Form.vue";
import AsideBox from "@/components/AsideBox/AsideBox.vue";
import store from "@/store";
import { storeUpdateBus, StoreUpdateEvents } from "@/utils/updateBus";

@Component({
  components: {
    Form,
    AsideBox
  }
})
export default class Home extends Vue {
  @Prop()
  loanHeading = "Implied Loan";
  @Prop()
  valueHeading = "Loan to value";
  get loan() {
    return store.state.impliedLoan;
  }
  loanNumber = 0;
  @Watch("loan")
  onPropertyChanged(value: string, oldValue: string) {
    // this.loanNumber = this.loan;
  }

  valueNumber: number = this.$store.state.loanToValue;
  created() {
    storeUpdateBus.$on(
      StoreUpdateEvents.StoreUpdateEvent,
      (text: string) => this.loan
    );
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: calc(10px + 2vw);
}
</style>