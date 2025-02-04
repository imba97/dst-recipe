import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/monster-tartare.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class MonsterTartare extends FoodBase {
  _name = '怪物鞑靼'
  _health = -20
  _hunger = 62.5
  _sanity = -20
  _rot = 10
  _cooking = 10
  _priority = 30
  _image = icon

  protected override _monster: ComparisonOperator = {
    ge: 2
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }

  protected override _warlyOnly = true
}
