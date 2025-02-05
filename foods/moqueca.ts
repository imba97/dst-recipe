import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/moqueca.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Onion from '~/ingredients/onion'
import RoastedOnion from '~/ingredients/roastedOnion'
import RoastedTomaRoot from '~/ingredients/roastedTomaRoot'
import TomaRoot from '~/ingredients/tomaRoot'

export default class Moqueca extends FoodBase {
  _name = '海鲜杂烩'
  _health = 60
  _hunger = 112.5
  _sanity = 33
  _rot = 8
  _cooking = 40
  _priority = 30
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Onion,
        RoastedOnion
      ],
      condition: {
        ge: 1
      }
    },
    {
      ingredients: [
        TomaRoot,
        RoastedTomaRoot
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _fish: ComparisonOperator = {
    gt: 0
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }

  protected override _warlyOnly = true
}
