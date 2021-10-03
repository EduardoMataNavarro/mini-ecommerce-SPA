<template>
  <div class="p-8">
    <table class="table-fixed position-relative m-auto w-full shadow-md">
      <thead class="bg-gray-200">
        <tr>
          <th scope="col" class="p-2 text-left text-sm text-gray-500" v-for="(name, index) in headerNames" :key="index">{{ name }}</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-gray-300">
        <tr class="hover:bg-gray-100" v-for="(item, index) in list" :key="index">
          <td class="px-4 py-2 " v-for="(valueName, index) in headerNames" :key="index">{{ item[valueName] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
// import axios from "axios";
export default {
  props: ["modelName"],
  data: () => ({
    list: [],
    headerNames: [],
  }),
  watch: {
    modelName: function (newModelName) {
      axios.get(`/api/${newModelName}`).then((res) => {
        if (res?.data) {
          var headers = Object.keys(res.data[0]);
          // strip timestamps from table headers 
          headers = headers.filter(header => { return header != 'created_at' && header != 'updated_at' && header != 'deleted_at' });
          headers = headers.map(header => { return header.replace('_', ' ') });
          console.log(headers);
          
          this.headerNames = headers;
          this.list = res.data;
          console.log(res.data);
        }
      });
    },
  },
  methods: {
    // getList() {
    //   axios.get(`api/${this.model}`).then((res) => {
    //     console.log(res);
    //     this.list = res.data;
    //   });
  },
};
</script>
