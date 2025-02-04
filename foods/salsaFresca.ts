import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/salsa-fresca.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Onion from '~/ingredients/onion'
import RoastedOnion from '~/ingredients/roastedOnion'
import RoastedTomaRoot from '~/ingredients/roastedTomaRoot'
import TomaRoot from '~/ingredients/tomaRoot'

export default class SalsaFresca extends FoodBase {
  _name = '生鲜萨尔萨酱'
  _health = 3
  _hunger = 25
  _sanity = 33
  _rot = 15
  _cooking = 10
  _priority = 20
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition[] = [
    {
      ingredients: [
        TomaRoot,
        RoastedTomaRoot
      ],
      condition: {
        ge: 1
      }
    },
    {
      ingredients: [
        Onion,
        RoastedOnion
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _meat: ComparisonOperator = {
    eq: 0
  }

  protected override _egg: ComparisonOperator = {
    eq: 0
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }
}
