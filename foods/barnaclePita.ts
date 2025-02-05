import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/barnacle-pita.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Barnacles from '~/ingredients/barnacles'
import CookedBarnacles from '~/ingredients/cookedBarnacles'

export default class BarnaclePita extends FoodBase {
  _name = '藤壶皮塔饼'
  _health = 20
  _hunger = 37.5
  _sanity = 5
  _rot = 15
  _cooking = 40
  _priority = 25
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Barnacles,
        CookedBarnacles
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _vegetable: ComparisonOperator = {
    ge: 0.5
  }
}
