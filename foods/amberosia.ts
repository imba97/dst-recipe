import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/amberosia.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import CollectedDust from '~/ingredients/collectedDust'

export default class Amberosia extends FoodBase {
  _name = '琥珀美食'
  _health = 0
  _hunger = 12.5
  _sanity = 12.5
  _rot = 0
  _cooking = 40
  _priority = 100
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        CollectedDust
      ],
      condition: {
        ge: 1
      }
    }
  ]
}
