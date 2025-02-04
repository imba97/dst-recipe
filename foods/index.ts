import pinyin from 'pinyin'

const foodsModule = import.meta.glob('./*.ts', { eager: true }) as Record<string, { default: FoodBaseConstructor }>

const foods = Object.keys(foodsModule).map((path) => {
  const FoodBase = foodsModule[path].default
  const food = useFood(FoodBase)

  const pinyinName = _map(pinyin(food.name, {
    style: pinyin.STYLE_NORMAL
  }), ([first]) => first)

  const pinyinInitials = pinyinName.map(word => word[0]).join('')

  food.pinyin = {
    name: pinyinName.join(''),
    initials: pinyinInitials
  }

  return food
})

export {
  foods
}
