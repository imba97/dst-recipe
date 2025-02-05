import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/flower-salad.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import CactusFlower from '~/ingredients/cactusFlower'

export default class FlowerSalad extends FoodBase {
  _name = '花沙拉'
  _health = 40
  _hunger = 12.5
  _sanity = 5
  _rot = 6
  _cooking = 10
  _priority = 10
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        CactusFlower
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _vegetable: ComparisonOperator = {
    ge: 2
  }

  protected override _meat: ComparisonOperator = {
    eq: 0
  }

  protected override _fruit: ComparisonOperator = {
    eq: 0
  }

  protected override _egg: ComparisonOperator = {
    eq: 0
  }

  protected override _sweetener: ComparisonOperator = {
    eq: 0
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }
}
