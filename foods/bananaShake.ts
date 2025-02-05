import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/banana-shake.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Banana from '~/ingredients/banana'
import CookedBanana from '~/ingredients/cookedBanana'

export default class BananaShake extends FoodBase {
  _name = '香蕉奶昔'
  _health = 8
  _hunger = 25
  _sanity = 33
  _rot = 15
  _cooking = 10
  _priority = 1
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Banana,
        CookedBanana
      ],
      condition: {
        ge: 2
      }
    }
  ]

  protected override _meat: ComparisonOperator = {
    eq: 0
  }

  protected override _monster: ComparisonOperator = {
    eq: 0
  }

  protected override _fish: ComparisonOperator = {
    eq: 0
  }
}
