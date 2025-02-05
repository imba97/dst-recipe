import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/grim-galette.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import NightmareFuel from '~/ingredients/nightmareFuel'
import Onion from '~/ingredients/onion'
import Potato from '~/ingredients/potato'
import RoastedOnion from '~/ingredients/roastedOnion'
import RoastedPotato from '~/ingredients/roastedPotato'

export default class GrimGalette extends FoodBase {
  _name = '恐怖国王饼'
  _health = 1
  _hunger = 25
  _sanity = 5
  _rot = 10
  _cooking = 40
  _priority = 30
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        NightmareFuel
      ],
      condition: {
        eq: 2
      }
    },
    {
      ingredients: [
        Potato,
        RoastedPotato
      ],
      condition: {
        eq: 1
      }
    },
    {
      ingredients: [
        Onion,
        RoastedOnion
      ],
      condition: {
        eq: 1
      }
    }
  ]

  protected override _warlyOnly = true
}
