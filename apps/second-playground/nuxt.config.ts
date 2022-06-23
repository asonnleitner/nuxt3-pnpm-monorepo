import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@pkgs/components',
    '@pkgs/composables',
  ],

  unocss: {
    preflight: true,
    configFile: '../../unocss.config.ts',
  },
})
