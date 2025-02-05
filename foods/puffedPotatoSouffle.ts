import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/puffed-potato-souffle.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Potato from '~/ingredients/potato'
import RoastedPotato from '~/ingredients/roastedPotato'

export default class PuffedPotatoSouffle extends FoodBase {
  _name = '蓬松土豆蛋奶酥'
  _health = 20
  _hunger = 37.5
  _sanity = 15
  _rot = 10
  _cooking = 40
  _priority = 30
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Potato,
        RoastedPotato
      ],
      condition: {
        ge: 2
      }
    }
  ]

  protected override _egg: ComparisonOperator = {
    ge: 1
  }

  protected override _meat: ComparisonOperator = {
    eq: 0
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }

  protected override _warlyOnly = true
}
