import {
  addAutoImportDir,
  createResolver,
  defineNuxtModule,
  useLogger,
} from '@nuxt/kit'
import type { ModuleDefinition } from '@nuxt/schema'

export default defineNuxtModule({
  async setup(_options, _nuxt) {
    const logger = useLogger('@pkgs/composables')
    const { resolve } = createResolver(import.meta.url)

    logger.info('Adding auto-import directory')

    await addAutoImportDir(resolve('./src'))
  },
} as ModuleDefinition<never>)
