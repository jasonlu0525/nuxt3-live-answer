// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
  css: ["@/assets/stylesheets/all.scss"],
  router: {
    options: {
      linkActiveClass: "active",
      linkExactActiveClass: "active",
    },
  },
  modules: ["@vee-validate/nuxt", "@pinia/nuxt"],
});
