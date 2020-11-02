<template>
  <section>
    <h2>{{ heading }}</h2>
    <span v-if="dataToDisplay">{{ dataToDisplay }}</span>
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
      this.dataToDisplay = toCurrency(+this.data);
    }
    if(this.formatting === 'percentage') {
      this.dataToDisplay = toPercentage(this.data);
    } 
  }
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
