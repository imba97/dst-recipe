import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/ice-cream.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class IceCream extends FoodBase {
  _name = '冰淇淋'
  _health = 0
  _hunger = 25
  _sanity = 50
  _rot = 3
  _cooking = 10
  _priority = 10
  _image = icon

  protected override _sweetener: ComparisonOperator = {
    gt: 0
  }

  protected override _dairy: ComparisonOperator = {
    gt: 0
  }

  protected override _ice: ComparisonOperator = {
    gt: 0
  }

  protected override _meat: ComparisonOperator = {
    eq: 0
  }

  protected override _vegetable: ComparisonOperator = {
    eq: 0
  }

  protected override _egg: ComparisonOperator = {
    eq: 0
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }
}
