export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["assets/scss/reset.scss"],
  ssr: false,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/common.scss";',
        },
      },
    },
  },
  modules: ["dayjs-nuxt"],
});
