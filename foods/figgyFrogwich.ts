import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/figgy-frogwich.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import CookedFig from '~/ingredients/cookedFig'
import CookedFrogLegs from '~/ingredients/cookedFrogLegs'
import Fig from '~/ingredients/fig'
import FrogLegs from '~/ingredients/frogLegs'

export default class FiggyFrogwich extends FoodBase {
  _name = '无花果蛙腿三明治'
  _health = 20
  _hunger = 25
  _sanity = 5
  _rot = 15
  _cooking = 20
  _priority = 1
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Fig,
        CookedFig
      ],
      condition: {
        ge: 1
      }
    },
    {
      ingredients: [
        FrogLegs,
        CookedFrogLegs
      ],
      condition: {
        ge: 1
      }
    }
  ]
}
