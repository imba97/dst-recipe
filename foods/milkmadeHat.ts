import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/milkmade-hat.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import KelpFronds from '~/ingredients/kelpFronds'
import NakedNostrils from '~/ingredients/nakedNostrils'

export default class MilkmadeHat extends FoodBase {
  _name = '牛奶帽'
  _health = 0
  _hunger = 187.5
  _sanity = -5.3
  _rot = 0.5
  _cooking = 40
  _priority = 55
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        NakedNostrils
      ],
      condition: {
        ge: 1
      }
    },
    {
      ingredients: [
        KelpFronds
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _dairy: ComparisonOperator = {
    ge: 1
  }
}
