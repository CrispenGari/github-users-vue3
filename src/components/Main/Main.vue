<template>
  <div class="main">
    <div class="main__header">
      <h1>Repositories</h1>
      <h1>{{ repos[0] ? repos[0].owner.login : "" }}</h1>
    </div>
    <div class="main__repo__lists">
      <Repository v-for="(repo, i) in repos" :key="i" :repo="repo" />
    </div>
  </div>
</template>

<script>
import Repository from "../../components/Repository/Repository";
export default {
  name: "Main",
  components: {
    Repository,
  },
  data() {
    return { state: this.$store.state };
  },
  computed: {
    repos() {
      return this?.state?.repositories;
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  padding: 10px;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px lightgray;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  flex: 1;
  max-height: 75vh;
}
.main__header {
  padding: 10px;
  border-bottom: 1px solid lightgray;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.main__header > h1:last-of-type {
  color: green;
}
.main__repo__lists {
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
