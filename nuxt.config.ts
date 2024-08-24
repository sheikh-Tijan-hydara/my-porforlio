import Aura from "@primevue/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@primevue/nuxt-module", "@nuxtjs/tailwindcss"],
  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
},
  css: ["~/assets/css/tailwind.css", '@fortawesome/fontawesome-svg-core/styles.css'],
});
