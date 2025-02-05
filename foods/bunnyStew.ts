import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/bunny-stew.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class BunnyStew extends FoodBase {
  _name = '炖兔子'
  _health = 20
  _hunger = 37.5
  _sanity = 5
  _rot = 10
  _cooking = 10
  _priority = 1
  _image = icon

  protected override _meat: ComparisonOperator = {
    gt: 0,
    lt: 1
  }

  protected override _ice: ComparisonOperator = {
    ge: 2
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 1
  }
}
