<script setup>
//具備SSR效果
//**********useAsyncData(避免重複拿資料)**************** */
const { data } = await useAsyncData("nuxt3test", () => {
  return $fetch("https://api.nuxtjs.dev/mountains");
});
</script>
<template>
  useAsyncData
  {{ data }}
</template>
<style></style>
