import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/seafood-gumbo.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class SeafoodGumbo extends FoodBase {
  _name = '海鲜浓汤'
  _health = 40
  _hunger = 37.5
  _sanity = 20
  _rot = 10
  _cooking = 20
  _priority = 10
  _image = icon

  protected override _fish: ComparisonOperator = {
    gt: 2
  }
}
