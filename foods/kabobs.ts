import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/kabobs.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Twigs from '~/ingredients/twigs'

export default class Kabobs extends FoodBase {
  _name = '肉串'
  _health = 3
  _hunger = 37.5
  _sanity = 5
  _rot = 15
  _cooking = 40
  _priority = 5
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Twigs
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _meat: ComparisonOperator = {
    gt: 0
  }

  protected override _monster: ComparisonOperator = {
    le: 1
  }

  protected override _notEdible: ComparisonOperator = {
    le: 1
  }
}
