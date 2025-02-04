import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/honey-ham.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Honey from '~/ingredients/honey'

export default class HoneyHam extends FoodBase {
  _name = '蜜汁火腿'
  _health = 30
  _hunger = 75
  _sanity = 5
  _rot = 15
  _cooking = 40
  _priority = 2
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition[] = [
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
    gt: 1.5
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }
}
