import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/ceviche.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class Ceviche extends FoodBase {
  _name = '酸橘汁腌鱼'
  _health = 20
  _hunger = 25
  _sanity = 5
  _rot = 10
  _cooking = 10
  _priority = 20
  _image = icon

  protected override _fish: ComparisonOperator = {
    ge: 2
  }

  protected override _ice: ComparisonOperator = {
    gt: 0
  }

  protected override _egg: ComparisonOperator = {
    eq: 0
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }
}
