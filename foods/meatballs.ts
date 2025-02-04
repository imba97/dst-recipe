import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/meatballs.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class Meatballs extends FoodBase {
  _name = '肉丸'
  _health = 3
  _hunger = 62.5
  _sanity = 5
  _rot = 10
  _cooking = 15
  _priority = -1
  _image = icon

  protected override _meat: ComparisonOperator = {
    gt: 0
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }
}
