<template>
  <div class="bg-gray-100 flex flex-row">
    <sidebar />
    <div class="w-full">
      <div v-if="isListView">
        <list-view v-bind:model-name="modelName"/>
      </div>
      <div v-else>
        <dynamic-form v-bind:model-name="modelName" />
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import Sidebar from "./Sidebar.vue";
import ListView from '../ListView.vue';
import DynamicForm from '../DynamicForm.vue';

export default {
  components: { Sidebar, ListView, DynamicForm },
  data: () => ({
    isListView: true,
    modelName: '',
  }),
  watch: {
    $route: function (newRoute, oldRoute) {
      console.log(oldRoute);
      this.modelName = newRoute.params.modelname;
      this.isListView = newRoute.params.id === undefined;
      console.log(this.modelName);
    }
  },
  methods: {

  }
};
</script>
