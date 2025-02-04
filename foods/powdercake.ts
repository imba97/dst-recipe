import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/powdercake.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Corn from '~/ingredients/corn'
import CornCod from '~/ingredients/cornCod'
import Honey from '~/ingredients/honey'
import Popcorn from '~/ingredients/popcorn'
import Popperfish from '~/ingredients/popperfish'
import Twigs from '~/ingredients/twigs'

export default class Powdercake extends FoodBase {
  _name = '芝士蛋糕'
  _health = -3
  _hunger = 0
  _sanity = 0
  _rot = 18750
  _cooking = 10
  _priority = 10
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition[] = [
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
    },
    {
      ingredients: [
        Honey
      ],
      condition: {
        ge: 1
      }
    },
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
}
