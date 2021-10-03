<template>
  <top-nav />
  <div class="w-full p-8">
    <div class="grid grid-cols-2 gap-6 h-64 border-black">
      <div class="shadow-md rounded-lg"></div>
      <div class="flex flex-col pl-4 border-l-2">
        <h2 class="text-xl font-light block text-gray-400">Name</h2>
        <h1 class="text-3xl font-extralight block my-2">{{ product.name }}</h1>
        <h2 class="text-xl font-light block text-gray-400">Price</h2>
        <h2 class="text-2xl font-light block text-blue-500 nt-2 mb-8">
          ${{ product.price }}
        </h2>
        <h2 class="text-xl font-light block text-gray-400">Category</h2>
        <h2 class="text-md font-bold block text-blue-400 mb-6">
          {{ product.product_category?.name }}
        </h2>
        <h2 class="text-xl font-normal block text-gray-500">Description</h2>
        <p class="text-gray-500 font-normal block">
          {{ product.description }}
        </p>
        <div class="mt-6">
          <button
            class="
              bg-blue-400
              hover:bg-blue-500
              text-white
              rounded-lg
              shadow-md
              w-full
              p-4
              mt-4
              m-auto
              position-relative
            "
          >
            Buy now
          </button>
          <div
            v-if="isInCart"
            class="
              bg-gray-100
              w-full
              text-center
              rounded-lg
              p-4
              mt-4
              m-auto
              position-relative
            "
          >
            Added to cart
          </div>
          <button
            v-else
            class="
              bg-gray-100
              hover:bg-gray-200
              w-full
              rounded-lg
              p-4
              mt-4
              m-auto
              position-relative
            "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TopNav from "../components/TopNav.vue";
export default {
  components: { TopNav },
  data: () => ({
    product: {},
    isInCart: false,
  }),
  mounted() {
    console.log(this.$route.params.slug);
    axios.get(`api/product/${this.$route.params.slug}`).then((res) => {
      console.log(res.data);
      this.product = res.data;
    });
  },
  methods: {
    addToCart: () => {},
  },
};
</script>

<style>
</style>