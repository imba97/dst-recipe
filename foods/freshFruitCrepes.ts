import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/fresh-fruit-crepes.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Butter from '~/ingredients/butter'
import Honey from '~/ingredients/honey'

export default class FreshFruitCrepes extends FoodBase {
  _name = '鲜果可丽饼'
  _health = 60
  _hunger = 150
  _sanity = 15
  _rot = 10
  _cooking = 20
  _priority = 30
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition[] = [
    {
      ingredients: [
        Butter
      ],
      condition: {
        ge: 1
      }
    },
    {
      ingredients: [
        Honey
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _fruit: ComparisonOperator = {
    ge: 1.5
  }

  protected override _warlyOnly = true
}
