import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/hot-dragon-chili-salad.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import DragonFruit from '~/ingredients/dragonFruit'
import Pepper from '~/ingredients/pepper'
import PreparedDragonFruit from '~/ingredients/preparedDragonFruit'
import RoastedPepper from '~/ingredients/roastedPepper'

export default class HotDragonChiliSalad extends FoodBase {
  _name = '辣龙椒沙拉'
  _health = -3
  _hunger = 25
  _sanity = 10
  _rot = 15
  _cooking = 15
  _priority = 30
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Pepper,
        RoastedPepper
      ],
      condition: {
        ge: 1
      }
    },
    {
      ingredients: [
        DragonFruit,
        PreparedDragonFruit
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _meat: ComparisonOperator = {
    ge: 0
  }

  protected override _egg: ComparisonOperator = {
    ge: 0
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }

  protected override _warlyOnly = true
}
