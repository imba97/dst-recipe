import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/dragonpie.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import DragonFruit from '~/ingredients/dragonFruit'
import PreparedDragonFruit from '~/ingredients/preparedDragonFruit'

export default class Dragonpie extends FoodBase {
  _name = '火龙果派'
  _health = 40
  _hunger = 75
  _sanity = 5
  _rot = 15
  _cooking = 40
  _priority = 1
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        DragonFruit,
        PreparedDragonFruit
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _meat: ComparisonOperator = {
    eq: 1
  }
}
