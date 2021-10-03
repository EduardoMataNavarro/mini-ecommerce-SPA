<template>
  <form @submit.prevent="this.isEditing ? 'edit()' : 'create()'">
    <div v-for="(field, index) in form" :key="index">
      <label>{{ field.name }}</label>
      <input :type="field.type" v-model="model[field.name]" />
    </div>
    <button type="submit">Save</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    modelname: "",
    id: "",
    model: {},
    form: [],
    isEditing: false,
  }),
  watch: {
    $route: function (newpath, oldpath) {
      var modelname = newpath.params.modelname;
      var objectid = newpath.params.id;

      if (objectid) {
        axios.get(`api/genericform/${modelname}`).then((res) => {
          console.log(res.data);
          if (res.data?.json_structure) {
            var data = JSON.parse(res.data.json_structure);
            this.$set(this.form, data);

            axios.get(`api/${modelname}/${objectid}`).then((res) => {
              var data = res.data;
              this.model = data;
            });
            console.log(this.form);
          }
        });
      }
      console.log(oldpath);
    },
  },
  methods: {
    updateForm(fieldName, value) {
      this.$set(this.formData, fieldName, value);
      this.$emit("input", this.formData);
    },
    create() {
      axios.post(`/${this.$router.params.modelname}`).then((res) => {
        console.log(res);
      });
    },
    edit() {
    },
  },
};
</script>

<style>
</style>