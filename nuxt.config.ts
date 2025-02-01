import lodashImports from 'lodash-imports'

const lodash = lodashImports({ hasFrom: true })

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode'
  ],

  css: [
    '@unocss/reset/tailwind.css'
  ],

  colorMode: {
    classSuffix: ''
  },

  imports: {
    dirs: [
      'composables/**'
    ],
    imports: [
      ...lodash.imports
    ]
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },

  typescript: {
    tsConfig: {
      include: []
    }
  },

  ssr: false,

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
