import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/barnacle-linguine.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Barnacles from '~/ingredients/barnacles'
import CookedBarnacles from '~/ingredients/cookedBarnacles'

export default class BarnacleLinguine extends FoodBase {
  _name = '藤壶中细面'
  _health = 30
  _hunger = 75
  _sanity = 20
  _rot = 6
  _cooking = 40
  _priority = 30
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Barnacles,
        CookedBarnacles
      ],
      condition: {
        ge: 2
      }
    }
  ]

  protected override _vegetable: ComparisonOperator = {
    ge: 2
  }
}
