<script setup>
definePageMeta({
  //匿名
  //   middleware: (to, from) => {
  //     console.log("user=>", { to, from });
  //   },
  //具名
  middleware: ["auth"],
});
</script>
<template>
  <div>user</div>
</template>

<style scoped></style>
