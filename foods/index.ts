import pinyin from 'tiny-pinyin'

const foodsModule = import.meta.glob('./*.ts', { eager: true }) as Record<string, { default: FoodBaseConstructor }>

const foods = Object.keys(foodsModule).map((path) => {
  const FoodBase = foodsModule[path].default
  const food = useFood(FoodBase)

  const pinyinName = pinyin.convertToPinyin(food.name, ',', true)
  const pinyinNameSplit = pinyinName.split(',')
  const pinyinInitials = pinyinNameSplit.map(item => item[0]).join('')

  food.pinyin = {
    name: pinyinNameSplit.join(''),
    initials: pinyinInitials
  }

  return food
})

export {
  foods
}
