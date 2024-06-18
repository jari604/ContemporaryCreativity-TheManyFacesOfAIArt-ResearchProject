// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    typeCheck: true
  },

  modules: ["@nuxt/eslint", "nuxt-mongoose", "@nuxtjs/tailwindcss", "nuxt-mongoose"],

  eslint: {
    config: {
      stylistic: true
    }
  },
})