import type { PinyinName } from '~/types/pinyin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import consola from 'consola'
import fs from 'fs-extra'
import pinyinLib from 'pinyin'

const r = (path: string) => fileURLToPath(new URL(path, import.meta.url))

const pinyin = (pinyinLib as unknown as { default: typeof pinyinLib }).default

const foodsDir = r('../foods')
const outputDir = r('../assets/datas')

const namesPinyin: Record<string, PinyinName> = {}

fs.readdirSync(foodsDir).forEach((file) => {
  if (file === 'index.ts') {
    return
  }

  const filePath = path.resolve(foodsDir, file)

  const content = fs.readFileSync(filePath)

  const [, name] = content.toString().match(/_name = '(.+)'/) || []

  if (!name) {
    return
  }

  const pinyinName = pinyin(name, {
    style: pinyin.STYLE_NORMAL
  }).map(([first]) => first)

  const pinyinInitials = pinyinName.map(word => word[0]).join('')

  namesPinyin[name] = {
    name: pinyinName.join(''),
    initials: pinyinInitials
  }
})

fs.ensureDirSync(outputDir)
fs.writeJsonSync(path.resolve(outputDir, 'pinyin.json'), namesPinyin)

consola.success(`Generated ${Object.keys(namesPinyin).length} pinyin names`)
