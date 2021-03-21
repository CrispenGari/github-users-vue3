<template>
  <div class="app">
    <Header />
    <Form />
    <Main />
  </div>
</template>

<script>
import { Form, Header, Main } from "./components";
export default {
  name: "App",
  components: {
    Form,
    Header,
    Main,
  },
};
</script>

<style></style>
