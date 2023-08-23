// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  //指定某個資料夾auto import
  "components": {
    "dirs": [
      {
          "path": "~/components/global",
          "global": true
      }
    ]
  }
 
})
