module.exports = {
  mode:'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-onsen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  plugins: ['~/plugins/onsenui'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: "Nuxt.js OnsenUI",
    lang: 'ja',
    start_url:'/nuxt-onsen-app/',
    short_name: 'NuxtOnsen',
    title: 'Nuxt.js OnsenUI',
    display: "standalone",
    icons: [
      {
          "src": "/nuxt-onsen-app/logo.png",
          "sizes": "144x144",
          "type": "image/png"
      }
  ],
  },
  workbox: {
    dev: true
  },
  router: {
    base: "/nuxt-onsen-app/"
  },
}

