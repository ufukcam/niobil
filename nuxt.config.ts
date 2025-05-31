// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxtjs/i18n"],
  app: {
    head: {
      title: 'Niobil OÜ | Kodix',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Niobil - Teknoloji Çözümleri' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo.svg' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo.svg' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  runtimeConfig: {
      public: {
          supabaseUrl: process.env.SUPABASE_URL,
          supabaseKey: process.env.SUPABASE_KEY,
      },
  },
  i18n: {
    lazy: false,
        langDir: "locales",
        strategy: "prefix",
        defaultLocale: "tr",
        detectBrowserLanguage: {
            fallbackLocale: "tr",
            useCookie: true,
            alwaysRedirect: true,
    },
    locales: [
        { code: "tr", iso: "tr-TR", file: "tr-TR.json" },
        { code: "en", iso: "en-US", file: "en-US.json" }
    ],
  },
  vite: {
      build: {
          sourcemap: false,
      },
  },
});