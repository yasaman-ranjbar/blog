export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'practice',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bulma/css/bulma.css',
    '@/assets/main.css',
    '@/assets/blog.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/vue-easy-toast.js' , mode : 'client'},
    '@/plugins/message.js'
  ],

  transpile: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL : 'https://jsonplaceholder.ir',
    headers: {
      Authorization : 'Bearer token'
    },
    params: {
      _limit : 10
    }
  },

  // router: {
  //   middleware: ['auth']
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
