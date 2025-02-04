import icon from '~/assets/images/ingredients/cooked-fish-morsel.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class CookedFishMorsel extends IngredientBase {
  protected _name = '熟小鱼块'
  protected _image = icon

  protected override _meat = 0.5
  protected override _fish = 0.5
}
