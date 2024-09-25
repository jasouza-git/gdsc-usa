# GDSC Website

## Plans
- Components
  ![](plan/components.svg)

### Running
```bash
# Setup
npm install
# Start Server
npm run dev
# Build Production
npm run build
```

### Installation
```bash
# Setup NuxtJS
echo -e "npm\nyes" | npx nuxi@latest init .
npm i

# Install vuetify (https://vuetifyjs.com/en/getting-started/installation/#manual-setup)
npm i -D vuetify vite-plugin-vuetify
npm i @mdi/font
# Setup vuetify
sed -i "1i\import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'" nuxt.config.ts
sed -i '/export default defineNuxtConfig({/a\  vite: {\n    vue: {\n      template: {\n        transformAssetUrls,\n      },\n    },\n  },' nuxt.config.ts
sed -i '/export default defineNuxtConfig({/a\  modules: [\n    (_options, nuxt) => {\n      nuxt.hooks.hook("vite:extendConfig", (config) => {\n        // @ts-expect-error\n        config.plugins.push(vuetify({ autoImport: true }))\n      })\n    },\n  ],' nuxt.config.ts
sed -i '/export default defineNuxtConfig({/a\  build: {\n    transpile: ["vuetify"],\n  },' nuxt.config.ts
mkdir -p plugins
cat <<EOF > plugins/vuetify.ts
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
  })
  app.vueApp.use(vuetify)
})
EOF

# Install Tailwind CSS (https://tailwindcss.com/docs/guides/nuxtjs)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
# Setup Tailwind CSS (Later added some plugins in tailwind.config.js)
sed -i '/export default defineNuxtConfig({/a\  postcss: {\n    plugins: {\n      tailwindcss: {},\n      autoprefixer: {},\n    },\n  },' nuxt.config.ts
sed -i '/^\s*content: \[\s*\],/c\  content: [\n    "./components/**/*.{js,vue,ts}",\n    "./layouts/**/*.vue",\n    "./pages/**/*.vue",\n    "./plugins/**/*.{js,ts}",\n    "./app.vue",\n    "./error.vue",\n  ],' tailwind.config.js
mkdir -p assets/css
cat <<EOF > assets/css/main.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF
sed -i '/export default defineNuxtConfig({/a\  css: [\n    "~/assets/css/main.css",\n  ],' nuxt.config.ts

# Directory
mkdir -p plan pages components
sed -i '/export default defineNuxtConfig({/a\  app: {\n    head: {\n      titleTemplate: "GDSC USA Website",\n      title: "GDSC USA Website",\n      meta: [\n        { charset: "utf-8" },\n        { name: "viewport", content: "width=device-width, initial-scale=1" },\n        { hid: "description", name: "description", content: "" },\n        { name: "format-detection", content: "telephone=no" }\n      ],\n      link: [\n        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },\n      ]\n    },\n  },' nuxt.config.ts

# Install fontawesome (https://vuetifyjs.com/en/features/icon-fonts/#fa-5-css)
#npx nuxi@latest module add @vesp/nuxt-fontawesome
#npm i -D @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
npm install @fortawesome/fontawesome-free -D
#npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/vue-fontawesome
# Install pinia
#npm install pinia
# Build
npm run build
npm run preview
```
