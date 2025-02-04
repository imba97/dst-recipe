import icon from '~/assets/images/ingredients/winter-koalefant-trunk.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class WinterKoalefantTrunk extends IngredientBase {
  protected _name = '冬象鼻'
  protected _image = icon

  protected override _meat = 1
}
