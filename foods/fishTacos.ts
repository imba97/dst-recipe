import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/fish-tacos.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Corn from '~/ingredients/corn'
import CornCod from '~/ingredients/cornCod'
import Popcorn from '~/ingredients/popcorn'
import Popperfish from '~/ingredients/popperfish'

export default class FishTacos extends FoodBase {
  _name = '鱼肉玉米卷'
  _health = 20
  _hunger = 37.5
  _sanity = 5
  _rot = 6
  _cooking = 10
  _priority = 10
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Corn,
        CornCod,
        Popcorn,
        Popperfish
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _fish: ComparisonOperator = {
    gt: 0
  }
}
