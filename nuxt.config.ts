// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  modules: ['@nuxt/eslint', 'nuxt-mongoose', '@nuxtjs/tailwindcss', '@nuxtjs/i18n'],

  eslint: {
    config: {
      stylistic: true,
    },
  },

  runtimeConfig: {
    public: {
      minNumberOfVotesPerParticipant: parseInt(process.env.MIN_NUMBER_OF_VOTES_PER_PARTICIPANT || '30', 10),
    },
    private: {
      eloKFactor: parseInt(process.env.ELO_K_FACTOR || '32', 10),
    },
  },
})
