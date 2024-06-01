// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },
  modules: [
    '@vee-validate/nuxt',
  ],

  css: [
    '@/assets/styles/reset.css',
    '@/assets/styles/wavelo-global.css',
    '@/assets/styles/global.css',
  ],

  app: {
    head: {

        // Load external stylesheets
        link: [ 
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap' } 
        ]
        
    }
  },

})
