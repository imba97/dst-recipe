import type { IngredientTypeKey } from '~/enums/ingredientType'

export default function parseIngredientName(type: IngredientTypeKey) {
  switch (type) {
    case 'meat': return '肉度'
    case 'monster': return '怪物度'
    case 'fish': return '鱼度'
    case 'fruit': return '水果度'
    case 'vegetable': return '蔬菜度'
    case 'egg': return '蛋度'
    case 'sweetener': return '甜味剂度'
    case 'dairy': return '乳制品度'
    case 'ice': return '冰度'
    case 'notEdible': return '不可食用度'
    case 'magic': return '魔法度'
    case 'grease': return '油脂度'
    case 'seed': return '种子度'
    case 'decorate': return '装饰度'
  }
}
