import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/jellybeans.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import RoyalJelly from '~/ingredients/royalJelly'

export default class Jellybeans extends FoodBase {
  _name = '彩虹糖豆'
  _health = 122
  _hunger = 0
  _sanity = 5
  _rot = 0
  _cooking = 50
  _priority = 12
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition[] = [
    {
      ingredients: [
        RoyalJelly
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _monster: ComparisonOperator = {
    eq: 0
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }
}
