import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/fruit-medley.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class FruitMedley extends FoodBase {
  _name = '水果圣代'
  _health = 20
  _hunger = 25
  _sanity = 5
  _rot = 6
  _cooking = 10
  _priority = 0
  _image = icon

  protected override _fruit: ComparisonOperator = {
    ge: 3
  }

  protected override _meat: ComparisonOperator = {
    eq: 0
  }

  protected override _vegetable: ComparisonOperator = {
    eq: 0
  }
}
