import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/plain-omelette.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class PlainOmelette extends FoodBase {
  _name = '普通煎蛋'
  _health = 3
  _hunger = 50
  _sanity = 5
  _rot = 10
  _cooking = 20
  _priority = 0
  _image = icon

  protected override _egg: ComparisonOperator = {
    ge: 3
  }
}
