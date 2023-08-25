<script setup>
definePageMeta({
  //匿名
  //   middleware: (to, from) => {
  //     console.log("user=>", { to, from });
  //   },
  //具名
  middleware: ["auth"],
});
//組件化SEO Meta
const res = await useFetch("https://vue-lessons-api.vercel.app/seo/user");

const title = computed(() => res.data.value.title);
const description = computed(() => res.data.value.description);
</script>
<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="description" />
    <Link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
  </Head>

  <div>user</div>
</template>

<style scoped></style>
