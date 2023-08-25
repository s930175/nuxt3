//資料夾一定要叫server/api
export default defineEventHandler((event) => {
  const data = {
    name: "mike",
    age: 12,
  };
  return { data };
});
