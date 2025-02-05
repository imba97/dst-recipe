import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/stuffed-night-cap.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import MonsterMeat from '~/ingredients/monsterMeat'
import MoonShroom from '~/ingredients/moonShroom'

export default class StuffedNightCap extends FoodBase {
  _name = '酿夜帽'
  _health = -20
  _hunger = 18.75
  _sanity = -15
  _rot = 15
  _cooking = 20
  _priority = 30
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        MoonShroom
      ],
      condition: {
        ge: 2
      }
    },
    {
      ingredients: [
        MonsterMeat
      ],
      condition: {
        ge: 1
      }
    }
  ]
}
