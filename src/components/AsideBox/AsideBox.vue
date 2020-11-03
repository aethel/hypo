<template>
  <section class='m-asideBox'>
    <h2 class='m-asideBox__heading'>{{ heading }}</h2>
    <span class='m-asideBox__content' v-if="dataToDisplay">{{ dataToDisplay }}</span>
    <span v-else>Please fill out the form</span>
  </section>
</template>

<script lang="ts">
import store from "@/store";
import { toPercentage, toCurrency } from "@/utils/utils";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AsideBox extends Vue {
  @Prop() private data!: number;
  @Prop() private heading!: string;
  @Prop() private formatting!: string;
  @Prop() private dataToDisplay: string | null = null;
  
  mounted() {
    if(this.formatting === 'currency') {
      this.dataToDisplay = toCurrency(this.data);
    }
    if(this.formatting === 'percentage') {
      this.dataToDisplay = toPercentage(this.data);
    } 
  }
}
</script>

<style scoped lang="scss">
.m-asideBox {
  background:lightgoldenrodyellow;
  box-shadow: 0 0 10px 5px rgba(0,0,0,0.2);
  padding: 1vw;
  &:first-child {
    margin-bottom: 5vw;
  }
}
</style>
