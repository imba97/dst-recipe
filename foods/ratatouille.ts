import type { ComparisonOperator } from '~/types/comparisonOperator'
import icon from '~/assets/images/foods/ratatouille.png'
import { FoodBase } from '~/composables/food/foodBaseClass'

export default class Ratatouille extends FoodBase {
  _name = '蔬菜杂烩'
  _health = 3
  _hunger = 25
  _sanity = 5
  _rot = 15
  _cooking = 20
  _priority = 0
  _image = icon

  protected override _meat: ComparisonOperator = {
    eq: 0
  }

  protected override _vegetable: ComparisonOperator = {
    ge: 0.5
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }
}
