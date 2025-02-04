import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/creamy-potato-puree.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import Garlic from '~/ingredients/garlic'
import Potato from '~/ingredients/potato'
import RoastedPotato from '~/ingredients/roastedPotato'
import RoastGarlic from '~/ingredients/roastGarlic'

export default class CreamyPotatoPuree extends FoodBase {
  _name = '奶油土豆泥'
  _health = 20
  _hunger = 37.5
  _sanity = 33
  _rot = 15
  _cooking = 20
  _priority = 20
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition[] = [
    {
      ingredients: [
        Potato,
        RoastedPotato
      ],
      condition: {
        ge: 2
      }
    },
    {
      ingredients: [
        Garlic,
        RoastGarlic
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _meat: ComparisonOperator = {
    eq: 0
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }
}
