import {
  addComponentsDir,
  createResolver,
  defineNuxtModule,
  useLogger,
} from '@nuxt/kit'
import type { ModuleDefinition } from '@nuxt/schema'

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
} as ModuleDefinition<never>)
