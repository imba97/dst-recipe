import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/unagi.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import CookedEel from '~/ingredients/cookedEel'
import CookedKelpFronds from '~/ingredients/cookedKelpFronds'
import DriedKelpFronds from '~/ingredients/driedKelpFronds'
import Eel from '~/ingredients/eel'
import KelpFronds from '~/ingredients/kelpFronds'
import Lichen from '~/ingredients/lichen'
import LiveEel from '~/ingredients/liveEel'

export default class Unagi extends FoodBase {
  _name = '鳗鱼料理'
  _health = 20
  _hunger = 37.5
  _sanity = 5
  _rot = 10
  _cooking = 10
  _priority = 20
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition[] = [
    {
      ingredients: [
        LiveEel,
        Eel,
        CookedEel
      ],
      condition: {
        ge: 1
      }
    },
    {
      ingredients: [
        Lichen,
        KelpFronds,
        CookedKelpFronds,
        DriedKelpFronds
      ],
      condition: {
        ge: 1
      }
    }
  ]
}
