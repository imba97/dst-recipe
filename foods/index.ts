const foodsModule = import.meta.glob('./*.ts', { eager: true }) as Record<string, { default: FoodBaseConstructor }>

const foods = Object.keys(foodsModule).map((path) => {
  const FoodBase = foodsModule[path].default
  const food = useFood(FoodBase)

  food.pinyin = usePinyin(food.name)

  return food
})

export {
  foods
}
