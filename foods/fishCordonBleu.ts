import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/fish-cordon-bleu.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import CookedFrogLegs from '~/ingredients/cookedFrogLegs'
import FrogLegs from '~/ingredients/frogLegs'

export default class FishCordonBleu extends FoodBase {
  _name = '蓝带鱼排'
  _health = 20
  _hunger = 37.5
  _sanity = -10
  _rot = 8
  _cooking = 40
  _priority = 30
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        FrogLegs,
        CookedFrogLegs
      ],
      condition: {
        eq: 2
      }
    }
  ]

  protected override _fish: ComparisonOperator = {
    ge: 1
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }

  protected override _warlyOnly = true
}
