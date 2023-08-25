//不用加上/api
//http://localhost:3000/mike
export default defineEventHandler((event) => {
  const data = {
    name: "mike",
    age: 100,
  };
  return { data };
});
