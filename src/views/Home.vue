<template>
  <div class="home">
  <Form/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Form from "@/components/Form/Form.vue";


@Component({
  components: {
    // HelloWorld,
    Form
  }
})
export default class Home extends Vue {}
</script>
