<template>
  
</template>

<script>
import axios from 'axios'
export default {
    props: ["productSlug"],
    data: () => ({
        product: {},
    }),
    mounted() {
        axios.get(`api/product/${this.productSlug}`).then(res => {

        });
    }
}
</script>

<style>

</style>