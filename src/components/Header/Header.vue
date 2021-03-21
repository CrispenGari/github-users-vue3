<template>
  <div class="header">
    <h1>GitHub Users</h1>
    <img
      src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
      alt="githublogo"
    />
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="css">
.header {
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
h1 {
  font-size: 16px !important;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
}
img {
  object-fit: contain;
  -webkit-user-drag: none;
  cursor: pointer;
  width: 40px;
}
</style>
