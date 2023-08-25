export default defineNuxtRouteMiddleware((to, from) => {
  //共用middleware
  //無論切到哪個頁面，都會執行全域middleware

  console.log("全域middleware");
});
