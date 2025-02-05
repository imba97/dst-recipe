import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/frozen-banana-daiquiri.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Banana from '~/ingredients/banana'
import CookedBanana from '~/ingredients/cookedBanana'

export default class FrozenBananaDaiquiri extends FoodBase {
  _name = '冰香蕉冻唇蜜'
  _health = 30
  _hunger = 18.75
  _sanity = 15
  _rot = 15
  _cooking = 40
  _priority = 2
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Banana,
        CookedBanana
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _ice: ComparisonOperator = {
    ge: 1
  }

  protected override _meat: ComparisonOperator = {
    eq: 1
  }

  protected override _fish: ComparisonOperator = {
    eq: 1
  }
}
