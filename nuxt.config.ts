// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/styles.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "Reflex",
      meta: [{ name: "description", content: "Programming and esports" }],
      link: [{ type: "image/png", rel: "icon", href: "/icon.png" }],
    },
  },

  routeRules: {
    "/**": {
      prerender: true,
    },
  },
});
