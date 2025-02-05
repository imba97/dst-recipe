import type { IngredientsCondition } from '~/types/ingredientsCondition'
import icon from '~/assets/images/foods/fig-stuffed-trunk.png'
import { FoodBase } from '~/composables/food/foodBaseClass'
import CookedFig from '~/ingredients/cookedFig'
import Fig from '~/ingredients/fig'
import KoalefantTrunk from '~/ingredients/koalefantTrunk'
import KoalefantTrunkSteak from '~/ingredients/koalefantTrunkSteak'
import WinterKoalefantTrunk from '~/ingredients/winterKoalefantTrunk'

export default class FigStuffedTrunk extends FoodBase {
  _name = '无花果酿象鼻'
  _health = 60
  _hunger = 150
  _sanity = 15
  _rot = 10
  _cooking = 40
  _priority = 40
  _image = icon

  protected override _ingredientsCondition: IngredientsCondition = [
    {
      ingredients: [
        Fig,
        CookedFig
      ],
      condition: {
        ge: 1
      }
    },
    {
      ingredients: [
        KoalefantTrunk,
        WinterKoalefantTrunk,
        KoalefantTrunkSteak
      ],
      condition: {
        ge: 1
      }
    }
  ]
}
