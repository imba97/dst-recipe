import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/honey-nuggets.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Honey from '~/ingredients/honey'

export default class HoneyNuggets extends FoodBase {
  _name = '蜜汁卤肉'
  _health = 20
  _hunger = 37.5
  _sanity = 5
  _rot = 15
  _cooking = 40
  _priority = 2
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Honey
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _meat: ComparisonOperator = {
    gt: 0,
    le: 1.5
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }
}
