<script setup>
//const { count, addCount } = useAddCount();
//use pinia
const store = useHomeStore();
const name = ref("mike");
</script>
<template>
  首頁:{{ store.count }}
  {{ name }}
  <Home></Home>
  <!-- 自動找資料夾裡的index.vue -->
  <button @click="store.add">click</button>
  <Box></Box>
</template>
<style></style>
