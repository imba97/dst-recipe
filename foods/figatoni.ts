import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/figatoni.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import CookedFig from '~/ingredients/cookedFig'
import Fig from '~/ingredients/fig'

export default class Figatoni extends FoodBase {
  _name = '无花果意面'
  _health = 30
  _hunger = 56.25
  _sanity = 15
  _rot = 6
  _cooking = 40
  _priority = 30
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Fig,
        CookedFig
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _vegetable: ComparisonOperator = {
    gt: 2
  }

  protected override _meat: ComparisonOperator = {
    eq: 0
  }
}
