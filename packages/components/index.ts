import {
  addComponentsDir,
  createResolver,
  defineNuxtModule,
  useLogger,
} from '@nuxt/kit'

export default defineNuxtModule({
  async setup(_options, _nuxt) {
    const logger = useLogger('@pkgs/components')
    const { resolve } = createResolver(import.meta.url)

    logger.info('Adding components directory')

    await addComponentsDir({
      extensions: ['vue'],
      path: resolve('./src'),
    })
  },
})
