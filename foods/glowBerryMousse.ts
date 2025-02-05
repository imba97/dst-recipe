import type { ComparisonOperator } from '~/types/comparisonOperator'
import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/glow-berry-mousse.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import GlowBerry from '~/ingredients/glowBerry'
import LesserGlowBerry from '~/ingredients/lesserGlowBerry'

export default class GlowBerryMousse extends FoodBase {
  _name = '发光浆果慕斯'
  _health = 3
  _hunger = 37.5
  _sanity = 10
  _rot = 8
  _cooking = 20
  _priority = 30
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    [
      {
        ingredients: [
          GlowBerry
        ],
        condition: {
          ge: 1
        }
      },
      {
        ingredients: [
          LesserGlowBerry
        ],
        condition: {
          ge: 2
        }
      }
    ]
  ]

  protected override _fish: ComparisonOperator = {
    ge: 1
  }

  protected override _notEdible: ComparisonOperator = {
    eq: 0
  }

  protected override _warlyOnly = true
}
