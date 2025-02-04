import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/jam.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class Jam extends FoodBase {
  _name = '果酱'
  _health = 3
  _hunger = 37.5
  _sanity = 5
  _rot = 15
  _cooking = 10
  _priority = 0
  _image = icon

  protected override _fruit: ComparisonOperator = {
    gt: 0
  }

  protected override _meat: ComparisonOperator = {
    eq: 0
  }

  protected override _vegetable?: ComparisonOperator = {
    eq: 0
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }
}
