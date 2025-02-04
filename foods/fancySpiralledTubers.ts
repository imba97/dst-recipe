import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/fancy-spiralled-tubers.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Potato from '~/ingredients/potato'
import RoastedPotato from '~/ingredients/roastedPotato'
import Twigs from '~/ingredients/twigs'

export default class FancySpiralledTubers extends FoodBase {
  _name = '花式回旋块茎'
  _health = 3
  _hunger = 37.5
  _sanity = 15
  _rot = 10
  _cooking = 15
  _priority = 10
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition[] = [
    {
      ingredients: [
        Potato,
        RoastedPotato
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

  protected override _monster: ComparisonOperator = {
    le: 1
  }

  protected override _notEdible: ComparisonOperator = {
    le: 2
  }

  protected override _meat: ComparisonOperator = {
    eq: 0
  }
}
