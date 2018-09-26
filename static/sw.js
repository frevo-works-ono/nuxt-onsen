importScripts('/_nuxt/workbox.dev.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.44ad7cf60c2c01e2e8df.js",
    "revision": "e596d2b9e256bcb11017a08f8ea2c1bb"
  },
  {
    "url": "/_nuxt/layouts/default.6322c20f9b3c5f837cda.js",
    "revision": "fafbb4cd098cc2efc56b5f4287f74245"
  },
  {
    "url": "/_nuxt/manifest.4f9224f83740ebefaaa5.js",
    "revision": "f3ae4b942acb8f058349341fc6a81a62"
  },
  {
    "url": "/_nuxt/pages/index.f1028fa6255a04408360.js",
    "revision": "11085593f0d5ded7ef4b346a43811794"
  },
  {
    "url": "/_nuxt/vendor.1777aa0fc406c7778bb1.js",
    "revision": "180c5b78b9de299b9706c4dfd722c190"
  }
], {
  "cacheId": "nuxt-onsen",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





