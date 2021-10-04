<template>
  <top-nav />
  <div class="w-full bg-gray-50 min-h-screen">
    <div class="p-6 bg-gray-50 ml-auto mr-auto relative">
      <div class="flex md:flex-col sm:flex-col">
        <div v-if="step == 0">
          <div class="grid sm:grid-cols-1 md:grid-cols-2">
            <div class="w-full">
              <img
                :src="
                  product.product_image && product.product_image.length > 0
                    ? product.product_image[0].path
                    : 'https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png'
                "
              />
            </div>
            <div class="w-full p-4">
              <h2 class="text-xl font-light text-gray-400">Name</h2>
              <h1 class="text-blue-400 font-thin text-2xl">
                {{ product.name }}
              </h1>
              <h2 class="text-xl font-light text-gray-400">Price</h2>
              <h1 class="text-blue-500 font-medium text-lg">
                ${{ product.price }}
              </h1>
              <h2 class="text-xl font-light text-gray-400">Current quantity</h2>
              <h1 class="text-blue-500 font-medium text-lg">
                {{ product.current_quantity }}
              </h1>
              <h2 class="text-xl font-light text-gray-400 mt-8">
                Select your quantity
              </h2>
              <input
                class="
                  mt-4
                  rounded-md
                  p-2
                  border-2 border-blue-300
                  focus:ring-2
                  focus:border-0
                  font-medium
                "
                type="number"
                v-model="quantity"
                :max="product.current_quantity"
                :min="1"
              />
              <h2 class="text-xl font-light text-gray-400 mt-4">Subtotal</h2>
              <h1 class="text-blue-500 font-medium text-lg">
                ${{ amount.toFixed(2) }}
              </h1>
              <button
                class="
                  mt-10
                  p-4
                  w-full
                  bg-blue-400
                  text-white
                  rounded-md
                  hover:bg-blue-500
                "
                @click="changeStep(1)"
              >
                Next step
              </button>
            </div>
          </div>
        </div>
        <div v-if="step == 1" class="w-full p-4">
          <div class="flex flex-row bg-white">
            <div class="w-2/3 flex flex-col p-8">
              <h2 class="text-xl font-light text-gray-400 mb-2">Name</h2>
              <input
                type="text"
                class="w-100 mt-2 p-2 rounded-md mb-2 border-2 border-gray-200"
                v-model="addressInfo.name"
              />
              <h2 class="text-xl font-light text-gray-400 mb-2 mt-2">
                Address
              </h2>
              <input
                type="text"
                class="w-100 mt-2 p-2 rounded-md mb-2 border-2 border-gray-200"
                v-model="addressInfo.address"
              />
              <div class="grid sm:grid-cols-1 md:grid-cols-2">
                <div>
                  <h2 class="text-xl font-light text-gray-400 mb-2 mt-2">
                    State
                  </h2>
                  <input
                    type="text"
                    class="
                      w-100
                      mt-2
                      p-2
                      rounded-md
                      mb-2
                      border-2 border-gray-200
                    "
                    v-model="addressInfo.state"
                  />
                </div>
                <div>
                  <h2 class="text-xl font-light text-gray-400 mb-2 mt-2">
                    Country
                  </h2>
                  <input
                    type="text"
                    class="
                      w-100
                      mt-2
                      p-2
                      rounded-md
                      mb-2
                      border-2 border-gray-200
                    "
                    v-model="addressInfo.country"
                  />
                </div>
              </div>
              <h2 class="text-xl font-light text-gray-400 mb-2">Shipment method</h2>
              <select
                class="w-100 mt-2 p-4 rounded-md border-2 border-gray-200"
                v-model="shipmentMethod"
                value="0"
              >
                <option value="0">-- Select a method --</option>
                <option
                  v-for="(method, index) in shipmentMethods"
                  :key="index"
                  :value="method.id"
                >
                  {{ method.name }}
                </option>
              </select>
              <h2 class="text-xl font-light text-gray-400 mb-2">Payment method</h2>
              <select
                class="w-100 mt-2 p-4 rounded-md border-2 border-gray-200"
                v-model="paymentMethod"
                value=""
              >
                <option value="0">-- Select a method --</option>
                <option
                  v-for="(method, index) in paymentMethods"
                  :key="index"
                  :value="method.id"
                >
                  {{ method.name }}
                </option>
              </select>
            </div>
            <div class="w-1/3 flex flex-col shadow-md p-8">
                <h1 class="font-thin">Order details:</h1>
                <h1 class="font-thin">Ship to:</h1>
                <h2 class="font-thin text-blue-400">{{addressInfo.name ?? ''}}</h2>
                <h1 class="font-thin">Address:</h1>
                <h2 class="font-thin text-blue-400">{{addressInfo.address}}, {{addressInfo.state}}, {{addressInfo.country}}</h2>
                <h1 class="font-thin">Products:</h1>
                <h2 class="font-thin text-blue-400">{{product.name}} - ${{product.price}} - Quantity: {{quantity}}</h2>
                <button class="w-full p-4 bg-blue-400 rounded-md mt-auto relative bottom-0 hover:bg-blue-500 text-white" @click="createOrder">
                    Finish your order!
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TopNav from "../components/TopNav.vue";

export default {
  components: {
    TopNav,
  },
  data: () => ({
    step: 0,
    product: {},
    addressInfo: {
      name: "",
      address: "",
      state: "",
      country: "",
    },
    shipmentMethod: 0,
    shipmentMethods: [],
    paymentMethods: [],
    paymentMethod: 0,
    quantity: 0,
    maxQuantity: 0,
    amount: 0,
  }),
  mounted() {
    axios.get(`api/product/${this.$route.params.slug}`).then((res) => {
      this.product = res.data;
      this.quantity = 1;
      console.log(res.data);
    });
    axios.get("api/shipmentmethod").then((res) => {
      console.log(res.data);
      this.shipmentMethods = res.data;
    });
    axios.get("api/paymentmethod").then((res) => {
      console.log(res.data);
      this.paymentMethods = res.data;
    });
  },
  watch: {
    quantity: function (newQuantity) {
      this.amount = this.product
        ? Number(this.product.price) * Number(newQuantity)
        : 0;
    },
  },
  methods: {
    changeStep: function (_step) {
      this.step = _step;
    },
    createOrder: function () {
      const payload = {
        ...this.addressInfo,
        payment_method_id: this.paymentMethod,
        shipment_method_id: this.shipmentMethod,
        details: [
          {
            product_id: this.product.id,
            quantity: this.quantity,
          },
        ],
      };
      console.log(payload);
      axios
        .post("api/order", payload)
        .then((res) => {
          this.$router.push({ name: 'orderdetails', params: { orderid: res.data.id } }) 
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>