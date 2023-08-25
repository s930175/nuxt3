// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  "app": {
    "head": {
      "viewport": "width=500, initial-scale=1",
      "title": "Nuxt3 高效入門全攻略",
      "meta": [
          { "name": "description", "content": "這是 Mike 的 Nuxt3 高效入門全攻略課程" },
    { "property": "og:title", "content": "Nuxt3 高效入門全攻略" },
    { "property": "og:url", "content": "http://localhost:3000/" },
    { "property": "og:description", "content": "這是 Mike 的 Nuxt3 高效入門全攻略課程" },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: 'https://awesome-lib.js' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: 'https://awesome-lib.css' }
      ],
      // please note that this is an area that is likely to change
      // style: [
      //   // <style type="text/css">:root { color: red }</style>
      //   { children: ':root { color: red }', type: 'text/css' }
      // ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    }
  }, 
  //指定某個資料夾auto import
  "components": {
    "dirs": [
      {
          "path": "~/components/global",
          "global": true
      }
    ]
  },
  "imports": {
    "dirs": ['stores']
 },
 "modules": [
  [
      '@pinia/nuxt',
      {
          'autoImports': ['defineStore', 'acceptHMRUpdate'],
      },
  ]
],
})
