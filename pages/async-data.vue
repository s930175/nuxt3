<script setup>
//具備SSR效果
//**********useAsyncData(避免重複拿資料)**************** */
//data：回傳的資料。
// pending：一個 Boolean，跟你說非同步是否完成了。
// refresh：可用於刷新函數返回的資料的 function。
// error：如果非同步失敗，回傳錯誤相關的資料。

const { data, panding, refresh, error } = await useAsyncData(
  "nuxt3test",
  () => {
    return $fetch("https://api.nuxtjs.dev/mountains");
  }
);

// 如果有需要的話可以重新觸發更新資料(第二種方法)
const refreshGetData = () => {
  refreshNuxtData("nuxt3test");
  console.log("refreshGetData");
};
</script>
<template>
  <h1></h1>
  <!-- 重新拿資料 -->
  <button @click="refresh">refresh</button>
  <button @click="refreshGetData">refreshGetData</button>
  useAsyncData
  {{ data }}
</template>
<style></style>
