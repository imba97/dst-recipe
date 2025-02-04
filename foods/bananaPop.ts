import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/banana-pop.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Banana from '~/ingredients/banana'
import CookedBanana from '~/ingredients/cookedBanana'
import Twigs from '~/ingredients/twigs'

export default class BananaPop extends FoodBase {
  _name = '香蕉冻'
  _health = 20
  _hunger = 12.5
  _sanity = 33
  _rot = 3
  _cooking = 10
  _priority = 20
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition[] = [
    {
      ingredients: [
        Banana,
        CookedBanana
      ],
      condition: {
        ge: 1
      }
    },
    {
      ingredients: [
        Twigs
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _ice: ComparisonOperator = {
    ge: 0
  }

  protected override _meat: ComparisonOperator = {
    eq: 0
  }

  protected override _fish: ComparisonOperator = {
    eq: 0
  }
}
