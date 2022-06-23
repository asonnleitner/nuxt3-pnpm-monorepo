import {
  type UserConfig,
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'input-base',
      'appearance-none rounded-none border border-gray-500 bg-transparent px-3 py-2 text-base shadow-none sm:text-sm focus:(border-blue-600 outline outline-2 outline-offset-2 outline-transparent ring-1 ring-blue-600 ring-offset-0 ring-offset-transparent)',
    ],
    [
      'button-base',
      'inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:(outline-none ring-2 ring-blue-500)',
    ],
    [
      'button-primary',
      'border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    ],
    [
      'button-secondary',
      'border-transparent bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    ],
    ['card-base', 'bg-white overflow-hidden shadow rounded-lg'],
    ['card-body', 'px-4 py-5 sm:p-6'],
    ['card-footer', 'bg-gray-50 px-4 py-4 sm:px-6'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      prefix: '',
      scale: 1.2,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
} as UserConfig)
