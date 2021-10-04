<template>
  <div class="rounded-lg shadow-md w-full bg-white h-auto">
    <img 
        class="w-full max-h-32 object-contain rounded-lg"
        :src="product.product_image.length > 0 ? product.product_image[0].path : 'https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png'" 
        alt="No image" />
    <div class="p-8">
      <h4 class="text-thin text-blue-700">{{ product.name }}</h4>
      <p>
        {{ product.description }}
      </p>
      <p class="mb-2 mt-2 font-bold text-lg text-red-500">${{ product.price }}</p>
      <router-link :to="{ name: 'product', params: { slug: product.slug } }">
        <span class="text-blue-400 hover:underline">See more...</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data: () => ({}),
  methods: {},
};
</script>

<style>
</style>