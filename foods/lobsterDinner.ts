import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/lobster-dinner.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Butter from '~/ingredients/butter'
import WobsterBuild from '~/ingredients/wobsterBuild'

export default class LobsterDinner extends FoodBase {
  _name = '龙虾正餐'
  _health = 60
  _hunger = 37.5
  _sanity = 50
  _rot = 15
  _cooking = 20
  _priority = 25
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        WobsterBuild
      ],
      condition: {
        ge: 1
      }
    },
    {
      ingredients: [
        Butter
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _meat: ComparisonOperator = {
    ge: 1
  }

  protected override _fish: ComparisonOperator = {
    ge: 1
  }

  protected override _ice: ComparisonOperator = {
    eq: 0
  }
}
