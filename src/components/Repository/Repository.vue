<template>
  <div class="repository">
    <div class="repository__top">
      <h1>
        {{ repo.name }}
      </h1>
      <p>
        {{ repo.description }}
      </p>
    </div>
    <div class="repository__bottom">
      <div>
        <p :class="repo.default_branch"></p>
        {{ repo.default_branch }}
      </div>
      <div>
        <p :class="String(repo.language).toLowerCase()"></p>
        {{ repo.language }}
      </div>
      <a :href="repo.html_url">GitHub</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Repository",
  props: {
    repo: Object,
  },
};
</script>

<style scoped>
.repository {
  background: #fafafa;
  padding: 10px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  margin: 3px 0;
  border-radius: 5px;
}
.repository__bottom {
  display: flex;
  justify-content: space-around;
}
.repository__bottom > div {
  display: flex;
  align-items: center;
}
.repository__bottom > div > p {
  width: 10px;
  height: 10px;
  background: black;
  border-radius: 50%;
  margin-right: 10px;
}
.repository__top > h1 {
}
.repository__bottom > a {
  color: lightseagreen;
  cursor: pointer;
  user-select: none;
  user-zoom: none;
  text-decoration: none;
}
.repository__top > p {
  width: 100%;
  margin: 5px 0;
  color: gray !important;
}
.repository__bottom > div > p.master {
  background: orange;
}
.repository__bottom > div > p.main {
  background: limegreen;
}
.repository__bottom > div > p.python {
  background: #3572a5;
}
.repository__bottom > div > p.html {
  background: #e34c26;
}
.repository__bottom > div > p.powershell {
  background: #012456;
}
.repository__bottom > div > p.java {
  background: #b07219;
}
.repository__bottom > div > p.javascript {
  background: #f1e05a;
}
.repository__bottom > div > p.typescript {
  background: #2b7489;
}
.repository__bottom > div > p.php {
  background: #4f5d95;
}
.repository__bottom > div > p.vue {
  background: #2c3e50;
}
.repository__bottom > div > p.scss {
}
</style>
