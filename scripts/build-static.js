import { buildStatic } from '@lvce-editor/server'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const root = path.join(__dirname, '..')

await buildStatic({
  root,
  folder: 'test/cases',
  prefix: 'lvce-editor/language-basics-desktop',
})
