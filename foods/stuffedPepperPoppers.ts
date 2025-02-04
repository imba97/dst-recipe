import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/stuffed-pepper-poppers.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Pepper from '~/ingredients/pepper'
import RoastedPepper from '~/ingredients/roastedPepper'

export default class StuffedPepperPoppers extends FoodBase {
  _name = '爆炒填馅辣椒'
  _health = 30
  _hunger = 25
  _sanity = -5
  _rot = 15
  _cooking = 40
  _priority = 20
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition[] = [
    {
      ingredients: [
        Pepper,
        RoastedPepper
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
