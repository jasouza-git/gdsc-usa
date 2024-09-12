// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
    //ssr: false, // Disable Server-side rendering
    // head: {
    //     titleTemplate: 'GDSC USA Website',
    //     title: 'GDSC USA Website',
    //     meta: [
    //         { charset: 'utf-8' },
    //         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //         { hid: 'description', name: 'description', content: '' },
    //         { name: 'format-detection', content: 'telephone=no' }
    //     ],
    //     link: [
    //         { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    //     ]
    // },
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
