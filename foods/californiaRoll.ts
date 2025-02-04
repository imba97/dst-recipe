import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/california-roll.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import CookedKelpFronds from '~/ingredients/cookedKelpFronds'
import DriedKelpFronds from '~/ingredients/driedKelpFronds'
import KelpFronds from '~/ingredients/kelpFronds'

export default class CaliforniaRoll extends FoodBase {
  _name = '加州卷'
  _health = 20
  _hunger = 37.5
  _sanity = 10
  _rot = 10
  _cooking = 10
  _priority = 20
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition[] = [
    {
      ingredients: [
        KelpFronds,
        CookedKelpFronds,
        DriedKelpFronds
      ],
      condition: {
        eq: 2
      }
    }
  ]

  protected override _fish: ComparisonOperator = {
    ge: 1
  }
}
