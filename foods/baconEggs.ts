import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/bacon-eggs.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class BaconEggs extends FoodBase {
  _name = '培根煎蛋'
  _health = 20
  _hunger = 75
  _sanity = 5
  _rot = 20
  _cooking = 40
  _priority = 10
  _image = icon

  protected override _meat: ComparisonOperator = {
    ge: 1
  }

  protected override _egg: ComparisonOperator = {
    ge: 1
  }

  protected override _vegetable?: ComparisonOperator = {
    eq: 0
  }
}
