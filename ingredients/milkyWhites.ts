import icon from '~/assets/images/ingredients/milky-whites.png'
import { IngredientsBase } from '~/composables/ingredient/ingredientsBaseClass'

export default class MilkyWhites extends IngredientsBase {
  protected override _dairy = 1

  protected _image = icon
}
