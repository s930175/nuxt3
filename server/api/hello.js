//資料夾一定要叫server/api
// http://localhost:3000/api/hello
export default defineEventHandler((event) => {
  const data = {
    name: "mike",
    age: 12,
  };
  return { data };
});
