<script setup>
definePageMeta({
  middleware: (to, from) => {
    console.log("user=>", { to, from });
  },
});
</script>
<template>
  <div>user</div>
</template>

<style scoped></style>
