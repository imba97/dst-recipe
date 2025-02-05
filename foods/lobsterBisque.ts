import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/lobster-bisque.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import WobsterBuild from '~/ingredients/wobsterBuild'

export default class LobsterBisque extends FoodBase {
  _name = '龙虾汤'
  _health = 60
  _hunger = 25
  _sanity = 10
  _rot = 10
  _cooking = 10
  _priority = 30
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        WobsterBuild
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _ice: ComparisonOperator = {
    gt: 0
  }
}
