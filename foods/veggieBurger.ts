import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/veggie-burger.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import CookedLeafyMeat from '~/ingredients/cookedLeafyMeat'
import LeafyMeat from '~/ingredients/leafyMeat'
import Onion from '~/ingredients/onion'
import RoastedOnion from '~/ingredients/roastedOnion'

export default class VeggieBurger extends FoodBase {
  _name = '素食堡'
  _health = 30
  _hunger = 37.5
  _sanity = 33
  _rot = 6
  _cooking = 40
  _priority = 26
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        LeafyMeat,
        CookedLeafyMeat
      ],
      condition: {
        ge: 1
      }
    },
    {
      ingredients: [
        Onion,
        RoastedOnion
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _vegetable: ComparisonOperator = {
    ge: 2
  }
}
