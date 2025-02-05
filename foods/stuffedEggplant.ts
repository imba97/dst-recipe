import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/stuffed-eggplant.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import BraisedEggplant from '~/ingredients/braisedEggplant'
import Eggplant from '~/ingredients/eggplant'

export default class StuffedEggplant extends FoodBase {
  _name = '酿茄子'
  _health = 3
  _hunger = 37.5
  _sanity = 5
  _rot = 15
  _cooking = 40
  _priority = 1
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Eggplant,
        BraisedEggplant
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _vegetable: ComparisonOperator = {
    gt: 1
  }
}
