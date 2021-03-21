<template>
  <form class="form" @submit.prevent="fetchRepositories">
    <input
      type="text"
      v-model.trim="query"
      placeholder="Search a Git repository..."
    />
  </form>
</template>

<script>
import axios from "../../axios";
export default {
  name: "Form",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    fetchRepositories() {
      (async () => {
        const { data } = await axios.get(
          `${this.query ? this.query : "crispengari"}/repos?per_page=100`
        );
        this.$store.commit("setRepositories", data);
      })();
    },
  },
};
</script>

<style scopped>
.form {
  width: 100%;
  padding: 10px;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px lightgray;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
}
.form input {
  flex: 1;
  padding: 5px 10px;
  background: #f5f5f5;
  outline: none;
  border: none;
  text-align: center;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.form input:focus {
  border-radius: 0;
  background: #fafafa;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
</style>
