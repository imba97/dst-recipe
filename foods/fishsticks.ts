import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/fishsticks.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Twigs from '~/ingredients/twigs'

export default class Fishsticks extends FoodBase {
  _name = '炸鱼排'
  _health = 40
  _hunger = 37.5
  _sanity = 5
  _rot = 10
  _cooking = 40
  _priority = 10
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition[] = [
    {
      ingredients: [
        Twigs
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _fish: ComparisonOperator = {
    gt: 0
  }

  protected override _notEdible: ComparisonOperator = {
    gt: 0,
    le: 1
  }
}
