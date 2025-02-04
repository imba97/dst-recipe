import icon from '~/assets/images/ingredients/pomegranate.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Pomegranate extends IngredientBase {
  protected _name = '石榴'
  protected _image = icon

  protected override _fruit = 1
}
