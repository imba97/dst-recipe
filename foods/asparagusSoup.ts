import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/asparagus-soup.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Asparagus from '~/ingredients/asparagus'
import RoastedAsparagus from '~/ingredients/roastedAsparagus'

export default class AsparagusSoup extends FoodBase {
  _name = '芦笋汤'
  _health = 20
  _hunger = 18.75
  _sanity = 5
  _rot = 15
  _cooking = 10
  _priority = 10
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Asparagus,
        RoastedAsparagus
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _vegetable: ComparisonOperator = {
    gt: 2
  }

  protected override _meat: ComparisonOperator = {
    eq: 0
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }
}
