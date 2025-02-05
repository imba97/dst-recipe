import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/asparagazpacho.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Asparagus from '~/ingredients/asparagus'
import RoastedAsparagus from '~/ingredients/roastedAsparagus'

export default class Asparagazpacho extends FoodBase {
  _name = '芦笋冷汤'
  _health = 3
  _hunger = 25
  _sanity = 10
  _rot = 15
  _cooking = 10
  _priority = 30
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Asparagus,
        RoastedAsparagus
      ],
      condition: {
        ge: 2
      }
    }
  ]

  protected override _ice: ComparisonOperator = {
    ge: 2
  }

  protected override _warlyOnly = true
}
