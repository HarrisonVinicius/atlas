export default {
  ssr: true,

  srcDir: 'app',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Atlas - gitHub search',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/variables/colors.sass',
    '@/assets/styles/fonts.sass',
    '@/assets/styles/global.sass',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-scrollto', mode: 'client' },
    { src: '~/plugins/SimpleSVG', mode: 'client' },
    { src: '~/plugins/vue-money', mode: 'client' },
    { src: '~/plugins/vue-lottie', mode: 'client' },
    { src: '~/plugins/vue-scroll-stop', mode: 'client' },
  ],

  env: {
    baseUrl: process.env.BASE_URL,
    Authorization: process.env.AUTHORIZATION,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/style-resources',
    // https://www.npmjs.com/package/vue-scrollto
    'vue-scrollto/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  styleResources: {
    sass: ['./assets/styles/variables/*.sass'],
  },
}
