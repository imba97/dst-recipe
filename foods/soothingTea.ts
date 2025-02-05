import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/soothing-tea.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import ForgetMeLots from '~/ingredients/forgetMeLots'

export default class SoothingTea extends FoodBase {
  _name = '舒缓茶'
  _health = 3
  _hunger = 0
  _sanity = 45
  _rot = 3
  _cooking = 20
  _priority = 1
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        ForgetMeLots
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _sweetener: ComparisonOperator = {
    gt: 0
  }

  protected override _ice: ComparisonOperator = {
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

  protected override _vegetable: ComparisonOperator = {
    eq: 0
  }

  protected override _egg: ComparisonOperator = {
    eq: 0
  }

  protected override _dairy: ComparisonOperator = {
    eq: 0
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }

  protected override _grease: ComparisonOperator = {
    eq: 0
  }
}
