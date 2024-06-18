// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    typeCheck: true
  },

  modules: ["@nuxt/eslint", "nuxt-mongoose", "@nuxtjs/tailwindcss", "nuxt-mongoose"],

  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: 'models',
    devtools: true,
  },
})