// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            sidebarBg: '#171717',
            mainBg: '#212121',
            userIcon: '#1497a6',
            icons: '#b4b4b4',
            iconHover: '#2f2f2f'
          },
        }
      },
    }
  }
})