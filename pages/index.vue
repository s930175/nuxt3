<script setup>
//******useFetch******* */
// const { data } = useFetch("https://api.nuxtjs.dev/mountains", {
//   // get 資料帶參數
//   query: { page: 1, list: 20 },
// });

const { data } = await useFetch("https://api.nuxtjs.dev/mountains", {
  onRequest({ request, options }) {
    // 設置 request headers
    options.headers = options.headers || {};
    options.headers.authorization = `Bearer token`;
    console.log(options.headers);
  },
  onRequestError({ request, options, error }) {
    // 處理 request 錯誤
  },
  onResponse({ request, response, options }) {
    // 處理回傳資料
    return response._data;
  },
  onResponseError({ request, response, options }) {
    // 處理 response 錯誤
  },
});

// useFetch("/api/hello", {
//  method: "GET",    // HTTP 請求的方法，GET(default)、POST 、 DELETE、PUT。
//  query: {},        // 將參數透過？的方式帶到 URL 上
//  params: {},       // 將參數帶到 URL 上
//  body: {},         // Request body
//  headers: {},      // Request headers
//  baseURL: "/",     // 基本的 API URL 路徑
// });

//const { count, addCount } = useAddCount();
//use pinia
const store = useHomeStore();
const name = ref("mike");
const fetchData = async () => {
  const res = await fetch("https://api.nuxtjs.dev/mountains").then((res) => {
    res.json();
  });
  console.log(res);
};
//調用plugins注入的方法
const { $hello } = useNuxtApp();
const selectedDate = ref(new Date());
</script>
<template>
  首頁:{{ store.count }}
  {{ name }}
  {{ data }}
  <!-- <h2>{{ $hello("Kitty") }}</h2> -->
  <!-- ClientOnly只在client端渲染 -->
  <ClientOnly>
    <h2>{{ $hello("Kitty") }}</h2>
  </ClientOnly>
  <!-- 匿名middleware -->
  <NuxtLink to="/user">user</NuxtLink>
  <h3 v-timeformat="1692847439418"></h3>
  <Home></Home>
  <!-- 自動找資料夾裡的index.vue -->
  <button @click="store.add">click</button>
  <Box></Box>
  <VDatePicker v-model="selectedDate" />
</template>
<style></style>
