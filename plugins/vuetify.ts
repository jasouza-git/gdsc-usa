import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
      },
    },  
  })
  app.vueApp.use(vuetify)
})
