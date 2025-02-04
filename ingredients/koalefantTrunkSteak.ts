import icon from '~/assets/images/ingredients/koalefant-trunk-steak.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class KoalefantTrunkSteak extends IngredientBase {
  protected _name = '象鼻排'
  protected _image = icon

  protected override _meat = 1
}
