import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/pierogi.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class Pierogi extends FoodBase {
  _name = '波兰水饺'
  _health = 40
  _hunger = 37.5
  _sanity = 5
  _rot = 20
  _cooking = 20
  _priority = 5
  _image = icon

  protected override _meat: ComparisonOperator = {
    gt: 0
  }

  protected override _vegetable: ComparisonOperator = {
    ge: 0.5
  }

  protected override _egg: ComparisonOperator = {
    gt: 0
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }
}
