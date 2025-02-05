import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/stuffed-fish-heads.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Barnacles from '~/ingredients/barnacles'
import CookedBarnacles from '~/ingredients/cookedBarnacles'

export default class StuffedFishHeads extends FoodBase {
  _name = '酿鱼头'
  _health = 20
  _hunger = 75
  _sanity = 0
  _rot = 3
  _cooking = 40
  _priority = 26
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Barnacles,
        CookedBarnacles
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _fish: ComparisonOperator = {
    ge: 1.25
  }
}
