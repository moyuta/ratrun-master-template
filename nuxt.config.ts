export default defineNuxtConfig({
  devtools: { enabled: true },
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
})
