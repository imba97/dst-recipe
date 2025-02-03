import icon from '~/assets/images/ingredients/milky-whites.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class MilkyWhites extends IngredientBase {
  protected override _dairy = 1

  protected _image = icon
}
