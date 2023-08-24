<script setup>
//const { count, addCount } = useAddCount();
//use pinia
const store = useHomeStore();
const name = ref("mike");
//調用plugins注入的方法
const { $hello } = useNuxtApp();
</script>
<template>
  首頁:{{ store.count }}
  {{ name }}
  <h2>{{ $hello("Kitty") }}</h2>
  <Home></Home>
  <!-- 自動找資料夾裡的index.vue -->
  <button @click="store.add">click</button>
  <Box></Box>
</template>
<style></style>
