import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/taffy.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class Taffy extends FoodBase {
  _name = '太妃糖'
  _health = -3
  _hunger = 25
  _sanity = 15
  _rot = 15
  _cooking = 40
  _priority = 10
  _image = icon

  protected override _meat: ComparisonOperator = {
    eq: 0
  }

  protected override _sweetener: ComparisonOperator = {
    ge: 3
  }
}
