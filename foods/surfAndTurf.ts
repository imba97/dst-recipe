import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/surf-and-turf.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class SurfAndTurf extends FoodBase {
  _name = '海鲜牛排'
  _health = 60
  _hunger = 37.5
  _sanity = 33
  _rot = 10
  _cooking = 20
  _priority = 30
  _image = icon

  protected override _meat: ComparisonOperator = {
    ge: 2.5
  }

  protected override _fish: ComparisonOperator = {
    ge: 1.5
  }

  protected override _ice: ComparisonOperator = {
    eq: 0
  }
}
