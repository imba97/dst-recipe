import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/leafy-meatloaf.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import CookedLeafyMeat from '~/ingredients/cookedLeafyMeat'
import LeafyMeat from '~/ingredients/leafyMeat'

export default class LeafyMeatloaf extends FoodBase {
  _name = '叶肉糕'
  _health = 8
  _hunger = 37.5
  _sanity = 5
  _rot = 20
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
        ge: 2
      }
    }
  ]
}
