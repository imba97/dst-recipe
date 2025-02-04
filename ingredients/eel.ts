import icon from '~/assets/images/ingredients/eel.png'
import { IngredientBase } from '~/composables/ingredient/ingredientBaseClass'

export default class Eel extends IngredientBase {
  protected _name = '鳗鱼'
  protected _image = icon

  protected override _meat = 0.5
  protected override _fish = 1
}
