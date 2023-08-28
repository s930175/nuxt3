<script setup>
// https://api.github.com/orgs/nuxt
// https://api.github.com/orgs/nuxt/repos
// const { data: orgsData } = await useFetch("https://api.github.com/orgs/nuxt");
// const { data: reposData } = await useFetch(
//   "https://api.github.com/orgs/nuxt/repos"
// );

//優化，一次打多個API
const [{ data: orgsData }, { data: reposData }] = await Promise.all([
  useFetch(`https://api.github.com/orgs/nuxt`),
  useFetch(`https://api.github.com/orgs/nuxt/repos`),
]);
</script>
<template>
  <div>a lot of fetch</div>
  {{ orgsData }}
  {{ reposData }}
</template>

<style scoped></style>
