import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/figkabab.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import CookedFig from '~/ingredients/cookedFig'
import Fig from '~/ingredients/fig'
import Twigs from '~/ingredients/twigs'

export default class Figkabab extends FoodBase {
  _name = '无花果烤串'
  _health = 20
  _hunger = 37.5
  _sanity = 10
  _rot = 15
  _cooking = 20
  _priority = 30
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Fig,
        CookedFig
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

  protected override _meat: ComparisonOperator = {
    gt: 1
  }

  protected override _monster: ComparisonOperator = {
    le: 1
  }
}
