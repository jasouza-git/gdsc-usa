// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({

    build: {
        transpile: ['vuetify'],
    },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({ autoImport: true }))
            })
        },
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    css: [
        '~/assets/css/style.css',
        '@fortawesome/fontawesome-free/css/all.css',
    ],
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    sourcemap: {
        server: true,
        client: true
      }
})
