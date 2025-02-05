import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/melonsicle.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Twigs from '~/ingredients/twigs'
import Watermelon from '~/ingredients/watermelon'

export default class Melonsicle extends FoodBase {
  _name = '西瓜冰棍'
  _health = 3
  _hunger = 12.5
  _sanity = 20
  _rot = 3
  _cooking = 10
  _priority = 10
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Watermelon
      ],
      condition: {
        ge: 1
      }
    },
    {
      ingredients: [
        Twigs
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _meat: ComparisonOperator = {
    eq: 0
  }

  protected override _vegetable: ComparisonOperator = {
    eq: 0
  }

  protected override _egg: ComparisonOperator = {
    eq: 0
  }

  protected override _ice: ComparisonOperator = {
    gt: 1
  }
}
