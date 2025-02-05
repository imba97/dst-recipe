import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/mandrake-soup.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Mandrake from '~/ingredients/mandrake'

export default class MandrakeSoup extends FoodBase {
  _name = '曼德拉草汤'
  _health = 100
  _hunger = 150
  _sanity = 5
  _rot = 6
  _cooking = 60
  _priority = 10
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Mandrake
      ],
      condition: {
        ge: 1
      }
    }
  ]
}
