import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/beefy-greens.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import CookedLeafyMeat from '~/ingredients/cookedLeafyMeat'
import LeafyMeat from '~/ingredients/leafyMeat'

export default class BeefyGreens extends FoodBase {
  _name = '牛肉绿叶菜'
  _health = 40
  _hunger = 75
  _sanity = 5
  _rot = 6
  _cooking = 40
  _priority = 25
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        LeafyMeat,
        CookedLeafyMeat
      ],
      condition: {
        ge: 1
      }
    }
  ]

  protected override _vegetable: ComparisonOperator = {
    ge: 3
  }
}
