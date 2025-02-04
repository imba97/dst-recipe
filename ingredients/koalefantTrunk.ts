import icon from '~/assets/images/ingredients/koalefant-trunk.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class KoalefantTrunk extends IngredientBase {
  protected _name = '象鼻'
  protected _image = icon

  protected override _meat = 1
}
