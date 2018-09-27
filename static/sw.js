importScripts('/nuxt-onsen-app/_nuxt/workbox.dev.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxt-onsen-app/_nuxt/app.8dca9619d4c29025a9df.js",
    "revision": "fd90ecb9f2d561e8f745c6df1ce9b35d"
  },
  {
    "url": "/nuxt-onsen-app/_nuxt/layouts/default.1982f6824d40f4f8a06b.js",
    "revision": "72bb4830210e43996978f53770a47c88"
  },
  {
    "url": "/nuxt-onsen-app/_nuxt/manifest.a8908344f023544262fe.js",
    "revision": "a1d9ad8d74fc50f70b3ca151350bab41"
  },
  {
    "url": "/nuxt-onsen-app/_nuxt/pages/index.f417ebbe84c718d5dcc9.js",
    "revision": "d4deeea910f8f70dcf1f69edc25ee46c"
  },
  {
    "url": "/nuxt-onsen-app/_nuxt/vendor.1777aa0fc406c7778bb1.js",
    "revision": "180c5b78b9de299b9706c4dfd722c190"
  }
], {
  "cacheId": "nuxt-onsen",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/nuxt-onsen-app/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/nuxt-onsen-app/.*'), workbox.strategies.networkFirst({}), 'GET')





