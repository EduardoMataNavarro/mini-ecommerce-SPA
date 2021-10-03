<template>
  <div class="container p-8 m-auto position-relative">
    <div class="grid justify-items-end sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-2 gap-8">
      <product-card v-for="(product, index) in products" :key="index" :product="product" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProductCard from '../components/ProductCard.vue';

export default {
  components: { ProductCard },
  data: () => ({
    products: []
  }),
  mounted() {
    axios.get('api/product').then(res => {
      this.products = res.data;
    });
  }
};
</script>
