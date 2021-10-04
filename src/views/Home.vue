<template>
  <top-nav />
  <div class="w-full">
    <div class="flex flex-wrap bg-gradient-to-r from-blue-100 to-blue-400 h-64">
      <h2
        class="
          text-center text-white
          mx-auto
          my-auto
          text-3xl
          position-relative
        "
      >
        Mini e-commerce
      </h2>
    </div>
  </div>
  <div class="container p-8 m-auto position-relative">
    <div
      class="
        grid
        sm:grid-cols-2
        lg:grid-cols-5
        md:grid-cols-2
        place-items-center
        gap-8
      "
    >
      <product-card
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";
import TopNav from "../components/TopNav.vue";

export default {
  components: { ProductCard, TopNav },
  data: () => ({
    products: [],
  }),
  mounted() {
    axios
      .get("api/product")
      .then((res) => {
        this.products = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
