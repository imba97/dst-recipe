import type { PinyinName } from '~/types/pinyin'
import pinyinData from '~/assets/datas/pinyin.json'

export default function usePinyin(name: string): PinyinName {
  if (_has(pinyinData, name)) {
    return pinyinData[name] as PinyinName
  }

  return {
    name,
    initials: name
  }
}
