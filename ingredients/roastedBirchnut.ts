import icon from '~/assets/images/ingredients/roasted-birchnut.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class RoastedBirchnut extends IngredientBase {
  protected _name = '烤桦栗果'
  protected _image = icon

  protected override _seed = 1
}
