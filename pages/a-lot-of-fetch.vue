<script setup>
import axios from "axios";

// https://api.github.com/orgs/nuxt
// https://api.github.com/orgs/nuxt/repos
// const { data: orgsData } = await useFetch("https://api.github.com/orgs/nuxt");
// const { data: reposData } = await useFetch(
//   "https://api.github.com/orgs/nuxt/repos"
// );

//優化，一次打多個API
// const [{ data: orgsData }, { data: reposData }] = await Promise.all([
//   useFetch(`https://api.github.com/orgs/nuxt`),
//   useFetch(`https://api.github.com/orgs/nuxt/repos`),
// ]);

//axios
const { data } = await useAsyncData("axiostest", async () => {
  const res = await axios.get("https://api.github.com/orgs/nuxt");
  //console.log(res);
  return res.data;
});
</script>
<template>
  <div>a lot of fetch</div>
  <!-- {{ orgsData }}
  {{ reposData }} -->
  {{ data }}
</template>

<style scoped></style>
