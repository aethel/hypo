<template>
  <div class="home">
  <Form/>
  <AsideBox :data="loanNumber" :heading="loanHeading" formatting="currency"/>
  <AsideBox :data="valueNumber" :heading="valueHeading" formatting="percentage"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Form from "@/components/Form/Form.vue";
import AsideBox from "@/components/AsideBox/AsideBox.vue";

@Component({
  components: {
    Form,
    AsideBox
  }
})
export default class Home extends Vue {
  @Prop() 
  loanHeading = 'Implied Loan';
  @Prop() 
  valueHeading = 'Loan to value';
  @Prop() 
  loanNumber = 42;
  @Prop() 
  valueNumber = 0.55;
  // @Prop() 
  // loanHeading = 'Implied Loan';
  // @Prop() 
  // loanHeading = 'Implied Loan';

}
</script>
