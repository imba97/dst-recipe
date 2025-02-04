import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/froggle-bunwich.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import CookedFrogLegs from '~/ingredients/cookedFrogLegs'
import FrogLegs from '~/ingredients/frogLegs'

export default class FroggleBunwich extends FoodBase {
  _name = '蛙腿三明治'
  _health = 20
  _hunger = 37.5
  _sanity = 5
  _rot = 15
  _cooking = 40
  _priority = 1
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition[] = [
    {
      ingredients: [
        FrogLegs,
        CookedFrogLegs
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _vegetable: ComparisonOperator = {
    ge: 0.5
  }
}
