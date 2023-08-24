<script setup>
//const { count, addCount } = useAddCount();
//use pinia
const store = useHomeStore();
const name = ref("mike");
//調用plugins注入的方法
const { $hello } = useNuxtApp();
const selectedDate = ref(new Date());
</script>
<template>
  首頁:{{ store.count }}
  {{ name }}
  <h2>{{ $hello("Kitty") }}</h2>
  <h3 v-timeformat="1692847439418"></h3>
  <Home></Home>
  <!-- 自動找資料夾裡的index.vue -->
  <button @click="store.add">click</button>
  <Box></Box>
  <VDatePicker v-model="selectedDate" />
</template>
<style></style>
