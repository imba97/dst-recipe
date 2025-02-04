import type { IngredientTypeKey } from '~/enums/ingredientType'
import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/turkey-dinner.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Drumstick from '~/ingredients/drumstick'

export default class TurkeyDinner extends FoodBase {
  _name = '火鸡正餐'
  _health = 20
  _hunger = 75
  _sanity = 5
  _rot = 6
  _cooking = 60
  _priority = 10
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition[] = [
    {
      ingredients: [
        Drumstick
      ],
      condition: {
        ge: 2
      }
    }
  ]

  protected override _merge: IngredientTypeKey[][] = [
    ['vegetable', 'fruit']
  ]

  protected override _meat: ComparisonOperator = {
    gt: 1
  }

  protected override _vegetable: ComparisonOperator = {
    ge: 0.5
  }

  protected override _fruit: ComparisonOperator = {
    gt: 0
  }
}
