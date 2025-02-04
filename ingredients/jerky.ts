import icon from '~/assets/images/ingredients/jerky.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Jerky extends IngredientBase {
  protected _name = '肉干'
  protected _image = icon

  protected override _meat = 1
}
