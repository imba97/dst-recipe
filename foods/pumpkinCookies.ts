import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/pumpkin-cookies.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import HotPumpkin from '~/ingredients/hotPumpkin'
import Pumpkin from '~/ingredients/pumpkin'

export default class PumpkinCookies extends FoodBase {
  _name = '南瓜饼干'
  _health = 0
  _hunger = 37.5
  _sanity = 15
  _rot = 10
  _cooking = 40
  _priority = 10
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Pumpkin,
        HotPumpkin
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _sweetener: ComparisonOperator = {
    ge: 2
  }
}
