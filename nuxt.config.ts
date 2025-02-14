// https://nuxt.com/docs/api/configuration/nuxt-config
const moviesSearchTheme = {
  dark: true,
  colors: {
    background: '#020517',
  },
}
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiKey: '00e0fd9f05ba86cc5cacf750b0c2be16',
    },
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt', 
['vuetify-nuxt-module', {
      moduleOptions: {},
      vuetifyOptions: {
        icons: {
          defaultSet: 'mdi',
          sets: ['mdi', 'fa']
        },
        theme: {
          defaultTheme: 'moviesSearchTheme',
          themes: {
            moviesSearchTheme,
          },
        },
      },
    }]
  ],
})
