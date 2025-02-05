import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/mushy-cake.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import BlueCap from '~/ingredients/blueCap'
import GreenCap from '~/ingredients/greenCap'
import MoonShroom from '~/ingredients/moonShroom'
import RedCap from '~/ingredients/redCap'

export default class MushyCake extends FoodBase {
  _name = '蘑菇蛋糕'
  _health = 0
  _hunger = 25
  _sanity = 10
  _rot = 15
  _cooking = 20
  _priority = 30
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        RedCap
      ],
      condition: {
        eq: 1
      }
    },
    {
      ingredients: [
        GreenCap
      ],
      condition: {
        eq: 1
      }
    },
    {
      ingredients: [
        BlueCap
      ],
      condition: {
        eq: 1
      }
    },
    {
      ingredients: [
        MoonShroom
      ],
      condition: {
        eq: 1
      }
    }
  ]
}
