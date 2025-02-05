import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/barnacle-nigiri.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Barnacles from '~/ingredients/barnacles'
import CookedBarnacles from '~/ingredients/cookedBarnacles'
import CookedKelpFronds from '~/ingredients/cookedKelpFronds'
import KelpFronds from '~/ingredients/kelpFronds'

export default class BarnacleNigiri extends FoodBase {
  _name = '藤壶握寿司'
  _health = 40
  _hunger = 37.5
  _sanity = 15
  _rot = 10
  _cooking = 10
  _priority = 30
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Barnacles,
        CookedBarnacles
      ],
      condition: {
        ge: 1
      }
    },
    {
      ingredients: [
        KelpFronds,
        CookedKelpFronds
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _egg: ComparisonOperator = {
    ge: 1
  }
}
