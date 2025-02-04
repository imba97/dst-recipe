import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/spicy-chili.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class SpicyChili extends FoodBase {
  _name = '辣椒炖肉'
  _health = 20
  _hunger = 37.5
  _sanity = 0
  _rot = 10
  _cooking = 10
  _priority = 10
  _image = icon

  protected override _meat: ComparisonOperator = {
    ge: 1.5
  }

  protected override _vegetable: ComparisonOperator = {
    ge: 1.5
  }
}
