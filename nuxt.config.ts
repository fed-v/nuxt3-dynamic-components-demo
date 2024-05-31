// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vee-validate/nuxt',
  ],
  css: [
    '@/assets/styles/reset.css',
    '@/assets/styles/base.css',
    '@/assets/styles/wavelo-global.css',
    '@/assets/styles/buttons.css',
],
})
