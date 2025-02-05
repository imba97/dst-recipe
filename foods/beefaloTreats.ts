import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/beefalo-treats.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import ForgetMeLots from '~/ingredients/forgetMeLots'

export default class BeefaloTreats extends FoodBase {
  _name = '皮弗娄牛零食'
  _health = 75
  _hunger = 25
  _sanity = 0
  _rot = 20
  _cooking = 40
  _priority = -4
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

  protected override _seed: ComparisonOperator = {
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
