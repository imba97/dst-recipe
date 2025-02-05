import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/steamed-twigs.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class SteamedTwigs extends FoodBase {
  _name = '蒸树枝'
  _health = 15
  _hunger = 100
  _sanity = 0
  _rot = 20
  _cooking = 10
  _priority = -5
  _image = icon

  protected override _notEdible: ComparisonOperator = {
    gt: 0
  }

  protected override _meat: ComparisonOperator = {
    eq: 0
  }

  protected override _monster: ComparisonOperator = {
    eq: 0
  }

  protected override _fish: ComparisonOperator = {
    eq: 0
  }

  protected override _egg: ComparisonOperator = {
    eq: 0
  }

  protected override _dairy: ComparisonOperator = {
    eq: 0
  }

  protected override _magic: ComparisonOperator = {
    eq: 0
  }

  protected override _grease: ComparisonOperator = {
    eq: 0
  }
}
