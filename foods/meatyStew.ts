import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/meaty-stew.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class MeatyStew extends FoodBase {
  _name = '肉汤'
  _health = 12
  _hunger = 150
  _sanity = 5
  _rot = 10
  _cooking = 15
  _priority = 0
  _image = icon

  protected override _meat: ComparisonOperator = {
    ge: 3
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }
}
