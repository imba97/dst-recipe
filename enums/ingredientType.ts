export const IngredientType = [
  'meat',
  'monster',
  'fish',
  'fruit',
  'vegetable',
  'egg',
  'sweetener',
  'dairy',
  'ice',
  'notEdible',
  'magic',
  'grease',
  'seed',
  'decorate'
] as const

export type IngredientTypeKey = typeof IngredientType[number]

export const IngredientProperty = IngredientType.map(type => `_${type}` as const)
