import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/jelly-salad.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import CookedLeafyMeat from '~/ingredients/cookedLeafyMeat'
import LeafyMeat from '~/ingredients/leafyMeat'

export default class JellySalad extends FoodBase {
  _name = '果冻沙拉'
  _health = 0
  _hunger = 37.5
  _sanity = 50
  _rot = 6
  _cooking = 40
  _priority = 50
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        LeafyMeat,
        CookedLeafyMeat
      ],
      condition: {
        ge: 2
      }
    }
  ]

  protected override _sweetener: ComparisonOperator = {
    ge: 2
  }
}
