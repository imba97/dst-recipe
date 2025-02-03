import icon from '~/assets/images/ingredients/milky-whites.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class MilkyWhites extends IngredientBase {
  protected _name = '乳白物'
  protected _image = icon

  protected override _dairy = 1
}
