<template>
  <div class="container m-auto mt-20">
    <div class="w-1/2 shadow-xl m-auto p-4">
      <form @submit.prevent="login()">
        <label class="mb-2 text-left" for="email">Email</label>
        <input
          class="block m-2 w-11/12 p-2 rounded-lg border-2"
          id="email"
          type="email"
          placeholder="email"
          v-model="logindata.email"
        />
        <label class="mb-2 text-left" for="password">Password</label>
        <input
          class="block m-2 w-11/12 p-2 rounded-lg border-2"
          id="password"
          type="password"
          placeholder="password"
          v-model="logindata.password"
        />
        <button
          type="submit"
          class="
            mt-4
            mb-2
            px-8
            py-2
            rounded-md
            bg-blue-400
            hover:bg-blue-500
            text-white
          "
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    logindata: {
      email: "",
      password: "",
    },
  }),
  methods: {
    login() {
        this.$store.dispatch("login", this.logindata)
        .then(() => {
            this.$router.push('/admin');
        });
    },
  },
};
</script>