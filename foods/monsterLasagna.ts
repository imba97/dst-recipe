import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/monster-lasagna.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class MonsterLasagna extends FoodBase {
  _name = '怪物千层饼'
  _health = -20
  _hunger = 37.5
  _sanity = -20
  _rot = 6
  _cooking = 10
  _priority = 10
  _image = icon

  protected override _monster: ComparisonOperator = {
    ge: 2
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }
}
