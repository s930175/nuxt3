<script setup>
// import AboutHeader from "@components/About/Header.vue";
// import AboutFooter from "@components/About/Footer.vue";

//局部SEO meta
// useHead({
//   title: "關於我們 About - Nuxt3 高效入門全攻略",
//   meta: [
//     { property: "og:title", content: "關於我們 About - Nuxt3 高效入門全攻略" },
//     { property: "og:url", content: "http://localhost:3000/about" },
//     { property: "og:image", content: "http://localhost:3000/share.jpg" },
//     { name: "description", content: "關於我們 About - 最棒的Nuxt3的線上課程" },
//     {
//       property: "og:description",
//       content: "關於我們 About - 最棒的Nuxt3的線上課程",
//     },
//   ],
// });

// useSeoMeta({
//   title: "About - Nuxt3 高效入門全攻略",
//   description: "關於我們 - 最棒的Nuxt3的線上課程",
//   ogDescription: "關於我們 - 最棒的Nuxt3的線上課程",
//   ogTitle: "About - Nuxt3 高效入門全攻略",
//   ogImage: "",
//   twitterCard: "summary_large_image",
//   twitterSite: "",
//   twitterCreator: "",
// });

const res = await useFetch("https://vue-lessons-api.vercel.app/seo/about");
useServerSeoMeta({
  title: () => `${res.data.value.title} - Nuxt3`,
  ogTitle: () => `${res.data.value.title} - Nuxt3`,
  description: () => `${res.data.value.description} - Nuxt3`,
  ogDescription: () => `${res.data.value.description} - Nuxt3`,
});

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
      async: true,
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      // 選擇載入順序
      tagPosition: "bodyClose",
    },
  ],
});
</script>
<template>
  <AboutHeader></AboutHeader>
  <div>About</div>
  <AboutFooter></AboutFooter>
</template>

<style scoped></style>
