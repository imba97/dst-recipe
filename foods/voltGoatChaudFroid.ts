import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/volt-goat-chaud-froid.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import VoltGoatHorn from '~/ingredients/voltGoatHorn'

export default class VoltGoatChaudFroid extends FoodBase {
  _name = '伏特羊肉冻'
  _health = 3
  _hunger = 37.5
  _sanity = 10
  _rot = 10
  _cooking = 40
  _priority = 30
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        VoltGoatHorn
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _sweetener: ComparisonOperator = {
    ge: 2
  }

  protected override _meat: ComparisonOperator = {
    eq: 0
  }

  protected override _warlyOnly = true
}
