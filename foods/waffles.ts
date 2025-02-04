import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/waffles.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Berries from '~/ingredients/berries'
import Butter from '~/ingredients/butter'
import JuicyBerries from '~/ingredients/juicyBerries'
import RoastedBerries from '~/ingredients/roastedBerries'
import RoastedJuicyBerries from '~/ingredients/roastedJuicyBerries'

export default class Waffles extends FoodBase {
  _name = '华夫饼'
  _health = 60
  _hunger = 37.5
  _sanity = 5
  _rot = 6
  _cooking = 10
  _priority = 10
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition[] = [
    {
      ingredients: [
        Butter
      ],
      condition: {
        ge: 1
      }
    },
    {
      ingredients: [
        Berries,
        RoastedBerries,
        JuicyBerries,
        RoastedJuicyBerries
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _egg: ComparisonOperator = {
    gt: 0
  }
}
