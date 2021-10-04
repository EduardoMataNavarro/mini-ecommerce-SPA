<template>
  <div class="w-full">
    <div class="w-1/3 flex flex-column">
      <h1 class="font-thin">Order details:</h1>
      <h1 class="font-thin">Ship to:</h1>
      <h2 class="font-thin text-blue-400">{{ order.name ?? "" }}</h2>
      <h1 class="font-thin">Address:</h1>
      <h2 class="font-thin text-blue-400">
        {{ order.address }}, {{ order.state }},
        {{ order.country }}
      </h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    order: {},
  }),
  mounted() {
    axios.get(`api/order/${this.$route.params.id}`).then((res) => {
      this.order = res.data;
    });
  },
};
</script>

<style>
</style>