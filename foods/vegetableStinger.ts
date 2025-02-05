import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/vegetable-stinger.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Asparagus from '~/ingredients/asparagus'
import RoastedAsparagus from '~/ingredients/roastedAsparagus'
import RoastedTomaRoot from '~/ingredients/roastedTomaRoot'
import TomaRoot from '~/ingredients/tomaRoot'

export default class VegetableStinger extends FoodBase {
  _name = '蔬菜鸡尾酒'
  _health = 3
  _hunger = 25
  _sanity = 33
  _rot = 15
  _cooking = 10
  _priority = 15
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Asparagus,
        RoastedAsparagus,
        TomaRoot,
        RoastedTomaRoot
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _vegetable: ComparisonOperator = {
    gt: 2
  }

  protected override _ice: ComparisonOperator = {
    ge: 1
  }

  protected override _meat: ComparisonOperator = {
    eq: 0
  }

  protected override _egg: ComparisonOperator = {
    eq: 0
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }
}
