// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
// import Vue from 'vue'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration
    })
    app.vueApp.use(vuetify)
    // Vue.use(Vuetify)
})
