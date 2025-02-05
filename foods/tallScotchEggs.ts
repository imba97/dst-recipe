import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/tall-scotch-eggs.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import TallbirdEgg from '~/ingredients/tallbirdEgg'

export default class TallScotchEggs extends FoodBase {
  _name = '苏格兰高鸟蛋'
  _health = 60
  _hunger = 150
  _sanity = 5
  _rot = 15
  _cooking = 40
  _priority = 10
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        TallbirdEgg
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _vegetable: ComparisonOperator = {
    ge: 1
  }
}
