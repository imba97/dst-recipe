import type { PresetOrFactoryAwaitable } from 'unocss'

import { unoColors } from 'uno-colors'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

import presetTheme from 'unocss-preset-theme'
import { presetUseful } from 'unocss-preset-useful'

const themeColors = {
  light: {
    primary: '#4764cf'
  },
  dark: {
    primary: '#4764cf'
  }
}

const breakpoints = {
  'xs': '320px', // Extra small devices (e.g. phones)
  'sm': '480px', // Small devices (e.g. phones in landscape)
  'md': '768px', // Medium devices (e.g. tablets)
  'lg': '1024px', // Large devices (e.g. desktops)
  'xl': '1280px', // Extra large devices (e.g. large desktops)
  '2xl': '1536px', // 2x large devices (e.g. large monitors)
  '3xl': '1920px' // 3x large devices (e.g. ultra-wide monitors)
}

export default defineConfig({
  theme: {
    colors: unoColors(themeColors.light),
    breakpoints
  },
  shortcuts: [
    [/^clickable(-.*)?$/, ([, scale]) => `cursor-pointer transition active:scale${scale || '-95'}`]
  ],
  presets: [
    presetUno(),
    presetUseful() as PresetOrFactoryAwaitable<object>,
    presetAttributify(),
    presetIcons({
      scale: 1.2
    }),
    presetTypography(),
    presetTheme({
      theme: {
        dark: {
          colors: unoColors(themeColors.dark)
        }
      }
    }) as PresetOrFactoryAwaitable<object>
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
