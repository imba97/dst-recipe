import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/guacamole.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import CactusFlesh from '~/ingredients/cactusFlesh'
import Moleworm from '~/ingredients/moleworm'
import RipeStoneFruit from '~/ingredients/ripeStoneFruit'

export default class Guacamole extends FoodBase {
  _name = '鳄梨酱'
  _health = 20
  _hunger = 37.5
  _sanity = 0
  _rot = 10
  _cooking = 10
  _priority = 10
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Moleworm
      ],
      condition: {
        ge: 1
      }
    },
    {
      ingredients: [
        CactusFlesh,
        RipeStoneFruit
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _fruit: ComparisonOperator = {
    eq: 0
  }
}
