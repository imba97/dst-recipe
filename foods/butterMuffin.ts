import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/butter-muffin.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import ButterflyWings from '~/ingredients/butterflyWings'
import MoonMothWings from '~/ingredients/moonMothWings'

export default class ButterMuffin extends FoodBase {
  _name = '蝴蝶松饼'
  _health = 20
  _hunger = 37.5
  _sanity = 5
  _rot = 15
  _cooking = 40
  _priority = 1
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        ButterflyWings,
        MoonMothWings
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
